/** Chunk was on 44799 **/
/** chunk id: 877362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
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
let w = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk99690.Z;

function N(e) {
  var t, n;
  let {
    guildId: o
  } = e, d = (0, a.e7)([b.Z], () => b.Z.getGuild(o)), E = (0, a.e7)([x.Z], () => x.Z.getSortedRoles(o).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), N = (0, a.e7)([C.default], () => C.default.getCurrentUser()), O = null == N ? true : N.id, Z = (0, a.e7)([h.ZP], () => null != O ? h.ZP.getMember(o, O) : true, [O, o]), k = (null == Z ? true : Z.premiumSince) != null, A = (0, a.e7)([p.Z], () => p.Z.useReducedMotion), {
    avatarDecorationSrc: U,
    avatarSrc: R,
    eventHandlers: L
  } = (0, _.Z)({
    userId: null == N ? true : N.id,
    guildId: o,
    size: u.EFr.SIZE_40,
    animateOnHover: !A
  });
  return null == d || null == Z || null == N ? null : (0, r.jsxs)(s.$, {
    className: y.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: y.image,
      src: S
    }), (0, r.jsxs)("div", {
      className: y.textContainer,
      children: [(0, r.jsx)(l.xvT, {
        variant: "text-md/semibold",
        children: I.intl.string(k ? P.default.KSWK1d : P.default.XXXX5u)
      }), (0, r.jsx)(l.xvT, {
        variant: "text-sm/medium",
        children: I.intl.format(k ? P.default["7fWTg4"] : P.default["7PXeeX"], {
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
    }), null != E && !k && (0, r.jsx)(v.l, {
      avatar: (0, r.jsx)(w, (t = function(e) {
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
        user: N,
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
        name: j.ZP.getName(o, null, N),
        colorString: E.colorString,
        colorStrings: E.colorStrings
      }),
      className: i()(y.content, y.exampleMessage),
      message: I.intl.string(I.t["6OSasb"]),
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