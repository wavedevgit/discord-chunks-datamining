/** Chunk was on 30355 **/
/** chunk id: 264481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P9: () => S,
  Uf: () => E,
  b0: () => I,
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
  h = [() => Chunk388032.intl.string(Chunk388032.t.nFSbeH), () => Chunk388032.intl.string(Chunk388032.t.gTcxOz), () => Chunk388032.intl.string(Chunk388032.t["8T0wYm"]), () => Chunk388032.intl.string(Chunk388032.t.BIHl1t), () => Chunk388032.intl.string(Chunk388032.t.jhBm09)],
  v = [() => Chunk388032.intl.string(Chunk388032.t.AyMGXF), () => Chunk388032.intl.string(Chunk388032.t.aAFW7e), e => b.intl.formatToPlainString(b.t.h2g0cH, {
    name: e
  }), () => Chunk388032.intl.string(Chunk388032.t["rrYh5+"]), () => Chunk388032.intl.string(Chunk388032.t["HX3K+P"]), () => Chunk388032.intl.string(Chunk388032.t["/yW3aW"]), () => Chunk388032.intl.string(Chunk388032.t["PmL/v7"]), () => Chunk388032.intl.string(Chunk388032.t.IALa3t), () => Chunk388032.intl.string(Chunk388032.t.HRcTFB), () => Chunk388032.intl.string(Chunk388032.t.NuCqPj), () => Chunk388032.intl.string(Chunk388032.t["M1tw+/"]), () => Chunk388032.intl.string(Chunk388032.t.UBm1y8), () => Chunk388032.intl.string(Chunk388032.t.Cu95PT), () => Chunk388032.intl.string(Chunk388032.t["R/wFur"]), () => Chunk388032.intl.string(Chunk388032.t.HQPAVV), () => Chunk388032.intl.string(Chunk388032.t.YolGh4)],
  O = [Chunk981631.ABu.STEAM, Chunk981631.ABu.PLAYSTATION, Chunk981631.ABu.XBOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.BATTLENET, Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.EPIC_GAMES, Chunk981631.ABu.RIOT_GAMES, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.SPOTIFY, Chunk981631.ABu.YOUTUBE, Chunk981631.ABu.CRUNCHYROLL, Chunk981631.ABu.BUNGIE];

function x(e) {
  let {
    heading: t,
    bodyText: n,
    children: l
  } = e;
  return (0, r.jsxs)("div", {
    className: j.empty,
    children: [(0, r.jsxs)("div", {
      className: j.textContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: t
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: n
      })]
    }), l]
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

function I() {
  let e = Chunk388032.intl.string(Chunk388032.t.bFgqYG),
    [t] = Chunk647438.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(h)) ? module : h[0])()
    });
  return (0, Chunk951288.jsx)(x, {
    heading: module,
    bodyText: exports
  })
}

function S(e) {
  let {
    user: t,
    guildId: n,
    channelId: o,
    onClose: c
  } = e, u = m.ZP.getName(n, o, t), d = b.intl.formatToPlainString(b.t.sjSitL, {
    name: u
  }), [f] = l.useState(() => {
    var e;
    return (null != (e = (0, i.sample)(v)) ? e : v[0])(u)
  }), p = l.useCallback(() => {
    s.Z.openPrivateChannel({
      recipientIds: t.id
    }), null == c || c()
  }, [t.id, c]);
  return (0, r.jsx)(x, {
    heading: d,
    bodyText: f,
    children: (0, r.jsx)("div", {
      className: j.buttonRow,
      children: (0, r.jsx)(g.O1, {
        icon: a.kBi,
        text: b.intl.string(b.t["g33r/P"]),
        onClick: p
      })
    })
  })
}

function A() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsx)("div", {
    className: Chunk839468.connectionPlatforms,
    children: O.map((t, n) => {
      let l = c.Z.get(t);
      if (null == l) return null;
      let i = (0, a.wjy)(e) ? l.icon.darkPNG : l.icon.lightPNG;
      return (0, r.jsx)("img", {
        src: i,
        alt: l.name,
        className: j.connectionIcon
      }, n)
    })
  })
}

function E(e) {
  let {
    onClose: t
  } = e, i = (0, u.P6)("UserProfileModalV2EmptyActivityCurrentUser"), s = l.useCallback(() => {
    null == t || t(), (0, f.openUserSettings)(d.n.CONNECTIONS_PANEL, {
      section: p.oAB.CONNECTIONS
    })
  }, [t]), o = l.useCallback(() => {
    null == t || t(), (0, f.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, {
      section: p.oAB.CONTENT_AND_SOCIAL,
      subsection: "CONNECTED_GAMES"
    })
  }, [t]), c = l.useCallback(() => {
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
    heading: b.intl.string(b.t.VB6LWV),
    bodyText: b.intl.string(b.t.KpjsU1),
    children: [(0, r.jsx)(A, {}), (0, r.jsxs)("div", {
      className: j.buttonRow,
      children: [(0, r.jsx)(g.O1, {
        text: b.intl.string(b.t["/Hl24e"]),
        onClick: s
      }), (0, r.jsx)(g.O1, {
        text: b.intl.string(b.t.GTCx0t),
        onClick: o
      })]
    }), i && (0, r.jsx)("div", {
      className: j.reportMissingActivity,
      children: (0, r.jsx)(a.Avr, {
        text: b.intl.string(b.t["+huUnJ"]),
        onClick: c,
        size: "sm"
      })
    })]
  })
}