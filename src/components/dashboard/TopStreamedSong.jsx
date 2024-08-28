import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { topSongsData } from '@/data'

const TopStreamedSong = () => {
    return (
        <div>
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Top 5 Streamed Songs</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={topSongsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip contentStyle={{ backgroundColor: 'white', color:'black'}}/>
                            <Legend />
                            <Bar dataKey="streams" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default TopStreamedSong