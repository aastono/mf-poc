import dynamic from 'next/dynamic'

const RemotePro = dynamic(
    () => import("mf-pro/pro"),
    { ssr: false }
  )
const Pro = () => (<RemotePro />)

export default Pro