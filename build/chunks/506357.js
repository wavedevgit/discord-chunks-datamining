/** Chunk was on 40247 **/
n.d(t, {
  Z: () => A
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
  O = n(533244),
  T = n(981631),
  S = n(176505),
  p = n(388032),
  P = n(980566);

function A(e) {
  var t, A;
  let {
    onDismiss: R
  } = e, C = (0, l.e7)([d.Z], () => d.Z.getGuildId()), f = (0, l.e7)([E.Z], () => null != C ? E.Z.getChannelId(C) : null, [C]), m = null != C ? C : null, D = (0, l.e7)([u.Z], () => null != m ? u.Z.getGuild(m) : null, [m]), {
    shouldShowIncidentActions: g,
    incidentData: y,
    isUnderLockdown: h
  } = (0, N.mI)(m), b = (0, s.n2)(null !== (t = null == D ? void 0 : D.id) && void 0 !== t ? t : T.lds), U = i.useCallback(() => null != D && (0, c._X)(D.id), [D]);
  if (null == D || null == y || !g) return null;
  let k = e => {
      if (e && b && f !== S.oC.MEMBER_SAFETY && U()) {
        _.default.track(T.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: T.kVF.GUILD_RAID_NOTIFICATION,
          guild_id: D.id
        });
        return
      }(0, o.ZDy)(async () => {
        let e = {
            source: I.Zu.NAGBAR,
            alertType: (0, O.T1)(y)
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
            guildId: D.id,
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
      guild: D,
      size: a.Z.Sizes.MINI
    }),
    v = (0, O.OY)(y, D.name);
  if (null != (null !== (A = y.dmsDisabledUntil) && void 0 !== A ? A : y.invitesDisabledUntil) && h) return (0, r.jsxs)(o.qXd, {
    className: P.notice,
    color: o.DM8.NEUTRAL,
    children: [(0, r.jsx)(o.RyX, {
      onClick: R,
      noticeType: T.kVF.GUILD_RAID_NOTIFICATION
    }), M, v, (0, r.jsx)(o.EyT, {
      className: P.actionButton,
      onClick: () => k(!1),
      children: (0, r.jsxs)("div", {
        className: P.actionButtonInner,
        children: [(0, r.jsx)(o.mBM, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          children: p.NW.string(p.t["c+7oa2"])
        })]
      })
    })]
  });
  let Z = (0, O.CG)(y) ? p.NW.formatToPlainString(p.t.tZTx2N, {
      guildName: D.name
    }) : (0, O.kk)(y) ? p.NW.formatToPlainString(p.t["1bSmxs"], {
      guildName: D.name
    }) : p.NW.formatToPlainString(p.t.W87xDA, {
      guildName: D.name
    }),
    j = b && f === S.oC.MEMBER_SAFETY;
  return (0, r.jsxs)(o.qXd, {
    className: P.notice,
    color: o.DM8.WARNING,
    children: [(0, r.jsx)(o.RyX, {
      onClick: R,
      noticeType: T.kVF.GUILD_RAID_NOTIFICATION
    }), M, Z, !j && (0, r.jsx)(o.EyT, {
      className: P.actionButton,
      onClick: () => k(!0),
      children: (0, r.jsx)("div", {
        className: P.actionButtonInner,
        children: (0, r.jsx)("span", {
          children: p.NW.string(p.t.zDJDho)
        })
      })
    })]
  })
}