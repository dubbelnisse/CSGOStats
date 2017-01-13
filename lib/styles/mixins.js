const removeUndefined = (style) => {
  for (const key in style) {
    if (style[key] === null || style[key] === undefined || style[key] === '*') {
      delete style[key]
    }
  }

  return style
}

const compileError = (prop, mixin) =>
  `Mr. White says: "${prop} must be supplied to ${mixin} mixin"`

/**
 * Absolute positioning
 * Send undefined or null to not include a parameter
 * @param  {Number} top
 * @param  {Number} right
 * @param  {Number} bottom
 * @param  {Number} left
 * @return {Object} - Positioning object
 */
export const absolute = (top, right, bottom, left) =>
  removeUndefined({
    bottom,
    left,
    position: 'absolute',
    right,
    top
  })

/**
 * Border width and color
 * @param  {Number} borderWidth
 * @param  {String} borderColor
 * @return {Object}
 */
export const border = (borderWidth, borderColor) => {
  if (!borderWidth) {
    throw new Error(compileError('Width', 'border'))
  }

  if (!borderColor) {
    throw new Error(compileError('Color', 'border'))
  }

  return { borderColor, borderWidth }
}

/**
 * Flex center on all sides
 * @return {Object} - Centering
 */
export const center = () => ({
  alignItems: 'center',
  justifyContent: 'center'
})

/**
 * Center items vertically in row
 * @return {Object}
 */
export const rowCenter = () => ({
  alignItems: 'center',
  flexDirection: 'row'
})

/**
 * Set width and height
 * @param  {Number} width
 * @param  {Number} height
 * @return {Object}
 */
export const size = (width, height = width) => {
  if (!width) {
    throw new Error(compileError('Width', 'size'))
  }

  return { height, width }
}

export const typography = (weight) => {
  if (!weight) {
    throw new Error(compileError('Weight', 'typography'))
  }

  const font = {
    bold: {
      fontFamily: 'gtw_bold',
      '@media ios': {
        fontFamily: 'GTWalsheim-Bold'
      }
    },
    medium: {
      fontFamily: 'gtw_medium',
      '@media ios': {
        fontFamily: 'GTWalsheim-Medium'
      }
    },
    regular: {
      fontFamily: 'gtw_regular',
      '@media ios': {
        fontFamily: 'GTWalsheim'
      }
    }
  }

  if (!font[weight]) {
    throw new Error('Mr. White says: "Weight prop must be one of the following [bold, medium, regular]"')
  }

  return font[weight]
}
