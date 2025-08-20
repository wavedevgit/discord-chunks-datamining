/** Chunk was on 66181 **/
/** chunk id: 647277, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function j(e) {
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
let E = e => {
    let {
      startingScreen: t,
      analyticsLocations: r
    } = e;
    c.default.track(f.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: r
    }), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 656139));
      return n => {
        var r, s;
        return (0, i.jsx)(e, (r = j({}, n), s = s = {
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
  C = e => {
    let {
      user: t
    } = e, {
      avatarSrc: n,
      eventHandlers: r
    } = (0, o.Z)({
      userId: t.id,
      size: l.EFr.SIZE_24
    });
    return (0, i.jsx)(l.qEK, j({
      className: x.reminderAvatar,
      src: n,
      "aria-label": (0, u.oY)(t),
      size: l.EFr.SIZE_24
    }, r), t.id)
  },
  O = e => {
    let {
      referralSentUsers: t,
      allRedeemed: n
    } = e;
    return (0, i.jsxs)("div", {
      className: x.reminderContainer,
      children: [(0, i.jsxs)("div", {
        className: x.remindersSentContainer,
        children: [t.map(e => (0, i.jsx)(C, {
          user: e
        }, e.id)), (0, i.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          className: x.reminderAvatarText,
          children: (e => {
            let {
              recipientNames: t
            } = e, [n, i, r] = t;
            return 1 === t.length ? b.intl.format(b.t["B/IYFR"], {
              recipientName: n
            }) : 2 === t.length ? b.intl.format(b.t.uIOxcH, {
              firstRecipientName: n,
              secondRecipientName: i
            }) : 3 === t.length ? b.intl.format(b.t["1k64R0"], {
              firstRecipientName: n,
              secondRecipientName: i,
              thirdRecipientName: r
            }) : ""
          })({
            recipientNames: t.map(e => (0, u.oY)(e))
          })
        })]
      }), (0, i.jsx)(l.zxk, {
        variant: "secondary",
        size: "sm",
        disabled: n,
        text: b.intl.string(b.t.NPCYFR),
        onClick: () => E({
          startingScreen: h.K.REMINDER,
          analyticsLocations: []
        })
      })]
    })
  },
  v = e => {
    let {
      className: t
    } = e, {
      referralSentUsers: n
    } = (0, g.G)(), r = (0, a.e7)([p.Z], () => p.Z.getRecipientStatus()).values().every(e => e === m.Fe.REDEEMED);
    return (0, i.jsxs)("div", {
      className: s()(x.container, t),
      children: [(0, i.jsxs)("div", {
        className: x.bannerContainer,
        children: [(0, i.jsx)(l.Eep, {
          src: _.Z,
          height: 84,
          width: 144
        }), (0, i.jsxs)("div", {
          className: x.bannerContent,
          children: [(0, i.jsxs)("div", {
            className: x.bannerContentText,
            children: [(0, i.jsx)(l.X6q, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: b.intl.string(b.t.USo4s7)
            }), (0, i.jsx)(l.Text, {
              variant: "text-md/medium",
              color: "text-secondary",
              children: n.length === g.Q ? true === r ? b.intl.format(b.t["1aEjsL"], {
                helpdeskArticle: d.Z.getArticleURL(f.BhN.REFERRAL_PROGRAM)
              }) : b.intl.format(b.t["+u3AOD"], {
                helpdeskArticle: d.Z.getArticleURL(f.BhN.REFERRAL_PROGRAM)
              }) : b.intl.format(b.t["omMr+f"], {
                helpdeskArticle: d.Z.getArticleURL(f.BhN.REFERRAL_PROGRAM)
              })
            })]
          }), (0, i.jsx)(l.zxk, {
            variant: "primary",
            text: b.intl.string(b.t.Lm2nFR),
            onClick: () => E({
              startingScreen: h.K.SELECT_FRIENDS,
              analyticsLocations: []
            })
          })]
        })]
      }), n.length > 0 && (0, i.jsx)(O, {
        referralSentUsers: n,
        allRedeemed: r
      })]
    })
  }