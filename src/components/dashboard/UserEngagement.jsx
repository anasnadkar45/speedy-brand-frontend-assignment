import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { userEngagementData } from '@/data'

const UserEngagement = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>User Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={userEngagementData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip contentStyle={{ backgroundColor: 'white', color:'black'}} />
                            <Legend />
                            <Area type="monotone" dataKey="avgListeningTime" stroke="#8884d8" fill="#8884d8" yAxisId="left" />
                            <Area type="monotone" dataKey="playlistCreations" stroke="#82ca9d" fill="#82ca9d" yAxisId="right" />
                        </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserEngagement