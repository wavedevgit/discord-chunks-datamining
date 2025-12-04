/** Chunk was on web.js **/
/** chunk id: 4794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk774642 = require("./774642.js"),
  Chunk445642 = require("./445642.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: a,
    useCollapsedSubtitle: _,
    useNotice: h
  } = t, [E, b] = i.useState(false), [y, O] = i.useState(true);
  i.useEffect(() => l.Z.subscribe(e => {
    let {
      navTransition: t
    } = e;
    return t
  }, e => {
    if (null == e) return;
    let n = (null == e ? true : e.targetAccordionKey) === t.key;
    n && !E && (b(true), O(false)), n && E && (l.Z.setState({
      navTransition: g(m({}, e), {
        targetAccordionKey: true
      })
    }), O(true))
  }, {
    equalityFn: s.X,
    fireImmediately: true
  }), [E, t.key]);
  let v = null == n ? true : n(E),
    S = null == _ ? true : _(),
    I = null == h ? true : h(),
    T = i.useCallback(e => {
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
    style: {
      "--custom-base-setting-wrapper-horizontal-padding": "".concat(f.q, "px"),
      "--custom-base-setting-wrapper-vertical-padding": "".concat(f.G, "px")
    },
    className: o()({
      [p.open]: E
    }),
    children: (0, r.jsxs)(u.I, {
      title: v,
      collapsedSubtitle: S,
      isExpanded: E,
      onExpandedChange: b,
      onExpandedChangeComplete: T,
      animate: y,
      children: [null != I && (0, r.jsx)(d.Z, {
        notice: I
      }), a.map(e => (0, r.jsx)(c.Z, {
        node: e
      }, e.key))]
    })
  })
}
let b = Chunk473749.memo(E)