import { useState, useEffect, useMemo } from 'react'
import useMeasure from 'react-use-measure'
import { useTransition, a } from '@react-spring/web'
import shuffle from 'lodash.shuffle'

import useMedia from '../assets/useMedia'
import data from '../assets/data'

import styles from './LS2.module.css'

function Masonry({setLoading}:any) {
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
    const [ref, { width }] = useMeasure()
    const [items, set] = useState(data)
    useEffect(() => {
        let times=0
        times++
        let t = setInterval(() => set(shuffle), 1000)
        setTimeout(()=>{
            t = setInterval(() => set(shuffle), 100)
        },2500)
        setTimeout(()=>{
            t = setInterval(() => set(shuffle), 50)
        },3500)
        setTimeout(()=>{
            setLoading(3)
        },4000)
        return () => clearInterval(t)
    }, [])
    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0)
        let gridItems = items.map((child: any) => {
            const column = heights.indexOf(Math.min(...heights))
            const x = (width / columns) * column
            const y = (heights[column] += child.height / 2) - child.height / 2
            return { ...child, x, y, width: width / columns, height: child.height / 2 }
        })
        return [heights, gridItems]
    }, [columns, items, width])
    const transitions = useTransition(gridItems, {
        key: (item: { css: string; height: number }) => item.css,
        from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
        enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
        update: ({ x, y, width, height }) => ({ x, y, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25,
    })
    return (
        <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
            {transitions((style, item) => (
                <a.div style={style}>
                    <div style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }} />
                </a.div>
            ))}
        </div>
    )
}

export default function LS2({setLoading}:any) {
    return <Masonry setLoading={setLoading} />
}
