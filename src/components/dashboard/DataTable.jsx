import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { streamData } from '@/data'

const DataTable = () => {
    const [sortColumn,  setSortColumn] = useState('')
    const [sortDirection, setSortDirection] = useState('asc')
    const [filterArtist, setFilterArtist] = useState('')
    const [filterSong, setFilterSong] = useState('')
    const [sortedAndFilteredData, setSortedAndFilteredData] = useState([]);

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortColumn(column)
            setSortDirection('asc')
        }
    }

    // debounced filtering
    useEffect(() => {
        let timer = setTimeout(() => {
            setSortedAndFilteredData([
                ...streamData
                    .filter(item =>
                        item.artist.toLowerCase().includes(filterArtist.toLowerCase()) &&
                        item.songName.toLowerCase().includes(filterSong.toLowerCase())
                    )
            ])
        }, 500)

        return () => clearTimeout(timer)
    }, [filterArtist, filterSong])

    useEffect(() => {
        setSortedAndFilteredData([...streamData.sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
            return 0
        })])
    },[sortColumn,sortDirection])
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Streams</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-4 grid grid-cols-4 md:grid-cols-6 gap-2">
                        <Input
                            placeholder="Filter by Artist"
                            value={filterArtist}
                            onChange={(e) => setFilterArtist(e.target.value)}
                            className='col-span-2'
                        />
                        <Input
                            placeholder="Filter by Song"
                            value={filterSong}
                            onChange={(e) => setFilterSong(e.target.value)}
                            className='col-span-2'
                        />
                        <div className='col-span-2'>
                            <Select onValueChange={(value) => handleSort(value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="dateStreamed">Date Streamed</SelectItem>
                                    <SelectItem value="streamCount">Stream Count</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Song Name</TableHead>
                                <TableHead>Artist</TableHead>
                                <TableHead>Date Streamed</TableHead>
                                <TableHead>Stream Count</TableHead>
                                <TableHead>User ID</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sortedAndFilteredData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.songName}</TableCell>
                                    <TableCell>{item.artist}</TableCell>
                                    <TableCell>{item.dateStreamed}</TableCell>
                                    <TableCell>{item.streamCount}</TableCell>
                                    <TableCell>{item.userId}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default DataTable