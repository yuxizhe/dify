import type { FC } from 'react'
import type { ModelProvider } from '../declarations'
import { useLanguage } from '../hooks'
import { apiPrefix } from '@/config'

type ProviderIconProps = {
  provider: ModelProvider
  className?: string
}
const ProviderIcon: FC<ProviderIconProps> = ({
  provider,
  className,
}) => {
  const language = useLanguage()

  if (provider.icon_large) {
    return (
      <img
        alt='provider-icon'
        src={`${apiPrefix.replace('/console/api', '')}${provider.icon_large[language]}?_token=${localStorage.getItem('console_token')}`}
        className={`w-auto h-6 ${className}`}
      />
    )
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className='text-xs font-semibold text-black'>
        {provider.label[language]}
      </div>
    </div>
  )
}

export default ProviderIcon
