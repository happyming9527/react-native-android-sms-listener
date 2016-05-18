/* @flow */
import type CancellableSubscription from './CancellableSubscription'
import type ReceivedSmsMessage from './ReceivedSmsMessage'
import { NativeModules, DeviceEventEmitter } from 'react-native'
const nativeModule = NativeModules.SmsListener;

const SMS_RECEIVED_EVENT = 'com.centaurwarchief.smslistener:smsReceived'

export default {
  addListener(listener: (message: ReceivedSmsMessage) => void ): CancellableSubscription {
    return DeviceEventEmitter.addListener(
      SMS_RECEIVED_EVENT,
      listener
    )
  },
  init: ()=>{
    nativeModule.init()
  },
  removeListener: ()=>{
    nativeModule.removeListener()
  }
}
