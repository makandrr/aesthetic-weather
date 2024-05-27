import SearchInput from '../atoms/SearchInput'
import { FaTemperatureHalf } from 'react-icons/fa6'
import TemperatureChart from '../molecules/TemperatureChart/TemperatureChart'
import SidebarPrimaryInfo from '../molecules/SidebarPrimaryInfo'
import SidebarLightInfo from '../molecules/SidebarLightInfo'
import LocationInfo from '../atoms/LocationInfo'

export default function Sidebar() {
    return (
        <div className="p-5 backdrop-blur-xl border-r-2 border-gray-500 rounded-r-3xl flex flex-col">
            <SearchInput icon={<FaTemperatureHalf />} placeholder="Location" />
            <SidebarPrimaryInfo className="mt-12" />
            <SidebarLightInfo className="mt-10" />
            <TemperatureChart className="mt-auto mb-auto" />
            <LocationInfo />
        </div>
    )
}
