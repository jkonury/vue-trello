import dragula from 'dragula'
import 'dragula/dist/dragula.css'

const dragger = {
  init(container, options) {
    return dragula([...container], options)
  },
  sibling({el, wrapper, candidates, type}) {
    const curId = el.dataset[type + 'Id'] * 1
    let prev = null
    let next = null

    candidates.forEach((el, index, arr) => {
      const id = el.dataset[type + 'Id'] * 1
      if (id == curId) {
        if (index > 0 ) {
          prev = {
            id: arr[index - 1].dataset[type + 'Id'] * 1,
            pos: arr[index - 1].dataset[type + 'Pos'] * 1
          }
        } else {
          prev = null
        }

        if (index < arr.length - 1) {
          next = {
            id: arr[index + 1].dataset[type + 'Id'] * 1,
            pos: arr[index + 1].dataset[type + 'Pos'] * 1
          }
        } else {
          next = null
        }
      }
    })

    return {prev, next}
  }
}

export default dragger
