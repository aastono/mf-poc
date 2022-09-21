import dynamic from 'next/dynamic'

const RemoteCore = dynamic(
    () => import("mf-core/core"),
    { ssr: false }
  )

const Core = () => (<RemoteCore />)

export default Core