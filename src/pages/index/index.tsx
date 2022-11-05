import { View } from '@tarojs/components'
import { OsButton } from 'ossaui'
import { StatusBar } from '../../components'

import './index.scss'

definePageConfig({
  navigationStyle: 'custom',
})

const Index = () => {
  return (
    <View className="wrapper">
      <StatusBar />
      <OsButton type="primary">button</OsButton>
    </View>
  )
}

export default Index
