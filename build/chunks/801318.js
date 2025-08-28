/** Chunk was on 47129 **/
/** chunk id: 801318, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722),
  Chunk28682 = require("./28682.js");

function o(e) {
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

function s(e, t) {
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

function a(e, t, n) {
  var i;
  let a = function(e, t, n) {
    let i = new Set,
      o = function(e) {
        var s;
        let a = arguments.length > 1 && true !== arguments[1] && arguments[1],
          u = arguments.length > 2 && true !== arguments[2] && arguments[2],
          c = (null == (s = e.usePredicate) ? true : s.call(e)) === false || a,
          d = function(e, t, n, i) {
            var l, o;
            if (null != e.legacySearchKey) return t.length < 2 || i.has(e.legacySearchKey);
            let s = "useTitle" in e ? null == (l = e.useTitle) ? true : l.call(e, false) : true,
              a = "useSearchTerms" in e ? null == (o = e.useSearchTerms) ? true : o.call(e) : true;
            if (n || null == s && null == a) returnfalse;
            if ("" === t) returntrue;
            let u = t.toLowerCase();
            for (let e of null != a ? a : [])
              if (r()(u, e.toLowerCase())) returntrue;
            return "string" == typeof s && r()(u, s.toLowerCase())
          }(e, t, c, n) || u,
          _ = false;
        if ((0, l.L)(e))
          for (let t of e.layout) _ = o(t, c, d) || _;
        return !c && (d || _) && i.add(e.key), d || _
      };
    return o(e), i
  }(e, null != t ? t : "", n);
  return null != (i = function e(t, n) {
    if (!n.has(t.key)) return null;
    if (!(0, l.L)(t)) return t;
    let i = t.layout.map(t => e(t, n)).filter(e => null != e);
    return 0 !== i.length || "render" in t ? s(o({}, t), {
      layout: i
    }) : null
  }(e, a)) ? i : s(o({}, e), {
    layout: []
  })
}