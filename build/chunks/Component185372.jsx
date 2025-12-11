/** Chunk was on web.js **/
/** chunk id: 185372, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OZ: () => y,
  ox: () => b,
  ub: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk376885 = require("./376885.js"),
  Chunk478411 = require("./478411.js");

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

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let {
  Provider: g,
  Consumer: E
} = Chunk473749.createContext(Chunk981631.BRd.DARK);
class b extends Chunk473749.PureComponent {
  render() {
    let {
      lightSrc: e,
      darkSrc: t,
      width: n,
      height: i,
      offsetX: a,
      offsetY: l,
      style: u
    } = this.props;
    return (0, Chunk54381.jsx)(E, {
      children: p => (0, r.jsx)(c.Z.Child, {
        grow: 0,
        className: o()(d.image, f.marginBottom40),
        style: h(_({}, u), {
          width: n,
          height: i,
          marginLeft: a,
          marginTop: l,
          backgroundImage: "url(".concat((0, s.wj)(p) ? t : e, ")")
        })
      })
    })
  }
}
let y = e => {
  let {
    children: t,
    className: n,
    noteClassName: i,
    note: a,
    style: s
  } = e;
  return (0, r.jsxs)(c.Z.Child, {
    grow: 0,
    direction: c.Z.Direction.VERTICAL,
    style: s,
    children: [null != t && (0, r.jsx)(l.H, {
      className: o()(n, d.title),
      children: t
    }), null != a ? (0, r.jsx)("div", {
      className: o()(i, d.text, f.marginTop8),
      children: a
    }) : null]
  })
};

function O(e) {
  let {
    children: t,
    theme: n,
    className: i,
    style: a
  } = e;
  return (0, r.jsx)(g, {
    value: n,
    children: (0, r.jsx)(c.Z, {
      direction: c.Z.Direction.VERTICAL,
      align: c.Z.Align.CENTER,
      justify: c.Z.Justify.CENTER,
      className: o()(d.wrapper, i),
      style: a,
      children: t
    })
  })
}