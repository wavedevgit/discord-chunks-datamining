/** Chunk was on 60667 **/
/** chunk id: 478686, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => function e(t, n, s) {
    var a, o, c, d, u, _, p, m;
    let g = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
    if (!n.has(t.key)) return null;
    if (!(0, r.nW)(t)) return s.register({
      node: t,
      parentPanelKey: null == (u = g.panel) ? true : u.key,
      parentTabKey: null == (_ = g.tab) ? true : _.key,
      parentCategoryKey: null == (p = g.category) ? true : p.key,
      parentAccordionKey: null == (m = g.accordion) ? true : m.key
    }), t;
    let A = g;
    t.type === r.Z6.SIDEBAR_ITEM && (A = l(i({}, g), {
      panel: t.layout[0]
    })), t.type === r.Z6.PANEL && (A = l(i({}, g), {
      panel: t
    })), t.type === r.Z6.CATEGORY && (A = l(i({}, g), {
      category: t
    })), t.type === r.Z6.ACCORDION && (A = l(i({}, g), {
      accordion: t
    })), t.type === r.Z6.TAB_ITEM && (A = l(i({}, g), {
      tab: t
    }));
    let f = t.layout.map(t => e(t, n, s, A)).filter(e => null != e);
    if (0 === f.length && !("StronglyDiscouragedCustomComponent" in t || t.type === r.Z6.SIDEBAR_ITEM && "onClick" in t)) return null;
    let h = l(i({}, t), {
      layout: f
    });
    return s.register({
      node: h,
      parentPanelKey: null == (a = A.panel) ? true : a.key,
      parentTabKey: null == (o = A.tab) ? true : o.key,
      parentCategoryKey: null == (c = A.category) ? true : c.key,
      parentAccordionKey: null == (d = A.accordion) ? true : d.key
    }), h
  }
});
var Chunk963935 = require("./963935.js");

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

function l(e, t) {
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