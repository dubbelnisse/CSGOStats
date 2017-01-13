import _ from 'lodash'

export default function dataParser (data) {
  let formatedData = {}

  data.map(item => {
    _.merge(formatedData, {
      [item.name]: item.value
    })
  })

  return formatedData
}
