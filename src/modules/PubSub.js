export default class PubSub {
  subscribers = {}

  /**
   * Subscribe to an event
   * @memberof DragSelect#
   * @function subscribe
   * @param {DSCallbackNames} eventName
   * @param {DSCallback} callback
   * @returns {number} event id, can be used to unsubscribe
   */
  subscribe(eventName, callback) {
    if (!Array.isArray(this.subscribers[eventName]))
      this.subscribers[eventName] = []
    this.subscribers[eventName].push(callback)
    return this.subscribers[eventName].length - 1
  }

  /**
   * Removes event subscription
   * @memberof DragSelect#
   * @function unsubscribe
   * @param {DSCallbackNames} eventName
   * @param {DSCallback} [callback]
   * @param {number} [id] event id returned when subscribed (more performant than callback search)
   */
  unsubscribe(eventName, callback, id) {
    if (id) this.subscribers[eventName].splice(id, 1)
    else
      this.subscribers[eventName] = this.subscribers[eventName].filter(
        (cb) => cb !== callback
      )
  }

  /**
   * Removes event subscription
   * @memberof DragSelect#
   * @function publish
   * @param {DSCallbackNames} eventName
   * @param {CallbackObject} data passed to the subscription method
   */
  publish(eventName, data) {
    if (!Array.isArray(this.subscribers[eventName])) return
    this.subscribers[eventName].forEach((callback) => callback(data))
  }
}
