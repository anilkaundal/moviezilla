import { useState } from 'react';
export default function Card(props) {
    var divStyle = { backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + props.path + ')' };

    const [desc, setDesc] = useState(false);
    
    return (
        <div className="card" onMouseEnter={() => setDesc(true)} onMouseLeave={() => setDesc(false)} style={divStyle}>
            <div className="box">
                <div className="content">
                    {desc ? <div><h6>{props.desc.substring(0,450)}</h6></div> :
                        <div><h3>{props.title}</h3>
                            <span>{props.rating} ⭐</span></div>}
                </div>
            </div>
        </div>
    );
}