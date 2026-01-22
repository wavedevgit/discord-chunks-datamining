/** Chunk was on web.js **/
/** chunk id: 420216, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => w
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk573648 = require("./573648.js"),
  Chunk793574 = require("./793574.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk662427 = require("./662427.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk819982 = require("./819982.jsx"),
  Chunk745299 = require("./745299.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk879945 = require("./879945.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk652215 = require("./652215.js"),
  Chunk789622 = require("./789622.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237082 = require("./237082.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
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

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = e => {
  let {
    dismissibleContent: t,
    noticeType: T
  } = e;
  return (0, r.jsx)(b.Ay, {
    contentTypes: [t],
    groupName: y.m.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: b
      } = e;
      switch (t) {
        case i.M.NAGBAR_NOTICE_DOWNLOAD:
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.DEFAULT,
            children: [(0, r.jsx)(a.PMB, {
              onClick: () => b(y.i.UNKNOWN),
              noticeType: T
            }), S.intl.string(S.t["+xn1o5"]), (0, r.jsx)("i", {
              className: I.c9
            }), (0, r.jsx)("i", {
              className: I.Vz
            }), (0, r.jsx)("i", {
              className: I.p0
            }), (0, r.jsx)(a.Z_L, {
              noticeType: T,
              onClick: () => {
                (0, a.mMO)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                  return t => (0, r.jsx)(e, C({
                    source: "Top Bar Nag"
                  }, t))
                })
              },
              children: S.intl.string(S.t["1WjMbC"])
            })]
          });
        case i.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.SPOTIFY,
            children: [(0, r.jsx)(a.PMB, {
              onClick: () => b(y.i.UNKNOWN),
              noticeType: T
            }), (0, r.jsx)(g.A, {
              className: I.tV
            }), S.intl.string(S.t["5NUVHH"]), (0, r.jsx)(a.Z_L, {
              onClick: () => (0, c.A)({
                platformType: O.fg2.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: T,
              children: S.intl.string(S.t.S0W8Z5)
            })]
          });
        case i.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.PLAYSTATION,
            children: [(0, r.jsx)(a.PMB, {
              noticeType: T,
              onClick: () => b(y.i.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: I.tV,
              src: o.A.get(O.fg2.PLAYSTATION).icon.whiteSVG
            }), S.intl.string(S.t.WHWgoY), (0, r.jsx)(a.zr9, {
              onClick: () => (0, c.A)({
                platformType: O.fg2.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: S.intl.string(S.t.S0W8Z5)
            })]
          });
        case i.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.DEFAULT,
            children: [(0, r.jsx)(a.PMB, {
              onClick: () => b(y.i.USER_DISMISS),
              noticeType: T
            }), S.intl.string(S.t["3qKN/h"]), (0, r.jsx)(a.Z_L, {
              onClick: async () => {
                b(y.i.TAKE_ACTION);
                try {
                  let {
                    startRegisterWebAuthnCredential: e
                  } = await Promise.resolve().then(n.bind(n, 917136)), {
                    ticket: t,
                    challenge: i
                  } = await e();
                  (0, a.mMO)(async () => {
                    let {
                      RegisterWebAuthnCredentialModal: e
                    } = await Promise.resolve().then(n.bind(n, 359990));
                    return n => (0, r.jsx)(e, R(C({}, n), {
                      ticket: t,
                      challenge: i,
                      showAccountSettingsButton: true
                    }))
                  })
                } catch (e) {
                  (0, a.showToast)((0, a.createToast)(S.intl.string(S.t.xSCvBf), a.ToastType.FAILURE))
                }
              },
              noticeType: T,
              children: S.intl.string(S.t["ff/XXy"])
            })]
          });
        case i.M.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: I.lK
            }), (0, r.jsx)("span", {
              className: I.$t,
              children: S.intl.string(S.t["+urf75"])
            }), (0, r.jsx)(a.Z_L, {
              className: I.CO,
              noticeType: T,
              onClick: () => {
                E.default.track(O.HAw.PREMIUM_PROMOTION_OPENED, {
                  location_section: O.JJy.NOTIFICATION_BAR,
                  location_object: O.ZSU.BUTTON_CTA
                }), (0, m.openUserSettings)(h.X.NITRO_PANEL, {
                  section: O.nc_.PREMIUM
                })
              },
              children: S.intl.string(S.t["8JC5e/"])
            }), (0, r.jsx)(a.PMB, {
              onClick: () => {
                b(y.i.UNKNOWN), (0, s.lA)(O.nhx.PREMIUM_PROMO_DISMISSED, true)
              },
              noticeType: T
            })]
          });
        case i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(p.A, {
            dismissCurrentNotice: () => b(y.i.UNKNOWN),
            subscriptionTier: v.pe.TIER_2
          });
        case i.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(p.A, {
            dismissCurrentNotice: () => b(y.i.UNKNOWN),
            subscriptionTier: v.pe.TIER_0
          });
        case i.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.PREMIUM_TIER_2,
            children: [(0, r.jsx)(a.PMB, {
              noticeType: T,
              onClick: () => b(y.i.UNKNOWN)
            }), S.intl.string(S.t["0KFB2B"]), (0, r.jsx)(a.Z_L, {
              noticeType: T,
              onClick: () => {
                b(y.i.UNKNOWN), (0, m.openUserSettings)(h.X.NITRO_PANEL, {
                  section: O.nc_.PREMIUM
                })
              },
              children: S.intl.string(S.t.pyYSiO)
            })]
          });
        case i.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.DANGER,
            children: [(0, r.jsx)(a.PMB, {
              onClick: () => b(y.i.UNKNOWN),
              noticeType: T
            }), S.intl.string(S.t["7490vQ"]), (0, r.jsx)(a.Z_L, {
              noticeType: T,
              onClick: () => {
                (0, _.pX)(O.BVt.SETTINGS("account"))
              },
              children: S.intl.string(S.t.Vm8akB)
            })]
          });
        case i.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let N = u.A.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.DEFAULT,
            children: [(0, r.jsx)(a.PMB, {
              onClick: () => b(y.i.UNKNOWN),
              noticeType: T
            }), S.intl.string(S.t.pJ4hJE), (0, r.jsx)(a.Z_L, {
              noticeType: T,
              onClick: () => {
                b(y.i.PRIMARY), (0, _.pX)(1 === N.length ? O.BVt.GUILD_SETTINGS(N[0], "role-subscriptions") : O.BVt.PICK_GUILD_SETTINGS("role-subscriptions", true, "server-subscriptions-finish-setting-up"))
              },
              children: S.intl.string(S.t["74s74F"])
            })]
          });
        case i.M.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.WARNING,
            children: [(0, r.jsx)(a.PMB, {
              onClick: () => b(y.i.UNKNOWN),
              noticeType: T
            }), S.intl.format(S.t.pdYZyg, {}), (0, r.jsx)(a.Z_L, {
              onClick: () => (0, f.A)(A.gg.NOTICE),
              noticeType: T,
              children: S.intl.string(S.t.LhlgY9)
            })]
          });
        case i.M.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(a.$Td, {
            color: a.Hv$.PREMIUM_TIER_2,
            children: [(0, r.jsx)(a.PMB, {
              onClick: () => b(y.i.UNKNOWN),
              noticeType: T
            }), S.intl.string(S.t["O9GI+k"]), (0, r.jsx)(a.Z_L, {
              onClick: () => {
                (0, d.A)({
                  subscriptionTier: v.pe.TIER_2,
                  analyticsLocations: [l.A.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: O.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => b(y.i.UNKNOWN)
                })
              },
              noticeType: T,
              children: S.intl.string(S.t.Zi69D4)
            })]
          })
      }
    }
  })
}