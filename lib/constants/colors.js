export function opacity (color, value) {
  const rgb = color.match(/(\d{1,3}), (\d{1,3}), (\d{1,3})/)
  return `rgba(${rgb[0]}, ${value})`
}

export default {
  /* Standard colors */
  black: 'rgb(0, 0, 0)',                      // #000000
  white: 'rgb(255, 255, 255)',                // #ffffff

  /* Primary colors */
  neonCarrot: 'rgb(255, 138, 64)',            // #FF8A40
  raven: 'rgb(107, 117, 139)',                // #6B758B
  shark: 'rgb(40, 44, 52)'                    // #282c34
}
