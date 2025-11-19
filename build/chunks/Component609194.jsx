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
  Chunk9643 = require("./9643.js");

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
let _ = {
    primary: Chunk9643.colorPrimary,
    secondary: Chunk9643.colorSecondary,
    warning: Chunk9643.colorWarning,
    error: Chunk9643.colorError
  },
  p = {
    small: Chunk9643.small,
    large: Chunk9643.large,
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
    return (0, Chunk54381.jsxs)(Chunk600164.Z, {
      className: s()(Chunk9643.note, _[exports], Chunk473749),
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk54381.jsx)(module, {
        className: s()(Chunk9643.icon, p[r], Chunk120356),
        color: "currentColor"
      }), (0, Chunk54381.jsx)("div", {
        children: require
      })]
    })
  }
}
u(h, "Colors", d), u(h, "Sizes", f);
let m = h