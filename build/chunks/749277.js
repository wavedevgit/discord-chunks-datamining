/** Chunk was on 74329 **/
n.d(t, {
  A: () => A
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(704215),
  l = n(481060),
  a = n(232567),
  s = n(230711),
  c = n(726542),
  u = n(100527),
  d = n(231757),
  _ = n(674525),
  p = n(963249),
  E = n(346585),
  f = n(303172),
  m = n(463230),
  h = n(246965),
  b = n(703656),
  g = n(706454),
  O = n(933429),
  N = n(395361),
  I = n(626135),
  C = n(243778),
  T = n(921944),
  S = n(981631),
  y = n(801461),
  v = n(474936),
  P = n(388032),
  R = n(24060);
let A = e => {
  let {
    dismissibleContent: t,
    noticeType: A
  } = e, x = (0, i.e7)([O.ZP], () => O.ZP.getNotice()), j = (0, i.e7)([g.default], () => g.default.locale);
  return (0, r.jsx)(C.ZP, {
    contentTypes: [t],
    groupName: T.R.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      switch (t) {
        case o.z.NAGBAR_NOTICE_DOWNLOAD:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.DEFAULT,
            children: [(0, r.jsx)(l.RyX, {
              onClick: () => i(T.L.UNKNOWN),
              noticeType: A
            }), P.NW.string(P.t["+xn1o6"]), (0, r.jsx)("i", {
              className: R.iconApple
            }), (0, r.jsx)("i", {
              className: R.iconAndroid
            }), (0, r.jsx)("i", {
              className: R.iconWindows
            }), (0, r.jsx)(l.NoS, {
              noticeType: A,
              onClick: () => {
                (0, l.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.resolve().then(n.bind(n, 431583));
                  return t => (0, r.jsx)(e, function(e) {
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
                  }({
                    source: "Top Bar Nag"
                  }, t))
                })
              },
              children: P.NW.string(P.t["1WjMbG"])
            })]
          });
        case o.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.SPOTIFY,
            children: [(0, r.jsx)(l.RyX, {
              onClick: () => i(T.L.UNKNOWN),
              noticeType: A
            }), (0, r.jsx)(N.Z, {
              className: R.platformIcon
            }), P.NW.string(P.t["5NUVHB"]), (0, r.jsx)(l.NoS, {
              onClick: () => (0, d.Z)({
                platformType: S.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: A,
              children: P.NW.string(P.t.S0W8Z2)
            })]
          });
        case o.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.PLAYSTATION,
            children: [(0, r.jsx)(l.RyX, {
              onClick: () => i(T.L.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: R.platformIcon,
              src: c.Z.get(S.ABu.PLAYSTATION).icon.whiteSVG
            }), P.NW.string(P.t.WHWgoa), (0, r.jsx)(l.EyT, {
              onClick: () => (0, d.Z)({
                platformType: S.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: P.NW.string(P.t.S0W8Z2)
            })]
          });
        case o.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.DEFAULT,
            children: [(0, r.jsx)(l.RyX, {
              onClick: () => i(T.L.UNKNOWN),
              noticeType: A
            }), P.NW.string(P.t.B2hnhY), (0, r.jsx)(l.NoS, {
              onClick: () => s.Z.open(S.oAB.ACCOUNT),
              noticeType: A,
              children: P.NW.string(P.t["50KYxs"])
            })]
          });
        case o.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: R.premiumLogo
            }), (0, r.jsx)("span", {
              className: R.premiumText,
              children: P.NW.string(P.t["+urf7+"])
            }), (0, r.jsx)(l.NoS, {
              className: R.premiumAction,
              noticeType: A,
              onClick: () => {
                I.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: S.jXE.NOTIFICATION_BAR,
                  location_object: S.qAy.BUTTON_CTA
                }), s.Z.open(S.oAB.PREMIUM)
              },
              children: P.NW.string(P.t["8JC5e3"])
            }), (0, r.jsx)(l.RyX, {
              onClick: () => {
                i(T.L.UNKNOWN), (0, a.mB)(S.xW$.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: A
            })]
          });
        case o.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(h.Z, {
            dismissCurrentNotice: () => i(T.L.UNKNOWN),
            subscriptionTier: v.Si.TIER_2
          });
        case o.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(h.Z, {
            dismissCurrentNotice: () => i(T.L.UNKNOWN),
            subscriptionTier: v.Si.TIER_0
          });
        case o.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(l.RyX, {
              noticeType: A,
              onClick: () => i(T.L.UNKNOWN)
            }), P.NW.string(P.t["0KFB2N"]), (0, r.jsx)(l.NoS, {
              noticeType: A,
              onClick: () => {
                i(T.L.UNKNOWN), s.Z.open(S.oAB.PREMIUM)
              },
              children: P.NW.string(P.t.pyYSiI)
            })]
          });
        case o.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, r.jsx)(m.Z, {
            notice: x,
            noticeType: A,
            dismissCurrentNotice: () => i(T.L.UNKNOWN)
          });
        case o.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.DANGER,
            children: [(0, r.jsx)(l.RyX, {
              onClick: () => i(T.L.UNKNOWN),
              noticeType: A
            }), P.NW.string(P.t["7490vb"]), (0, r.jsx)(l.NoS, {
              noticeType: A,
              onClick: () => {
                (0, b.uL)(S.Z5c.SETTINGS("account"))
              },
              children: P.NW.string(P.t.Vm8akJ)
            })]
          });
        case o.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let g = _.Z.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.DEFAULT,
            children: [(0, r.jsx)(l.RyX, {
              onClick: () => i(T.L.UNKNOWN),
              noticeType: A
            }), P.NW.string(P.t.pJ4hJC), (0, r.jsx)(l.NoS, {
              noticeType: A,
              onClick: () => {
                i(T.L.PRIMARY), (0, b.uL)(1 === g.length ? S.Z5c.GUILD_SETTINGS(g[0], "role-subscriptions") : S.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: P.NW.string(P.t["74s74O"])
            })]
          });
        case o.z.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.WARNING,
            children: [(0, r.jsx)(l.RyX, {
              onClick: () => i(T.L.UNKNOWN),
              noticeType: A
            }), P.NW.format(P.t.pdYZys, {}), (0, r.jsx)(l.NoS, {
              onClick: () => (0, f.Z)(y.Kq.NOTICE),
              noticeType: A,
              children: P.NW.string(P.t.LhlgY2)
            })]
          });
        case o.z.UU_MIGRATION_NOTICE:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.WARNING,
            children: [(0, r.jsx)(l.RyX, {
              onClick: () => i(T.L.UNKNOWN),
              noticeType: A
            }), P.NW.format(P.t.zT1hgo, {
              date: (0, E.IE)(j)
            }), (0, r.jsx)(l.NoS, {
              onClick: () => (0, f.Z)(y.Kq.NOTICE),
              noticeType: A,
              children: P.NW.string(P.t.LhlgY2)
            })]
          });
        case o.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(l.qXd, {
            color: l.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(l.RyX, {
              onClick: () => i(T.L.UNKNOWN),
              noticeType: A
            }), P.NW.string(P.t["O9GI+v"]), (0, r.jsx)(l.NoS, {
              onClick: () => {
                (0, p.Z)({
                  subscriptionTier: v.Si.TIER_2,
                  analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: S.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => i(T.L.UNKNOWN)
                })
              },
              noticeType: A,
              children: P.NW.string(P.t.Zi69Dw)
            })]
          })
      }
    }
  })
}