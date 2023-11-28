import React from 'react'
import { Link } from 'react-router-dom'
import mainboard1 from '../../../assets/MainboardItem/Asrock-B450m-Steel.png'
import mainboard2 from '../../../assets/MainboardItem/Asrock-B450-Stee.png'
import mainboard3 from '../../../assets/MainboardItem/Asus-prime-a320m.png'
import mainboard4 from '../../../assets/MainboardItem/Asus-prime-h610m.png'


const MainboardItem = () => {
  return (
      <div className='cpuItem-main'>
        
        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASROCK</div>
                <div className='cpuItem-brand-details'>ASROCK B450M STEEL LEGEND</div>
            </div>
            <div className='cpuItem-images'><img src={mainboard1} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'2,990.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASROCK</div>
                <div className='cpuItem-brand-details'>ASROCK B450 STEEL LEGEND (DDR4) (SOCKET AM4) (ATX)</div>
            </div>
            <div className='cpuItem-images'><img src={mainboard2} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'2,490.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS PRIME A320M-K (DDR4) (SOCKET AM4) (MICRO-ATX)</div>
            </div>
            <div className='cpuItem-images'><img src={mainboard3} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'1,890.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS PRIME H610M-E D4-CSM (DDR4) (SOCKET LGA 1700) (MICRO-ATX)</div>
            </div>
            <div className='cpuItem-images'><img src={mainboard4} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'2,850.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

    </div>
  )
}

export default MainboardItem