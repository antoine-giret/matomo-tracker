import MatomoTracker from '@antoine-giret/matomo-tracker-js'
import { InstanceParams } from './types'

function createInstance(params: InstanceParams): MatomoTracker {
  return new MatomoTracker(params)
}

export default createInstance
