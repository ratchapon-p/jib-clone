import React from 'react'
import { Link } from 'react-router-dom'
import vga1 from '../../../assets/VgaItem/Asus-tuf-1660s.png'
import vga2 from '../../../assets/VgaItem/Asus-rog-3060.png'
import vga3 from '../../../assets/VgaItem/Asus-tuf-3060.png'
import vga4 from '../../../assets/VgaItem/Asus-rog-4060ti.png'

const VgaItem = () => {
  return (
    <div className='cpuItem-main'>
        
        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF GAMING GEFORCE GTX 1660 SUPER OC EDITION 6GB GDDR6 (TUF-GTX1660S-O6G-GAMING)</div>
            </div>
            <div className='cpuItem-images'><img src={vga1} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'7,290.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga2} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,500.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga3} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,320.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX GEFORCE RTX 4070TI 12GB GDDR6X OC EDITION</div>
            </div>
            <div className='cpuItem-images'><img src={vga4} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'37,960.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>
        
        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF GAMING GEFORCE GTX 1660 SUPER OC EDITION 6GB GDDR6 (TUF-GTX1660S-O6G-GAMING)</div>
            </div>
            <div className='cpuItem-images'><img src={vga1} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'7,290.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga2} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,500.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga3} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,320.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX GEFORCE RTX 4070TI 12GB GDDR6X OC EDITION</div>
            </div>
            <div className='cpuItem-images'><img src={vga4} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'37,960.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>
        
        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF GAMING GEFORCE GTX 1660 SUPER OC EDITION 6GB GDDR6 (TUF-GTX1660S-O6G-GAMING)</div>
            </div>
            <div className='cpuItem-images'><img src={vga1} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'7,290.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga2} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,500.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga3} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,320.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX GEFORCE RTX 4070TI 12GB GDDR6X OC EDITION</div>
            </div>
            <div className='cpuItem-images'><img src={vga4} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'37,960.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>
        
        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF GAMING GEFORCE GTX 1660 SUPER OC EDITION 6GB GDDR6 (TUF-GTX1660S-O6G-GAMING)</div>
            </div>
            <div className='cpuItem-images'><img src={vga1} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'7,290.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga2} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,500.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga3} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,320.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX GEFORCE RTX 4070TI 12GB GDDR6X OC EDITION</div>
            </div>
            <div className='cpuItem-images'><img src={vga4} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'37,960.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>
        
        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF GAMING GEFORCE GTX 1660 SUPER OC EDITION 6GB GDDR6 (TUF-GTX1660S-O6G-GAMING)</div>
            </div>
            <div className='cpuItem-images'><img src={vga1} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'7,290.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga2} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,500.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS TUF RTX3060 O12G V2 GAMING - 12GB GDDR6 (LHR)</div>
            </div>
            <div className='cpuItem-images'><img src={vga3} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'12,320.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

        <div className='cpuItem-details'>
            <div className='cpuItem-details-text'>
                <div className='cpuItem-brand'>ASUS</div>
                <div className='cpuItem-brand-details'>ASUS ROG STRIX GEFORCE RTX 4070TI 12GB GDDR6X OC EDITION</div>
            </div>
            <div className='cpuItem-images'><img src={vga4} className='cpuItem-images-item'/></div>
            <div className='cpuItem-price-details'><p className='cpu-item-price-text'>ราคา</p><h5 className='cpuItem-price'>{'37,960.-'}</h5></div>
            <div className='add-to-pcspec'>
                <button className='add-to-pcspec-btn'>จัดชุดสเปค</button>
                <Link to='/' className='link-to-item-details'>รายละเอียด</Link>
            </div>
        </div>

    </div>
  )
}

export default VgaItem