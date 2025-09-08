/** Chunk was on 47129 **/
/** chunk id: 801318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk904849 = require("./904849.js"),
  Chunk28682 = require("./28682.js");

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

function s(e, t) {
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

function u(e, t, n) {
  var r;
  let u = function(e, t, n) {
      let r = new Set,
        l = function(e) {
          var a;
          let s = arguments.length > 1 && true !== arguments[1] && arguments[1],
            u = arguments.length > 2 && true !== arguments[2] && arguments[2],
            c = (null == (a = e.usePredicate) ? true : a.call(e)) === false || s,
            d = function(e, t, n, r) {
              var l, a;
              if (null != e.legacySearchKey) return t.length < 2 || r.has(e.legacySearchKey);
              if (e.type === o.J.SECTION && e.hoisted) returntrue;
              let s = "useTitle" in e ? null == (l = e.useTitle) ? true : l.call(e, false) : true,
                u = "useSearchTerms" in e ? null == (a = e.useSearchTerms) ? true : a.call(e) : true;
              if (n || null == s && null == u) returnfalse;
              if ("" === t) returntrue;
              let c = t.toLowerCase();
              for (let e of null != u ? u : [])
                if (i()(c, e.toLowerCase())) returntrue;
              return "string" == typeof s && i()(c, s.toLowerCase())
            }(e, t, c, n) || u,
            g = false;
          if ((0, o.L)(e))
            for (let t of e.layout) g = l(t, c, d) || g;
          return !c && (d || g) && r.add(e.key), d || g
        };
      return l(e), r
    }(e, null != t ? t : "", n),
    c = new l.Z;
  return {
    node: null != (r = function e(t, n, r) {
      let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      if (!n.has(t.key)) return null;
      if (!(0, o.L)(t)) return r.register(t, i.panel, i.category, i.accordion), t;
      let l = i;
      t.type === o.J.PANEL && (l = s(a({}, i), {
        panel: t
      })), t.type === o.J.CATEGORY && (l = s(a({}, i), {
        category: t
      })), t.type === o.J.ACCORDION && (l = s(a({}, i), {
        accordion: t
      }));
      let u = t.layout.map(t => e(t, n, r, l)).filter(e => null != e);
      return 0 !== u.length || "render" in t ? (r.register(t, l.panel, l.category, l.accordion), s(a({}, t), {
        layout: u
      })) : null
    }(e, u, c)) ? r : s(a({}, e), {
      layout: []
    }),
    directory: c
  }
}