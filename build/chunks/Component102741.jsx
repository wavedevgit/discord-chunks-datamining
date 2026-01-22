/** Chunk was on web.js **/
/** chunk id: 102741, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk235986 = require("./235986.jsx"),
  Chunk634105 = require("./634105.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var d = function(e) {
    return e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.ERROR = "error", e
  }(d || {}),
  f = function(e) {
    return e.SMALL = "small", e.LARGE = "large", e.NONE = "none", e
  }(f || {});
let p = {
    primary: Chunk634105.cG,
    secondary: Chunk634105.QU,
    warning: Chunk634105.SO,
    error: Chunk634105._r
  },
  _ = {
    small: Chunk634105.EX,
    large: Chunk634105.as,
    none: null
  };
class h extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      icon: e,
      color: t,
      children: n,
      iconSize: r,
      className: a,
      iconClassName: s
    } = this.props;
    return (0, i.jsxs)(l.A, {
      className: o()(c.N4, p[t], a),
      align: l.A.Align.CENTER,
      children: [(0, i.jsx)(e, {
        className: o()(c.Kk, _[r], s),
        color: "currentColor"
      }), (0, i.jsx)("div", {
        children: n
      })]
    })
  }
}
u(h, "Colors", d), u(h, "Sizes", f);
let m = h