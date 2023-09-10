import React from 'react'


const Menu = ({items}) => {

    return (
        <div className='section-center'>
            {
                items.map((menuItem) => {
                    //สลายโครงสร้าง object
                    const { id, title, category, price, desc, img } = menuItem;
                    return (
                        <article className='menu-item' key={id}>
                           
                                <img src={img} alt="" className='photo' />
                                <div className="item-info">
                                    <header>
                                        <h4>{title}</h4>
                                        <h4 className="price">{price}</h4>
                                    </header>
                                    <div className="item-text">{desc}</div>
                                </div>
                           
                        </article>
                    )
                })
            }

        </div>
    )
}
export default Menu ;