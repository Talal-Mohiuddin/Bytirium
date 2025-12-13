import { Play } from "lucide-react" 
 
 export default function SuccessStories() { 
   return ( 
     <section className="relative bg-[#121212] overflow-hidden"> 
       {/* Purple ellipse glow at top - separate section */} 
       <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] flex items-center justify-center pointer-events-none -mb-10 md:-mb-16 lg:-mb-20">
         <img 
           src="/ellipse.png" 
           alt="glow background" 
           className="w-[500px] md:w-[650px] lg:w-[800px] h-[200px] md:h-[300px] lg:h-[400px] object-contain"
         />
       </div> 
 
       {/* Content section below */}
       <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-6 text-center py-4 md:py-8"> 
         {/* Title */} 
         <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.1em] md:tracking-[0.15em] mb-4 md:mb-6">SUCCESS STORIES</h2> 
 
         {/* Subtitle */} 
         <p className="text-gray-300 text-xs md:text-sm lg:text-base max-w-xl mx-auto mb-8 md:mb-16 leading-relaxed font-light px-2"> 
           Every project we take on is an opportunity to innovate, simplify and
           elevate. Explore how we've helped brands transform their ideas into
           scalable digital products.
         </p> 
 
         {/* Video thumbnail container */} 
         <div className="relative rounded-lg md:rounded-xl overflow-hidden group cursor-pointer max-w-3xl mx-auto px-2 md:px-0"> 
           {/* Video thumbnail image */} 
           <img 
             src="/business-professionals-team-meeting-office.jpg" 
             alt="Success stories video thumbnail" 
             className="w-full h-auto object-cover aspect-video rounded-lg" 
           /> 
 
           {/* Dark overlay */} 
           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 rounded-lg" /> 
 
           {/* Play button */} 
           <div className="absolute inset-0 flex items-center justify-center"> 
             <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300"> 
               <Play className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white fill-white ml-1" /> 
             </div> 
           </div> 
         </div> 
       </div> 
     </section> 
   ) 
 }
