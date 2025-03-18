/** Chunk was on 35755 **/
n.d(t, {
  QN: () => p,
  ZP: () => d,
  gb: () => m,
  uF: () => f
}), n(47120), n(653041);
var i = n(192379),
  l = n(442837),
  r = n(835473),
  o = n(158776),
  a = n(594174),
  s = n(823379),
  c = n(317381),
  u = n(16609);

function d(e, t) {
  return m((0, l.Wu)([c.ZP], () => null != e && null != e.id && "" !== e.id ? c.ZP.getEmbeddedActivitiesForChannel(e.id) : c.i6), t)
}

function p(e) {
  let t = m((0, l.e7)([c.ZP], () => null != e ? c.ZP.getEmbeddedActivitiesForGuild(e) : c.i6));
  return i.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      var n;
      let i = (0, u.pY)(t.embeddedActivity.location);
      if (null == i) return;
      let l = null !== (n = e.get(i)) && void 0 !== n ? n : [];
      l.push(t), e.set(i, l)
    }), e
  }, [t])
}

function m(e, t) {
  let n = e.map(e => e.applicationId),
    o = (0, r.Z)(n),
    c = new Set([]);
  for (let t of e)
    for (let e of t.userIds) c.add(e);
  let u = (0, l.Wu)([a.default], () => {
    let e = [];
    for (let t of c) e.push(a.default.getUser(t));
    return e
  }, [c]);
  return i.useMemo(() => {
    let n = new Map;
    return u.forEach(e => {
      null != e && n.set(e.id, e)
    }), e.map((e, i) => {
      let l = o[i],
        r = [];
      if (null != r)
        for (let i of e.userIds) {
          let e = n.get(i);
          if (null != e && null != t) {
            let n = t(e);
            null != n && r.push(n)
          }
        }
      return null == l ? null : {
        embeddedActivity: e,
        application: l,
        userParticipantAvatarUrls: r
      }
    }).filter(s.lm)
  }, [e, o, u, t])
}

function f(e) {
  return (0, l.e7)([o.Z], () => {
    let t = new Map;
    return e.forEach(e => {
      var n, i, l;
      let r = o.Z.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
        var n;
        return t.application_id === (null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id)
      });
      t.set(null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id, (i = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i
          })
        }
        return e
      }({}, e), l = l = {
        presenceActivity: r
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }), t
  }, [e], l.pF)
}