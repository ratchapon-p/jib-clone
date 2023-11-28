import React, { useState } from 'react'
import './CpuItem.css'
import rz5 from '../../../assets/CpuItem/r5-5600x-37ghz.png'
import i5_10400f from '../../../assets/CpuItem/i5-10400f-29ghz.png'
import i5_10400 from '../../../assets/CpuItem/i5-10400-29ghz.png'
import i5_12400f from '../../../assets/CpuItem/i5-12400f-25ghz.png'
import { Link } from 'react-router-dom'

const CpuItem = () => {
    // const [cpuBrandDetails, setCpuBrandDetails] = useState();
    // const [cpuImageSrc, setCpuImageSrc] = useState();
    // const [cpuPrice, setCpuPrice] = useState();


  return (
    <div className='cpuItem-main'>
        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>AMD</div>
                <div className='cpuItem-brand-details'>AMD RYZEN 5 5600X 3.7 GHz (SOCKET AM4)</div>
            </div>
            <div className='cpuItem-images'><img src={rz5} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'3,600.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-10400F 2.9 GHz (SOCKET LGA 1200)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_10400f} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'3,890.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-10400 2.9 GHz (SOCKET LGA 1200)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_10400} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'4,990.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-12400F 2.5 GHz (SOCKET LGA 1700)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_12400f} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'5,250.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>AMD</div>
                <div className='cpuItem-brand-details'>AMD RYZEN 5 5600X 3.7 GHz (SOCKET AM4)</div>
            </div>
            <div className='cpuItem-images'><img src={rz5} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'3,600.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-10400F 2.9 GHz (SOCKET LGA 1200)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_10400f} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'3,890.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-10400 2.9 GHz (SOCKET LGA 1200)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_10400} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'4,990.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-12400F 2.5 GHz (SOCKET LGA 1700)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_12400f} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'5,250.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>AMD</div>
                <div className='cpuItem-brand-details'>AMD RYZEN 5 5600X 3.7 GHz (SOCKET AM4)</div>
            </div>
            <div className='cpuItem-images'><img src={rz5} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'3,600.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-10400F 2.9 GHz (SOCKET LGA 1200)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_10400f} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'3,890.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-10400 2.9 GHz (SOCKET LGA 1200)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_10400} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'4,990.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-12400F 2.5 GHz (SOCKET LGA 1700)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_12400f} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'5,250.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>AMD</div>
                <div className='cpuItem-brand-details'>AMD RYZEN 5 5600X 3.7 GHz (SOCKET AM4)</div>
            </div>
            <div className='cpuItem-images'><img src={rz5} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'3,600.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-10400F 2.9 GHz (SOCKET LGA 1200)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_10400f} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'3,890.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-10400 2.9 GHz (SOCKET LGA 1200)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_10400} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'4,990.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>Intel</div>
                <div className='cpuItem-brand-details'>INTEL CORE I5-12400F 2.5 GHz (SOCKET LGA 1700)</div>
            </div>
            <div className='cpuItem-images'><img src={i5_12400f} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'5,250.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>



    </div>
  )
}

export default CpuItem