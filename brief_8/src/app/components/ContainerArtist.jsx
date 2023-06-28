import "../style/CardContainer.css"
import Image from "next/image";
import Stars from "./stars";

export default function ContainerArtist({ img, note, titre, followers }) {

    return (
        <div className='card-container flex flex-column align-items-center justify-conter-center pb-5 pl-3 pr-3 pt-2 ml-1 mr-1 overflow-auto'>
            <Image alt="Card" src={img} width={350} height={350} />
            <Stars rating={note} />
            <p>{titre}</p>
            <p>{followers}</p>
        </div>
    );
}

