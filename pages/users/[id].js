import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'

export default function StaticPropsDetail({ user, errors }) {

  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        user ? user.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {user && <ListDetail user={user} />}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  try {
    const id = params?.id
    const user = sampleUserData.find((data) => data.id === Number(id))
    return { props: { user } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

export async function getStaticPaths() {
  const paths = sampleUserData.map((user) => ({
    params: { id: user.id.toString() },
  }))

  return { paths, fallback: false }
}

