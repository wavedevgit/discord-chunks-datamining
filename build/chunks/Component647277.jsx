/** Chunk was on 66181 **/
/** chunk id: 647277, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk796634 = require("./796634.js"),
  Chunk656139 = require("./656139.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk756555 = require("./756555.js"),
  Chunk295234 = require("./295234.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
let _ = e => {
    let {
      startingScreen: t,
      analyticsLocations: r
    } = e;
    l.default.track(g.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: r
    }), (0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 656139));
      return n => {
        var r, s;
        return (0, i.jsx)(e, (r = x({}, n), s = s = {
          startingScreen: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
        }), r))
      }
    })
  },
  j = e => {
    let {
      user: t
    } = e, {
      avatarSrc: n,
      eventHandlers: r
    } = (0, a.Z)({
      userId: t.id,
      size: s.EFr.SIZE_24
    });
    return (0, i.jsx)(s.qEK, x({
      className: f.reminderAvatar,
      src: n,
      "aria-label": (0, c.oY)(t),
      size: s.EFr.SIZE_24
    }, r), t.id)
  },
  E = e => {
    let {
      referralSentUsers: t,
      allRedeemed: n
    } = e;
    return (0, i.jsxs)("div", {
      className: f.reminderContainer,
      children: [(0, i.jsxs)("div", {
        className: f.remindersSentContainer,
        children: [t.map(e => (0, i.jsx)(j, {
          user: e
        }, e.id)), (0, i.jsx)(s.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          className: f.reminderAvatarText,
          children: (e => {
            let {
              recipientNames: t
            } = e, [n, i, r] = t;
            return 1 === t.length ? h.intl.format(h.t["B/IYFR"], {
              recipientName: n
            }) : 2 === t.length ? h.intl.format(h.t.uIOxcH, {
              firstRecipientName: n,
              secondRecipientName: i
            }) : 3 === t.length ? h.intl.format(h.t["1k64R0"], {
              firstRecipientName: n,
              secondRecipientName: i,
              thirdRecipientName: r
            }) : ""
          })({
            recipientNames: t.map(e => (0, c.oY)(e))
          })
        })]
      }), (0, i.jsx)(s.zxk, {
        variant: "secondary",
        size: "sm",
        disabled: n,
        text: h.intl.string(h.t.NPCYFR),
        onClick: () => _({
          startingScreen: p.K.REMINDER,
          analyticsLocations: []
        })
      })]
    })
  },
  C = () => {
    let {
      referralSentUsers: e
    } = (0, Chunk796634.G)(), t = (0, Chunk442837.e7)([Chunk276444.Z], () => Chunk276444.Z.getRecipientStatus()).values().every(e => e === d.Fe.REDEEMED);
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk756555.container,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk756555.bannerContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.Eep, {
          src: Chunk295234.Z,
          height: 84,
          width: 144
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk756555.bannerContent,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk756555.bannerContentText,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: Chunk388032.intl.string(Chunk388032.t.USo4s7)
            }), (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/medium",
              color: "text-secondary",
              children: module.length === Chunk796634.Q ? true === exports ? Chunk388032.intl.format(Chunk388032.t["1aEjsL"], {
                helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
              }) : Chunk388032.intl.format(Chunk388032.t["+u3AOD"], {
                helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
              }) : Chunk388032.intl.format(Chunk388032.t["omMr+f"], {
                helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: Chunk388032.intl.string(Chunk388032.t.Lm2nFR),
            onClick: () => _({
              startingScreen: Chunk656139.K.SELECT_FRIENDS,
              analyticsLocations: []
            })
          })]
        })]
      }), module.length > 0 && (0, Chunk951288.jsx)(E, {
        referralSentUsers: module,
        allRedeemed: exports
      })]
    })
  }