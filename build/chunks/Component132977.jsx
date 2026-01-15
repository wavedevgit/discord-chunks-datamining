/** Chunk was on web.js **/
/** chunk id: 132977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZX: () => v,
  gt: () => S,
  rH: () => b
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk755721 = require("./755721.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk587425 = require("./587425.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var b = function(e) {
  return e.DEFAULT = "default", e.SMALL = "small", e
}({});
let y = {
    default: Chunk587425.shineDefault,
    small: Chunk587425.shineSmall
  },
  O = {
    default: Chunk587425.shineInnerDefault,
    small: Chunk587425.shineInnerSmall
  };
class v extends(r = Chunk473749.PureComponent) {
  render() {
    let e = this.props,
      {
        className: t,
        shineSize: n,
        shinePaused: r
      } = e,
      a = g(e, ["className", "shineSize", "shinePaused"]);
    return (0, i.jsx)(l.Z.div, m(_({}, a), {
      className: s()(f.shineContainer, t, {
        [f.shinePaused]: r
      }),
      children: (0, i.jsx)(u.Z, {
        align: u.Z.Align.CENTER,
        justify: u.Z.Justify.CENTER,
        className: y[n],
        children: (0, i.jsx)("div", {
          className: O[n]
        })
      })
    }))
  }
}
p(v, "defaultProps", {
  shineSize: "default"
});
let S = e => {
  var {
    children: t,
    className: n,
    disabled: r,
    submitting: o,
    pauseAnimation: l,
    shineSize: u = "default",
    shinePaused: p,
    buttonShineClassName: h,
    onlyShineOnHover: E
  } = e, b = g(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]);
  let y = a.useRef(null),
    O = (0, d.X)(y),
    S = !r && !o && true !== l && (!E || O);
  return (0, i.jsxs)(c.zx, m(_({
    "data-migration-pending": true,
    buttonRef: y
  }, b), {
    className: s()(f.shinyButton, n),
    disabled: r,
    submitting: o,
    children: [t, S ? (0, i.jsx)(v, {
      "data-migration-pending": true,
      shinePaused: p,
      className: s()(f.buttonShine, E ? f.onlyShineOnHover : true, h),
      shineSize: u
    }) : null]
  }))
};
S.ShineSizes = b