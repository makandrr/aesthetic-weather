import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

type SearchInputProps = {
    icon?: React.ReactElement | string
    placeholder?: string
}

export default function SearchInput({
    icon = '',
    placeholder = 'Search',
}: SearchInputProps) {
    return (
        <div className="flex items-center border-b-2 px-1">
            <div className="flex items-center">{icon ? icon : ''}</div>
            <input
                className="w-full bg-transparent border-0 py-2 px-3 outline-0"
                type="search"
                placeholder={placeholder}
            />
            <div className="flex items-center">
                <IoSearchSharp />
            </div>
        </div>
    )
}
