/** Chunk was on web.js **/
/** chunk id: 131051, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZA: () => g,
  ZP: () => E,
  go: () => m
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk972959 = require("./972959.js"),
  Chunk991346 = require("./991346.js"),
  Chunk839469 = require("./839469.js"),
  Chunk509613 = require("./509613.js"),
  Chunk904849 = require("./904849.js"),
  Chunk87432 = require("./87432.js"),
  Chunk178520 = require("./178520.js");

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
let h = (0, Chunk972959.H)(() => ({
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
  let n = r.useMemo(() => (0, s.Ql)(e), [e]),
    i = (0, a.Pt)(),
    {
      searchResults: u
    } = (0, o.F)(),
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
  let h = b(n, null != t ? t : "", d),
    m = b(n, "", d);
  return r.useMemo(() => {
    var e;
    let t = new l.Z,
      r = new l.Z;
    return (0, c.Z)(n, m, r), {
      node: null != (e = (0, c.Z)(n, h, t)) ? e : _(f({}, n), {
        layout: []
      }),
      visibleDirectory: t,
      accessibleDirectory: r
    }
  }, [h, m, n])
}

function b(e, t, n) {
  let i = g(),
    a = (0, u.Z)(e, t, {
      legacyMatches: n,
      bypassPredicates: i
    }),
    [o, s] = r.useState(a),
    l = y(o, a);
  return r.useEffect(() => {
    l && s(a)
  }, [l, a]), o
}

function y(e, t) {
  if (e.size !== t.size) returntrue;
  for (let n of e)
    if (!t.has(n)) returntrue;
  returnfalse
}