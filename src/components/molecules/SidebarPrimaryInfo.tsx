import { PiPlusMinusThin } from 'react-icons/pi'

export default function SidebarPrimaryInfo({ className = '' }) {
    return (
        <div className={`sidebar-primary-info ${className}`}>
            <div className="text-8xl font-extralight text-center flex justify-center items-center gap-1 leading-none">
                22&deg;
                <div className="flex items-center text-6xl">
                    <PiPlusMinusThin />
                </div>
                1
            </div>

            <div className="flex justify-between font-extralight items-end">
                <div className="text-4xl leading-none">9.8%</div>
                <div className="text-sm">Wind: WSW 6mph</div>
            </div>
        </div>
    )
}
