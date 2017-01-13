export function kdr (deaths, kills) {
  return (kills / deaths).toFixed(2)
}

export function timeplayed (seconds) {
  var hours = Math.floor(seconds / 3600)
  var minutes = Math.floor((seconds - (hours * 3600)) / 60)
  var seconds = seconds - (hours * 3600) - (minutes * 60)

  return `${hours}h ${minutes}m ${seconds}s`;
}

export function hsKills (hs, kills) {
  return (hs / kills).toFixed(2) * 100 + '%'
}

export function accuracy (fired, hit) {
  return (hit / fired * 100).toFixed(1) + '%'
}

export function winRatio (played, won) {
  return (won / played * 100).toFixed(2) + '%'
}

export default {
  kdr,
  timeplayed,
  hsKills,
  accuracy,
  winRatio
}
