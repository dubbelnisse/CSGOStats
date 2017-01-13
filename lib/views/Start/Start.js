import React, { PropTypes } from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './Start.styles'
import User from '../../components/User'
import { kdr, timeplayed, hsKills, accuracy, winRatio } from '../../utils/metrics'

export const Start = ({ user, stats }) => {
  if (stats.length === 0) { return null }

  return (
    <View style={styles.wrap}>
      <User user={user} />
      <View style={styles.inner}>
        <Text style={styles.text}>Total kills: {stats.total_kills}</Text>
        <Text style={styles.text}>Total deaths: {stats.total_deaths}</Text>
        <Text style={styles.text}>KDR: {kdr(stats.total_deaths, stats.total_kills)}</Text>
        <Text style={styles.text}>Total time played: {timeplayed(stats.total_time_played)}</Text>
        <Text style={styles.text}>HS kills: {hsKills(stats.total_kills_headshot, stats.total_kills)}</Text>
        <Text style={styles.text}>Accuracy: {accuracy(stats.total_shots_fired, stats.total_shots_hit)}</Text>
        <Text style={styles.text}>Planted bombs: {stats.total_planted_bombs}</Text>
        <Text style={styles.text}>Defused bombs: {stats.total_defused_bombs}</Text>
        <Text style={styles.text}>MVP: {stats.total_mvps}</Text>
        <Text style={styles.text}>Win (comp): {winRatio(stats.total_matches_played, stats.total_matches_won)}</Text>
    </View>
    </View>
  )
}

Start.propTypes = {
  stats: PropTypes.shape({
    total_kills: PropTypes.number,
    total_deaths: PropTypes.number
  }),
  user: PropTypes.shape({})
}

export default Start
