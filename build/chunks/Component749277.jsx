/** Chunk was on web.js **/
/** chunk id: 749277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk726542 = require("./726542.js"),
  Chunk100527 = require("./100527.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk674525 = require("./674525.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk303172 = require("./303172.jsx"),
  Chunk246965 = require("./246965.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
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
  Chunk522488 = require("./522488.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}
let w = e => {
  let {
    dismissibleContent: t,
    noticeType: R
  } = e, w = (0, i.e7)([b.default], () => b.default.getCurrentUser()), D = (0, i.e7)([E.Z], () => E.Z.getGuildId());
  return (0, r.jsx)(v.ZP, {
    contentTypes: [t],
    groupName: I.R.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      switch (t) {
        case a.z.NAGBAR_NOTICE_DOWNLOAD:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(I.L.UNKNOWN),
              noticeType: R
            }), C.intl.string(C.t["+xn1o6"]), (0, r.jsx)("i", {
              className: N.iconApple
            }), (0, r.jsx)("i", {
              className: N.iconAndroid
            }), (0, r.jsx)("i", {
              className: N.iconWindows
            }), (0, r.jsx)(o.NoS, {
              noticeType: R,
              onClick: () => {
                (0, o.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
                  return t => (0, r.jsx)(e, P({
                    source: "Top Bar Nag"
                  }, t))
                })
              },
              children: C.intl.string(C.t["1WjMbG"])
            })]
          });
        case a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.SPOTIFY,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(I.L.UNKNOWN),
              noticeType: R
            }), (0, r.jsx)(y.Z, {
              className: N.platformIcon
            }), C.intl.string(C.t["5NUVHB"]), (0, r.jsx)(o.NoS, {
              onClick: () => (0, u.Z)({
                platformType: T.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: R,
              children: C.intl.string(C.t.S0W8Z2)
            })]
          });
        case a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PLAYSTATION,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(I.L.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: N.platformIcon,
              src: l.Z.get(T.ABu.PLAYSTATION).icon.whiteSVG
            }), C.intl.string(C.t.WHWgoa), (0, r.jsx)(o.EyT, {
              onClick: () => (0, u.Z)({
                platformType: T.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: C.intl.string(C.t.S0W8Z2)
            })]
          });
        case a.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: N.premiumLogo
            }), (0, r.jsx)("span", {
              className: N.premiumText,
              children: C.intl.string(C.t["+urf7+"])
            }), (0, r.jsx)(o.NoS, {
              className: N.premiumAction,
              noticeType: R,
              onClick: () => {
                O.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: T.jXE.NOTIFICATION_BAR,
                  location_object: T.qAy.BUTTON_CTA
                }), (0, g.openUserSettings)(m.n.NITRO_PANEL, {
                  section: T.oAB.PREMIUM
                })
              },
              children: C.intl.string(C.t["8JC5e3"])
            }), (0, r.jsx)(o.RyX, {
              onClick: () => {
                i(I.L.UNKNOWN), (0, s.mB)(T.xW$.PREMIUM_PROMO_DISMISSED, true)
              },
              noticeType: R
            })]
          });
        case a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(p.Z, {
            dismissCurrentNotice: () => i(I.L.UNKNOWN),
            subscriptionTier: A.Si.TIER_2
          });
        case a.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(p.Z, {
            dismissCurrentNotice: () => i(I.L.UNKNOWN),
            subscriptionTier: A.Si.TIER_0
          });
        case a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              noticeType: R,
              onClick: () => i(I.L.UNKNOWN)
            }), C.intl.string(C.t["0KFB2N"]), (0, r.jsx)(o.NoS, {
              noticeType: R,
              onClick: () => {
                i(I.L.UNKNOWN), (0, g.openUserSettings)(m.n.NITRO_PANEL, {
                  section: T.oAB.PREMIUM
                })
              },
              children: C.intl.string(C.t.pyYSiI)
            })]
          });
        case a.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DANGER,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(I.L.UNKNOWN),
              noticeType: R
            }), C.intl.string(C.t["7490vb"]), (0, r.jsx)(o.NoS, {
              noticeType: R,
              onClick: () => {
                (0, h.uL)(T.Z5c.SETTINGS("account"))
              },
              children: C.intl.string(C.t.Vm8akJ)
            })]
          });
        case a.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let E = d.Z.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.DEFAULT,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(I.L.UNKNOWN),
              noticeType: R
            }), C.intl.string(C.t.pJ4hJC), (0, r.jsx)(o.NoS, {
              noticeType: R,
              onClick: () => {
                i(I.L.PRIMARY), (0, h.uL)(1 === E.length ? T.Z5c.GUILD_SETTINGS(E[0], "role-subscriptions") : T.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", true, "server-subscriptions-finish-setting-up"))
              },
              children: C.intl.string(C.t["74s74O"])
            })]
          });
        case a.z.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.WARNING,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(I.L.UNKNOWN),
              noticeType: R
            }), C.intl.format(C.t.pdYZys, {}), (0, r.jsx)(o.NoS, {
              onClick: () => (0, _.Z)(S.Kq.NOTICE),
              noticeType: R,
              children: C.intl.string(C.t.LhlgY2)
            })]
          });
        case a.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(I.L.UNKNOWN),
              noticeType: R
            }), C.intl.string(C.t["O9GI+v"]), (0, r.jsx)(o.NoS, {
              onClick: () => {
                (0, f.Z)({
                  subscriptionTier: A.Si.TIER_2,
                  analyticsLocations: [c.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: T.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => i(I.L.UNKNOWN)
                })
              },
              noticeType: R,
              children: C.intl.string(C.t.Zi69Dw)
            })]
          });
        case a.z.REPORT_TO_MOD_SURVEY_NOTICE:
          return (0, r.jsxs)(o.qXd, {
            color: o.DM8.BRAND,
            children: [(0, r.jsx)(o.RyX, {
              onClick: () => i(I.L.USER_DISMISS),
              noticeType: T.kVF.REPORT_TO_MOD_SURVEY
            }), C.intl.string(C.t["Aa+l7e"]), (0, r.jsx)(o.NoS, {
              onClick: () => {
                window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_5uP0NWTpoXsYSUu?user_id=".concat(null == w ? true : w.id, "&guild_id=").concat(D), "_blank"), i(I.L.TAKE_ACTION)
              },
              noticeType: T.kVF.REPORT_TO_MOD_SURVEY,
              children: C.intl.string(C.t["iT+wQ0"])
            })]
          })
      }
    }
  })
}