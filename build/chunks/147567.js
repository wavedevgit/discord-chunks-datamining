/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
class t {
  constructor() {
    this.max = 1e3, this.map = new Map
  }
  get(e) {
    let t = this.map.get(e);
    if (void 0 !== t) return this.map.delete(e), this.map.set(e, t), t
  }
  delete(e) {
    return this.map.delete(e)
  }
  set(e, t) {
    if (!this.delete(e) && void 0 !== t) {
      if (this.map.size >= this.max) {
        let e = this.map.keys().next().value;
        this.delete(e)
      }
      this.map.set(e, t)
    }
    return this
  }
}
e.exports = t