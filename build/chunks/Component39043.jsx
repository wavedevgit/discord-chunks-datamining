/** Chunk was on web.js **/
/** chunk id: 39043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk894858 = require("./894858.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk78837 = require("./78837.jsx");
require("./465133.js");
var Chunk821443 = require("./821443.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: a,
    useCollapsedSubtitle: f
  } = t, [_, m] = i.useState(false), [g, E] = i.useState(true);
  i.useEffect(() => l.A.subscribe(e => {
    let {
      navTransition: t
    } = e;
    return t
  }, e => {
    if (null == e) return;
    let n = (null == e ? true : e.targetAccordionKey) === t.key;
    n && !_ && (m(true), E(false)), n && _ && (l.A.setState({
      navTransition: h(p({}, e), {
        targetAccordionKey: true
      })
    }), E(true))
  }, {
    equalityFn: o.x,
    fireImmediately: true
  }), [_, t.key]);
  let b = null == n ? true : n(_),
    y = null == f ? true : f(),
    O = i.useCallback(e => {
      e && l.A.setState({
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
      "--custom-base-setting-wrapper-horizontal-padding": "".concat(12, "px"),
      "--custom-base-setting-wrapper-vertical-padding": "".concat(8, "px")
    },
    className: s()({
      [d.h]: _
    }),
    children: (0, r.jsx)(u.f, {
      title: b,
      collapsedSubtitle: y,
      isExpanded: _,
      onExpandedChange: m,
      onExpandedChangeComplete: O,
      animate: g,
      children: a.map(e => (0, r.jsx)(c.A, {
        node: e
      }, e.key))
    })
  })
}
let g = Chunk64700.memo(m)