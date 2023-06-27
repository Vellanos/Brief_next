
import React from 'react';
import { Card } from 'primereact/card';
import Image from 'next/image';

export default function CardElement({ title, subTitle, img, key }) {
    const header = (
        <Image alt="Card" src={img} width={150} height={150} />
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={title} subTitle={subTitle} header={header} className="m-3 bg-black-alpha-30 hover:bg-black-alpha-10 text-white text-sm customTitle p-3 cursor-pointer"
                style={{ minWidth: '200px', display: 'inline-block' }}>
            </Card>
        </div>
    )
}
