
import CardElement from "./CardElement"

export default function ContainerCard({ titre_container, data }) {
    return (
        <div className='card-container pb-5 pl-3 pr-3 pt-2 ml-1 mr-1'>
            <div className='flex flex-row justify-content-between mt-3 mb-3'>
                <h2>{titre_container}</h2>
                <a href="">Tout afficher</a>
            </div>
            <div className="flex align-item-center justify-content-center">
                {data?.map((item) =>
                    <CardElement
                        key={item.id}
                        title={item.name}
                        subTitle={item?.subTitle}
                        img={item.images[0]?.url}
                    />
                )}
            </div>
        </div>
    );
}

