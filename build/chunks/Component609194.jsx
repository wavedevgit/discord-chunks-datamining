/** Chunk was on web.js **/
/** chunk id: 609194, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk84329 = require("./84329.js");

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
    primary: Chunk84329.colorPrimary,
    secondary: Chunk84329.colorSecondary,
    warning: Chunk84329.colorWarning,
    error: Chunk84329.colorError
  },
  _ = {
    small: Chunk84329.small,
    large: Chunk84329.large,
    none: null
  };
class h extends(r = Chunk473749.PureComponent) {
  render() {
    let {
      icon: e,
      color: t,
      children: n,
      iconSize: r,
      className: a,
      iconClassName: o
    } = this.props;
    return (0, i.jsxs)(l.Z, {
      className: s()(c.note, p[t], a),
      align: l.Z.Align.CENTER,
      children: [(0, i.jsx)(e, {
        className: s()(c.icon, _[r], o),
        color: "currentColor"
      }), (0, i.jsx)("div", {
        children: n
      })]
    })
  }
}
u(h, "Colors", d), u(h, "Sizes", f);
let m = h