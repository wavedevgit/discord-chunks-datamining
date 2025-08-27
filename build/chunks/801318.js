/** Chunk was on 76210 **/
/** chunk id: 801318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
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
      s = function(e) {
        var a;
        let o = arguments.length > 1 && true !== arguments[1] && arguments[1],
          u = arguments.length > 2 && true !== arguments[2] && arguments[2],
          c = (null == (a = e.usePredicate) ? true : a.call(e)) === false || o,
          d = function(e, t, n, i) {
            var r, s;
            if (null != e.legacySearchKey) return t.length < 2 || i.has(e.legacySearchKey);
            let a = "useTitle" in e ? null == (r = e.useTitle) ? true : r.call(e, false) : true,
              o = "useSearchTerms" in e ? null == (s = e.useSearchTerms) ? true : s.call(e) : true;
            if (n || null == a && null == o) returnfalse;
            if ("" === t) returntrue;
            let u = t.toLowerCase();
            for (let e of null != o ? o : [])
              if (l()(u, e.toLowerCase())) returntrue;
            return "string" == typeof a && l()(u, a.toLowerCase())
          }(e, t, c, n) || u,
          _ = false;
        if ((0, r.L)(e))
          for (let t of e.layout) _ = s(t, c, d) || _;
        return !c && (d || _) && i.add(e.key), d || _
      };
    return s(e), i
  }(e, null != t ? t : "", n);
  return null != (i = function e(t, n) {
    if (!n.has(t.key)) return null;
    if (!(0, r.L)(t)) return t;
    let i = t.layout.map(t => e(t, n)).filter(e => null != e);
    return 0 !== i.length || "render" in t ? a(s({}, t), {
      layout: i
    }) : null
  }(e, o)) ? i : a(s({}, e), {
    layout: []
  })
}