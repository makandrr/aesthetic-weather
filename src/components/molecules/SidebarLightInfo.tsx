import LightCircles from '../atoms/LightCircles'

export default function SidebarLightInfo({ className = '' }) {
    return (
        <div className={`sidebar-light-info ${className}`}>
            <div className="flex justify-between items-end">
                <LightCircles />
                <div className="font-extralight tracking-widest leading-none text-2xl">
                    .5%
                </div>
            </div>

            <div className="flex justify-between text-sm font-light mt-4">
                <div>
                    <h1>Safe</h1>
                    <ul className="list-disc list-inside">
                        <li>0.00%-0.9%</li>
                        <li>0.9%-12%</li>
                    </ul>
                </div>
                <div>
                    <h1>Dangerous</h1>
                    <ul className="list-disc list-inside">
                        <li>12%-38%</li>
                        <li>39%-90%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
