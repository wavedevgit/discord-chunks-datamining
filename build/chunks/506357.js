/** Chunk was on 49750 **/
n.d(t, {
  Z: () => I
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(481060),
  s = n(565138),
  a = n(241559),
  c = n(527379),
  u = n(430824),
  d = n(944486),
  _ = n(914010),
  E = n(626135),
  p = n(528011),
  m = n(666657),
  h = n(533244),
  f = n(981631),
  g = n(176505),
  N = n(388032),
  O = n(980566);

function I(e) {
  var t, I;
  let {
    onDismiss: b
  } = e, T = (0, l.e7)([_.Z], () => _.Z.getGuildId()), C = (0, l.e7)([d.Z], () => null != T ? d.Z.getChannelId(T) : null, [T]), S = null != T ? T : null, y = (0, l.e7)([u.Z], () => null != S ? u.Z.getGuild(S) : null, [S]), {
    shouldShowIncidentActions: P,
    incidentData: R,
    isUnderLockdown: A
  } = (0, p.mI)(S), v = (0, a.n2)(null !== (t = null == y ? void 0 : y.id) && void 0 !== t ? t : f.lds), x = i.useCallback(() => null != y && (0, c._X)(y.id), [y]);
  if (null == y || null == R || !P) return null;
  let D = e => {
      if (e && v && C !== g.oC.MEMBER_SAFETY && x()) {
        E.default.track(f.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: f.kVF.GUILD_RAID_NOTIFICATION,
          guild_id: y.id
        });
        return
      }(0, o.ZDy)(async () => {
        let e = {
            source: m.Zu.NAGBAR,
            alertType: (0, h.T1)(R)
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
            guildId: y.id,
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
    L = (0, r.jsx)(s.Z, {
      className: O.guildIcon,
      guild: y,
      size: s.Z.Sizes.MINI
    }),
    k = (0, h.OY)(R, y.name);
  if (null != (null !== (I = R.dmsDisabledUntil) && void 0 !== I ? I : R.invitesDisabledUntil) && A) return (0, r.jsxs)(o.qXd, {
    className: O.notice,
    color: o.DM8.NEUTRAL,
    children: [(0, r.jsx)(o.RyX, {
      onClick: b,
      noticeType: f.kVF.GUILD_RAID_NOTIFICATION
    }), L, k, (0, r.jsx)(o.EyT, {
      className: O.actionButton,
      onClick: () => D(!1),
      children: (0, r.jsxs)("div", {
        className: O.actionButtonInner,
        children: [(0, r.jsx)(o.mBM, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          children: N.NW.string(N.t["c+7oa2"])
        })]
      })
    })]
  });
  let j = (0, h.CG)(R) ? N.NW.formatToPlainString(N.t.tZTx2N, {
      guildName: y.name
    }) : (0, h.kk)(R) ? N.NW.formatToPlainString(N.t["1bSmxs"], {
      guildName: y.name
    }) : N.NW.formatToPlainString(N.t.W87xDA, {
      guildName: y.name
    }),
    M = v && C === g.oC.MEMBER_SAFETY;
  return (0, r.jsxs)(o.qXd, {
    className: O.notice,
    color: o.DM8.WARNING,
    children: [(0, r.jsx)(o.RyX, {
      onClick: b,
      noticeType: f.kVF.GUILD_RAID_NOTIFICATION
    }), L, j, !M && (0, r.jsx)(o.EyT, {
      className: O.actionButton,
      onClick: () => D(!0),
      children: (0, r.jsx)("div", {
        className: O.actionButtonInner,
        children: (0, r.jsx)("span", {
          children: N.NW.string(N.t.zDJDho)
        })
      })
    })]
  })
}