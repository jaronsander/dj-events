const qs = require('qs')
import {FaPencilAlt, FaTimes} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/Link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'
import styles from '@/styles/Event.module.css'
import { useRouter } from 'next/router';


function EventPage({evt}) {
    const router = useRouter()
    const deleteEvent = async (e) => {
        if(confirm('Are you sure')){
            const res = await fetch(`${API_URL}/events/${evt.id}`, {
                method: 'DELETE',
            })
            const data = await res.json()
            if(!res.ok){
                toast.error(data.message)
            } else {
                router.push('/events')
            }
        }
    }
    return (
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${evt.attributes.id}`}>
                        <a>
                            <FaPencilAlt /> Edit Event
                        </a>
                    </Link>
                    <a href='#' className={styles.delete} onClick={deleteEvent}>
                        <FaTimes /> Delete Event
                    </a>

                </div>
                <span>
                    {new Date(evt.attributes.date).toLocaleDateString('en-US')} at {evt.attributes.time}
                </span>
                <h1>{evt.attributes.name}</h1>
                <ToastContainer/>
                {evt.attributes.image.data && (
                <div className={styles.image}>
                    <Image src={evt.attributes.image.data.attributes.url} width={960} height={600}/>
                </div>
                )}
                <h3>Performers:</h3>
                <p>{evt.attributes.performers}</p>
                <h3>Description:</h3>
                <p>{evt.attributes.description}</p>
                <h3>Venue: {evt.attributes.venue}</h3>
                <p>{evt.attributes.address}</p>

                <Link href='/events'>
                    <a className={styles.back}>{'<'}Go Back</a>
                </Link>
            </div>
        </Layout>
    )
}

export default EventPage
// export async function getStaticPaths(){
//     const query = qs.stringify({
//         populate: '*',
//     })
//     //console.log(query)
//     const res = await fetch(`${API_URL}/events?${query}`)
//     const events = await res.json()
//     //console.log(events)
//     const paths = events.data.map(evt => ({
//         params: {slug: evt.attributes.slug}
//     }))
//     console.log(paths)

//     return {
//         paths,
//         fallback: true
//     }
// }
// export async function getStaticProps({params:{slug}}){
//     console.log(slug)
//     const query = qs.stringify({
//         populate: '*',
//         filters: {
//             slug: {
//                 $eq: slug
//             },
//         },
//     })
//     const res = await fetch(`${API_URL}/events?${query}`);
//     console.log(res)
//     const events = await res.json()
//     return {
//         props: {
//             evt: events.data[0],
//         },
//         revalidate: 1
//     }
// }

export async function getServerSideProps({query:{slug}}){
    const query = qs.stringify({
        populate: '*',
        filters: {
            slug: {
                $eq: slug
            },
        },
    })
    const res = await fetch(`${API_URL}/events?${query}`)
    const events = await res.json()

    return {
        props: {
            evt: events.data[0]
        },
    }
}