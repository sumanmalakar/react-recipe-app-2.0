import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="nav">

                <div className="left">
                    <Link to='/' className='link' >
                        <h2>React Recipe App</h2>
                    </Link>
                </div>

                <div className="search">
                    <input type="text" />
                </div>

                <div className="right">
                
                        <Link to={`/category/indian`} 
                        className='link'>
                         <div>  Indian  </div>  
                            </Link>
                   
                        <Link to={`/category/american`} className='link'><div> American </div>  </Link>
                 
                        <Link to={`/category/british`} className='link'><div> British</div>   </Link>
                        
                        <Link to={`/category/Chinese`} className='link'><div> Chinese</div>   </Link>

                
                        <Link to={`/category/thai`} className='link'><div> Thai </div>  </Link>
             
                 
                </div>

            </div>

        </>
    )
}

export default Navbar