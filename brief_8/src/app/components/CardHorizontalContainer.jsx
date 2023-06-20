"use client"
import React from 'react';
import { Card as CardC } from 'primereact/card';
import CardElement from './Card'

export default function CardContainer() {

    return (
        <>
            <div className="w-full h-auto flex justify-content-center align-item-center gap-3 bg-primary">
                <CardElement />
                <CardElement />
                <CardElement />
                <CardElement />
                <CardElement />

            </div>
        </>
    )
}

