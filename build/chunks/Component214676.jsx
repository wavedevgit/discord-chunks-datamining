/** Chunk was on 34249 **/
/** chunk id: 214676, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  L: () => v,
  T: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk328006 = require("./328006.js"),
  Chunk334840 = require("./334840.js"),
  Chunk48736 = require("./48736.jsx"),
  Chunk610042 = require("./610042.jsx"),
  Chunk29086 = require("./29086.jsx"),
  Chunk203656 = require("./203656.jsx"),
  Chunk525104 = require("./525104.js"),
  Chunk176201 = require("./176201.js"),
  Chunk178758 = require("./178758.js"),
  Chunk652215 = require("./652215.js"),
  Chunk743981 = require("./743981.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk273034 = require("./273034.js"),
  Chunk191017 = require("./191017.js");

function y() {
  var e;
  let [t, r] = l.useState(() => {
    let e = Math.floor(Math.random() * g.Oz.length);
    return {
      primary_color: g.Oz[e].start,
      secondary_color: g.Oz[e].end,
      tertiary_color: null
    }
  }), {
    gradientStyle: a,
    gradientClassname: c
  } = (0, o.v5K)({
    colorStrings: (0, m.K3)(t),
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: true
  });
  return (0, n.jsxs)("div", {
    className: h.kL,
    children: [(0, n.jsx)("div", {
      className: h.zC,
      children: (0, n.jsx)(b.V, {
        avatar: i.A,
        username: "Cherry",
        usernameStyle: a,
        usernameClassName: s()(c, O.q),
        message: j.intl.string(j.t["6OSasb"])
      })
    }), (0, n.jsx)(d.default, {
      defaultColor: _.TGz,
      colors: g.Oz,
      value: t.primary_color,
      secondaryValue: null != (e = t.secondary_color) ? e : true,
      onChange: e => {
        var n, l;
        return r((n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, t), l = l = {
          primary_color: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      },
      onChangeGradientColors: e => r({
        primary_color: e[0],
        secondary_color: e[1],
        tertiary_color: null
      }),
      isGradient: true
    })]
  })
}

function v(e) {
  let {
    guildId: t
  } = e, [r, a] = l.useState(x.bl.HEART), s = (0, f.A)(), o = l.useMemo(() => ({
    unlockedBadges: s.unlockedBadges.slice(0, 10),
    lockedBadges: []
  }), [s]);
  return (0, n.jsxs)("div", {
    className: h.kL,
    children: [(0, n.jsx)("div", {
      className: h.zC,
      children: (0, n.jsx)(b.V, {
        avatar: c.A,
        username: "Roka",
        usernameStyle: {
          color: "var(--brand-400)"
        },
        message: j.intl.string(j.t["6OSasb"]),
        decorations: (0, n.jsx)(p.M, {
          guildId: t,
          tag: "GGEZ",
          badge: r
        })
      })
    }), (0, n.jsx)(u.y, {
      selectedBadge: r,
      onBadgeClicked: a,
      badgeCollection: o
    })]
  })
}