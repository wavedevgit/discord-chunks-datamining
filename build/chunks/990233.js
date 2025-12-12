/** Chunk was on web.js **/
/** chunk id: 990233, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var r, i, Chunk473749 = require("./473749.js");

function a(e, t, n) {
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
let l = (0, require("./112724.jsx").Z)((i = class extends(r = Chunk473749.Component) {
  static getDerivedStateFromProps(e, t) {
    let {
      width: n,
      desiredItemWidth: r,
      maxColumns: i
    } = e, o = s(n, r, i);
    return o !== t.columns ? {
      columns: o
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
    return require(r, module, exports)
  }
  constructor(...e) {
    super(...e), a(this, "state", {
      columns: s(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
    })
  }
}, a(i, "defaultProps", {
  desiredItemWidth: 200
}), i))