/** Chunk was on web.js **/
/** chunk id: 363072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => s
});
var Chunk141106 = require("./141106.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = e => "*" === e.charAt(e.length - 1) ? r.dQ.PrefixMatch : r.dQ.ExactMatch;
class a {
  _internalAdd(e, t, n) {
    let r = e.charAt(0),
      i = this.suffix[r];
    null == i && (i = new a, this.suffix[r] = i, null != n ? i.value = n.slice(0, n.length - e.length + 1) : i.value = r), e.length > 1 && "*" !== e.charAt(1) ? i._internalAdd(e.substring(1), t, null != n ? n : e) : (i.strategy = o(t), i.isWord = true)
  }
  add(e) {
    this._internalAdd(e, e)
  }
  constructor() {
    i(this, "isWord", true), i(this, "value", true), i(this, "suffix", {}), i(this, "strategy", true), this.isWord = null, this.value = null, this.suffix = {}, this.strategy = Chunk141106.dQ.ExactMatch
  }
}
class s {
  static fromSnapshot(e) {
    let t = new s;
    return t.trie = e.trie, t
  }
  search(e) {
    let t = this.trie,
      n = null,
      i = null,
      o = {};
    for (let l = 0; l <= e.length; l++)
      if (n = e.charAt(l), (t = null != (i = t.suffix[n]) ? i : null != this.trie.suffix[n] ? this.trie.suffix[n] : this.trie).isWord) {
        var a, s;
        let n = t.strategy,
          i = l + 1 - (null != (s = null == (a = t.value) ? true : a.length) ? s : 0),
          c = l;
        if ((0, r.BD)(e, i, c, n)) {
          let t = (0, r.jO)(e, i, c, n);
          (null == o[t.start] || o[t.start].end < t.end) && (o[t.start] = t)
        }
      } return o
  }
  addWord(e) {
    null == this.trie && (this.trie = new a), this.trie.add(e)
  }
  addWords(e) {
    e.forEach(e => this.addWord(e))
  }
  clear() {
    this.trie = new a
  }
  constructor() {
    i(this, "trie", true), this.trie = new a
  }
}