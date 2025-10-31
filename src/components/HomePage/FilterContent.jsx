

import React, { useState } from "react";
import { useFilter } from "../ContextData/FilterContext";

const FilterContent = (props) => {
    const config = props.config
    const totalCompaniesData = config.CompaniesData;
    const [filter, setFilter] = useState("");
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredDataLocal] = useState([])
    const { filterQuery, setFilterQuery, setFilteredData } = useFilter();

    const handleSearch = () => {
        if (query != "" && filter != "") {
            if (filter == 'headquarters') {
                const filteredElements = totalCompaniesData.filter((data, index) => data[filter]["city"]?.toLocaleLowerCase().includes(query?.toLocaleLowerCase()) || data[filter]["country"]?.toLocaleLowerCase().includes(query?.toLocaleLowerCase()))
                console.log(filteredElements)
                setFilteredDataLocal(filteredElements)
                setFilteredData(filteredElements)
            } else {
                const filteredElements = totalCompaniesData.filter((data, index) => data[filter]?.toLocaleLowerCase().includes(query?.toLocaleLowerCase()))
                console.log(filteredElements)
                setFilteredDataLocal(filteredElements)
                setFilteredData(filteredElements)
            }
        } else {
            alert("please select the dropdown filter and enter input value.")
        }
    };

    const handleClear = () => {
        setFilter("");
        setQuery("");
        setFilteredData(totalCompaniesData)
        setFilteredDataLocal(totalCompaniesData)

    };

    return (
        <div className="w-full bg-gray p-4 sm:p-6 mt-24 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full sm:w-1/4 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                >
                    <option value="">Select Filter</option>
                    <option value="name">Company Name</option>
                    <option value="headquarters">Location</option>
                    <option value="industry">Industry</option>
                </select>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search companies..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                />
                <div className="flex gap-3">
                    <button
                        onClick={handleSearch}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >
                        Search
                    </button>
                    <button
                        onClick={handleClear}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors"
                    >
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}


export default FilterContent;