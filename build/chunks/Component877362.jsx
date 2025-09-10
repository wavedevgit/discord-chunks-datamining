/** Chunk was on 44799 **/
/** chunk id: 877362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
let Z = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk99690.Z;

function S(e) {
  var t, n;
  let {
    guildId: i
  } = e, d = (0, l.e7)([b.Z], () => b.Z.getGuild(i)), P = (0, l.e7)([h.Z], () => h.Z.getSortedRoles(i).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), S = (0, l.e7)([C.default], () => C.default.getCurrentUser()), N = null == S ? true : S.id, k = (0, l.e7)([_.ZP], () => null != N ? _.ZP.getMember(i, N) : true, [N, i]), O = (null == k ? true : k.premiumSince) != null, A = (0, l.e7)([p.Z], () => p.Z.useReducedMotion), {
    avatarDecorationSrc: U,
    avatarSrc: R,
    eventHandlers: L
  } = (0, x.Z)({
    userId: null == S ? true : S.id,
    guildId: i,
    size: u.EFr.SIZE_40,
    animateOnHover: !A
  });
  return null == d || null == k || null == S ? null : (0, r.jsxs)(a.$, {
    className: y.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: y.image,
      src: w
    }), (0, r.jsxs)("div", {
      className: y.textContainer,
      children: [(0, r.jsx)(s.xv, {
        variant: "text-md/semibold",
        children: T.intl.string(O ? I.default.KSWK1d : I.default.XXXX5u)
      }), (0, r.jsx)(s.xv, {
        variant: "text-sm/medium",
        children: T.intl.format(O ? I.default["7fWTg4"] : I.default["7PXeeX"], {
          onClick: () => {
            (0, m.f)({
              guildId: i,
              location: {
                section: E.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: E.qAy.LEARN_MORE
              }
            })
          }
        })
      })]
    }), null != P && !O && (0, r.jsx)(v.l, {
      avatar: (0, r.jsx)(Z, (t = function(e) {
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
        user: S,
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
        name: j.ZP.getName(i, null, S),
        colorString: P.colorString,
        colorStrings: P.colorStrings
      }),
      className: o()(y.content, y.exampleMessage),
      message: T.intl.string(T.t["6OSasb"]),
      decorations: (0, r.jsx)(u.$Eu, {
        color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: y.boostIcon
      })
    }), (0, r.jsx)(f.Z, {
      guild: d,
      className: y.content,
      analyticsLocation: {
        page: E.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: E.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: c.Tt.BRAND,
      size: c.Ph.MEDIUM,
      intent: g.P.NONE,
      fullWidth: true,
      icon: (0, r.jsx)(u.$Eu, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}