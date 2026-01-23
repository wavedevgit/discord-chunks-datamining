/** Chunk was on web.js **/
/** chunk id: 669550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => E,
  KA: () => g,
  jL: () => m
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk839214 = require("./839214.js"),
  Chunk360619 = require("./360619.js"),
  Chunk987281 = require("./987281.js"),
  Chunk419954 = require("./419954.js"),
  Chunk236077 = require("./236077.js"),
  Chunk478686 = require("./478686.js"),
  Chunk124059 = require("./124059.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = (0, Chunk839214.D)(() => ({
  enabled: false
}));

function m(e) {
  h.setState({
    enabled: e
  })
}

function g() {
  return h.useField("enabled")
}

function E(e, t) {
  let n = r.useMemo(() => (0, o.hl)(e), [e]),
    i = (0, a.PH)(),
    {
      searchResults: u
    } = (0, s.V)(),
    d = new Set;
  for (let e of u) {
    let t = e;
    for (; null != t;) {
      var p;
      let e = null == (p = i[t]) ? true : p.parent;
      if (null == e) {
        d.add(t);
        break
      }
      t = e
    }
  }
  let h = y(n, null != t ? t : "", d),
    m = y(n, "", d);
  return r.useMemo(() => {
    var e;
    let t = new l.A,
      r = new l.A;
    return (0, c.A)(n, m, r), {
      node: null != (e = (0, c.A)(n, h, t)) ? e : _(f({}, n), {
        layout: []
      }),
      visibleDirectory: t,
      accessibleDirectory: r
    }
  }, [h, m, n])
}

function y(e, t, n) {
  let i = g(),
    a = (0, u.A)(e, t, {
      legacyMatches: n,
      bypassPredicates: i
    }),
    [s, o] = r.useState(a),
    l = b(s, a);
  return r.useEffect(() => {
    l && o(a)
  }, [l, a]), s
}

function b(e, t) {
  if (e.size !== t.size) returntrue;
  for (let n of e)
    if (!t.has(n)) returntrue;
  returnfalse
}