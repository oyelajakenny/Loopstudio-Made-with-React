import React from 'react'
import desktopData from '../Desktopdata'
import mobileData from '../Mobiledata'

export const Creation = () => {

    const images = desktopData
    const mobileImages = mobileData
  return (
    <div className="creation">

        <div className='center-items'>

            <h1>OUR CREATION</h1>
            <button>SEE ALL</button>
        </div>

        <div className='gallery'>

            {images.map(Image =>{
                return(

                    <article>
                        <img src={Image.Image} alt={Image.title}/>
                        <div className='title'>
                            <h3>{Image.title}</h3>
                        </div>
                    </article>
                )
                })} 

        </div>

        <div className='mobile-gallery'>

{mobileImages.map(image =>{
    return(

        <article>
            <img src={image.Image} alt={image.title}/>
            <div className='title'>
                <h3>{image.title}</h3>
            </div>
        </article>
    )
    })} 

</div>

        
<div className='mobile-button'>

<button >SEE ALL</button>
</div>

    </div>
  )
}

export default Creation
