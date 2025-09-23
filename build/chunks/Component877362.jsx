/** Chunk was on 44799 **/
/** chunk id: 877362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
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
  Chunk258640 = require("./258640.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk540206 = require("./540206.js"),
  Chunk350618 = require("./350618.js");
let T = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk99690.Z;

function N(e) {
  var t, n;
  let {
    guildId: i
  } = e, d = (0, a.e7)([h.Z], () => h.Z.getGuild(i)), E = (0, a.e7)([b.Z], () => b.Z.getSortedRoles(i).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), N = (0, a.e7)([j.default], () => j.default.getCurrentUser()), O = null == N ? true : N.id, S = (0, a.e7)([_.ZP], () => null != O ? _.ZP.getMember(i, O) : true, [O, i]), A = (null == S ? true : S.premiumSince) != null, k = (0, a.e7)([p.Z], () => p.Z.useReducedMotion), {
    avatarDecorationSrc: R,
    avatarSrc: L,
    eventHandlers: U
  } = (0, x.Z)({
    userId: null == N ? true : N.id,
    guildId: i,
    size: u.EFr.SIZE_40,
    animateOnHover: !k
  });
  return null == d || null == S || null == N ? null : (0, r.jsxs)(s.$, {
    className: P.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: P.image,
      src: y
    }), (0, r.jsxs)("div", {
      className: P.textContainer,
      children: [(0, r.jsx)(l.xvT, {
        variant: "text-md/semibold",
        children: Z.intl.string(A ? w.default.KSWK1d : w.default.XXXX5u)
      }), (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        children: Z.intl.format(A ? w.default["7fWTg4"] : w.default["7PXeeX"], {
          onClick: () => {
            (0, f.f)({
              guildId: i,
              location: {
                section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: I.qAy.LEARN_MORE
              }
            })
          }
        })
      })]
    }), null != E && !A && (0, r.jsx)(v.l, {
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
      }({}, U), n = n = {
        user: N,
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
        name: C.ZP.getName(i, null, N),
        colorString: E.colorString,
        colorStrings: E.colorStrings
      }),
      className: o()(P.content, P.exampleMessage),
      message: Z.intl.string(Z.t["6OSasb"]),
      decorations: (0, r.jsx)(u.$Eu, {
        color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: P.boostIcon
      })
    }), (0, r.jsx)(m.Z, {
      guild: d,
      className: P.content,
      analyticsLocation: {
        page: I.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
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