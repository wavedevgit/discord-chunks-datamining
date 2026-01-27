/** Chunk was on 93140 **/
/** chunk id: 420216, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => D
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

function m(e) {
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
}
let D = e => {
  let {
    dismissibleContent: t,
    noticeType: D
  } = e;
  return (0, r.jsx)(p.Ay, {
    contentTypes: [t],
    groupName: R.m.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: p
      } = e;
      switch (t) {
        case i.M.NAGBAR_NOTICE_DOWNLOAD:
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.DEFAULT,
            children: [(0, r.jsx)(l.PMB, {
              onClick: () => p(R.i.UNKNOWN),
              noticeType: D
            }), f.intl.string(f.t["+xn1o5"]), (0, r.jsx)("i", {
              className: C.c9
            }), (0, r.jsx)("i", {
              className: C.Vz
            }), (0, r.jsx)("i", {
              className: C.p0
            }), (0, r.jsx)(l.Z_L, {
              noticeType: D,
              onClick: () => {
                (0, l.mMO)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                  return t => (0, r.jsx)(e, m({
                    source: "Top Bar Nag"
                  }, t))
                })
              },
              children: f.intl.string(f.t["1WjMbC"])
            })]
          });
        case i.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.SPOTIFY,
            children: [(0, r.jsx)(l.PMB, {
              onClick: () => p(R.i.UNKNOWN),
              noticeType: D
            }), (0, r.jsx)(O.A, {
              className: C.tV
            }), f.intl.string(f.t["5NUVHH"]), (0, r.jsx)(l.Z_L, {
              onClick: () => (0, c.A)({
                platformType: S.fg2.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: D,
              children: f.intl.string(f.t.S0W8Z5)
            })]
          });
        case i.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.PLAYSTATION,
            children: [(0, r.jsx)(l.PMB, {
              noticeType: D,
              onClick: () => p(R.i.UNKNOWN)
            }), (0, r.jsx)("img", {
              alt: "",
              className: C.tV,
              src: a.A.get(S.fg2.PLAYSTATION).icon.whiteSVG
            }), f.intl.string(f.t.WHWgoY), (0, r.jsx)(l.zr9, {
              onClick: () => (0, c.A)({
                platformType: S.fg2.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: f.intl.string(f.t.S0W8Z5)
            })]
          });
        case i.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.DEFAULT,
            children: [(0, r.jsx)(l.PMB, {
              onClick: () => p(R.i.USER_DISMISS),
              noticeType: D
            }), f.intl.string(f.t["3qKN/h"]), (0, r.jsx)(l.Z_L, {
              onClick: async () => {
                p(R.i.TAKE_ACTION);
                try {
                  let {
                    startRegisterWebAuthnCredential: e
                  } = await Promise.resolve().then(n.bind(n, 917136)), {
                    ticket: t,
                    challenge: i
                  } = await e();
                  (0, l.mMO)(async () => {
                    let {
                      RegisterWebAuthnCredentialModal: e
                    } = await Promise.all([n.e("44667"), n.e("69694")]).then(n.bind(n, 359990));
                    return n => {
                      var l, o;
                      return (0, r.jsx)(e, (l = m({}, n), o = {
                        ticket: t,
                        challenge: i,
                        showAccountSettingsButton: true
                      }, o = null != o ? o : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r)
                        }
                        return n
                      })(Object(o)).forEach(function(e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
                      }), l))
                    }
                  })
                } catch (e) {
                  (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.xSCvBf), l.ToastType.FAILURE))
                }
              },
              noticeType: D,
              children: f.intl.string(f.t["ff/XXy"])
            })]
          });
        case i.M.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.PREMIUM_TIER_2,
            children: [(0, r.jsx)("span", {
              className: C.lK
            }), (0, r.jsx)("span", {
              className: C.$t,
              children: f.intl.string(f.t["+urf75"])
            }), (0, r.jsx)(l.Z_L, {
              className: C.CO,
              noticeType: D,
              onClick: () => {
                N.default.track(S.HAw.PREMIUM_PROMOTION_OPENED, {
                  location_section: S.JJy.NOTIFICATION_BAR,
                  location_object: S.ZSU.BUTTON_CTA
                }), (0, I.openUserSettings)(T.X.NITRO_PANEL, {
                  section: S.nc_.PREMIUM
                })
              },
              children: f.intl.string(f.t["8JC5e/"])
            }), (0, r.jsx)(l.PMB, {
              onClick: () => {
                p(R.i.UNKNOWN), (0, o.lA)(S.nhx.PREMIUM_PROMO_DISMISSED, true)
              },
              noticeType: D
            })]
          });
        case i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, r.jsx)(_.A, {
            dismissCurrentNotice: () => p(R.i.UNKNOWN),
            subscriptionTier: y.pe.TIER_2
          });
        case i.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, r.jsx)(_.A, {
            dismissCurrentNotice: () => p(R.i.UNKNOWN),
            subscriptionTier: y.pe.TIER_0
          });
        case i.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.PREMIUM_TIER_2,
            children: [(0, r.jsx)(l.PMB, {
              noticeType: D,
              onClick: () => p(R.i.UNKNOWN)
            }), f.intl.string(f.t["0KFB2B"]), (0, r.jsx)(l.Z_L, {
              noticeType: D,
              onClick: () => {
                p(R.i.UNKNOWN), (0, I.openUserSettings)(T.X.NITRO_PANEL, {
                  section: S.nc_.PREMIUM
                })
              },
              children: f.intl.string(f.t.pyYSiO)
            })]
          });
        case i.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.DANGER,
            children: [(0, r.jsx)(l.PMB, {
              onClick: () => p(R.i.UNKNOWN),
              noticeType: D
            }), f.intl.string(f.t["7490vQ"]), (0, r.jsx)(l.Z_L, {
              noticeType: D,
              onClick: () => {
                (0, A.pX)(S.BVt.SETTINGS("account"))
              },
              children: f.intl.string(f.t.Vm8akB)
            })]
          });
        case i.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let g = u.A.getEligibleGuildsForNagActivate();
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.DEFAULT,
            children: [(0, r.jsx)(l.PMB, {
              onClick: () => p(R.i.UNKNOWN),
              noticeType: D
            }), f.intl.string(f.t.pJ4hJE), (0, r.jsx)(l.Z_L, {
              noticeType: D,
              onClick: () => {
                p(R.i.PRIMARY), (0, A.pX)(1 === g.length ? S.BVt.GUILD_SETTINGS(g[0], "role-subscriptions") : S.BVt.PICK_GUILD_SETTINGS("role-subscriptions", true, "server-subscriptions-finish-setting-up"))
              },
              children: f.intl.string(f.t["74s74F"])
            })]
          });
        case i.M.NAGBAR_NOTICE_POMELO:
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.WARNING,
            children: [(0, r.jsx)(l.PMB, {
              onClick: () => p(R.i.UNKNOWN),
              noticeType: D
            }), f.intl.format(f.t.pdYZyg, {}), (0, r.jsx)(l.Z_L, {
              onClick: () => (0, d.A)(P.gg.NOTICE),
              noticeType: D,
              children: f.intl.string(f.t.LhlgY9)
            })]
          });
        case i.M.CHECKOUT_RECOVERY_NAGBAR:
          return (0, r.jsxs)(l.$Td, {
            color: l.Hv$.PREMIUM_TIER_2,
            children: [(0, r.jsx)(l.PMB, {
              onClick: () => p(R.i.UNKNOWN),
              noticeType: D
            }), f.intl.string(f.t["O9GI+k"]), (0, r.jsx)(l.Z_L, {
              onClick: () => {
                (0, E.A)({
                  subscriptionTier: y.pe.TIER_2,
                  analyticsLocations: [s.A.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: S.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => p(R.i.UNKNOWN)
                })
              },
              noticeType: D,
              children: f.intl.string(f.t.Zi69D4)
            })]
          })
      }
    }
  })
}