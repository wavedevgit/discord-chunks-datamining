/** Chunk was on 45854 **/
/** chunk id: 845602, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => k,
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk957537 = require("./957537.js"),
  Chunk839008 = require("./839008.js"),
  Chunk797967 = require("./797967.jsx"),
  Chunk353857 = require("./353857.jsx"),
  Chunk978088 = require("./978088.jsx"),
  Chunk9377 = require("./9377.jsx"),
  Chunk101017 = require("./101017.js"),
  Chunk606318 = require("./606318.js"),
  Chunk141006 = require("./141006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk131085 = require("./131085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk947018 = require("./947018.js"),
  Chunk715882 = require("./715882.js");

function x() {
  var e;
  let [t, n] = Chunk647438.useState(() => {
    let e = Math.floor(Math.random() * Chunk141006.tl.length);
    return {
      primary_color: Chunk141006.tl[module].start,
      secondary_color: Chunk141006.tl[module].end,
      tertiary_color: null
    }
  }), {
    gradientStyle: o,
    gradientClassname: c
  } = (0, Chunk481060.Icv)({
    colorStrings: (0, Chunk606318.DX)(exports),
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: true
  });
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk947018.container,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk947018.messageContainer,
      children: (0, Chunk951288.jsx)(Chunk978088.l, {
        avatar: Chunk957537.Z,
        username: "Cherry",
        usernameStyle: Chunk120356,
        usernameClassName: s()(Chunk839008, Chunk715882.animateGradient),
        message: Chunk388032.intl.string(Chunk388032.t["6OSasb"])
      })
    }), (0, Chunk951288.jsx)(Chunk797967.default, {
      defaultColor: Chunk981631.p6O,
      colors: Chunk141006.tl,
      value: exports.primary_color,
      secondaryValue: null != (e = exports.secondary_color) ? module : true,
      onChange: e => {
        var r, a;
        return n((r = function(e) {
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
        }({}, t), a = a = {
          primary_color: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
        }), r))
      },
      onChangeGradientColors: e => n({
        primary_color: e[0],
        secondary_color: e[1],
        tertiary_color: null
      }),
      isGradient: true
    })]
  })
}

function k(e) {
  let {
    guildId: t
  } = e, [n, o] = a.useState(C.x_.HEART), s = (0, g.Z)(), l = a.useMemo(() => ({
    unlockedBadges: s.unlockedBadges.slice(0, 10),
    lockedBadges: []
  }), [s]);
  return (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsx)("div", {
      className: j.messageContainer,
      children: (0, r.jsx)(p.l, {
        avatar: c.Z,
        username: "Roka",
        usernameStyle: {
          color: "var(--brand-400)"
        },
        message: h.intl.string(h.t["6OSasb"]),
        decorations: (0, r.jsx)(m.S, {
          guildId: t,
          tag: "GGEZ",
          badge: n
        })
      })
    }), (0, r.jsx)(u.g, {
      selectedBadge: n,
      onBadgeClicked: o,
      badgeCollection: l
    })]
  })
}