/** Chunk was on 88119 **/
n.d(t, {
  Z: () => _
});
var r = n(200651);
n(192379);
var i = n(442837),
  l = n(481060),
  o = n(665149),
  a = n(171368),
  s = n(650774),
  c = n(430824),
  u = n(496675),
  d = n(709054),
  p = n(826581),
  h = n(246364),
  f = n(360328),
  m = n(981631),
  g = n(388032),
  b = n(86866);

function _(e) {
  let {
    channelId: t,
    showProfile: n = !1,
    showTrailingDivider: _ = !1
  } = e, C = d.default.cast(t), {
    joinRequest: v,
    isModmin: y,
    guildId: x,
    maxMembers: j
  } = (0, i.cj)([p.Z, c.Z, u.Z], () => {
    let e = p.Z.getRequest(C),
      t = c.Z.getGuild(null == e ? void 0 : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && u.Z.can(m.Plq.KICK_MEMBERS, t),
      guildId: null == t ? void 0 : t.id,
      maxMembers: null == t ? void 0 : t.maxMembers
    }
  }), O = (0, i.e7)([s.Z], () => null != x ? s.Z.getMemberCount(x) : 0), N = null != j && (null != O ? O : 0) >= j, {
    approveRequest: E,
    rejectRequest: I,
    submitting: P
  } = (0, f.s)(null == v ? void 0 : v.guildId, null == v ? void 0 : v.userId, null == v ? void 0 : v.joinRequestId);
  return null != v && v.applicationStatus === h.wB.SUBMITTED && y ? (0, r.jsxs)("div", {
    className: b.buttons,
    children: [(0, r.jsx)(l.ua7, {
      text: g.NW.string(g.t.RbIXi4),
      shouldShow: N,
      children: e => {
        var t, n;
        return (0, r.jsx)(l.zxk, (t = function(e) {
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
        }({}, e), n = n = {
          color: l.zxk.Colors.GREEN,
          submitting: P,
          onClick: E,
          size: l.PhG.SMALL,
          disabled: N,
          children: g.NW.string(g.t.BzjDQE)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    }), (0, r.jsx)(l.zxk, {
      color: l.zxk.Colors.RED,
      onClick: I,
      size: l.PhG.SMALL,
      disabled: P || v.applicationStatus !== h.wB.SUBMITTED,
      children: g.NW.string(g.t.hDtbs7)
    }), n && (0, r.jsx)(l.zxk, {
      color: l.zxk.Colors.TRANSPARENT,
      onClick: () => {
        (0, a.openUserProfileModal)({
          userId: v.userId,
          guildId: v.guildId,
          analyticsLocation: {
            section: m.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: m.qAy.JOIN_REQUEST
          }
        })
      },
      size: l.PhG.SMALL,
      children: g.NW.string(g.t.iXAna2)
    }), _ && (0, r.jsx)(o.ZP.Divider, {})]
  }) : null
}