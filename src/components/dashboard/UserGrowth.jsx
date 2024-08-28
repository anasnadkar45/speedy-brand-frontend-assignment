import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { userGrowthData } from '@/data'

const UserGrowth = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={userGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: 'white', color:'black'}}/>
                        <Legend />
                        <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
                        <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default UserGrowth