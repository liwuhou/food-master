import { getWindowInfo } from '@tarojs/taro'
import { useState, useEffect, useCallback } from 'react'

const useStatusBarHeight = () => {
  const getBarHeight = useCallback(() => {
    const { statusBarHeight = 20 } = getWindowInfo() ?? {}
    return statusBarHeight
  }, [getWindowInfo])
  const [barHeight, setBarHeight] = useState<number>(() => getBarHeight())

  useEffect(() => {
    setBarHeight(getBarHeight())
  }, [getBarHeight])

  return barHeight
}

export default useStatusBarHeight
