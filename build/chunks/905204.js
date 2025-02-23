/** Chunk was on 58121 (396bfcc6a8f93a0e.js) **/
t.d(n, {
  Z: () => x
}), t(86693), t(536091), t(653041), t(47120);
var l = t(192379),
  r = t(392711),
  a = t.n(r),
  i = t(442837),
  o = t(570140),
  s = t(724213),
  c = t(9156),
  d = t(630388),
  u = t(823379),
  m = t(549817),
  h = t(45966),
  p = t(526761);

function f(e) {
  o.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}
let g = {};

function x(e) {
  let n = (0, i.e7)([h.Z], () => {
    var n;
    return null !== (n = h.Z.getPendingResponseOptions(e)) && void 0 !== n ? n : g
  }, [e]);
  return l.useEffect(() => (f(e), () => f(e)), [e]), l.useEffect(() => {
    null != n && 0 !== Object.keys(n).length && m.Z.updateOnboardingResponses(e)
  }, [e, n]), {
    handleSelectOption: l.useCallback((n, t, l) => {
      let r = h.Z.getOnboardingResponses(e),
        {
          addedRoleIds: i,
          removedRoleIds: f
        } = function(e, n, t, l) {
          var r, i, o, s, c;
          let d = [],
            m = [];
          if (e.singleSelect && t) {
            let t = e.options.find(e => l.includes(e.id));
            d = a().difference(null !== (r = n.roleIds) && void 0 !== r ? r : [], null !== (i = null == t ? void 0 : t.roleIds) && void 0 !== i ? i : []), m = a().difference(null !== (o = null == t ? void 0 : t.roleIds) && void 0 !== o ? o : [], null !== (s = n.roleIds) && void 0 !== s ? s : [])
          } else if (t) d = null !== (c = n.roleIds) && void 0 !== c ? c : [], m = [];
          else {
            let t = e.options.filter(e => l.includes(e.id)),
              r = t.filter(e => n.id !== e.id),
              i = t.map(e => e.roleIds).flat().filter(u.lm),
              o = r.map(e => e.roleIds).flat().filter(u.lm);
            d = [], m = a().difference(i, o)
          }
          return {
            addedRoleIds: d,
            removedRoleIds: m
          }
        }(n, t, l, r),
        {
          addedChannelIds: g,
          removedChannelIds: x
        } = function(e) {
          var n, t, l, r, i;
          let {
            guildId: o,
            prompt: c,
            option: d,
            selected: m,
            responses: p
          } = e, f = [], g = [];
          if (c.singleSelect && m) {
            let e = c.options.find(e => p.includes(e.id));
            f = a().difference(null !== (n = d.channelIds) && void 0 !== n ? n : [], null !== (t = null == e ? void 0 : e.channelIds) && void 0 !== t ? t : []), g = a().difference(null !== (l = null == e ? void 0 : e.channelIds) && void 0 !== l ? l : [], null !== (r = d.channelIds) && void 0 !== r ? r : [])
          } else if (m) f = null !== (i = d.channelIds) && void 0 !== i ? i : [], g = [];
          else {
            let e = c.options.filter(e => p.includes(e.id)),
              n = e.filter(e => d.id !== e.id),
              t = e.map(e => e.channelIds).flat().filter(u.lm),
              l = n.map(e => e.channelIds).flat().filter(u.lm);
            f = [], g = a().difference(t, l)
          }
          return (0, s.hi)(o) && f.push(...h.Z.getDefaultChannelIds(o)), {
            addedChannelIds: f,
            removedChannelIds: g
          }
        }({
          guildId: e,
          prompt: n,
          option: t,
          selected: l,
          responses: r
        }),
        _ = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              l = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), l.forEach(function(n) {
              var l;
              l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[n] = l
            })
          }
          return e
        }({}, g.reduce((n, t) => {
          let l = c.ZP.getChannelIdFlags(e, t);
          return n[t] = {
            flags: (0, d.mB)(l, p.ic.OPT_IN_ENABLED, !0)
          }, n
        }, {}), x.reduce((n, t) => {
          let l = c.ZP.getChannelIdFlags(e, t);
          return n[t] = {
            flags: (0, d.mB)(l, p.ic.OPT_IN_ENABLED, !1)
          }, n
        }, {}));
      m.Z.selectOption(e, n.id, t.id, l), o.Z.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: _
      }), m.Z.updateRolesLocal(e, i, f)
    }, [e])
  }
}