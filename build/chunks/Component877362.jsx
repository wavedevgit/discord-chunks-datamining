/** Chunk was on 44799 **/
/** chunk id: 877362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk304789 = require("./304789.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk678558 = require("./678558.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk742409 = require("./742409.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk127181 = require("./127181.js"),
  Chunk350618 = require("./350618.js");
let y = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk99690.Z;

function T(e) {
  var t, n;
  let {
    guildId: i
  } = e, d = (0, a.e7)([h.Z], () => h.Z.getGuild(i)), I = (0, a.e7)([b.Z], () => b.Z.getSortedRoles(i).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), T = (0, a.e7)([C.default], () => C.default.getCurrentUser()), S = null == T ? true : T.id, A = (0, a.e7)([x.ZP], () => null != S ? x.ZP.getMember(i, S) : true, [S, i]), O = (null == A ? true : A.premiumSince) != null, k = (0, a.e7)([p.Z], () => p.Z.useReducedMotion), {
    avatarDecorationSrc: R,
    avatarSrc: L,
    eventHandlers: U
  } = (0, v.Z)({
    userId: null == T ? true : T.id,
    guildId: i,
    size: c.EFr.SIZE_40,
    animateOnHover: !k
  });
  return null == d || null == A || null == T ? null : (0, r.jsxs)(s.$, {
    className: N.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: N.image,
      src: P
    }), (0, r.jsxs)("div", {
      className: N.textContainer,
      children: [(0, r.jsx)(l.xv, {
        variant: "text-md/semibold",
        children: Z.intl.string(O ? w.default.KSWK1d : w.default.XXXX5u)
      }), (0, r.jsx)(l.xv, {
        variant: "text-sm/medium",
        children: Z.intl.format(O ? w.default["7fWTg4"] : w.default["7PXeeX"], {
          onClick: () => {
            (0, f.f)({
              guildId: i,
              location: {
                section: E.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: E.qAy.LEARN_MORE
              }
            })
          }
        })
      })]
    }), null != I && !O && (0, r.jsx)(g.l, {
      avatar: (0, r.jsx)(y, (t = function(e) {
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
      }({}, U), n = n = {
        user: T,
        src: L,
        avatarDecoration: R,
        size: c.EFr.SIZE_40,
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
      username: (0, r.jsx)(c.PUh, {
        variant: "text-md/semibold",
        name: j.ZP.getName(i, null, T),
        colorString: I.colorString,
        colorStrings: I.colorStrings
      }),
      className: o()(N.content, N.exampleMessage),
      message: Z.intl.string(Z.t["6OSasb"]),
      decorations: (0, r.jsx)(c.$Eu, {
        color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: N.boostIcon
      })
    }), (0, r.jsx)(m.Z, {
      guild: d,
      className: N.content,
      analyticsLocation: {
        page: E.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: E.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: u.Tt.BRAND,
      size: u.Ph.MEDIUM,
      intent: _.P.NONE,
      fullWidth: true,
      icon: (0, r.jsx)(c.$Eu, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}