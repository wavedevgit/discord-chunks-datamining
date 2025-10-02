/** Chunk was on 56848 **/
/** chunk id: 264481, original params: e,t,n (module,exports,require) **/
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
let y = [() => Chunk388032.intl.string(Chunk388032.t.madJdH), () => Chunk388032.intl.string(Chunk388032.t.NYmfoK), () => Chunk388032.intl.string(Chunk388032.t.R2PaCg), () => Chunk388032.intl.string(Chunk388032.t.laSR8v), () => Chunk388032.intl.string(Chunk388032.t.DnsJEx)],
  b = [() => Chunk388032.intl.string(Chunk388032.t.nFSbeH), () => Chunk388032.intl.string(Chunk388032.t.gTcxOz), () => Chunk388032.intl.string(Chunk388032.t["8T0wYm"]), () => Chunk388032.intl.string(Chunk388032.t.BIHl1t), () => Chunk388032.intl.string(Chunk388032.t.jhBm09)],
  j = [() => Chunk388032.intl.string(Chunk388032.t.AyMGXF), () => Chunk388032.intl.string(Chunk388032.t.aAFW7e), e => m.intl.formatToPlainString(m.t.h2g0cH, {
    name: e
  }), () => Chunk388032.intl.string(Chunk388032.t["rrYh5+"]), () => Chunk388032.intl.string(Chunk388032.t["HX3K+P"]), () => Chunk388032.intl.string(Chunk388032.t["/yW3aW"]), () => Chunk388032.intl.string(Chunk388032.t["PmL/v7"]), () => Chunk388032.intl.string(Chunk388032.t.IALa3t), () => Chunk388032.intl.string(Chunk388032.t.HRcTFB), () => Chunk388032.intl.string(Chunk388032.t.NuCqPj), () => Chunk388032.intl.string(Chunk388032.t["M1tw+/"]), () => Chunk388032.intl.string(Chunk388032.t.UBm1y8), () => Chunk388032.intl.string(Chunk388032.t.Cu95PT), () => Chunk388032.intl.string(Chunk388032.t["R/wFur"]), () => Chunk388032.intl.string(Chunk388032.t.HQPAVV), () => Chunk388032.intl.string(Chunk388032.t.YolGh4)],
  O = [Chunk981631.ABu.STEAM, Chunk981631.ABu.PLAYSTATION, Chunk981631.ABu.XBOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.BATTLENET, Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.EPIC_GAMES, Chunk981631.ABu.RIOT_GAMES, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.SPOTIFY, Chunk981631.ABu.YOUTUBE, Chunk981631.ABu.CRUNCHYROLL, Chunk981631.ABu.BUNGIE];

function x(e) {
  let {
    heading: t,
    bodyText: n,
    children: i
  } = e;
  return (0, r.jsxs)("div", {
    className: v.empty,
    children: [(0, r.jsxs)("div", {
      className: v.textContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: t
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: n
      })]
    }), i]
  })
}

function P() {
  let e = Chunk388032.intl.string(Chunk388032.t.RnD2yc),
    [t] = Chunk647438.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(y)) ? module : y[0])()
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
      return (null != (e = (0, Chunk392711.sample)(b)) ? module : b[0])()
    });
  return (0, Chunk951288.jsx)(x, {
    heading: module,
    bodyText: exports
  })
}

function I(e) {
  let {
    user: t,
    guildId: n,
    channelId: o,
    onClose: c
  } = e, u = g.ZP.getName(n, o, t), d = m.intl.formatToPlainString(m.t.sjSitL, {
    name: u
  }), [f] = i.useState(() => {
    var e;
    return (null != (e = (0, l.sample)(j)) ? e : j[0])(u)
  }), h = i.useCallback(() => {
    s.Z.openPrivateChannel({
      recipientIds: t.id
    }), null == c || c()
  }, [t.id, c]);
  return (0, r.jsx)(x, {
    heading: d,
    bodyText: f,
    children: (0, r.jsx)("div", {
      className: v.buttonRow,
      children: (0, r.jsx)(p.O1, {
        icon: a.kBi,
        text: m.intl.string(m.t["g33r/P"]),
        onClick: h
      })
    })
  })
}

function w() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsx)("div", {
    className: Chunk839468.connectionPlatforms,
    children: O.map((t, n) => {
      let i = c.Z.get(t);
      if (null == i) return null;
      let l = (0, a.wjy)(e) ? i.icon.darkPNG : i.icon.lightPNG;
      return (0, r.jsx)("img", {
        src: l,
        alt: i.name,
        className: v.connectionIcon
      }, n)
    })
  })
}

function E(e) {
  let {
    onClose: t
  } = e, l = (0, u.P6)("UserProfileModalV2EmptyActivityCurrentUser"), s = i.useCallback(() => {
    null == t || t(), (0, f.openUserSettings)(d.n.CONNECTIONS_PANEL, {
      section: h.oAB.CONNECTIONS
    })
  }, [t]), o = i.useCallback(() => {
    null == t || t(), (0, f.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, {
      section: h.oAB.CONTENT_AND_SOCIAL,
      subsection: "CONNECTED_GAMES"
    })
  }, [t]), c = i.useCallback(() => {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("82077").then(n.bind(n, 953848));
      return t => (0, r.jsx)(e, function(e) {
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
      }({}, t))
    })
  }, []);
  return (0, r.jsxs)(x, {
    heading: m.intl.string(m.t.VB6LWV),
    bodyText: m.intl.string(m.t.KpjsU1),
    children: [(0, r.jsx)(w, {}), (0, r.jsxs)("div", {
      className: v.buttonRow,
      children: [(0, r.jsx)(p.O1, {
        text: m.intl.string(m.t["/Hl24e"]),
        onClick: s
      }), (0, r.jsx)(p.O1, {
        text: m.intl.string(m.t.GTCx0t),
        onClick: o
      })]
    }), l && (0, r.jsx)("div", {
      className: v.reportMissingActivity,
      children: (0, r.jsx)(a.Avr, {
        text: m.intl.string(m.t["+huUnJ"]),
        onClick: c,
        size: "sm"
      })
    })]
  })
}