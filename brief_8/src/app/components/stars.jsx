import React, { useState, useEffect } from "react";
import { Rating } from "primereact/rating";

export default function Stars({ rating }) {
    const [value, setValue] = useState();

    useEffect(() => {
        if (rating <= 19) {
            setValue(1);
        } else if (rating >= 20 && rating <= 39) {
            setValue(2);
        } else if (rating >= 40 && rating <= 59) {
            setValue(3);
        } else if (rating >= 60 && rating <= 79) {
            setValue(4);
        } else if (rating >= 80) {
            setValue(5);
        }
    }, [rating]);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} cancel={false} />
        </div>
    );
}
