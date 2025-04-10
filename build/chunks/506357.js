/** Chunk was on 84466 **/
n.d(t, {
  Z: () => R
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(481060),
  a = n(565138),
  s = n(241559),
  c = n(527379),
  u = n(430824),
  E = n(944486),
  d = n(914010),
  _ = n(626135),
  N = n(528011),
  I = n(666657),
  T = n(533244),
  O = n(981631),
  S = n(176505),
  A = n(388032),
  P = n(302654);

function R(e) {
  var t, R;
  let {
    onDismiss: p
  } = e, C = (0, l.e7)([d.Z], () => d.Z.getGuildId()), D = (0, l.e7)([E.Z], () => null != C ? E.Z.getChannelId(C) : null, [C]), f = null != C ? C : null, m = (0, l.e7)([u.Z], () => null != f ? u.Z.getGuild(f) : null, [f]), {
    shouldShowIncidentActions: g,
    incidentData: h,
    isUnderLockdown: y
  } = (0, N.mI)(f), U = (0, s.n2)(null != (t = null == m ? void 0 : m.id) ? t : O.lds), k = i.useCallback(() => null != m && (0, c._X)(m.id), [m]);
  if (null == m || null == h || !g) return null;
  let b = e => {
      if (e && U && D !== S.oC.MEMBER_SAFETY && k()) return void _.default.track(O.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: O.kVF.GUILD_RAID_NOTIFICATION,
        guild_id: m.id
      });
      (0, o.ZDy)(async () => {
        let e = {
            source: I.Zu.NAGBAR,
            alertType: (0, T.T1)(h)
          },
          {
            default: t
          } = await n.e("58175").then(n.bind(n, 664452));
        return n => {
          var i, l;
          return (0, r.jsx)(t, (i = function(e) {
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
          }({}, n), l = l = {
            guildId: m.id,
            analyticsData: e
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    },
    M = (0, r.jsx)(a.Z, {
      className: P.guildIcon,
      guild: m,
      size: a.Z.Sizes.MINI
    }),
    Z = (0, T.OY)(h, m.name);
  if (null != (null != (R = h.dmsDisabledUntil) ? R : h.invitesDisabledUntil) && y) return (0, r.jsxs)(o.qXd, {
    className: P.notice,
    color: o.DM8.NEUTRAL,
    children: [(0, r.jsx)(o.RyX, {
      onClick: p,
      noticeType: O.kVF.GUILD_RAID_NOTIFICATION
    }), M, Z, (0, r.jsx)(o.EyT, {
      className: P.actionButton,
      onClick: () => b(!1),
      children: (0, r.jsxs)("div", {
        className: P.actionButtonInner,
        children: [(0, r.jsx)(o.mBM, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          children: A.NW.string(A.t["c+7oa2"])
        })]
      })
    })]
  });
  let L = (0, T.CG)(h) ? A.NW.formatToPlainString(A.t.tZTx2N, {
      guildName: m.name
    }) : (0, T.kk)(h) ? A.NW.formatToPlainString(A.t["1bSmxs"], {
      guildName: m.name
    }) : A.NW.formatToPlainString(A.t.W87xDA, {
      guildName: m.name
    }),
    v = U && D === S.oC.MEMBER_SAFETY;
  return (0, r.jsxs)(o.qXd, {
    className: P.notice,
    color: o.DM8.WARNING,
    children: [(0, r.jsx)(o.RyX, {
      onClick: p,
      noticeType: O.kVF.GUILD_RAID_NOTIFICATION
    }), M, L, !v && (0, r.jsx)(o.EyT, {
      className: P.actionButton,
      onClick: () => b(!0),
      children: (0, r.jsx)("div", {
        className: P.actionButtonInner,
        children: (0, r.jsx)("span", {
          children: A.NW.string(A.t.zDJDho)
        })
      })
    })]
  })
}