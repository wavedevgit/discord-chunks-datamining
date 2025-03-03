/** Chunk was on 51424 **/
n.d(t, {
  Z: () => I
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(481060),
  a = n(565138),
  s = n(241559),
  c = n(527379),
  u = n(430824),
  d = n(944486),
  _ = n(914010),
  E = n(626135),
  p = n(528011),
  m = n(666657),
  f = n(533244),
  h = n(981631),
  g = n(176505),
  O = n(388032),
  N = n(980566);

function I(e) {
  var t, I;
  let {
    onDismiss: b
  } = e, T = (0, l.e7)([_.Z], () => _.Z.getGuildId()), C = (0, l.e7)([d.Z], () => null != T ? d.Z.getChannelId(T) : null, [T]), S = null != T ? T : null, y = (0, l.e7)([u.Z], () => null != S ? u.Z.getGuild(S) : null, [S]), {
    shouldShowIncidentActions: P,
    incidentData: R,
    isUnderLockdown: A
  } = (0, p.mI)(S), v = (0, s.n2)(null !== (t = null == y ? void 0 : y.id) && void 0 !== t ? t : h.lds), x = i.useCallback(() => null != y && (0, c._X)(y.id), [y]);
  if (null == y || null == R || !P) return null;
  let D = e => {
      if (e && v && C !== g.oC.MEMBER_SAFETY && x()) {
        E.default.track(h.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
          notice_type: h.kVF.GUILD_RAID_NOTIFICATION,
          guild_id: y.id
        });
        return
      }(0, o.ZDy)(async () => {
        let e = {
            source: m.Zu.NAGBAR,
            alertType: (0, f.T1)(R)
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
    L = (0, r.jsx)(a.Z, {
      className: N.guildIcon,
      guild: y,
      size: a.Z.Sizes.MINI
    }),
    j = (0, f.OY)(R, y.name);
  if (null != (null !== (I = R.dmsDisabledUntil) && void 0 !== I ? I : R.invitesDisabledUntil) && A) return (0, r.jsxs)(o.qXd, {
    className: N.notice,
    color: o.DM8.NEUTRAL,
    children: [(0, r.jsx)(o.RyX, {
      onClick: b,
      noticeType: h.kVF.GUILD_RAID_NOTIFICATION
    }), L, j, (0, r.jsx)(o.EyT, {
      className: N.actionButton,
      onClick: () => D(!1),
      children: (0, r.jsxs)("div", {
        className: N.actionButtonInner,
        children: [(0, r.jsx)(o.mBM, {
          size: "xs",
          color: "currentColor"
        }), (0, r.jsx)("span", {
          children: O.NW.string(O.t["c+7oa2"])
        })]
      })
    })]
  });
  let k = (0, f.CG)(R) ? O.NW.formatToPlainString(O.t.tZTx2N, {
      guildName: y.name
    }) : (0, f.kk)(R) ? O.NW.formatToPlainString(O.t["1bSmxs"], {
      guildName: y.name
    }) : O.NW.formatToPlainString(O.t.W87xDA, {
      guildName: y.name
    }),
    M = v && C === g.oC.MEMBER_SAFETY;
  return (0, r.jsxs)(o.qXd, {
    className: N.notice,
    color: o.DM8.WARNING,
    children: [(0, r.jsx)(o.RyX, {
      onClick: b,
      noticeType: h.kVF.GUILD_RAID_NOTIFICATION
    }), L, k, !M && (0, r.jsx)(o.EyT, {
      className: N.actionButton,
      onClick: () => D(!0),
      children: (0, r.jsx)("div", {
        className: N.actionButtonInner,
        children: (0, r.jsx)("span", {
          children: O.NW.string(O.t.zDJDho)
        })
      })
    })]
  })
}