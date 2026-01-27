/** Chunk was on web.js **/
/** chunk id: 644079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wb: () => _,
  Xz: () => E,
  yz: () => b
}), require("./747238.js"), require("./812715.js"), require("./733351.js"), require("./321073.js"), require("./638769.js"), require("./896048.js"), require("./65821.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk405269 = require("./405269.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = /^[0]+/,
  l = /:00/,
  c = /(AM|ΠΜ|सुबह)/i,
  u = /(PM|ΜΜ|शाम)/i,
  d = /\s+/,
  f = e => e.replace(s, "").replace(l, "").replace(c, "").replace(d, ""),
  p = e => e.replace(s, "").replace(u, "").replace(d, ""),
  _ = (e, t) => {
    let n = t.toUpperCase().trim();
    if (n.length > 0) {
      let t = i()("".concat(null == e ? true : e.format("YYYY-MM-DD"), " ").concat(n), "YYYY-MM-DD LT");
      if (f(t.format("LT")) === f(n)) return t
    }
  },
  h = i()("2021-04-12T00:00:00"),
  m = 15,
  g = "LT",
  E = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
  y = (e, t) => e.value.unix() - t.value.unix();
class b {
  lookupByValue(e) {
    if (null == e) return;
    let t = E(h, e);
    return this._index[t.unix()]
  }
  _createLabel(e) {
    return (0, a.i$)(e.locale(i().locale()), this.labelFormat)
  }
  _generateTimeOptions() {
    this.options = [], this._index = {};
    let e = i()(h),
      t = i()(e).add(1, "day"),
      n = i()(e);
    for (; n < t;) {
      let e = this._createNewOption(n.clone());
      this.options.push(e), this._index[e.value.unix()] = e.value, n.add(this.intervalInMinutes, "minutes")
    }
  }
  _createNewOption(e) {
    let t = E(h, e),
      n = this._createLabel(t);
    return {
      id: t.toISOString(),
      label: n,
      value: t
    }
  }
  _addNewOption(e) {
    let t = E(h, e),
      n = this._createLabel(t);
    return this._index[t.unix()] = t, this.options.push({
      id: t.toISOString(),
      label: n,
      value: t
    }), this.options.sort(y), e
  }
  _guessOptions(e) {
    let t = [];
    if (/[:\\.]/.test(e)) {
      let n = _(h, e);
      if (null != n) {
        t.push(n.clone());
        let r = n.add({
          hours: 12
        });
        r.isBefore(h.clone().add({
          hours: 24
        })) && p(r.format("LT")) === p(e) && t.push(r)
      }
    }
    return t
  }
  getOptions(e) {
    let t = this._guessOptions(e);
    if (!(t.length > 0)) return this.options;
    {
      let e = [...this.options];
      return t.forEach(t => {
        null == this.lookupByValue(t) && e.push(this._createNewOption(t))
      }), e.sort(y), e
    }
  }
  selectValue(e) {
    let t = this.lookupByValue(e);
    return null == t ? this._addNewOption(e) : t
  }
  constructor({
    intervalInMinutes: e = m,
    labelFormat: t = g
  } = {}) {
    if (o(this, "intervalInMinutes", true), o(this, "labelFormat", true), o(this, "options", []), o(this, "_index", {}), e <= 0) throw Error("intervalInMinutes should be positive number, got ".concat(e));
    this.intervalInMinutes = e, this.labelFormat = t, this._generateTimeOptions()
  }
}