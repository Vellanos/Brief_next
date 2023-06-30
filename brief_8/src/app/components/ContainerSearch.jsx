import CardElement from "./CardElement"

import "../style/CardContainer.css"

export default function ContainerSearch({ data, type_link, titre_container }) {

    let link = ""
    if (type_link == "playlist") {
        link = "http://localhost:3000/playlistDetails/"
    } else if (type_link == "song") {
        link = "http://localhost:3000/songDetails/"
    } else if (type_link == "artist") {
        link = "http://localhost:3000/artistDetails/"
    } else if (type_link == "album") {
        link = "http://localhost:3000/albumDetails/"
    }

    return (
        <div className='card-container pb-5 pl-3 pr-3 pt-2'>
            <div className='flex mt-3 mb-3'>
                <h2> {titre_container} </h2>
            </div>
            <div className="flex flex-wrap align-item-center justify-content-center">
                {data?.map((item, index) =>
                    <CardElement
                        key={index}
                        title={item.name}
                        subTitle={item.followers.total + " followers"}
                        img={item.images[0]?.url}
                        lien={link + item.id}
                    />
                )}
            </div>
        </div>
    );
}

