/** Chunk was on 48666 **/
/** chunk id: 942596, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk933297 = require("./933297.js"),
  Chunk985018 = require("./985018.jsx");

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function s(e) {
  let {
    useCount: t
  } = e, r = t();
  return 0 === r ? null : (0, n.jsx)(l.hVq, {
    count: r
  })
}

function u(e) {
  let {
    getDismissibleContentTypes: t,
    stronglyDiscouragedBadgeComponent: r,
    visibleContent: o,
    isSelected: i
  } = e, c = null == t ? true : t(), s = null != o && c.includes(o) && !i, u = null != r ? (0, n.jsx)(r, {}) : (0, n.jsx)(l.LpS, {
    text: a.intl.string(a.t.y2b7CA)
  });
  return s ? u : null
}

function y(e) {
  let {
    useCustomDecoration: t,
    visibleContent: r,
    isSelected: n
  } = e;
  return t(r, n)
}

function f(e) {
  let {
    trailing: t,
    visibleContent: r,
    isSelected: l
  } = e;
  if (null == t) return null;
  switch (t.type) {
    case o.S.BADGE_COUNT:
      return (0, n.jsx)(s, i({}, t));
    case o.S.BADGE_NEW:
      return (0, n.jsx)(u, c(i({}, t), {
        visibleContent: r,
        isSelected: l
      }));
    case o.S.STRONGLY_DISCOURAGED_CUSTOM:
      return (0, n.jsx)(y, c(i({}, t), {
        visibleContent: r,
        isSelected: l
      }))
  }
}