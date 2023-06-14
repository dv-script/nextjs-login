import { getCookie } from 'cookies-next'
import { verifyToken } from '../services/user'

export default function Home() {
  return (
    <div>Safety Page</div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie('autorization', { req, res })
    if (!token) throw new Error('Invalid token')

    verifyToken(token)
    return {
      props: {}
    }

  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },

      props: {}
    }
  }
}
