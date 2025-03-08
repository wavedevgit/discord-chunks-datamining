/** Chunk was on 74329 **/
n.d(t, {
  Z: () => N
});
var r = n(200651),
  i = n(192379),
  o = n(442837),
  l = n(481060),
  a = n(565138),
  s = n(241559),
  c = n(527379),
  u = n(430824),
  d = n(944486),
  _ = n(914010),
  p = n(626135),
  E = n(528011),
  f = n(666657),
  m = n(533244),
  h = n(981631),
  b = n(176505),
  g = n(388032),
  O = n(980566);

function N(e) {
  var t, N;
  let {
    onDismiss: I
  } = e, C = (0, o.e7)([_.Z], () => _.Z.getGuildId()), T = (0, o.e7)([d.Z], () => null != C ? d.Z.getChannelId(C) : null, [C]), S = null != C ? C : null, y = (0, o.e7)([u.Z], () => null != S ? u.Z.getGuild(S) : null, [S]), {
    shouldShowIncidentActions: v,
    incidentData: P,
    isUnderLockdown: R
  } = (0, E.mI)(S), A = (0, s.n2)(null !== (t = null == y ? void 0 : y.id) && void 0 !== t ? t : h.lds), x = i.useCallback(() => null != y && (0, c._X)(y.id), [y]);
  if (null == y || null == P || !v) return null;
  let j = e => {
      if (e && A && T !== b.oC.MEMBER_SAFETY && x()) {
        p.default.track(h.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: h.kVF.GUILD_RAID_NOTIFICATION,
          guild_id: y.id
        });
        return
      }(0, l.ZDy)(async () => {
        let e = {
            source: f.Zu.NAGBAR,
            alertType: (0, m.T1)(P)
          },
          {
            default: t
          } = await n.e("58175").then(n.bind(n, 664452));
        return n => {
          var i, o;
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
          }({}, n), o = o = {
            guildId: y.id,
            analyticsData: e
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
          }), i))
        }
      })
    },
    D = (0, r.jsx)(a.Z, {
      className: O.guildIcon,
      guild: y,
      size: a.Z.Sizes.MINI
    }),
    L = (0, m.OY)(P, y.name);
  if (null != (null !== (N = P.dmsDisabledUntil) && void 0 !== N ? N : P.invitesDisabledUntil) && R) return (0, r.jsxs)(l.qXd, {
    className: O.notice,
    color: l.DM8.NEUTRAL,
    children: [(0, r.jsx)(l.RyX, {
      onClick: I,
      noticeType: h.kVF.GUILD_RAID_NOTIFICATION
    }), D, L, (0, r.jsx)(l.EyT, {
      className: O.actionButton,
      onClick: () => j(!1),
      children: (0, r.jsxs)("div", {
        className: O.actionButtonInner,
        children: [(0, r.jsx)(l.mBM, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          children: g.NW.string(g.t["c+7oa2"])
        })]
      })
    })]
  });
  let k = (0, m.CG)(P) ? g.NW.formatToPlainString(g.t.tZTx2N, {
      guildName: y.name
    }) : (0, m.kk)(P) ? g.NW.formatToPlainString(g.t["1bSmxs"], {
      guildName: y.name
    }) : g.NW.formatToPlainString(g.t.W87xDA, {
      guildName: y.name
    }),
    M = A && T === b.oC.MEMBER_SAFETY;
  return (0, r.jsxs)(l.qXd, {
    className: O.notice,
    color: l.DM8.WARNING,
    children: [(0, r.jsx)(l.RyX, {
      onClick: I,
      noticeType: h.kVF.GUILD_RAID_NOTIFICATION
    }), D, k, !M && (0, r.jsx)(l.EyT, {
      className: O.actionButton,
      onClick: () => j(!0),
      children: (0, r.jsx)("div", {
        className: O.actionButtonInner,
        children: (0, r.jsx)("span", {
          children: g.NW.string(g.t.zDJDho)
        })
      })
    })]
  })
}