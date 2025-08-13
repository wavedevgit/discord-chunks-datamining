/** Chunk was on 44799 **/
/** chunk id: 877362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
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
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk860834 = require("./860834.js"),
  Chunk350618 = require("./350618.js");
let S = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk99690.Z;

function y(e) {
  var t, n;
  let {
    guildId: o
  } = e, d = (0, s.e7)([h.Z], () => h.Z.getGuild(o)), E = (0, s.e7)([b.Z], () => b.Z.getSortedRoles(o).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), y = (0, s.e7)([j.default], () => j.default.getCurrentUser()), T = null == y ? true : y.id, O = (0, s.e7)([v.ZP], () => null != T ? v.ZP.getMember(o, T) : true, [T, o]), A = (null == O ? true : O.premiumSince) != null, R = (0, s.e7)([p.Z], () => p.Z.useReducedMotion), {
    avatarDecorationSrc: L,
    avatarSrc: k,
    eventHandlers: U
  } = (0, g.Z)({
    userId: null == y ? true : y.id,
    guildId: o,
    size: u.EFr.SIZE_40,
    animateOnHover: !R
  });
  return null == d || null == O || null == y ? null : (0, r.jsxs)(a.$, {
    className: Z.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: Z.image,
      src: P
    }), (0, r.jsxs)("div", {
      className: Z.textContainer,
      children: [(0, r.jsx)(l.xv, {
        variant: "text-md/semibold",
        children: w.intl.string(A ? N.default.KSWK1d : N.default.XXXX5u)
      }), (0, r.jsx)(l.xv, {
        variant: "text-sm/medium",
        children: w.intl.format(A ? N.default["7fWTg4"] : N.default["7PXeeX"], {
          onClick: () => {
            (0, m.f)({
              guildId: o,
              location: {
                section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: I.qAy.LEARN_MORE
              }
            })
          }
        })
      })]
    }), null != E && !A && (0, r.jsx)(x.l, {
      avatar: (0, r.jsx)(S, (t = function(e) {
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
        user: y,
        src: k,
        avatarDecoration: L,
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
        name: C.ZP.getName(o, null, y),
        colorString: E.colorString,
        colorStrings: E.colorStrings
      }),
      className: i()(Z.content, Z.exampleMessage),
      message: w.intl.string(w.t["6OSasb"]),
      decorations: (0, r.jsx)(u.$Eu, {
        color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: Z.boostIcon
      })
    }), (0, r.jsx)(f.Z, {
      guild: d,
      className: Z.content,
      analyticsLocation: {
        page: I.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: c.Tt.BRAND,
      size: c.Ph.MEDIUM,
      intent: _.P.NONE,
      fullWidth: true,
      icon: (0, r.jsx)(u.$Eu, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}