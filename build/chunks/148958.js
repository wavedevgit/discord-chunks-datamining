/** Chunk was on 36526 **/
n.d(t, {
  h: () => s
}), n(388685), n(539854), n(642613);
var r = n(192379),
  l = n(442837),
  u = n(581364),
  i = n(675478),
  o = n(709054),
  c = n(822245),
  a = n(526761);

function s(e, t) {
  r.useEffect(() => {
    i.DZ.loadIfUncached(a.yP.FRECENCY_AND_FAVORITES_SETTINGS)
  }, []);
  let n = (0, l.e7)([c.Z], () => c.Z.getApplicationFrecencyWithoutLoadingLatest()),
    s = r.useMemo(() => null == t || 0 === t.length ? e : e.map(e => {
      var n, r, l;
      return r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({}, e), l = l = {
        isUserApp: null != (n = null == t ? void 0 : t.some(t => t.application.id === e.id)) && n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r
    }), [e, t]),
    d = r.useMemo(() => null == t ? void 0 : t.filter(t => !e.some(e => e.id === t.application.id)), [e, t]),
    p = r.useMemo(() => {
      var e;
      null == d || d.forEach(e => {
        let t = o.default.extractTimestamp(e.id);
        null == n.getEntry(e.application.id) && n.track(e.application.id, t)
      }), n.compute();
      let t = null != (e = null == d ? void 0 : d.map(e => (0, u.X0)(e.application, !0))) ? e : [],
        r = [...s];
      return r.push(...t), r.sort((e, t) => {
        var r, l;
        let u = (null != (r = n.getScore(t.id)) ? r : 0) - (null != (l = n.getScore(e.id)) ? l : 0);
        return 0 !== u ? u : e.name.localeCompare(t.name)
      }), r
    }, [s, n, d]);
  return r.useMemo(() => {
    var e, r;
    let l, u;
    null == t || t.forEach(e => {
      let t = o.default.extractTimestamp(e.id);
      (null == u || t > u) && (l = e, u = t)
    }), s.forEach(e => {
      var t, r;
      let i = Math.max(...null != (r = null == (t = n.getEntry(e.id)) ? void 0 : t.recentUses) ? r : []);
      (null == u || i > u) && (l = e, u = i)
    });
    let i = null != (r = null == l || null == (e = l.application) ? void 0 : e.id) ? r : "";
    return [...p.filter(e => e.id === i), ...p.filter(e => e.id !== i)]
  }, [p, s, n, t])
}