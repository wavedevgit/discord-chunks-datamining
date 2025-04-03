/** Chunk was on 62940 **/
n.d(t, {
  Z: () => N
}), n(653041), n(47120), n(977457);
var r = n(192379),
  i = n(512722),
  o = n.n(i),
  l = n(392711),
  a = n.n(l),
  s = n(442837),
  c = n(139387),
  d = n(895924),
  u = n(581364),
  p = n(592125),
  m = n(430824),
  b = n(496675),
  g = n(594174),
  f = n(823379),
  h = n(905753),
  x = n(399860),
  j = n(981631);

function v(e) {
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
}

function N(e, t, n) {
  let i = (0, s.e7)([h.Z], () => h.Z.getApplicationPermissions()),
    l = r.useMemo(() => (function(e, t) {
      let n = v({}, t),
        r = (0, u.bD)(e),
        i = (0, x.rE)(r, d.Kw.CHANNEL),
        o = (0, x.rE)(e, d.Kw.ROLE);
      return o in n || (n[o] = {
        id: e,
        permission: !0,
        type: d.Kw.ROLE
      }), i in n || (n[i] = {
        id: r,
        permission: !0,
        type: d.Kw.CHANNEL
      }), n
    })(e, null != i ? i : {}), [i, e]),
    N = (0, s.e7)([h.Z], () => {
      var e;
      if (null == n) return;
      let t = h.Z.getCommand(n);
      return null !== (e = null == t ? void 0 : t.permissions) && void 0 !== e ? e : {}
    }, [n]),
    O = (0, s.e7)([h.Z], () => {
      var e;
      return null == n ? h.Z.getEditedApplication() : null === (e = h.Z.getEditedCommand()) || void 0 === e ? void 0 : e.permissions
    }, [n]),
    y = null != n ? n : t,
    _ = null != n ? N : l,
    C = r.useMemo(() => null != O ? O : v({}, null != _ ? _ : {}), [O, _]),
    I = r.useMemo(() => Object.keys(C).length, [C]),
    S = r.useMemo(() => null == _ || null == C ? null : !a().isEqual(_, C), [_, C]);
  return r.useEffect(() => {
    y === t && (S ? c.Z.startEditingCommandPermissions(y) : c.Z.stopEditingCommandPermissions(y))
  }, [t, S, y]), {
    originalApplicationPermissions: l,
    originalCommandPermissions: N,
    editedTargetPermissions: function(e, t) {
      let n = (0, s.e7)([m.Z], () => m.Z.getGuild(e), [e]);
      o()(null != n, "guild must be present to be editing its integration settings");
      let i = (0, s.e7)([b.Z], () => b.Z.getHighestRole(n), [n]),
        l = (0, s.e7)([g.default], () => {
          var e;
          return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
        });
      o()(null != l, "useComputePermissions: currentUserId must not be null");
      let a = l === n.ownerId,
        {
          channelIds: c,
          roleIds: h,
          userIds: x
        } = r.useMemo(() => {
          let e = [],
            n = [],
            r = [];
          for (let i of Object.values(t)) i.type === d.Kw.CHANNEL ? e.push(i.id) : i.type === d.Kw.ROLE ? n.push(i.id) : i.type === d.Kw.USER && r.push(i.id);
          return {
            channelIds: e,
            roleIds: n,
            userIds: r
          }
        }, [t]),
        N = (0, s.cj)([p.Z], () => Object.fromEntries(c.map(p.Z.getChannel).filter(f.lm).map(e => [e.id, e])), [c]),
        O = (0, s.cj)([m.Z], () => Object.fromEntries(h.map(t => m.Z.getRole(e, t)).filter(f.lm).map(e => [e.id, e])), [h, e]),
        y = (0, s.cj)([g.default], () => Object.fromEntries(x.map(g.default.getUser).filter(f.lm).map(e => [e.id, e])), [x]);
      return r.useMemo(() => {
        let e = n.id,
          r = (0, u.bD)(n.id),
          o = {};
        for (let [l, s] of Object.entries(t)) {
          let t = !1,
            c = !1;
          if (s.type === d.Kw.CHANNEL) {
            let e = s.id === r,
              n = N[s.id];
            t = e || b.Z.can(j.Plq.VIEW_CHANNEL, n), c = !0
          } else if (s.type === d.Kw.ROLE) {
            let r = s.id === e,
              o = O[s.id];
            t = r || null != o, c = a || r || b.Z.isRoleHigher(n, i, o)
          } else if (s.type === d.Kw.USER) {
            let e = y[s.id];
            t = null != e, c = null != e && (a || b.Z.canManageUser(j.Plq.USE_APPLICATION_COMMANDS, e, n))
          }
          o[l] = function(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(t)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e
          }(v({}, s), {
            canRead: t,
            canWrite: c
          })
        }
        return o
      }, [N, n, i, a, t, O, y])
    }(e, C),
    hasChanges: S,
    selectedPermissionCount: I
  }
}