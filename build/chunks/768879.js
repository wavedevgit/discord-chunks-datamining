/** Chunk was on web.js **/
/** chunk id: 768879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => _
}), require("./896048.js"), require("./321073.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk168186 = require("./168186.js"),
  Chunk594061 = require("./594061.js"),
  Chunk661191 = require("./661191.js"),
  Chunk630248 = require("./630248.js"),
  Chunk355097 = require("./355097.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  r.useEffect(() => {
    o.bW.loadIfUncached(c.oD.FRECENCY_AND_FAVORITES_SETTINGS)
  }, []);
  let n = (0, i.bG)([l.A], () => l.A.getApplicationFrecencyWithoutLoadingLatest()),
    u = r.useMemo(() => null == t || 0 === t.length ? e : e.map(e => {
      var n;
      return p(d({}, e), {
        isUserApp: null != (n = null == t ? true : t.some(t => t.application.id === e.id)) && n
      })
    }), [e, t]),
    f = r.useMemo(() => null == t ? true : t.filter(t => !e.some(e => e.id === t.application.id)), [e, t]),
    _ = r.useMemo(() => {
      var e;
      null == f || f.forEach(e => {
        let t = s.default.extractTimestamp(e.id);
        null == n.getEntry(e.application.id) && n.track(e.application.id, {
          timestamp: t
        })
      }), n.compute();
      let t = null != (e = null == f ? true : f.map(e => (0, a.bq)(e.application, true))) ? e : [],
        r = [...u];
      return r.push(...t), r.sort((e, t) => {
        var r, i;
        let a = (null != (r = n.getScore(t.id)) ? r : 0) - (null != (i = n.getScore(e.id)) ? i : 0);
        return 0 !== a ? a : e.name.localeCompare(t.name)
      }), r
    }, [u, n, f]);
  return r.useMemo(() => {
    var e, r;
    let i, a;
    null == t || t.forEach(e => {
      let t = s.default.extractTimestamp(e.id);
      (null == a || t > a) && (i = e, a = t)
    }), u.forEach(e => {
      var t, r;
      let o = Math.max(...null != (t = null == (r = n.getEntry(e.id)) ? true : r.recentUses) ? t : []);
      (null == a || o > a) && (i = e, a = o)
    });
    let o = null != (e = null == i || null == (r = i.application) ? true : r.id) ? e : "";
    return [..._.filter(e => e.id === o), ..._.filter(e => e.id !== o)]
  }, [_, u, n, t])
}