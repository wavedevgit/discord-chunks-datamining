/** Chunk was on 44799 **/
/** chunk id: 877362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk678558 = require("./678558.jsx"),
  Chunk343649 = require("./343649.jsx"),
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
let T = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk99690.Z;

function y(e) {
  var t, n;
  let {
    guildId: i
  } = e, c = (0, a.e7)([h.Z], () => h.Z.getGuild(i)), _ = (0, a.e7)([b.Z], () => b.Z.getSortedRoles(i).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), y = (0, a.e7)([j.default], () => j.default.getCurrentUser()), N = null == y ? true : y.id, O = (0, a.e7)([x.ZP], () => null != N ? x.ZP.getMember(i, N) : true, [N, i]), A = (null == O ? true : O.premiumSince) != null, S = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), {
    avatarDecorationSrc: R,
    avatarSrc: L,
    eventHandlers: k
  } = (0, v.Z)({
    userId: null == y ? true : y.id,
    guildId: i,
    size: u.EFr.SIZE_40,
    animateOnHover: !S
  });
  return null == c || null == O || null == y ? null : (0, r.jsxs)(u.$1m, {
    className: I.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: I.image,
      src: P
    }), (0, r.jsxs)("div", {
      className: I.textContainer,
      children: [(0, r.jsx)(o.xvT, {
        variant: "text-md/semibold",
        children: E.intl.string(A ? w.default.KSWK1U : w.default.XXXX5l)
      }), (0, r.jsx)(o.xvT, {
        variant: "text-sm/medium",
        children: E.intl.format(A ? w.default["7fWTg4"] : w.default["7PXeeQ"], {
          onClick: () => {
            (0, f.f)({
              guildId: i,
              location: {
                section: C.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: C.qAy.LEARN_MORE
              }
            })
          }
        })
      })]
    }), null != _ && !A && (0, r.jsx)(g.l, {
      avatar: (0, r.jsx)(T, (t = function(e) {
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
      }({}, k), n = n = {
        user: y,
        src: L,
        avatarDecoration: R,
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
        name: Z.ZP.getName(i, null, y),
        colorString: _.colorString,
        colorStrings: _.colorStrings
      }),
      className: l()(I.content, I.exampleMessage),
      message: E.intl.string(E.t["6OSasb"]),
      decorations: (0, r.jsx)(u.Ucv, {
        color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: I.boostIcon
      })
    }), (0, r.jsx)(p.Z, {
      guild: c,
      className: I.content,
      analyticsLocation: {
        page: C.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: C.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: s.Tt.BRAND,
      size: s.Ph.MEDIUM,
      intent: m.P.NONE,
      fullWidth: true,
      icon: (0, r.jsx)(u.Ucv, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}