import "../style/CardContainer.css"
import SongInPlaylist from "./SongInPlaylist";

export default function ContainerAlbum({ titre_container, data, img }) {

    return (
        <div className='card-container pb-5 pl-3 pr-3 pt-2 ml-1 mr-1 overflow-auto'>
            <div className='flex flex-row justify-content-between mt-3 mb-3'>
                <h2>{titre_container}</h2>
            </div>
            <div className="flex flex-column justify-content-between gap-2">
                {data?.map((item, index) =>
                    <SongInPlaylist
                        key={index}
                        compteur={index + 1}
                        titresong={item.name}
                        img={img}
                        duree={item.duration_ms}
                    />
                )}

            </div>

        </div>
    );
}

