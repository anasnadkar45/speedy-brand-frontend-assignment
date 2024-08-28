import DataTable from '@/components/dashboard/DataTable'
import GenrePopularity from '@/components/dashboard/GenrePopularity'
import GeographicalDistribution from '@/components/dashboard/GeographicalDistribution'
import Matrics from '@/components/dashboard/Matrics'
import RevenueDistribution from '@/components/dashboard/RevenueDistribution'
import TopStreamedSong from '@/components/dashboard/TopStreamedSong'
import UserEngagement from '@/components/dashboard/UserEngagement'
import UserGrowth from '@/components/dashboard/UserGrowth'


export default function Dashboard() {

    return (
        <div className="p-3 space-y-8">
            <h1 className="text-3xl text-left font-bold">Dashboard Overview</h1>

            <Matrics />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <UserGrowth />

                <RevenueDistribution />

                <TopStreamedSong />

                <GenrePopularity />

                <UserEngagement />

                <GeographicalDistribution />
            </div>

            <DataTable />
        </div>
    )
}