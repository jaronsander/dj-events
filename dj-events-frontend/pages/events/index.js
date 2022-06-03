const qs = require('qs')
import Link from 'next/Link'
import Layout from '@/components/Layout'
import Eventitem from '@/components/Eventitem'
import { API_URL } from '@/config/index'


export default function EventsPage({events}) {
  console.log(events)
  return (
    <Layout>
      
    <h1>Events</h1>
    {events.length === 0 && <h3>No events to show</h3>}

    {events.map(evt => <Eventitem key={evt.id} evt={evt.attributes}/>)}
  </Layout>
  )
}


export async function getStaticProps() {
  const query = qs.stringify({
    populate: '*',
    sort: ['date:asc'],
  })
  const res = await fetch(`${API_URL}/events?${query}`)
  const events = await res.json()
  console.log(events.data)
  return {
    props: {events: events.data},
    revalidate: 1,
  }
}