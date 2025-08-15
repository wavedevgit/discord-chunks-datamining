/** Chunk was on 31253 **/
/** chunk id: 749277, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk230711 = require("./230711.js"),
  Chunk726542 = require("./726542.js"),
  Chunk100527 = require("./100527.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk674525 = require("./674525.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk303172 = require("./303172.jsx"),
  Chunk246965 = require("./246965.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk395361 = require("./395361.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk981631 = require("./981631.js"),
  Chunk801461 = require("./801461.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50953 = require("./50953.js");
let b = e => {
  let {
    dismissibleContent: t,
    noticeType: b
  } = e, y = (0, i.e7)([S.default], () => S.default.getCurrentUser()), h = (0, i.e7)([N.Z], () => N.Z.getGuildId());
  return (0, r.jsx)(f.ZP, {
    contentTypes: [t],
    groupName: A.R.NOTICE_BAR,
    bypassAutoDismiss: true,
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
              onClick: () => i(A.L.UNKNOWN),
              noticeType: b
            }), P.intl.string(P.t["+xn1o6"]), (0, r.jsx)("i", {
              className: D.iconApple
            }), (0, r.jsx)("i", {
              className: D.iconAndroid
            }), (0, r.jsx)("i", {
              className: D.iconWindows
            }), (0, r.jsx)(o.NoS, {
              noticeType: b,
              onClick: () => {
                (0, o.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
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
                          enumerable: true,
                          configurable: true,
                          writable: true
                        }) : e[t] = r
                      })
                    }
                    return e
                  }({
                    source: "Top Bar Nag"
                  }, t))
                })
              },
              children: P.intl.string(P.t["1WjMbG"])
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.SPOTIFY,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(A.L.UNKNOWN),
              noticeType: b
            }), (0, r.jsx)(p.Z, {
              className: D.platformIcon
            }), P.intl.string(P.t["5NUVHB"]), (0, r.jsx)(o.NoS, {
              onClick: () => (0, _.Z)({
                platformType: C.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: b,
              children: P.intl.string(P.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PLAYSTATION,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(A.L.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: D.platformIcon,
              src: s.Z.get(C.ABu.PLAYSTATION).icon.whiteSVG
            }), P.intl.string(P.t.WHWgoa), (0, r.jsx)(o.EyT, {
              onClick: () => (0, _.Z)({
                platformType: C.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: P.intl.string(P.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(A.L.UNKNOWN),
              noticeType: b
            }), P.intl.string(P.t.B2hnhY), (0, r.jsx)(o.NoS, {
              onClick: () => c.Z.open(C.oAB.ACCOUNT),
              noticeType: b,
              children: P.intl.string(P.t["50KYxs"])
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: D.premiumLogo
            }), (0, r.jsx)("span", {
              className: D.premiumText,
              children: P.intl.string(P.t["+urf7+"])
            }), (0, r.jsx)(o.NoS, {
              className: D.premiumAction,
              noticeType: b,
              onClick: () => {
                R.default.track(C.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: C.jXE.NOTIFICATION_BAR,
                  location_object: C.qAy.BUTTON_CTA
                }), c.Z.open(C.oAB.PREMIUM)
              },
              children: P.intl.string(P.t["8JC5e3"])
            }), (0, r.jsx)(o.RyX, {
              onClick: () => {
                i(A.L.UNKNOWN), (0, a.mB)(C.xW$.PREMIUM_PROMO_DISMISSED, true)
              },
              noticeType: b
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(T.Z, {
            dismissCurrentNotice: () => i(A.L.UNKNOWN),
            subscriptionTier: g.Si.TIER_2
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(T.Z, {
            dismissCurrentNotice: () => i(A.L.UNKNOWN),
            subscriptionTier: g.Si.TIER_0
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              noticeType: b,
              onClick: () => i(A.L.UNKNOWN)
            }), P.intl.string(P.t["0KFB2N"]), (0, r.jsx)(o.NoS, {
              noticeType: b,
              onClick: () => {
                i(A.L.UNKNOWN), c.Z.open(C.oAB.PREMIUM)
              },
              children: P.intl.string(P.t.pyYSiI)
            })]
          });
        case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DANGER,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(A.L.UNKNOWN),
              noticeType: b
            }), P.intl.string(P.t["7490vb"]), (0, r.jsx)(o.NoS, {
              noticeType: b,
              onClick: () => {
                (0, O.uL)(C.Z5c.SETTINGS("account"))
              },
              children: P.intl.string(P.t.Vm8akJ)
            })]
          });
        case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let N = d.Z.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(A.L.UNKNOWN),
              noticeType: b
            }), P.intl.string(P.t.pJ4hJC), (0, r.jsx)(o.NoS, {
              noticeType: b,
              onClick: () => {
                i(A.L.PRIMARY), (0, O.uL)(1 === N.length ? C.Z5c.GUILD_SETTINGS(N[0], "role-subscriptions") : C.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", true, "server-subscriptions-finish-setting-up"))
              },
              children: P.intl.string(P.t["74s74O"])
            })]
          });
        case l.z.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(A.L.UNKNOWN),
              noticeType: b
            }), P.intl.format(P.t.pdYZys, {}), (0, r.jsx)(o.NoS, {
              onClick: () => (0, I.Z)(m.Kq.NOTICE),
              noticeType: b,
              children: P.intl.string(P.t.LhlgY2)
            })]
          });
        case l.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(A.L.UNKNOWN),
              noticeType: b
            }), P.intl.string(P.t["O9GI+v"]), (0, r.jsx)(o.NoS, {
              onClick: () => {
                (0, E.Z)({
                  subscriptionTier: g.Si.TIER_2,
                  analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: C.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => i(A.L.UNKNOWN)
                })
              },
              noticeType: b,
              children: P.intl.string(P.t.Zi69Dw)
            })]
          });
        case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.BRAND,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(A.L.USER_DISMISS),
              noticeType: C.kVF.REPORT_TO_MOD_SURVEY
            }), P.intl.string(P.t["Aa+l7e"]), (0, r.jsx)(o.NoS, {
              onClick: () => {
                window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id=".concat(null == y ? true : y.id, "&guild_id=").concat(h), "_blank"), i(A.L.TAKE_ACTION)
              },
              noticeType: C.kVF.REPORT_TO_MOD_SURVEY,
              children: P.intl.string(P.t["iT+wQ0"])
            })]
          })
      }
    }
  })
}