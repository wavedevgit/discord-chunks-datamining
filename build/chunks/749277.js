/** Chunk was on 49750 **/
n.d(t, {
  A: () => v
});
var r = n(200651);
n(192379);
var i = n(442837),
  l = n(704215),
  o = n(481060),
  s = n(232567),
  a = n(230711),
  c = n(726542),
  u = n(100527),
  d = n(231757),
  _ = n(674525),
  E = n(963249),
  p = n(346585),
  m = n(303172),
  h = n(463230),
  f = n(246965),
  g = n(703656),
  N = n(706454),
  O = n(933429),
  I = n(395361),
  b = n(626135),
  T = n(243778),
  C = n(921944),
  S = n(981631),
  y = n(801461),
  P = n(474936),
  R = n(388032),
  A = n(24060);
let v = e => {
  let {
    dismissibleContent: t,
    noticeType: v
  } = e, x = (0, i.e7)([O.ZP], () => O.ZP.getNotice()), D = (0, i.e7)([N.default], () => N.default.locale);
  return (0, r.jsx)(T.ZP, {
    contentTypes: [t],
    groupName: C.R.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      switch (t) {
        case l.z.NAGBAR_NOTICE_DOWNLOAD:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(C.L.UNKNOWN),
              noticeType: v
            }), R.NW.string(R.t["+xn1o6"]), (0, r.jsx)("i", {
              className: A.iconApple
            }), (0, r.jsx)("i", {
              className: A.iconAndroid
            }), (0, r.jsx)("i", {
              className: A.iconWindows
            }), (0, r.jsx)(o.NoS, {
              noticeType: v,
              onClick: () => {
                (0, o.ZDy)(async () => {
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
              children: R.NW.string(R.t["1WjMbG"])
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.SPOTIFY,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(C.L.UNKNOWN),
              noticeType: v
            }), (0, r.jsx)(I.Z, {
              className: A.platformIcon
            }), R.NW.string(R.t["5NUVHB"]), (0, r.jsx)(o.NoS, {
              onClick: () => (0, d.Z)({
                platformType: S.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: v,
              children: R.NW.string(R.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PLAYSTATION,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(C.L.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: A.platformIcon,
              src: c.Z.get(S.ABu.PLAYSTATION).icon.whiteSVG
            }), R.NW.string(R.t.WHWgoa), (0, r.jsx)(o.EyT, {
              onClick: () => (0, d.Z)({
                platformType: S.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: R.NW.string(R.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(C.L.UNKNOWN),
              noticeType: v
            }), R.NW.string(R.t.B2hnhY), (0, r.jsx)(o.NoS, {
              onClick: () => a.Z.open(S.oAB.ACCOUNT),
              noticeType: v,
              children: R.NW.string(R.t["50KYxs"])
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: A.premiumLogo
            }), (0, r.jsx)("span", {
              className: A.premiumText,
              children: R.NW.string(R.t["+urf7+"])
            }), (0, r.jsx)(o.NoS, {
              className: A.premiumAction,
              noticeType: v,
              onClick: () => {
                b.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: S.jXE.NOTIFICATION_BAR,
                  location_object: S.qAy.BUTTON_CTA
                }), a.Z.open(S.oAB.PREMIUM)
              },
              children: R.NW.string(R.t["8JC5e3"])
            }), (0, r.jsx)(o.RyX, {
              onClick: () => {
                i(C.L.UNKNOWN), (0, s.mB)(S.xW$.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: v
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(f.Z, {
            dismissCurrentNotice: () => i(C.L.UNKNOWN),
            subscriptionTier: P.Si.TIER_2
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(f.Z, {
            dismissCurrentNotice: () => i(C.L.UNKNOWN),
            subscriptionTier: P.Si.TIER_0
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              noticeType: v,
              onClick: () => i(C.L.UNKNOWN)
            }), R.NW.string(R.t["0KFB2N"]), (0, r.jsx)(o.NoS, {
              noticeType: v,
              onClick: () => {
                i(C.L.UNKNOWN), a.Z.open(S.oAB.PREMIUM)
              },
              children: R.NW.string(R.t.pyYSiI)
            })]
          });
        case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, r.jsx)(h.Z, {
            notice: x,
            noticeType: v,
            dismissCurrentNotice: () => i(C.L.UNKNOWN)
          });
        case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DANGER,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(C.L.UNKNOWN),
              noticeType: v
            }), R.NW.string(R.t["7490vb"]), (0, r.jsx)(o.NoS, {
              noticeType: v,
              onClick: () => {
                (0, g.uL)(S.Z5c.SETTINGS("account"))
              },
              children: R.NW.string(R.t.Vm8akJ)
            })]
          });
        case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let N = _.Z.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(C.L.UNKNOWN),
              noticeType: v
            }), R.NW.string(R.t.pJ4hJC), (0, r.jsx)(o.NoS, {
              noticeType: v,
              onClick: () => {
                i(C.L.PRIMARY), (0, g.uL)(1 === N.length ? S.Z5c.GUILD_SETTINGS(N[0], "role-subscriptions") : S.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: R.NW.string(R.t["74s74O"])
            })]
          });
        case l.z.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(C.L.UNKNOWN),
              noticeType: v
            }), R.NW.format(R.t.pdYZys, {}), (0, r.jsx)(o.NoS, {
              onClick: () => (0, m.Z)(y.Kq.NOTICE),
              noticeType: v,
              children: R.NW.string(R.t.LhlgY2)
            })]
          });
        case l.z.UU_MIGRATION_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(C.L.UNKNOWN),
              noticeType: v
            }), R.NW.format(R.t.zT1hgo, {
              date: (0, p.IE)(D)
            }), (0, r.jsx)(o.NoS, {
              onClick: () => (0, m.Z)(y.Kq.NOTICE),
              noticeType: v,
              children: R.NW.string(R.t.LhlgY2)
            })]
          });
        case l.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(C.L.UNKNOWN),
              noticeType: v
            }), R.NW.string(R.t["O9GI+v"]), (0, r.jsx)(o.NoS, {
              onClick: () => {
                (0, E.Z)({
                  subscriptionTier: P.Si.TIER_2,
                  analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: S.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => i(C.L.UNKNOWN)
                })
              },
              noticeType: v,
              children: R.NW.string(R.t.Zi69Dw)
            })]
          })
      }
    }
  })
}