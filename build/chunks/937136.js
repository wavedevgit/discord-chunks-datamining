/** Chunk was on 7685 **/
/** chunk id: 937136, original params: e,t,n (module,exports,require) **/
function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  p: () => r
}), require("./896048.js");
class r {
  empty() {
    return 0 === this.pending.size && 0 === this.fetching.size
  }
  status(e) {
    return this.pending.has(e) ? 0 : this.fetching.has(e) ? 1 : null
  }
  addWant(e) {
    this.fetching.has(e) || this.pending.add(e)
  }
  removeWant(e) {
    this.pending.delete(e), this.fetching.delete(e)
  }
  nextWants(e) {
    let t = [...this.pending];
    return t.length = Math.min(e, t.length), t
  }
  markFetching(e) {
    for (let t of e) this.pending.delete(t), this.fetching.add(t)
  }
  markCompleted(e) {
    for (let t of e) this.pending.delete(t), this.fetching.delete(t)
  }
  markFailed(e) {
    for (let t of e) this.pending.add(t), this.fetching.delete(t)
  }
  async try (e, t) {
    try {
      this.markFetching(e);
      let n = await t();
      return this.markCompleted(e), n
    } catch (t) {
      throw this.markFailed(e), t
    }
  }
  constructor() {
    l(this, "pending", new Set), l(this, "fetching", new Set)
  }
}