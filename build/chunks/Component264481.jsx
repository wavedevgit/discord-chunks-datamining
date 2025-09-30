/** Chunk was on 49902 **/
/** chunk id: 264481, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  P9: () => I,
  Uf: () => E,
  b0: () => S,
  s_: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk220410 = require("./220410.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk839468 = require("./839468.js");
let b = [() => Chunk388032.intl.string(Chunk388032.t.madJdH), () => Chunk388032.intl.string(Chunk388032.t.NYmfoK), () => Chunk388032.intl.string(Chunk388032.t.R2PaCg), () => Chunk388032.intl.string(Chunk388032.t.laSR8v), () => Chunk388032.intl.string(Chunk388032.t.DnsJEx)],
  y = [() => Chunk388032.intl.string(Chunk388032.t.nFSbeH), () => Chunk388032.intl.string(Chunk388032.t.gTcxOz), () => Chunk388032.intl.string(Chunk388032.t["8T0wYm"]), () => Chunk388032.intl.string(Chunk388032.t.BIHl1t), () => Chunk388032.intl.string(Chunk388032.t.jhBm09)],
  O = [() => Chunk388032.intl.string(Chunk388032.t.AyMGXF), () => Chunk388032.intl.string(Chunk388032.t.aAFW7e), e => m.intl.formatToPlainString(m.t.h2g0cH, {
    name: e
  }), () => Chunk388032.intl.string(Chunk388032.t["rrYh5+"]), () => Chunk388032.intl.string(Chunk388032.t["HX3K+P"]), () => Chunk388032.intl.string(Chunk388032.t["/yW3aW"]), () => Chunk388032.intl.string(Chunk388032.t["PmL/v7"]), () => Chunk388032.intl.string(Chunk388032.t.IALa3t), () => Chunk388032.intl.string(Chunk388032.t.HRcTFB), () => Chunk388032.intl.string(Chunk388032.t.NuCqPj), () => Chunk388032.intl.string(Chunk388032.t["M1tw+/"]), () => Chunk388032.intl.string(Chunk388032.t.UBm1y8), () => Chunk388032.intl.string(Chunk388032.t.Cu95PT), () => Chunk388032.intl.string(Chunk388032.t["R/wFur"]), () => Chunk388032.intl.string(Chunk388032.t.HQPAVV), () => Chunk388032.intl.string(Chunk388032.t.YolGh4)],
  j = [Chunk981631.ABu.STEAM, Chunk981631.ABu.PLAYSTATION, Chunk981631.ABu.XBOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.BATTLENET, Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.EPIC_GAMES, Chunk981631.ABu.RIOT_GAMES, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.SPOTIFY, Chunk981631.ABu.YOUTUBE, Chunk981631.ABu.CRUNCHYROLL, Chunk981631.ABu.BUNGIE];

function x(e) {
  let {
    heading: t,
    bodyText: r,
    children: i
  } = e;
  return (0, n.jsxs)("div", {
    className: v.empty,
    children: [(0, n.jsxs)("div", {
      className: v.textContainer,
      children: [(0, n.jsx)(a.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: t
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: r
      })]
    }), i]
  })
}

function P() {
  let e = Chunk388032.intl.string(Chunk388032.t.RnD2yc),
    [t] = Chunk647438.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(b)) ? module : b[0])()
    });
  return (0, Chunk951288.jsx)(x, {
    heading: module,
    bodyText: exports
  })
}

function S() {
  let e = Chunk388032.intl.string(Chunk388032.t.bFgqYG),
    [t] = Chunk647438.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(y)) ? module : y[0])()
    });
  return (0, Chunk951288.jsx)(x, {
    heading: module,
    bodyText: exports
  })
}

function I(e) {
  let {
    user: t,
    guildId: r,
    channelId: o,
    onClose: c
  } = e, u = g.ZP.getName(r, o, t), d = m.intl.formatToPlainString(m.t.sjSitL, {
    name: u
  }), [f] = i.useState(() => {
    var e;
    return (null != (e = (0, l.sample)(O)) ? e : O[0])(u)
  }), p = i.useCallback(() => {
    s.Z.openPrivateChannel({
      recipientIds: t.id
    }), null == c || c()
  }, [t.id, c]);
  return (0, n.jsx)(x, {
    heading: d,
    bodyText: f,
    children: (0, n.jsx)("div", {
      className: v.buttonRow,
      children: (0, n.jsx)(h.O1, {
        icon: a.kBi,
        text: m.intl.string(m.t["g33r/P"]),
        onClick: p
      })
    })
  })
}

function w() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsx)("div", {
    className: Chunk839468.connectionPlatforms,
    children: j.map((t, r) => {
      let i = c.Z.get(t);
      if (null == i) return null;
      let l = (0, a.wjy)(e) ? i.icon.darkPNG : i.icon.lightPNG;
      return (0, n.jsx)("img", {
        src: l,
        alt: i.name,
        className: v.connectionIcon
      }, r)
    })
  })
}

function E(e) {
  let {
    onClose: t
  } = e, l = (0, u.P6)("UserProfileModalV2EmptyActivityCurrentUser"), s = i.useCallback(() => {
    null == t || t(), (0, f.openUserSettings)(d.n.CONNECTIONS_PANEL, {
      section: p.oAB.CONNECTIONS
    })
  }, [t]), o = i.useCallback(() => {
    null == t || t(), (0, f.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, {
      section: p.oAB.CONTENT_AND_SOCIAL,
      subsection: "CONNECTED_GAMES"
    })
  }, [t]), c = i.useCallback(() => {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await r.e("82077").then(r.bind(r, 953848));
      return t => (0, n.jsx)(e, function(e) {
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
      }({}, t))
    })
  }, []);
  return (0, n.jsxs)(x, {
    heading: m.intl.string(m.t.VB6LWV),
    bodyText: m.intl.string(m.t.KpjsU1),
    children: [(0, n.jsx)(w, {}), (0, n.jsxs)("div", {
      className: v.buttonRow,
      children: [(0, n.jsx)(h.O1, {
        text: m.intl.string(m.t["/Hl24e"]),
        onClick: s
      }), (0, n.jsx)(h.O1, {
        text: m.intl.string(m.t.GTCx0t),
        onClick: o
      })]
    }), l && (0, n.jsx)("div", {
      className: v.reportMissingActivity,
      children: (0, n.jsx)(a.Avr, {
        text: m.intl.string(m.t["+huUnJ"]),
        onClick: c,
        size: "sm"
      })
    })]
  })
}