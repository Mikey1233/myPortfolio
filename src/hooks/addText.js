import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useTextAnimation(containerRef) {
  const textElements = useRef(new Set())

  const addTextElement = (element) => {
    if (element) {
      textElements.current.add(element)
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      textElements.current.forEach((element) => {
        // Split text into characters
        const text = element.textContent || ''
        const chars = text.split('')
        
        // Clear the element
        element.textContent = ''
        
        // Create spans for each character
        chars.forEach((char) => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char // Use non-breaking space for spaces
          span.style.opacity = '0.1'
          span.style.display = 'inline-block'
          element.appendChild(span)
        })

        // Create timeline for animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            end: 'bottom center',
            scrub: 1,
            toggleActions: 'play none none reverse',
          }
        })

        // Animate each character
        gsap.utils.toArray(element.children).forEach((char, i) => {
          tl.to(char, {
            opacity: 1,
            duration: 0.05,
            ease: 'none'
          }, i * 0.05)
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return addTextElement
}

