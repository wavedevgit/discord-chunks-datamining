/** Chunk was on 69400 **/
n.d(t, {
  QN: () => d,
  ZP: () => f,
  gb: () => p,
  uF: () => b
}), n(388685), n(539854);
var r = n(73800),
  l = n(442837),
  o = n(835473),
  i = n(158776),
  u = n(594174),
  c = n(823379),
  a = n(317381),
  s = n(16609);

function f(e, t) {
  return p((0, l.Wu)([a.ZP], () => null != e && null != e.id && "" !== e.id ? a.ZP.getEmbeddedActivitiesForChannel(e.id) : a.i6), t)
}

function d(e) {
  let t = p((0, l.e7)([a.ZP], () => null != e ? a.ZP.getEmbeddedActivitiesForGuild(e) : a.i6));
  return r.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      var n;
      let r = (0, s.pY)(t.embeddedActivity.location);
      if (null == r) return;
      let l = null != (n = e.get(r)) ? n : [];
      l.push(t), e.set(r, l)
    }), e
  }, [t])
}

function p(e, t) {
  let n = e.map(e => e.applicationId),
    i = (0, o.Z)(n),
    a = new Set([]);
  for (let t of e)
    for (let e of t.userIds) a.add(e);
  let s = (0, l.Wu)([u.default], () => {
    let e = [];
    for (let t of a) e.push(u.default.getUser(t));
    return e
  }, [a]);
  return r.useMemo(() => {
    let n = new Map;
    return s.forEach(e => {
      null != e && n.set(e.id, e)
    }), e.map((e, r) => {
      let l = i[r],
        o = [];
      if (null != o)
        for (let r of e.userIds) {
          let e = n.get(r);
          if (null != e && null != t) {
            let n = t(e);
            null != n && o.push(n)
          }
        }
      return null == l ? null : {
        embeddedActivity: e,
        application: l,
        userParticipantAvatarUrls: o
      }
    }).filter(c.lm)
  }, [e, i, s, t])
}

function b(e) {
  return (0, l.e7)([i.Z], () => {
    let t = new Map;
    return e.forEach(e => {
      var n, r, l;
      let o = i.Z.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
        var n;
        return t.application_id === (null == e || null == (n = e.application) ? void 0 : n.id)
      });
      t.set(null == e || null == (n = e.application) ? void 0 : n.id, (r = function(e) {
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
        presenceActivity: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r))
    }), t
  }, [e], l.pF)
}