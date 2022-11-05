import { View } from '@tarojs/components'
import { FC } from 'react'
import { useStatusBarHeight } from '../../hooks'

type Props = {
  bgColor?: string
}
const StatusBar: FC<Props> = () => {
  const statusBarHeight = useStatusBarHeight()
  return <View style={{ height: statusBarHeight + 'px' }}></View>
}

export default StatusBar
