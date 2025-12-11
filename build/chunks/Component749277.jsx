/** Chunk was on web.js **/
/** chunk id: 749277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk704215 = require("./704215.js"),
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
  Chunk395361 = require("./395361.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk981631 = require("./981631.js"),
  Chunk801461 = require("./801461.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk710930 = require("./710930.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = e => {
  let {
    dismissibleContent: t,
    noticeType: C
  } = e;
  return (0, r.jsx)(b.ZP, {
    contentTypes: [t],
    groupName: y.R.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: b
      } = e;
      switch (t) {
        case i.z.NAGBAR_NOTICE_DOWNLOAD:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.DEFAULT,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => b(y.L.UNKNOWN),
              noticeType: C
            }), I.intl.string(I.t["+xn1o5"]), (0, r.jsx)("i", {
              className: T.iconApple
            }), (0, r.jsx)("i", {
              className: T.iconAndroid
            }), (0, r.jsx)("i", {
              className: T.iconWindows
            }), (0, r.jsx)(a.NoS, {
              noticeType: C,
              onClick: () => {
                (0, a.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
                  return t => (0, r.jsx)(e, A({
                    source: "Top Bar Nag"
                  }, t))
                })
              },
              children: I.intl.string(I.t["1WjMbC"])
            })]
          });
        case i.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.SPOTIFY,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => b(y.L.UNKNOWN),
              noticeType: C
            }), (0, r.jsx)(g.Z, {
              className: T.platformIcon
            }), I.intl.string(I.t["5NUVHH"]), (0, r.jsx)(a.NoS, {
              onClick: () => (0, c.Z)({
                platformType: O.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: C,
              children: I.intl.string(I.t.S0W8Z5)
            })]
          });
        case i.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.PLAYSTATION,
            children: [(0, r.jsx)(a.RyX, {
              noticeType: C,
              onClick: () => b(y.L.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: T.platformIcon,
              src: s.Z.get(O.ABu.PLAYSTATION).icon.whiteSVG
            }), I.intl.string(I.t.WHWgoY), (0, r.jsx)(a.EyT, {
              onClick: () => (0, c.Z)({
                platformType: O.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: I.intl.string(I.t.S0W8Z5)
            })]
          });
        case i.z.NAGBAR_NOTICE_PASSKEY_BACKUP:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.DEFAULT,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => b(y.L.USER_DISMISS),
              noticeType: C
            }), I.intl.string(I.t["3qKN/h"]), (0, r.jsx)(a.NoS, {
              onClick: async () => {
                b(y.L.TAKE_ACTION);
                try {
                  let {
                    startRegisterWebAuthnCredential: e
                  } = await Promise.resolve().then(n.bind(n, 365007)), {
                    ticket: t,
                    challenge: i
                  } = await e();
                  (0, a.ZDy)(async () => {
                    let {
                      RegisterWebAuthnCredentialModal: e
                    } = await Promise.resolve().then(n.bind(n, 778764));
                    return n => (0, r.jsx)(e, P(A({}, n), {
                      ticket: t,
                      challenge: i,
                      showAccountSettingsButton: true
                    }))
                  })
                } catch (e) {
                  (0, a.showToast)((0, a.createToast)(I.intl.string(I.t.xSCvBf), a.ToastType.FAILURE))
                }
              },
              noticeType: C,
              children: I.intl.string(I.t["ff/XXy"])
            })]
          });
        case i.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: T.premiumLogo
            }), (0, r.jsx)("span", {
              className: T.premiumText,
              children: I.intl.string(I.t["+urf75"])
            }), (0, r.jsx)(a.NoS, {
              className: T.premiumAction,
              noticeType: C,
              onClick: () => {
                E.default.track(O.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: O.jXE.NOTIFICATION_BAR,
                  location_object: O.qAy.BUTTON_CTA
                }), (0, h.openUserSettings)(m.n.NITRO_PANEL, {
                  section: O.oAB.PREMIUM
                })
              },
              children: I.intl.string(I.t["8JC5e/"])
            }), (0, r.jsx)(a.RyX, {
              onClick: () => {
                b(y.L.UNKNOWN), (0, o.mB)(O.xW$.PREMIUM_PROMO_DISMISSED, true)
              },
              noticeType: C
            })]
          });
        case i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(p.Z, {
            dismissCurrentNotice: () => b(y.L.UNKNOWN),
            subscriptionTier: S.Si.TIER_2
          });
        case i.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(p.Z, {
            dismissCurrentNotice: () => b(y.L.UNKNOWN),
            subscriptionTier: S.Si.TIER_0
          });
        case i.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(a.RyX, {
              noticeType: C,
              onClick: () => b(y.L.UNKNOWN)
            }), I.intl.string(I.t["0KFB2B"]), (0, r.jsx)(a.NoS, {
              noticeType: C,
              onClick: () => {
                b(y.L.UNKNOWN), (0, h.openUserSettings)(m.n.NITRO_PANEL, {
                  section: O.oAB.PREMIUM
                })
              },
              children: I.intl.string(I.t.pyYSiO)
            })]
          });
        case i.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.DANGER,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => b(y.L.UNKNOWN),
              noticeType: C
            }), I.intl.string(I.t["7490vQ"]), (0, r.jsx)(a.NoS, {
              noticeType: C,
              onClick: () => {
                (0, _.uL)(O.Z5c.SETTINGS("account"))
              },
              children: I.intl.string(I.t.Vm8akB)
            })]
          });
        case i.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let N = u.Z.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.DEFAULT,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => b(y.L.UNKNOWN),
              noticeType: C
            }), I.intl.string(I.t.pJ4hJE), (0, r.jsx)(a.NoS, {
              noticeType: C,
              onClick: () => {
                b(y.L.PRIMARY), (0, _.uL)(1 === N.length ? O.Z5c.GUILD_SETTINGS(N[0], "role-subscriptions") : O.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", true, "server-subscriptions-finish-setting-up"))
              },
              children: I.intl.string(I.t["74s74F"])
            })]
          });
        case i.z.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.WARNING,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => b(y.L.UNKNOWN),
              noticeType: C
            }), I.intl.format(I.t.pdYZyg, {}), (0, r.jsx)(a.NoS, {
              onClick: () => (0, f.Z)(v.Kq.NOTICE),
              noticeType: C,
              children: I.intl.string(I.t.LhlgY9)
            })]
          });
        case i.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(a.qXd, {
            color: a.DM8.PREMIUM_TIER_2,
            children: [(0, r.jsx)(a.RyX, {
              onClick: () => b(y.L.UNKNOWN),
              noticeType: C
            }), I.intl.string(I.t["O9GI+k"]), (0, r.jsx)(a.NoS, {
              onClick: () => {
                (0, d.Z)({
                  subscriptionTier: S.Si.TIER_2,
                  analyticsLocations: [l.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: O.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => b(y.L.UNKNOWN)
                })
              },
              noticeType: C,
              children: I.intl.string(I.t.Zi69D4)
            })]
          })
      }
    }
  })
}