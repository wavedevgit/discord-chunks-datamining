/** Chunk was on web.js **/
/** chunk id: 930861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _J: () => y,
  kF: () => v,
  wL: () => A
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk421380 = require("./421380.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk713517 = require("./713517.js"),
  Chunk767997 = require("./767997.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var y = function(e) {
  return e.DEFAULT = "default", e.SMALL = "small", e
}({});
let b = {
    default: Chunk767997.hk,
    small: Chunk767997.p$
  },
  O = {
    default: Chunk767997.VE,
    small: Chunk767997.TY
  };
class v extends(r = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        className: t,
        shineSize: n,
        shinePaused: r
      } = e,
      a = g(e, ["className", "shineSize", "shinePaused"]);
    return (0, i.jsx)(l.A.div, m(_({}, a), {
      className: s()(f.dj, t, {
        [f.EM]: r
      }),
      children: (0, i.jsx)(u.A, {
        align: u.A.Align.CENTER,
        justify: u.A.Justify.CENTER,
        className: b[n],
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
let A = e => {
  let {
    children: t,
    className: n,
    disabled: r,
    submitting: o,
    pauseAnimation: l,
    shineSize: u = "default",
    shinePaused: p,
    buttonShineClassName: h,
    onlyShineOnHover: E
  } = e, y = g(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]), b = a.useRef(null), O = (0, d.M)(b), A = !r && !o && true !== l && (!E || O);
  return (0, i.jsxs)(c.$n, m(_({
    "data-migration-pending": true,
    buttonRef: b
  }, y), {
    className: s()(f.WE, n),
    disabled: r,
    submitting: o,
    children: [t, A ? (0, i.jsx)(v, {
      "data-migration-pending": true,
      shinePaused: p,
      className: s()(f.Qr, E ? f.PK : true, h),
      shineSize: u
    }) : null]
  }))
};
A.ShineSizes = y