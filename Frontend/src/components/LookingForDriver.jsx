import React from 'react'
import { useRef ,useEffect} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const LookingForDriver = ({vehicleType,setVehicleFound,pickup,destination,fare}) => {
    const pulseRef1 = useRef(null)
    const pulseRef2 = useRef(null)

    const image = {
        'car':'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png',
        'bike':'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png',
        'auto':'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'
    }
    useEffect(() => {
        // Pulse animations
        gsap.to([pulseRef1.current, pulseRef2.current], {
            scale: 1.5,
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            repeat: -1,
            ease: "power1.out"
        });

        // Cleanup on unmount
        return () => {
            gsap.killTweensOf([pulseRef1.current, pulseRef2.current]);
        };
    }, []);

  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                setVehicleFound(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>
        <div className='flex gap-2 justify-between items-center flex-col'>
            <div className='relative w-32 h-32 flex items-center justify-center' style={{ perspective: '800px' }}>
                {/* Pulse Effects */}
                <div ref={pulseRef1} className='absolute w-full h-full bg-gray-700/30 rounded-full' />
                <div ref={pulseRef2} className='absolute w-full h-full bg-blue-300/30 rounded-full' />
                
                {/* Car Image */}
                <div className='relative z-10 w-28 h-28'>
                    <img 
                        src={image[vehicleType]}
                        alt="car"
                        className='w-full h-full object-contain'
                    />
                </div>
            </div>
            <div className='w-full mt-5'>
                {/* Pickup Location */}
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>{pickup.split(',')[0]}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{pickup}</p>
                    </div>
                </div>
                {/* Destination address */}
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="ri-rectangle-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>{destination.split(',')[0]}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{destination}</p>
                    </div>
                </div>
                {/* Payment */}
                <div className='flex items-center gap-5 p-3'>
                    <i className="ri-money-rupee-circle-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹ {fare[vehicleType]}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}

export default LookingForDriver