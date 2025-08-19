/** Chunk was on 11868 **/
/** chunk id: 749277, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
let y = e => {
  let {
    dismissibleContent: t,
    noticeType: y
  } = e, h = (0, i.e7)([N.default], () => N.default.getCurrentUser()), b = (0, i.e7)([p.Z], () => p.Z.getGuildId());
  return (0, r.jsx)(m.ZP, {
    contentTypes: [t],
    groupName: R.R.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      switch (t) {
        case l.z.NAGBAR_NOTICE_DOWNLOAD:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.DEFAULT,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => i(R.L.UNKNOWN),
              noticeType: y
            }), C.intl.string(C.t["+xn1o6"]), (0, r.jsx)("i", {
              className: D.iconApple
            }), (0, r.jsx)("i", {
              className: D.iconAndroid
            }), (0, r.jsx)("i", {
              className: D.iconWindows
            }), (0, r.jsx)(a.NoS, {
              noticeType: y,
              onClick: () => {
                (0, a.ZDy)(async () => {
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
              children: C.intl.string(C.t["1WjMbG"])
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.SPOTIFY,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => i(R.L.UNKNOWN),
              noticeType: y
            }), (0, r.jsx)(f.Z, {
              className: D.platformIcon
            }), C.intl.string(C.t["5NUVHB"]), (0, r.jsx)(a.NoS, {
              onClick: () => (0, d.Z)({
                platformType: A.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: y,
              children: C.intl.string(C.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.PLAYSTATION,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => i(R.L.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: D.platformIcon,
              src: s.Z.get(A.ABu.PLAYSTATION).icon.whiteSVG
            }), C.intl.string(C.t.WHWgoa), (0, r.jsx)(a.EyT, {
              onClick: () => (0, d.Z)({
                platformType: A.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: C.intl.string(C.t.S0W8Z2)
            })]
          });
        case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.DEFAULT,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => i(R.L.UNKNOWN),
              noticeType: y
            }), C.intl.string(C.t.B2hnhY), (0, r.jsx)(a.NoS, {
              onClick: () => c.Z.open(A.oAB.ACCOUNT),
              noticeType: y,
              children: C.intl.string(C.t["50KYxs"])
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: D.premiumLogo
            }), (0, r.jsx)("span", {
              className: D.premiumText,
              children: C.intl.string(C.t["+urf7+"])
            }), (0, r.jsx)(a.NoS, {
              className: D.premiumAction,
              noticeType: y,
              onClick: () => {
                S.default.track(A.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: A.jXE.NOTIFICATION_BAR,
                  location_object: A.qAy.BUTTON_CTA
                }), c.Z.open(A.oAB.PREMIUM)
              },
              children: C.intl.string(C.t["8JC5e3"])
            }), (0, r.jsx)(a.RyX, {
              onClick: () => {
                i(R.L.UNKNOWN), (0, o.mB)(A.xW$.PREMIUM_PROMO_DISMISSED, true)
              },
              noticeType: y
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(T.Z, {
            dismissCurrentNotice: () => i(R.L.UNKNOWN),
            subscriptionTier: P.Si.TIER_2
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(T.Z, {
            dismissCurrentNotice: () => i(R.L.UNKNOWN),
            subscriptionTier: P.Si.TIER_0
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(a.RyX, {
              noticeType: y,
              onClick: () => i(R.L.UNKNOWN)
            }), C.intl.string(C.t["0KFB2N"]), (0, r.jsx)(a.NoS, {
              noticeType: y,
              onClick: () => {
                i(R.L.UNKNOWN), c.Z.open(A.oAB.PREMIUM)
              },
              children: C.intl.string(C.t.pyYSiI)
            })]
          });
        case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.DANGER,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => i(R.L.UNKNOWN),
              noticeType: y
            }), C.intl.string(C.t["7490vb"]), (0, r.jsx)(a.NoS, {
              noticeType: y,
              onClick: () => {
                (0, O.uL)(A.Z5c.SETTINGS("account"))
              },
              children: C.intl.string(C.t.Vm8akJ)
            })]
          });
        case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let p = _.Z.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.DEFAULT,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => i(R.L.UNKNOWN),
              noticeType: y
            }), C.intl.string(C.t.pJ4hJC), (0, r.jsx)(a.NoS, {
              noticeType: y,
              onClick: () => {
                i(R.L.PRIMARY), (0, O.uL)(1 === p.length ? A.Z5c.GUILD_SETTINGS(p[0], "role-subscriptions") : A.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", true, "server-subscriptions-finish-setting-up"))
              },
              children: C.intl.string(C.t["74s74O"])
            })]
          });
        case l.z.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.WARNING,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => i(R.L.UNKNOWN),
              noticeType: y
            }), C.intl.format(C.t.pdYZys, {}), (0, r.jsx)(a.NoS, {
              onClick: () => (0, I.Z)(g.Kq.NOTICE),
              noticeType: y,
              children: C.intl.string(C.t.LhlgY2)
            })]
          });
        case l.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => i(R.L.UNKNOWN),
              noticeType: y
            }), C.intl.string(C.t["O9GI+v"]), (0, r.jsx)(a.NoS, {
              onClick: () => {
                (0, E.Z)({
                  subscriptionTier: P.Si.TIER_2,
                  analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: A.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => i(R.L.UNKNOWN)
                })
              },
              noticeType: y,
              children: C.intl.string(C.t.Zi69Dw)
            })]
          });
        case l.z.REPORT_TO_MOD_SURVEY_NOTICE:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.BRAND,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => i(R.L.USER_DISMISS),
              noticeType: A.kVF.REPORT_TO_MOD_SURVEY
            }), C.intl.string(C.t["Aa+l7e"]), (0, r.jsx)(a.NoS, {
              onClick: () => {
                window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id=".concat(null == h ? true : h.id, "&guild_id=").concat(b), "_blank"), i(R.L.TAKE_ACTION)
              },
              noticeType: A.kVF.REPORT_TO_MOD_SURVEY,
              children: C.intl.string(C.t["iT+wQ0"])
            })]
          })
      }
    }
  })
}