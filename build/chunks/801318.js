/** Chunk was on 9452 **/
/** chunk id: 801318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722),
  Chunk904849 = require("./904849.js"),
  Chunk28682 = require("./28682.js");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function a(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function o(e, t, n) {
  var i;
  let o = function(e, t, n) {
      let i = new Set,
        l = function(e) {
          var s;
          let a = arguments.length > 1 && true !== arguments[1] && arguments[1],
            o = arguments.length > 2 && true !== arguments[2] && arguments[2],
            c = (null == (s = e.usePredicate) ? true : s.call(e)) === false || a,
            d = function(e, t, n, i) {
              var l, s;
              if (null != e.legacySearchKey) return t.length < 2 || i.has(e.legacySearchKey);
              if (e.type === u.Jq.SECTION && e.hoisted) returntrue;
              let a = "useTitle" in e ? null == (l = e.useTitle) ? true : l.call(e, false) : true,
                o = "useSearchTerms" in e ? null == (s = e.useSearchTerms) ? true : s.call(e) : true;
              if (n || null == a && null == o) returnfalse;
              if ("" === t) returntrue;
              let c = t.toLowerCase();
              for (let e of null != o ? o : [])
                if (r()(c, e.toLowerCase())) returntrue;
              return "string" == typeof a && r()(c, a.toLowerCase())
            }(e, t, c, n) || o,
            E = false;
          if ((0, u.Lk)(e))
            for (let t of e.layout) E = l(t, c, d) || E;
          return !c && (d || E) && i.add(e.key), d || E
        };
      return l(e), i
    }(e, null != t ? t : "", n),
    c = new l.Z;
  return {
    node: null != (i = function e(t, n, i) {
      let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
      if (!n.has(t.key)) return null;
      if (!(0, u.Lk)(t)) return i.register(t, r.panel, r.category, r.accordion), t;
      let l = r;
      t.type === u.Jq.PANEL && (l = a(s({}, r), {
        panel: t
      })), t.type === u.Jq.CATEGORY && (l = a(s({}, r), {
        category: t
      })), t.type === u.Jq.ACCORDION && (l = a(s({}, r), {
        accordion: t
      }));
      let o = t.layout.map(t => e(t, n, i, l)).filter(e => null != e);
      return 0 !== o.length || "render" in t ? (i.register(t, l.panel, l.category, l.accordion), a(s({}, t), {
        layout: o
      })) : null
    }(e, o, c)) ? i : a(s({}, e), {
      layout: []
    }),
    directory: c
  }
}