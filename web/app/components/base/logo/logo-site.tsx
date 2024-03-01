import type { FC } from 'react'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <div className=' flex items-center'>
      <img
        src='/logo/logo-site.png'
        className={`block w-auto h-8 ${className}`}
        alt='logo'
      />
      <div className='text-primary-600 ml-1 text-lg font-bold'>雪链</div>
      <div className='text-primary-600 ml-1 text-lg font-bold'> - AI 应用平台</div>
    </div>
  )
}

export default LogoSite
