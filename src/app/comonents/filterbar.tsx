import React from 'react';

const FilterBar = () => {
    return (
        <div className="bg-gray-100 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-4 flex">
                        <img src='filt.png'></img>
                        <span className="ml-2 text-black">Filter</span>
                    </div>
                    <div className="mr-4">
                        <img src="fil.png
                        "></img>
                    </div>
                    <div>
                        <img src="filt.png"></img>
                    </div>
                </div>
                <div className="text-black">
                    <span>Showing 1-16 of 32 results</span>
                </div>
                <div className="flex items-center">
                    <div className="mr-4 text-black">
                        <span>Show</span>
                        <select className="border border-gray-300 rounded px-2 py-1 text-black">
                            <option value="16">16</option>
                            <option value="32">32</option>
                            <option value="48">48</option>
                        </select>
                    </div>
                    <div className="mr-4 text-black">
                        <span>Sort by</span>
                        <select className="border border-gray-300 rounded px-2 py-1 text-black">
                            <option value="default">Default</option>
                            <option value="price_asc">Price: Low to High</option>
                            <option value="price_desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
