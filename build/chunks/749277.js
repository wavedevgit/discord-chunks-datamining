/** Chunk was on 40247 **/
n.d(t, {
  A: () => b
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
  O = n(463230),
  T = n(246965),
  S = n(703656),
  p = n(706454),
  P = n(933429),
  A = n(395361),
  R = n(626135),
  C = n(243778),
  f = n(921944),
  m = n(981631),
  D = n(801461),
  g = n(474936),
  y = n(388032),
  h = n(24060);
let b = e => {
  let {
    dismissibleContent: t,
    noticeType: b
  } = e, U = (0, i.e7)([P.ZP], () => P.ZP.getNotice()), k = (0, i.e7)([p.default], () => p.default.locale);
  return (0, r.jsx)(C.ZP, {
    contentTypes: [t],
    groupName: f.R.NOTICE_BAR,
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
              onClick: () => i(f.L.UNKNOWN),
              noticeType: b
            }), y.NW.string(y.t["+xn1o6"]), (0, r.jsx)("i", {
              className: h.iconApple
            }), (0, r.jsx)("i", {
              className: h.iconAndroid
            }), (0, r.jsx)("i", {
              className: h.iconWindows
            }), (0, r.jsx)(o.NoS, {
              noticeType: b,
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
              children: y.NW.string(y.t["1WjMbG"])
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.SPOTIFY,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(f.L.UNKNOWN),
              noticeType: b
            }), (0, r.jsx)(A.Z, {
              className: h.platformIcon
            }), y.NW.string(y.t["5NUVHB"]), (0, r.jsx)(o.NoS, {
              onClick: () => (0, E.Z)({
                platformType: m.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: b,
              children: y.NW.string(y.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PLAYSTATION,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(f.L.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: h.platformIcon,
              src: c.Z.get(m.ABu.PLAYSTATION).icon.whiteSVG
            }), y.NW.string(y.t.WHWgoa), (0, r.jsx)(o.EyT, {
              onClick: () => (0, E.Z)({
                platformType: m.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: y.NW.string(y.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(f.L.UNKNOWN),
              noticeType: b
            }), y.NW.string(y.t.B2hnhY), (0, r.jsx)(o.NoS, {
              onClick: () => s.Z.open(m.oAB.ACCOUNT),
              noticeType: b,
              children: y.NW.string(y.t["50KYxs"])
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: h.premiumLogo
            }), (0, r.jsx)("span", {
              className: h.premiumText,
              children: y.NW.string(y.t["+urf7+"])
            }), (0, r.jsx)(o.NoS, {
              className: h.premiumAction,
              noticeType: b,
              onClick: () => {
                R.default.track(m.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: m.jXE.NOTIFICATION_BAR,
                  location_object: m.qAy.BUTTON_CTA
                }), s.Z.open(m.oAB.PREMIUM)
              },
              children: y.NW.string(y.t["8JC5e3"])
            }), (0, r.jsx)(o.RyX, {
              onClick: () => {
                i(f.L.UNKNOWN), (0, a.mB)(m.xW$.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: b
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(T.Z, {
            dismissCurrentNotice: () => i(f.L.UNKNOWN),
            subscriptionTier: g.Si.TIER_2
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(T.Z, {
            dismissCurrentNotice: () => i(f.L.UNKNOWN),
            subscriptionTier: g.Si.TIER_0
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              noticeType: b,
              onClick: () => i(f.L.UNKNOWN)
            }), y.NW.string(y.t["0KFB2N"]), (0, r.jsx)(o.NoS, {
              noticeType: b,
              onClick: () => {
                i(f.L.UNKNOWN), s.Z.open(m.oAB.PREMIUM)
              },
              children: y.NW.string(y.t.pyYSiI)
            })]
          });
        case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, r.jsx)(O.Z, {
            notice: U,
            noticeType: b,
            dismissCurrentNotice: () => i(f.L.UNKNOWN)
          });
        case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DANGER,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(f.L.UNKNOWN),
              noticeType: b
            }), y.NW.string(y.t["7490vb"]), (0, r.jsx)(o.NoS, {
              noticeType: b,
              onClick: () => {
                (0, S.uL)(m.Z5c.SETTINGS("account"))
              },
              children: y.NW.string(y.t.Vm8akJ)
            })]
          });
        case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let p = d.Z.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(f.L.UNKNOWN),
              noticeType: b
            }), y.NW.string(y.t.pJ4hJC), (0, r.jsx)(o.NoS, {
              noticeType: b,
              onClick: () => {
                i(f.L.PRIMARY), (0, S.uL)(1 === p.length ? m.Z5c.GUILD_SETTINGS(p[0], "role-subscriptions") : m.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: y.NW.string(y.t["74s74O"])
            })]
          });
        case l.z.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(f.L.UNKNOWN),
              noticeType: b
            }), y.NW.format(y.t.pdYZys, {}), (0, r.jsx)(o.NoS, {
              onClick: () => (0, I.Z)(D.Kq.NOTICE),
              noticeType: b,
              children: y.NW.string(y.t.LhlgY2)
            })]
          });
        case l.z.UU_MIGRATION_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(f.L.UNKNOWN),
              noticeType: b
            }), y.NW.format(y.t.zT1hgo, {
              date: (0, N.IE)(k)
            }), (0, r.jsx)(o.NoS, {
              onClick: () => (0, I.Z)(D.Kq.NOTICE),
              noticeType: b,
              children: y.NW.string(y.t.LhlgY2)
            })]
          });
        case l.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(f.L.UNKNOWN),
              noticeType: b
            }), y.NW.string(y.t["O9GI+v"]), (0, r.jsx)(o.NoS, {
              onClick: () => {
                (0, _.Z)({
                  subscriptionTier: g.Si.TIER_2,
                  analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: m.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => i(f.L.UNKNOWN)
                })
              },
              noticeType: b,
              children: y.NW.string(y.t.Zi69Dw)
            })]
          })
      }
    }
  })
}