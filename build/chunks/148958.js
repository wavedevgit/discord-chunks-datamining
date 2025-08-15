/** Chunk was on 62981 **/
/** chunk id: 148958, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  h: () => s
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk581364 = require("./581364.js"),
  Chunk675478 = require("./675478.js"),
  Chunk709054 = require("./709054.js"),
  Chunk822245 = require("./822245.js"),
  Chunk526761 = require("./526761.js");

function s(e, n) {
  r.useEffect(() => {
    a.DZ.loadIfUncached(d.yP.FRECENCY_AND_FAVORITES_SETTINGS)
  }, []);
  let t = (0, o.e7)([l.Z], () => l.Z.getApplicationFrecencyWithoutLoadingLatest()),
    s = r.useMemo(() => null == n || 0 === n.length ? e : e.map(e => {
      var t, r, o;
      return r = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.forEach(function(n) {
            var r;
            r = t[n], n in e ? Object.defineProperty(e, n, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = r
          })
        }
        return e
      }({}, e), o = o = {
        isUserApp: null != (t = null == n ? true : n.some(n => n.application.id === e.id)) && t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t.push.apply(t, r)
        }
        return t
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
      }), r
    }), [e, n]),
    u = r.useMemo(() => null == n ? true : n.filter(n => !e.some(e => e.id === n.application.id)), [e, n]),
    p = r.useMemo(() => {
      var e;
      null == u || u.forEach(e => {
        let n = c.default.extractTimestamp(e.id);
        null == t.getEntry(e.application.id) && t.track(e.application.id, n)
      }), t.compute();
      let n = null != (e = null == u ? true : u.map(e => (0, i.X0)(e.application, true))) ? e : [],
        r = [...s];
      return r.push(...n), r.sort((e, n) => {
        var r, o;
        let i = (null != (r = t.getScore(n.id)) ? r : 0) - (null != (o = t.getScore(e.id)) ? o : 0);
        return 0 !== i ? i : e.name.localeCompare(n.name)
      }), r
    }, [s, t, u]);
  return r.useMemo(() => {
    var e, r;
    let o, i;
    null == n || n.forEach(e => {
      let n = c.default.extractTimestamp(e.id);
      (null == i || n > i) && (o = e, i = n)
    }), s.forEach(e => {
      var n, r;
      let a = Math.max(...null != (r = null == (n = t.getEntry(e.id)) ? true : n.recentUses) ? r : []);
      (null == i || a > i) && (o = e, i = a)
    });
    let a = null != (r = null == o || null == (e = o.application) ? true : e.id) ? r : "";
    return [...p.filter(e => e.id === a), ...p.filter(e => e.id !== a)]
  }, [p, s, t, n])
}