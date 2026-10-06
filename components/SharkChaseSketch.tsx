'use client'

import { useEffect, useRef } from 'react'
import type P5 from 'p5'

export default function SharkChaseSketch() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let instance: P5 | undefined
    let cancelled = false

    import('p5').then(({ default: P5Ctor }) => {
      if (cancelled || !containerRef.current) return

      const sketch = (p: P5) => {
        const numWaves = 60
        const numFishes = 100
        const numCrabs = 3

        const xLoc: number[] = []
        const yLoc: number[] = []
        const texts: string[] = []
        const angles: number[] = []
        const speeds: number[] = []

        const fishX: number[] = []
        const fishY: number[] = []
        const fishSpeed: number[] = []

        const crabX: number[] = []
        const crabY: number[] = []
        const crabSpeed: number[] = []

        let isFacingRight = true

        const makeSharkFinRight = () => `
       /|
      / |
     /  |
    ~~~~~~~
`
        const makeSharkFinLeft = () => `
     |\\
      | \\
       |  \\
       ~~~~~~~
`
        const makeOneRowWave = () => `
/\\/\\/\\
`
        const makeTwoRowWave = () => `
  /\\  /\\  /\\
/  \\/  \\/  \\
`
        const makeCrab = () => `
 ___
   (___)_
    (____)_
      (______)_
      ..//00\\...
`

        p.setup = () => {
          p.createCanvas(1000, 1000)
          p.textAlign(p.CENTER, p.CENTER)
          p.textFont('monospace')
          p.textSize(16)
          p.fill('white')
          p.noStroke()

          const patterns = [makeOneRowWave(), makeTwoRowWave()]

          for (let i = 0; i < numWaves; i++) {
            xLoc[i] = p.random(p.width)
            yLoc[i] = p.random(p.height)
            texts[i] = p.random(patterns)
            angles[i] = p.random(p.TWO_PI)
            speeds[i] = p.random(0.01, 0.03)
          }

          for (let i = 0; i < numFishes; i++) {
            fishX[i] = p.random(-400, p.width)
            fishY[i] = p.random(p.height)
            fishSpeed[i] = p.random(0.5, 2.0)
          }

          for (let i = 0; i < numCrabs; i++) {
            crabX[i] = p.random(p.width, p.width + 400)
            crabY[i] = p.random(p.height - 150, p.height - 50)
            crabSpeed[i] = p.random(0.4, 0.8)
          }
        }

        p.draw = () => {
          const surfaceColor = p.color(173, 216, 230)
          const deepColor = p.color(20, 70, 120)
          const depthAmt = p.map(p.mouseY, 0, p.height, 0, 1)
          const currentBgColor = p.lerpColor(surfaceColor, deepColor, depthAmt)
          p.background(currentBgColor)
          p.noStroke()

          // Waves
          p.fill('white')
          for (let i = 0; i < numWaves; i++) {
            angles[i] = angles[i] + speeds[i]
            const currentX = xLoc[i] + Math.sin(angles[i]) * 40
            const distanceToShark = p.dist(p.mouseX, p.mouseY, currentX, yLoc[i])
            let drawX = currentX
            let drawY = yLoc[i]

            if (distanceToShark < 100) {
              const pushForce = (100 - distanceToShark) * 0.5
              if (currentX > p.mouseX) {
                drawX += pushForce
              } else {
                drawY -= pushForce
              }
              if (yLoc[i] > p.mouseY) {
                drawY += pushForce
              } else {
                drawY -= pushForce
              }
            }

            p.text(texts[i], drawX, drawY)
          }

          // Fish
          p.noStroke()
          p.fill('orange')
          for (let i = 0; i < numFishes; i++) {
            fishX[i] = fishX[i] + fishSpeed[i]
            if (fishX[i] > p.width + 50) {
              fishX[i] = -50
              fishY[i] = p.random(p.height)
            }

            const distanceToShark = p.dist(p.mouseX, p.mouseY, fishX[i], fishY[i])
            let drawFishX = fishX[i]
            let drawFishY = fishY[i]

            if (distanceToShark < 100) {
              const fishPushForce = (100 - distanceToShark) * 0.5
              if (fishX[i] > p.mouseX) {
                drawFishX += fishPushForce
              } else {
                drawFishX -= fishPushForce
              }
              if (fishY[i] > p.mouseY) {
                drawFishY += fishPushForce
              } else {
                drawFishY -= fishPushForce
              }
            }

            p.text('><(((*>', drawFishX, drawFishY)
          }

          // Crabs
          p.fill(100, 100, 80)
          for (let i = 0; i < numCrabs; i++) {
            crabX[i] = crabX[i] - crabSpeed[i]
            if (crabX[i] < -70) {
              crabX[i] = p.width + 50
              crabY[i] = p.random(p.height - 150, p.height - 50)
            }

            const distanceToShark = p.dist(p.mouseX, p.mouseY, crabX[i], crabY[i])
            let drawCrabX = crabX[i]
            let drawCrabY = crabY[i]

            if (distanceToShark < 100) {
              const crabPushForce = (100 - distanceToShark) * 0.5
              if (crabX[i] > p.mouseX) {
                drawCrabX += crabPushForce
              } else {
                drawCrabX -= crabPushForce
              }
              if (crabY[i] > p.mouseY) {
                drawCrabY += crabPushForce
              } else {
                drawCrabY -= crabPushForce
              }
            }

            p.text(makeCrab(), drawCrabX, drawCrabY)
          }

          // Shark fin
          if (p.mouseX > p.pmouseX) {
            isFacingRight = true
          } else if (p.mouseX < p.pmouseX) {
            isFacingRight = false
          }

          p.fill('darkgray')
          p.textStyle(p.BOLD)
          p.stroke('white')
          p.strokeWeight(4)

          const playerShark = isFacingRight ? makeSharkFinRight() : makeSharkFinLeft()
          p.text(playerShark, p.mouseX, p.mouseY)
        }
      }

      instance = new P5Ctor(sketch, containerRef.current)
    })

    return () => {
      cancelled = true
      instance?.remove()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center [&_canvas]:rounded-[24px] [&_canvas]:max-w-full [&_canvas]:h-auto [&_canvas]:cursor-none"
    />
  )
}
