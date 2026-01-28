/** Chunk was on 75473 **/
/** chunk id: 942596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk933297 = require("./933297.js"),
  Chunk985018 = require("./985018.jsx");

function i(e) {
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
  return 0 === n ? null : (0, r.jsx)(o.hVq, {
    count: n
  })
}

function u(e) {
  let {
    getDismissibleContentTypes: t,
    stronglyDiscouragedBadgeComponent: n,
    visibleContent: a,
    isSelected: i
  } = e, c = null == t ? true : t(), s = null != a && c.includes(a) && !i, u = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(o.LpS, {
    text: l.intl.string(l.t.y2b7CA)
  });
  return s ? u : null
}

function d(e) {
  let {
    useCustomDecoration: t,
    visibleContent: n,
    isSelected: r
  } = e;
  return t(n, r)
}

function b(e) {
  let {
    trailing: t,
    visibleContent: n,
    isSelected: o
  } = e;
  if (null == t) return null;
  switch (t.type) {
    case a.S.BADGE_COUNT:
      return (0, r.jsx)(s, i({}, t));
    case a.S.BADGE_NEW:
      return (0, r.jsx)(u, c(i({}, t), {
        visibleContent: n,
        isSelected: o
      }));
    case a.S.STRONGLY_DISCOURAGED_CUSTOM:
      return (0, r.jsx)(d, c(i({}, t), {
        visibleContent: n,
        isSelected: o
      }))
  }
}