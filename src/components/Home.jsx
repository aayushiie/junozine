import React, { useEffect, useRef } from 'react'
import Vision from './Vision'
import Footer from './Footer'
import mapImg from '../assets/images/map.png'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const titleRef = useRef(null)
  const mapRef = useRef(null)
  const textRef = useRef(null)
  const comp = useRef(null)
  const starsRef = useRef(null)
  const indiaMarkerRef = useRef(null)
  
  // Create stars dynamically
  const createStars = () => {
    if (!starsRef.current) return
    
    const starCount = 50
    const stars = []
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = 'absolute rounded-full bg-white'
      
      // Random size between 1-3px
      const size = 1 + Math.random() * 2
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      
      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      
      // Random opacity
      star.style.opacity = `${0.3 + Math.random() * 0.7}`
      
      starsRef.current.appendChild(star)
      stars.push(star)
    }
    
    return stars
  }
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Existing animations for title and text (unchanged)
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      
      tl.from(titleRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.2
      })
      
      tl.from(textRef.current, {
        x: 60,
        opacity: 0,
        duration: 1.1
      }, "-=0.8")
      
      // 2. Create stars before map animation
      const stars = createStars()
      
      // 3. Enhanced Map Animations
      
      // Map reveal animation with clipping
      tl.fromTo(mapRef.current,
        {
          clipPath: "circle(0% at 50% 50%)",
          scale: 1.2,
          filter: "blur(20px) brightness(1.5)"
        },
        {
          clipPath: "circle(100% at 50% 50%)",
          scale: 1,
          filter: "blur(0px) brightness(1)",
          duration: 1.8,
          ease: "power2.inOut"
        },
        "-=0.6"
      )
      
      // Stars twinkling animation
      if (stars) {
        stars.forEach((star, i) => {
          gsap.to(star, {
            opacity: () => 0.2 + Math.random() * 0.8,
            duration: 1 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.02
          })
          
          // Subtle movement for some stars
          if (i % 5 === 0) {
            gsap.to(star, {
              x: `${Math.random() * 10 - 5}px`,
              y: `${Math.random() * 10 - 5}px`,
              duration: 3 + Math.random() * 4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
            })
          }
        })
      }
      
      // 4. India Marker Animation - POSITION ADJUSTED 30px LEFT
      // Create marker if it doesn't exist
      if (mapRef.current && !indiaMarkerRef.current) {
        const marker = document.createElement('div')
        marker.className = 'india-marker absolute cursor-pointer'
        marker.innerHTML = `
          <div class="relative">
            <div class="absolute w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div class="absolute w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-75"></div>
            <div class="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold bg-black text-white px-2 py-1 rounded opacity-0 transition-opacity">India</div>
          </div>
        `
        
        // POSITION UPDATED: Changed from '73%' to '69%' (moved ~30px left)
        marker.style.left = '46%'
        marker.style.top = '60%'
        
        mapRef.current.appendChild(marker)
        indiaMarkerRef.current = marker
        
        // Marker animations
        tl.fromTo(marker,
          {
            scale: 0,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)"
          },
          "-=0.5"
        )
        
        // Hover effect for marker
        marker.addEventListener('mouseenter', () => {
          const label = marker.querySelector('div > div:nth-child(3)')
          gsap.to(label, {
            opacity: 1,
            y: -5,
            duration: 0.3
          })
          
          gsap.to(marker.querySelector('div > div:first-child'), {
            scale: 1.5,
            duration: 0.3,
            backgroundColor: '#ff0000'
          })
        })
        
        marker.addEventListener('mouseleave', () => {
          const label = marker.querySelector('div > div:nth-child(3)')
          gsap.to(label, {
            opacity: 0,
            y: 0,
            duration: 0.3
          })
          
          gsap.to(marker.querySelector('div > div:first-child'), {
            scale: 1,
            duration: 0.3,
            backgroundColor: '#ef4444'
          })
        })
        
        // Click effect
        marker.addEventListener('click', (e) => {
          e.stopPropagation()
          
          // Create ripple effect
          const ripple = document.createElement('div')
          ripple.className = 'absolute rounded-full border-2 border-red-400 pointer-events-none'
          ripple.style.width = '4px'
          ripple.style.height = '4px'
          ripple.style.left = '50%'
          ripple.style.top = '50%'
          ripple.style.transform = 'translate(-50%, -50%)'
          
          marker.appendChild(ripple)
          
          gsap.to(ripple, {
            width: 100,
            height: 100,
            borderWidth: 1,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => ripple.remove()
          })
        })
      }
      
      // 5. Scroll-triggered map effects
      ScrollTrigger.create({
        trigger: mapRef.current,
        start: "top 70%",
        onEnter: () => {
          // Pulse effect when map enters view
          gsap.to(mapRef.current, {
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
            duration: 1,
            yoyo: true,
            repeat: 1
          })
        }
      })
      
      // Map tilt on scroll
      gsap.to(mapRef.current, {
        rotation: 0.5,
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5
        }
      })
      
      // 6. Interactive map hover effects
      const mapElement = mapRef.current
      if (mapElement) {
        let hoverAnimation
        
        mapElement.addEventListener('mouseenter', () => {
          // Cancel any existing animation
          if (hoverAnimation) hoverAnimation.kill()
          
          hoverAnimation = gsap.to(mapElement, {
            scale: 1.02,
            duration: 0.5,
            ease: "power2.out"
          })
          
          // Enhance stars on hover
          if (stars) {
            stars.forEach(star => {
              gsap.to(star, {
                opacity: "+=0.2",
                duration: 0.3
              })
            })
          }
        })
        
        mapElement.addEventListener('mouseleave', () => {
          if (hoverAnimation) hoverAnimation.kill()
          
          gsap.to(mapElement, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          })
          
          // Reset stars
          if (stars) {
            stars.forEach(star => {
              gsap.to(star, {
                opacity: star._originalOpacity || 0.5,
                duration: 0.3
              })
            })
          }
        })
        
        // Store original star opacities
        if (stars) {
          stars.forEach(star => {
            star._originalOpacity = parseFloat(star.style.opacity) || 0.5
          })
        }
      }
      
    }, comp)
    
    return () => {
      ctx.revert()
      // Cleanup
      if (indiaMarkerRef.current) {
        indiaMarkerRef.current.remove()
        indiaMarkerRef.current = null
      }
    }
  }, [])
  
  // Handle map click for ripple effect
  const handleMapClick = (e) => {
    if (!mapRef.current || e.target.classList.contains('india-marker')) return
    
    const rect = mapRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const ripple = document.createElement('div')
    ripple.className = 'absolute rounded-full border border-blue-300 pointer-events-none'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.transform = 'translate(-50%, -50%)'
    ripple.style.width = '0px'
    ripple.style.height = '0px'
    
    mapRef.current.appendChild(ripple)
    
    gsap.to(ripple, {
      width: 200,
      height: 200,
      borderWidth: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      onComplete: () => ripple.remove()
    })
  }
  
  return (
    <div ref={comp}>
      <div className="mx-6">
        <header 
          className="w-full flex justify-center items-end p-0 m-0 overflow-hidden 
                     h-[32vw] sm:h-[28vw] md:h-[26vw] mt-6 sm:mt-8 md:mt-0">
          <h1
            ref={titleRef}
            className="montserrat-heading text-[24vw] sm:text-[26vw] md:text-[29vw] 
                       leading-[1] tracking-[2vw] text-center w-full uppercase inline-block align-bottom">
            JUNO
          </h1>
        </header>

        <main className="flex flex-col md:flex-row justify-between items-start 
                 mx-4 md:mx-8 mt-10 gap-10 md:gap-8 min-h-[calc(100vh-32vw)]">

          {/* Map Container with Stars and India Marker */}
          <div className="w-full md:w-1/2 flex items-start justify-start order-2 md:order-1 relative">
            
            {/* Stars Background */}
            <div 
              ref={starsRef}
              className="absolute inset-0 z-0 overflow-hidden rounded-lg"
              style={{ 
                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.1) 100%)'
              }}
            />
            
            {/* Map Image */}
            <div 
              ref={mapRef}
              onClick={handleMapClick}
              className="relative z-10 w-full cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                clipPath: 'circle(0% at 50% 50%)' // Will be animated by GSAP
              }}
            >
              <img
                src={mapImg}
                alt="World map"
                className="max-w-full h-auto object-contain align-top"
              />
              
              {/* Watermark overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)'
                   }}
              />
            </div>
            
            {/* Subtle border effect */}
            <div className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none z-20"
                 style={{
                   boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)'
                 }}
            />
          </div>

          <div 
            ref={textRef}
            className="w-full md:w-1/3 roboto-italic md:text-right order-1 md:order-2"
          >
            <p className="text-base md:text-lg leading-relaxed m-0">
              A digital magazine by girls and gender-expansive people in STEM, celebrating the intersection of art and technology.
            </p>
          </div>
        </main>

      </div>

      <Vision />
      <Footer />
      
      {/* Add custom styles for animations */}
      <style jsx="true">{`
        .india-marker {
          z-index: 20;
        }
        
        .india-marker > div > div:first-child {
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }
        
        .india-marker > div > div:nth-child(2) {
          animation-duration: 2s;
        }
        
        /* Position adjustment for India marker if needed */
        /* If 69% is not enough, try 68% or 67% */
        /* .india-marker {
          left: 50% !important;
        } */
        
        /* If you need pixel-perfect adjustment after render */
        @media (min-width: 768px) {
          .india-marker {
            transform: translateX(-30px);
          }
        }
        
        /* Subtle pulse for map container */
        @keyframes subtleGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.2); }
        }
        
        /* Ensure stars stay behind map */
        .absolute.inset-0.z-0 {
          z-index: 1;
        }
        
        .relative.z-10 {
          z-index: 2;
        }
      `}</style>
    </div>
  )
}

export default Home