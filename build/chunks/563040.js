/** Chunk was on web.js **/
/** chunk id: 563040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  rK: () => E,
  tR: () => y,
  tj: () => _
}), require("./704826.js"), require("./35282.js"), require("./781311.js"), require("./539854.js"), require("./642613.js"), require("./388685.js"), require("./415506.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk55935 = require("./55935.js");

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
  m = i()("2021-04-12T00:00:00"),
  h = 15,
  g = "LT",
  E = (e, t) => e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0),
  b = (e, t) => e.value.unix() - t.value.unix();
class y {
  lookupByValue(e) {
    if (null == e) return;
    let t = E(m, e);
    return this._index[t.unix()]
  }
  _createLabel(e) {
    return (0, a.vc)(e.locale(i().locale()), this.labelFormat)
  }
  _generateTimeOptions() {
    this.options = [], this._index = {};
    let e = i()(m),
      t = i()(module).add(1, "day"),
      n = i()(module);
    for (; require < exports;) {
      let e = this._createNewOption(require.clone());
      this.options.push(module), this._index[module.value.unix()] = module.value, require.add(this.intervalInMinutes, "minutes")
    }
  }
  _createNewOption(e) {
    let t = E(m, e);
    return {
      label: this._createLabel(t),
      value: t
    }
  }
  _addNewOption(e) {
    let t = E(m, e),
      n = this._createLabel(t);
    return this._index[t.unix()] = t, this.options.push({
      label: n,
      value: t
    }), this.options.sort(b), e
  }
  _guessOptions(e) {
    let t = [];
    if (/[:\\.]/.test(e)) {
      let n = _(m, e);
      if (null != n) {
        t.push(n.clone());
        let r = n.add({
          hours: 12
        });
        r.isBefore(m.clone().add({
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
      }), e.sort(b), e
    }
  }
  selectValue(e) {
    let t = this.lookupByValue(e);
    return null == t ? this._addNewOption(e) : t
  }
  constructor({
    intervalInMinutes: e = h,
    labelFormat: t = g
  } = {}) {
    if (o(this, "intervalInMinutes", true), o(this, "labelFormat", true), o(this, "options", []), o(this, "_index", {}), e <= 0) throw Error("intervalInMinutes should be positive number, got ".concat(e));
    this.intervalInMinutes = e, this.labelFormat = t, this._generateTimeOptions()
  }
}