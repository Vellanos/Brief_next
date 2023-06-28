import CardElement from "./CardElement"
import "../style/CardContainer.css"

export default function ContainerCard({ titre_container, data, add, subtitlecard, type_link }) {
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
        <div className='card-container pb-5 pl-3 pr-3 pt-2 ml-1 mr-1 overflow-auto'>
            <div className='flex flex-row justify-content-between mt-3 mb-3'>
                <h2>{titre_container}</h2>
                <a href="http://localhost:3000/">Tout afficher</a>
            </div>
            <div className="flex align-item-center justify-content-center">
                {data?.map((item) =>
                    <CardElement
                        title={item.name}
                        subTitle={item[subtitlecard] + add}
                        img={item.images[0]?.url}
                        lien={link + item.id}
                    />
                )}
            </div>
        </div>
    );
}

