/** Chunk was on web.js **/
/** chunk id: 4794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk55160 = require("./55160.js"),
  Chunk996435 = require("./996435.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk175993 = require("./175993.jsx"),
  Chunk445642 = require("./445642.js");

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

function g(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: a,
    useCollapsedSubtitle: p,
    useNotice: m
  } = t, [g, E] = i.useState(false), [b, y] = i.useState(true);
  i.useEffect(() => l.Z.subscribe(e => {
    let {
      navTransition: t
    } = e;
    return t
  }, e => {
    if (null == e) return;
    let n = (null == e ? true : e.targetAccordionKey) === t.key;
    n && !g && (E(true), y(false)), n && g && (l.Z.setState({
      navTransition: h(_({}, e), {
        targetAccordionKey: true
      })
    }), y(true))
  }, {
    equalityFn: s.X,
    fireImmediately: true
  }), [g, t.key]);
  let O = null == n ? true : n(g),
    v = null == p ? true : p(),
    S = null == m ? true : m(),
    I = i.useCallback(e => {
      e && l.Z.setState({
        navTransition: {
          targetKey: t.key,
          targetAccordionKey: t.key,
          animateScroll: true,
          scrollBlock: "nearest"
        }
      })
    }, [t.key]);
  return (0, r.jsx)("div", {
    className: o()({
      [f.open]: g
    }),
    children: (0, r.jsxs)(u.I, {
      title: O,
      collapsedSubtitle: v,
      isExpanded: g,
      onExpandedChange: E,
      onExpandedChangeComplete: I,
      animate: b,
      children: [null != S && (0, r.jsx)(d.Z, {
        notice: S
      }), a.map(e => (0, r.jsx)(c.Z, {
        node: e
      }, e.key))]
    })
  })
}
let E = Chunk473749.memo(g)