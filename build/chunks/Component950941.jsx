/** Chunk was on 16985 **/
/** chunk id: 950941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk28682 = require("./28682.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function s(e) {
  let {
    useCount: t
  } = e, n = t();
  return 0 === n ? null : (0, r.jsx)(l.mAB, {
    count: n
  })
}

function u(e) {
  let {
    getDismissibleContentTypes: t,
    badgeComponent: n,
    visibleContent: i,
    isSelected: a
  } = e, c = null == t ? true : t(), s = null != i && c.includes(i) && !a, u = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(l.IGR, {
    text: o.intl.string(o.t.y2b7CA)
  });
  return s ? u : null
}

function d(e) {
  let {
    useDecoration: t,
    visibleContent: n,
    isSelected: r
  } = e;
  return t(n, r)
}

function f(e) {
  let {
    trailing: t,
    visibleContent: n,
    isSelected: l
  } = e;
  if (null == t) return null;
  switch (t.type) {
    case i.PU.BADGE_COUNT:
      return (0, r.jsx)(s, a({}, t));
    case i.PU.BADGE_NEW:
      return (0, r.jsx)(u, c(a({}, t), {
        visibleContent: n,
        isSelected: l
      }));
    case i.PU.STRONGLY_DISCOURAGED_CUSTOM:
      return (0, r.jsx)(d, c(a({}, t), {
        visibleContent: n,
        isSelected: l
      }))
  }
}