/** Chunk was on web.js **/
/** chunk id: 678884, original params: e (module,exports,re quire) **/
class t {
  constructor() {
    this.max = 1e3, this.map = new Map
  }
  get(e) {
    let t = this.map.get(e);
    if (true !== t) return this.map.delete(e), this.map.set(e, t), t
  }
  delete(e) {
    return this.map.delete(e)
  }
  set(e, t) {
    if (!this.delete(e) && true !== t) {
      if (this.map.size >= this.max) {
        let e = this.map.keys().next().value;
        this.delete(e)
      }
      this.map.set(e, t)
    }
    return this
  }
}
module.exports = t