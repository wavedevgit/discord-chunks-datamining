/** Chunk was on 44799 **/
/** chunk id: 877362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk678558 = require("./678558.jsx"),
  Chunk978088 = require("./978088.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk905490 = require("./905490.js"),
  Chunk350618 = require("./350618.js");
let P = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk99690.Z;

function T(e) {
  var t, n;
  let {
    guildId: i
  } = e, c = (0, a.e7)([b.Z], () => b.Z.getGuild(i)), Z = (0, a.e7)([x.Z], () => x.Z.getSortedRoles(i).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), T = (0, a.e7)([h.default], () => h.default.getCurrentUser()), S = null == T ? true : T.id, N = (0, a.e7)([g.ZP], () => null != S ? g.ZP.getMember(i, S) : true, [S, i]), y = (null == N ? true : N.premiumSince) != null, O = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), {
    avatarDecorationSrc: A,
    avatarSrc: R,
    eventHandlers: L
  } = (0, v.Z)({
    userId: null == T ? true : T.id,
    guildId: i,
    size: u.EFr.SIZE_40,
    animateOnHover: !O
  });
  return null == c || null == N || null == T ? null : (0, r.jsxs)(u.$1m, {
    className: I.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: I.image,
      src: E
    }), (0, r.jsxs)("div", {
      className: I.textContainer,
      children: [(0, r.jsx)(l.xvT, {
        variant: "text-md/semibold",
        children: w.intl.string(y ? C.default.KSWK1U : C.default.XXXX5l)
      }), (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        children: w.intl.format(y ? C.default["7fWTg4"] : C.default["7PXeeQ"], {
          onClick: () => {
            (0, f.f)({
              guildId: i,
              location: {
                section: _.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: _.qAy.LEARN_MORE
              }
            })
          }
        })
      })]
    }), null != Z && !y && (0, r.jsx)(m.l, {
      avatar: (0, r.jsx)(P, (t = function(e) {
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
      }({}, L), n = n = {
        user: T,
        src: R,
        avatarDecoration: A,
        size: u.EFr.SIZE_40,
        "aria-hidden": true,
        animate: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)),
      username: (0, r.jsx)(u.PUh, {
        variant: "text-md/semibold",
        name: j.ZP.getName(i, null, T),
        colorString: Z.colorString,
        colorStrings: Z.colorStrings
      }),
      className: o()(I.content, I.exampleMessage),
      message: w.intl.string(w.t["6OSasb"]),
      decorations: (0, r.jsx)(u.Ucv, {
        color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: I.boostIcon
      })
    }), (0, r.jsx)(p.Z, {
      guild: c,
      className: I.content,
      analyticsLocation: {
        page: _.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: _.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: s.Tt.BRAND,
      size: s.Ph.MEDIUM,
      fullWidth: true,
      icon: (0, r.jsx)(u.Ucv, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}