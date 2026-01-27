/** Chunk was on web.js **/
/** chunk id: 327143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var r, i, Chunk64700 = require("./64700.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e, t, n) {
  return Math.min(Math.max(Math.floor(e / t), 1), n)
}
let l = (0, require("./456412.jsx").A)((i = class extends(r = Chunk64700.Component) {
  static getDerivedStateFromProps(e, t) {
    let {
      width: n,
      desiredItemWidth: r,
      maxColumns: i
    } = e, a = s(n, r, i);
    return a !== t.columns ? {
      columns: a
    } : null
  }
  render() {
    let {
      width: e,
      height: t,
      children: n
    } = this.props, {
      columns: r
    } = this.state;
    return n(r, e, t)
  }
  constructor(...e) {
    super(...e), o(this, "state", {
      columns: s(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
    })
  }
}, o(i, "defaultProps", {
  desiredItemWidth: 200
}), i))