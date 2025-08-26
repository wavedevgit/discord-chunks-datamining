/** Chunk was on 76210 **/
/** chunk id: 801318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk28682 = require("./28682.js");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function a(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function o(e, t, n) {
  var l;
  let o = function(e, t, n) {
    let l = new Set,
      s = function(e) {
        var a;
        let o = arguments.length > 1 && true !== arguments[1] && arguments[1],
          u = arguments.length > 2 && true !== arguments[2] && arguments[2],
          c = (null == (a = e.usePredicate) ? true : a.call(e)) === false || o,
          d = function(e, t, n, l) {
            var r, s;
            if (null != e.legacySearchKey) return l.has(e.legacySearchKey);
            let a = "useTitle" in e ? null == (r = e.useTitle) ? true : r.call(e, false) : true,
              o = "useSearchTerms" in e ? null == (s = e.useSearchTerms) ? true : s.call(e) : true;
            if (n || null == a && null == o) returnfalse;
            if ("" === t) returntrue;
            let u = t.toLowerCase();
            for (let e of null != o ? o : [])
              if (i()(u, e.toLowerCase())) returntrue;
            return "string" == typeof a && i()(u, a.toLowerCase())
          }(e, t, c, n) || u,
          T = false;
        if ((0, r.L)(e))
          for (let t of e.layout) T = s(t, c, d) || T;
        return !c && (d || T) && l.add(e.key), d || T
      };
    return s(e), l
  }(e, null != t ? t : "", n);
  return null != (l = function e(t, n) {
    if (!n.has(t.key)) return null;
    if (!(0, r.L)(t)) return t;
    let l = t.layout.map(t => e(t, n)).filter(e => null != e);
    return 0 !== l.length || "render" in t ? a(s({}, t), {
      layout: l
    }) : null
  }(e, o)) ? l : a(s({}, e), {
    layout: []
  })
}