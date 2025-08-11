/** Chunk was on web.js **/
/** chunk id: 609194, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk925231 = require("./925231.js");

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
    primary: Chunk925231.colorPrimary,
    secondary: Chunk925231.colorSecondary,
    warning: Chunk925231.colorWarning,
    error: Chunk925231.colorError
  },
  p = {
    small: Chunk925231.small,
    large: Chunk925231.large,
    none: null
  };
class h extends(r = Chunk73800.PureComponent) {
  render() {
    let {
      icon: e,
      color: t,
      children: n,
      iconSize: r,
      className: o,
      iconClassName: a
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk600164.Z, {
      className: s()(Chunk925231.note, _[exports], Chunk73800),
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk255367.jsx)(module, {
        className: s()(Chunk925231.icon, p[r], Chunk120356),
        color: "currentColor"
      }), (0, Chunk255367.jsx)("div", {
        children: require
      })]
    })
  }
}
u(h, "Colors", d), u(h, "Sizes", f);
let m = h