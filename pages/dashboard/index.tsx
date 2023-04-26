import Head from 'next/head'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import Header from '@/components/modules/Header/Header'
import Layout from "@/components/layout/Layout";

function Dashboard() {
  const { shouldLoadContent } = useRedirectByUserCheck()

  return (
    <>
      <Head>
        <title>Аква Тепмикс | {shouldLoadContent ? 'Главная' : ''}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.svg" />
      </Head>

      <Layout>
        test
      </Layout>
    </>
  )
}

export default Dashboard
