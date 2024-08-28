import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { genrePopularityData } from '@/data'

const GenrePopularity = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Genre Popularity</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={genrePopularityData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip contentStyle={{ backgroundColor: 'white', color:'black'}} />
                            <Legend />
                            <Bar dataKey="listeners" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default GenrePopularity