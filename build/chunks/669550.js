/** Chunk was on 78376 **/
/** chunk id: 669550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => m,
  KA: () => p,
  jL: () => _
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk839214 = require("./839214.js"),
  Chunk360619 = require("./360619.js"),
  Chunk987281 = require("./987281.js"),
  Chunk419954 = require("./419954.js"),
  Chunk236077 = require("./236077.js"),
  Chunk478686 = require("./478686.js"),
  Chunk124059 = require("./124059.js");
let u = (0, Chunk839214.D)(() => ({
  enabled: false
}));

function _(e) {
  u.setState({
    enabled: e
  })
}

function p() {
  return u.useField("enabled")
}

function m(e, t) {
  let n = r.useMemo(() => (0, a.hl)(e), [e]),
    i = (0, l.PH)(),
    {
      searchResults: d
    } = (0, s.V)(),
    u = new Set;
  for (let e of d) {
    let t = e;
    for (; null != t;) {
      var _;
      let e = null == (_ = i[t]) ? true : _.parent;
      if (null == e) {
        u.add(t);
        break
      }
      t = e
    }
  }
  let p = g(n, null != t ? t : "", u),
    m = g(n, "", u);
  return r.useMemo(() => {
    var e, t, r;
    let i = new o.A,
      l = new o.A;
    return (0, c.A)(n, m, l), {
      node: null != (e = (0, c.A)(n, p, i)) ? e : (t = function(e) {
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
      }({}, n), r = r = {
        layout: []
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t),
      visibleDirectory: i,
      accessibleDirectory: l
    }
  }, [p, m, n])
}

function g(e, t, n) {
  let i = p(),
    l = (0, d.A)(e, t, {
      legacyMatches: n,
      bypassPredicates: i
    }),
    [s, a] = r.useState(l),
    o = function(e, t) {
      if (e.size !== t.size) returntrue;
      for (let n of e)
        if (!t.has(n)) returntrue;
      returnfalse
    }(s, l);
  return r.useEffect(() => {
    o && a(l)
  }, [o, l]), s
}