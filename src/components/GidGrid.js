import React, {useState, useEffect} from 'react';
import {GifGridItem} from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__fadeIn">Loading</p>}

            <div className="card-grid">
                <ol>
                    {
                        images.map((img) => (
                                <GifGridItem
                                    key={img.id}
                                    {...img}
                                />
                            )
                        )
                    }
                </ol>
            </div>
        </>
    )
}



