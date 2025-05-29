/** Chunk was on 90202 **/
n.d(t, {
  A: () => M
});
var r = n(255367);
n(73800);
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
  I = n(346585),
  O = n(303172),
  T = n(463230),
  N = n(246965),
  S = n(703656),
  p = n(706454),
  R = n(914010),
  A = n(594174),
  P = n(933429),
  f = n(395361),
  C = n(626135),
  D = n(243778),
  m = n(921944),
  h = n(981631),
  y = n(801461),
  g = n(474936),
  U = n(388032),
  b = n(131715);
let M = e => {
  let {
    dismissibleContent: t,
    noticeType: M
  } = e, k = (0, i.e7)([P.ZP], () => P.ZP.getNotice()), Z = (0, i.e7)([p.default], () => p.default.locale), j = (0, i.e7)([A.default], () => A.default.getCurrentUser()), v = (0, i.e7)([R.Z], () => R.Z.getGuildId());
  return (0, r.jsx)(D.ZP, {
    contentTypes: [t],
    groupName: m.R.NOTICE_BAR,
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
              onClick: () => i(m.L.UNKNOWN),
              noticeType: M
            }), U.intl.string(U.t["+xn1o6"]), (0, r.jsx)("i", {
              className: b.iconApple
            }), (0, r.jsx)("i", {
              className: b.iconAndroid
            }), (0, r.jsx)("i", {
              className: b.iconWindows
            }), (0, r.jsx)(o.NoS, {
              noticeType: M,
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
              children: U.intl.string(U.t["1WjMbG"])
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.SPOTIFY,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(m.L.UNKNOWN),
              noticeType: M
            }), (0, r.jsx)(f.Z, {
              className: b.platformIcon
            }), U.intl.string(U.t["5NUVHB"]), (0, r.jsx)(o.NoS, {
              onClick: () => (0, E.Z)({
                platformType: h.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: M,
              children: U.intl.string(U.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PLAYSTATION,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(m.L.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: b.platformIcon,
              src: c.Z.get(h.ABu.PLAYSTATION).icon.whiteSVG
            }), U.intl.string(U.t.WHWgoa), (0, r.jsx)(o.EyT, {
              onClick: () => (0, E.Z)({
                platformType: h.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: U.intl.string(U.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(m.L.UNKNOWN),
              noticeType: M
            }), U.intl.string(U.t.B2hnhY), (0, r.jsx)(o.NoS, {
              onClick: () => s.Z.open(h.oAB.ACCOUNT),
              noticeType: M,
              children: U.intl.string(U.t["50KYxs"])
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: b.premiumLogo
            }), (0, r.jsx)("span", {
              className: b.premiumText,
              children: U.intl.string(U.t["+urf7+"])
            }), (0, r.jsx)(o.NoS, {
              className: b.premiumAction,
              noticeType: M,
              onClick: () => {
                C.default.track(h.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: h.jXE.NOTIFICATION_BAR,
                  location_object: h.qAy.BUTTON_CTA
                }), s.Z.open(h.oAB.PREMIUM)
              },
              children: U.intl.string(U.t["8JC5e3"])
            }), (0, r.jsx)(o.RyX, {
              onClick: () => {
                i(m.L.UNKNOWN), (0, a.mB)(h.xW$.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: M
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(N.Z, {
            dismissCurrentNotice: () => i(m.L.UNKNOWN),
            subscriptionTier: g.Si.TIER_2
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(N.Z, {
            dismissCurrentNotice: () => i(m.L.UNKNOWN),
            subscriptionTier: g.Si.TIER_0
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              noticeType: M,
              onClick: () => i(m.L.UNKNOWN)
            }), U.intl.string(U.t["0KFB2N"]), (0, r.jsx)(o.NoS, {
              noticeType: M,
              onClick: () => {
                i(m.L.UNKNOWN), s.Z.open(h.oAB.PREMIUM)
              },
              children: U.intl.string(U.t.pyYSiI)
            })]
          });
        case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, r.jsx)(T.Z, {
            notice: k,
            noticeType: M,
            dismissCurrentNotice: () => i(m.L.UNKNOWN)
          });
        case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DANGER,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(m.L.UNKNOWN),
              noticeType: M
            }), U.intl.string(U.t["7490vb"]), (0, r.jsx)(o.NoS, {
              noticeType: M,
              onClick: () => {
                (0, S.uL)(h.Z5c.SETTINGS("account"))
              },
              children: U.intl.string(U.t.Vm8akJ)
            })]
          });
        case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let p = d.Z.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(m.L.UNKNOWN),
              noticeType: M
            }), U.intl.string(U.t.pJ4hJC), (0, r.jsx)(o.NoS, {
              noticeType: M,
              onClick: () => {
                i(m.L.PRIMARY), (0, S.uL)(1 === p.length ? h.Z5c.GUILD_SETTINGS(p[0], "role-subscriptions") : h.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: U.intl.string(U.t["74s74O"])
            })]
          });
        case l.z.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(m.L.UNKNOWN),
              noticeType: M
            }), U.intl.format(U.t.pdYZys, {}), (0, r.jsx)(o.NoS, {
              onClick: () => (0, O.Z)(y.Kq.NOTICE),
              noticeType: M,
              children: U.intl.string(U.t.LhlgY2)
            })]
          });
        case l.z.UU_MIGRATION_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(m.L.UNKNOWN),
              noticeType: M
            }), U.intl.format(U.t.zT1hgo, {
              date: (0, I.IE)(Z)
            }), (0, r.jsx)(o.NoS, {
              onClick: () => (0, O.Z)(y.Kq.NOTICE),
              noticeType: M,
              children: U.intl.string(U.t.LhlgY2)
            })]
          });
        case l.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(m.L.UNKNOWN),
              noticeType: M
            }), U.intl.string(U.t["O9GI+v"]), (0, r.jsx)(o.NoS, {
              onClick: () => {
                (0, _.Z)({
                  subscriptionTier: g.Si.TIER_2,
                  analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: h.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => i(m.L.UNKNOWN)
                })
              },
              noticeType: M,
              children: U.intl.string(U.t.Zi69Dw)
            })]
          });
        case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.BRAND,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(m.L.USER_DISMISS),
              noticeType: h.kVF.REPORT_TO_MOD_SURVEY
            }), U.intl.string(U.t["Aa+l7e"]), (0, r.jsx)(o.NoS, {
              onClick: () => {
                window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id=".concat(null == j ? void 0 : j.id, "&guild_id=").concat(v), "_blank"), i(m.L.TAKE_ACTION)
              },
              noticeType: h.kVF.REPORT_TO_MOD_SURVEY,
              children: U.intl.string(U.t["iT+wQ0"])
            })]
          })
      }
    }
  })
}