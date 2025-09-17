/** Chunk was on 44799 **/
/** chunk id: 877362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let N = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk99690.Z;

function Z(e) {
  var t, n;
  let {
    guildId: o
  } = e, d = (0, s.e7)([h.Z], () => h.Z.getGuild(o)), I = (0, s.e7)([C.Z], () => C.Z.getSortedRoles(o).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), Z = (0, s.e7)([b.default], () => b.default.getCurrentUser()), w = null == Z ? true : Z.id, O = (0, s.e7)([x.ZP], () => null != w ? x.ZP.getMember(o, w) : true, [w, o]), k = (null == O ? true : O.premiumSince) != null, A = (0, s.e7)([p.Z], () => p.Z.useReducedMotion), {
    avatarDecorationSrc: U,
    avatarSrc: R,
    eventHandlers: L
  } = (0, v.Z)({
    userId: null == Z ? true : Z.id,
    guildId: o,
    size: u.EFr.SIZE_40,
    animateOnHover: !A
  });
  return null == d || null == O || null == Z ? null : (0, r.jsxs)(l.$, {
    className: y.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: y.image,
      src: S
    }), (0, r.jsxs)("div", {
      className: y.textContainer,
      children: [(0, r.jsx)(a.xvT, {
        variant: "text-md/semibold",
        children: P.intl.string(k ? j.default.KSWK1d : j.default.XXXX5u)
      }), (0, r.jsx)(a.xvT, {
        variant: "text-sm/medium",
        children: P.intl.format(k ? j.default["7fWTg4"] : j.default["7PXeeX"], {
          onClick: () => {
            (0, m.f)({
              guildId: o,
              location: {
                section: T.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: T.qAy.LEARN_MORE
              }
            })
          }
        })
      })]
    }), null != I && !k && (0, r.jsx)(_.l, {
      avatar: (0, r.jsx)(N, (t = function(e) {
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
        user: Z,
        src: R,
        avatarDecoration: U,
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
        name: E.ZP.getName(o, null, Z),
        colorString: I.colorString,
        colorStrings: I.colorStrings
      }),
      className: i()(y.content, y.exampleMessage),
      message: P.intl.string(P.t["6OSasb"]),
      decorations: (0, r.jsx)(u.$Eu, {
        color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: y.boostIcon
      })
    }), (0, r.jsx)(g.Z, {
      guild: d,
      className: y.content,
      analyticsLocation: {
        page: T.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: T.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: c.Tt.BRAND,
      size: c.Ph.MEDIUM,
      intent: f.P.NONE,
      fullWidth: true,
      icon: (0, r.jsx)(u.$Eu, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}