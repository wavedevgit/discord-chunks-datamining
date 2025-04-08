/** Chunk was on 84466 **/
n.d(t, {
  A: () => U
});
var r = n(200651);
n(192379);
var i = n(442837),
  l = n(704215),
  o = n(481060),
  a = n(232567),
  s = n(230711),
  c = n(726542),
  u = n(100527),
  E = n(231757),
  d = n(674525),
  _ = n(963249),
  N = n(346585),
  I = n(303172),
  T = n(463230),
  O = n(246965),
  S = n(703656),
  P = n(706454),
  A = n(933429),
  R = n(395361),
  p = n(626135),
  C = n(243778),
  D = n(921944),
  f = n(981631),
  m = n(801461),
  g = n(474936),
  h = n(388032),
  y = n(131715);
let U = e => {
  let {
    dismissibleContent: t,
    noticeType: U
  } = e, k = (0, i.e7)([A.ZP], () => A.ZP.getNotice()), b = (0, i.e7)([P.default], () => P.default.locale);
  return (0, r.jsx)(C.ZP, {
    contentTypes: [t],
    groupName: D.R.NOTICE_BAR,
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
              onClick: () => i(D.L.UNKNOWN),
              noticeType: U
            }), h.NW.string(h.t["+xn1o6"]), (0, r.jsx)("i", {
              className: y.iconApple
            }), (0, r.jsx)("i", {
              className: y.iconAndroid
            }), (0, r.jsx)("i", {
              className: y.iconWindows
            }), (0, r.jsx)(o.NoS, {
              noticeType: U,
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
              children: h.NW.string(h.t["1WjMbG"])
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.SPOTIFY,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(D.L.UNKNOWN),
              noticeType: U
            }), (0, r.jsx)(R.Z, {
              className: y.platformIcon
            }), h.NW.string(h.t["5NUVHB"]), (0, r.jsx)(o.NoS, {
              onClick: () => (0, E.Z)({
                platformType: f.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: U,
              children: h.NW.string(h.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PLAYSTATION,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(D.L.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: y.platformIcon,
              src: c.Z.get(f.ABu.PLAYSTATION).icon.whiteSVG
            }), h.NW.string(h.t.WHWgoa), (0, r.jsx)(o.EyT, {
              onClick: () => (0, E.Z)({
                platformType: f.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: h.NW.string(h.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(D.L.UNKNOWN),
              noticeType: U
            }), h.NW.string(h.t.B2hnhY), (0, r.jsx)(o.NoS, {
              onClick: () => s.Z.open(f.oAB.ACCOUNT),
              noticeType: U,
              children: h.NW.string(h.t["50KYxs"])
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: y.premiumLogo
            }), (0, r.jsx)("span", {
              className: y.premiumText,
              children: h.NW.string(h.t["+urf7+"])
            }), (0, r.jsx)(o.NoS, {
              className: y.premiumAction,
              noticeType: U,
              onClick: () => {
                p.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: f.jXE.NOTIFICATION_BAR,
                  location_object: f.qAy.BUTTON_CTA
                }), s.Z.open(f.oAB.PREMIUM)
              },
              children: h.NW.string(h.t["8JC5e3"])
            }), (0, r.jsx)(o.RyX, {
              onClick: () => {
                i(D.L.UNKNOWN), (0, a.mB)(f.xW$.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: U
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(O.Z, {
            dismissCurrentNotice: () => i(D.L.UNKNOWN),
            subscriptionTier: g.Si.TIER_2
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(O.Z, {
            dismissCurrentNotice: () => i(D.L.UNKNOWN),
            subscriptionTier: g.Si.TIER_0
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              noticeType: U,
              onClick: () => i(D.L.UNKNOWN)
            }), h.NW.string(h.t["0KFB2N"]), (0, r.jsx)(o.NoS, {
              noticeType: U,
              onClick: () => {
                i(D.L.UNKNOWN), s.Z.open(f.oAB.PREMIUM)
              },
              children: h.NW.string(h.t.pyYSiI)
            })]
          });
        case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, r.jsx)(T.Z, {
            notice: k,
            noticeType: U,
            dismissCurrentNotice: () => i(D.L.UNKNOWN)
          });
        case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DANGER,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(D.L.UNKNOWN),
              noticeType: U
            }), h.NW.string(h.t["7490vb"]), (0, r.jsx)(o.NoS, {
              noticeType: U,
              onClick: () => {
                (0, S.uL)(f.Z5c.SETTINGS("account"))
              },
              children: h.NW.string(h.t.Vm8akJ)
            })]
          });
        case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let P = d.Z.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(D.L.UNKNOWN),
              noticeType: U
            }), h.NW.string(h.t.pJ4hJC), (0, r.jsx)(o.NoS, {
              noticeType: U,
              onClick: () => {
                i(D.L.PRIMARY), (0, S.uL)(1 === P.length ? f.Z5c.GUILD_SETTINGS(P[0], "role-subscriptions") : f.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: h.NW.string(h.t["74s74O"])
            })]
          });
        case l.z.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(D.L.UNKNOWN),
              noticeType: U
            }), h.NW.format(h.t.pdYZys, {}), (0, r.jsx)(o.NoS, {
              onClick: () => (0, I.Z)(m.Kq.NOTICE),
              noticeType: U,
              children: h.NW.string(h.t.LhlgY2)
            })]
          });
        case l.z.UU_MIGRATION_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(D.L.UNKNOWN),
              noticeType: U
            }), h.NW.format(h.t.zT1hgo, {
              date: (0, N.IE)(b)
            }), (0, r.jsx)(o.NoS, {
              onClick: () => (0, I.Z)(m.Kq.NOTICE),
              noticeType: U,
              children: h.NW.string(h.t.LhlgY2)
            })]
          });
        case l.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(D.L.UNKNOWN),
              noticeType: U
            }), h.NW.string(h.t["O9GI+v"]), (0, r.jsx)(o.NoS, {
              onClick: () => {
                (0, _.Z)({
                  subscriptionTier: g.Si.TIER_2,
                  analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: f.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => i(D.L.UNKNOWN)
                })
              },
              noticeType: U,
              children: h.NW.string(h.t.Zi69Dw)
            })]
          })
      }
    }
  })
}