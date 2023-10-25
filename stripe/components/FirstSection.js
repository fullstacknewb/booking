import carousel from '../public/carousel.png'
import Image from 'next/image'

export function FirstSection(){

    return(
        <>
        <section id='imgCarousel' className=''>
          <Image src={carousel} alt='carousel' layout='responsive' />
          <h1>
            Get the hair you deserve!
          </h1>
          <button id='bookNowBtn' className="">Book Now!</button>
        </section>
        </>
    )

}