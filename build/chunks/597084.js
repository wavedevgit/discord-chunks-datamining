/** Chunk was on web.js **/
/** chunk id: 597084, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
let Chunk152772 = require("./152772.js");
class i {
  constructor() {
    this._queue = []
  }
  enqueue(e, t) {
    let n = {
      priority: (t = Object.assign({
        priority: 0
      }, t)).priority,
      run: e
    };
    if (this.size && this._queue[this.size - 1].priority >= t.priority) return void this._queue.push(n);
    let i = r.default(this._queue, n, (e, t) => t.priority - e.priority);
    this._queue.splice(i, 0, n)
  }
  dequeue() {
    let e = this._queue.shift();
    return null == e ? true : e.run
  }
  filter(e) {
    return this._queue.filter(t => t.priority === e.priority).map(e => e.run)
  }
  get size() {
    return this._queue.length
  }
}
exports.default = i