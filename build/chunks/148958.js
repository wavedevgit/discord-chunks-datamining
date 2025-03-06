/** Chunk was on 76282 **/
n.d(t, {
  h: () => u
}), n(47120), n(653041), n(230036);
var r = n(192379),
  i = n(442837),
  o = n(581364),
  l = n(675478),
  a = n(709054),
  s = n(822245),
  c = n(526761);

function u(e, t) {
  r.useEffect(() => {
    l.DZ.loadIfUncached(c.yP.FRECENCY_AND_FAVORITES_SETTINGS)
  }, []);
  let n = (0, i.e7)([s.Z], () => s.Z.getApplicationFrecencyWithoutLoadingLatest()),
    u = r.useMemo(() => null == t || 0 === t.length ? e : e.map(e => {
      var n, r, i;
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
      }({}, e), i = i = {
        isUserApp: null !== (n = null == t ? void 0 : t.some(t => t.application.id === e.id)) && void 0 !== n && n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r
    }), [e, t]),
    d = r.useMemo(() => null == t ? void 0 : t.filter(t => !e.some(e => e.id === t.application.id)), [e, t]),
    _ = r.useMemo(() => {
      var e;
      null == d || d.forEach(e => {
        let t = a.default.extractTimestamp(e.id);
        null == n.getEntry(e.application.id) && n.track(e.application.id, t)
      }), n.compute();
      let t = null !== (e = null == d ? void 0 : d.map(e => (0, o.X0)(e.application, !0))) && void 0 !== e ? e : [],
        r = [...u];
      return r.push(...t), r.sort((e, t) => {
        var r, i;
        let o = (null !== (r = n.getScore(t.id)) && void 0 !== r ? r : 0) - (null !== (i = n.getScore(e.id)) && void 0 !== i ? i : 0);
        return 0 !== o ? o : e.name.localeCompare(t.name)
      }), r
    }, [u, n, d]);
  return r.useMemo(() => {
    var e, r;
    let i, o;
    null == t || t.forEach(e => {
      let t = a.default.extractTimestamp(e.id);
      (null == o || t > o) && (i = e, o = t)
    }), u.forEach(e => {
      var t, r;
      let l = Math.max(...null !== (r = null === (t = n.getEntry(e.id)) || void 0 === t ? void 0 : t.recentUses) && void 0 !== r ? r : []);
      (null == o || l > o) && (i = e, o = l)
    });
    let l = null !== (r = null == i ? void 0 : null === (e = i.application) || void 0 === e ? void 0 : e.id) && void 0 !== r ? r : "";
    return [..._.filter(e => e.id === l), ..._.filter(e => e.id !== l)]
  }, [_, u, n, t])
}