/** Chunk was on 9452 **/
/** chunk id: 87432, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => function t(e, n, u) {
    var s, a, o, c, E, d;
    let S = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
    if (!n.has(e.key)) return null;
    if (!(0, i.Lk)(e)) return u.register(e, null == (c = S.panel) ? true : c.key, null == (E = S.category) ? true : E.key, null == (d = S.accordion) ? true : d.key), e;
    let T = S;
    e.type === i.Jq.SIDEBAR_ITEM && (T = r(l({}, S), {
      panel: e.layout[0]
    })), e.type === i.Jq.PANEL && (T = r(l({}, S), {
      panel: e
    })), e.type === i.Jq.CATEGORY && (T = r(l({}, S), {
      category: e
    })), e.type === i.Jq.ACCORDION && (T = r(l({}, S), {
      accordion: e
    }));
    let O = e.layout.map(e => t(e, n, u, T)).filter(t => null != t);
    if (0 === O.length && !("render" in e || e.type === i.Jq.SIDEBAR_ITEM && "onClick" in e)) return null;
    let g = r(l({}, e), {
      layout: O
    });
    return u.register(g, null == (s = T.panel) ? true : s.key, null == (a = T.category) ? true : a.key, null == (o = T.accordion) ? true : o.key), g
  }
});
var Chunk28682 = require("./28682.js");

function l(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      var i;
      i = n[e], e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = i
    })
  }
  return t
}

function r(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      n.push.apply(n, i)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}