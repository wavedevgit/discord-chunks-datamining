/** Chunk was on 3091 **/
/** chunk id: 264481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P9: () => I,
  Uf: () => S,
  b0: () => P,
  s_: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk272304 = require("./272304.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk839468 = require("./839468.js");
let y = [() => Chunk388032.intl.string(Chunk388032.t.madJdH), () => Chunk388032.intl.string(Chunk388032.t.NYmfoK), () => Chunk388032.intl.string(Chunk388032.t.R2PaCg), () => Chunk388032.intl.string(Chunk388032.t.laSR8v), () => Chunk388032.intl.string(Chunk388032.t.DnsJEx)],
  v = [() => Chunk388032.intl.string(Chunk388032.t.nFSbeH), () => Chunk388032.intl.string(Chunk388032.t.gTcxOz), () => Chunk388032.intl.string(Chunk388032.t["8T0wYm"]), () => Chunk388032.intl.string(Chunk388032.t.BIHl1t), () => Chunk388032.intl.string(Chunk388032.t.jhBm09)],
  j = [() => Chunk388032.intl.string(Chunk388032.t.AyMGXF), () => Chunk388032.intl.string(Chunk388032.t.aAFW7e), e => b.intl.formatToPlainString(b.t.h2g0cH, {
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
    className: h.empty,
    children: [(0, r.jsxs)("div", {
      className: h.textContainer,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: t
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: n
      })]
    }), i]
  })
}

function _() {
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

function P() {
  let e = Chunk388032.intl.string(Chunk388032.t.bFgqYG),
    [t] = Chunk647438.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(v)) ? module : v[0])()
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
    channelId: c,
    onClose: s
  } = e, u = g.ZP.getName(n, c, t), d = b.intl.formatToPlainString(b.t.sjSitL, {
    name: u
  }), [f] = i.useState(() => {
    var e;
    return (null != (e = (0, a.sample)(j)) ? e : j[0])(u)
  }), m = i.useCallback(() => {
    o.Z.openPrivateChannel({
      recipientIds: t.id
    }), null == s || s()
  }, [t.id, s]);
  return (0, r.jsx)(x, {
    heading: d,
    bodyText: f,
    children: (0, r.jsx)("div", {
      className: h.buttonRow,
      children: (0, r.jsx)(p.O1, {
        icon: l.kBi,
        text: b.intl.string(b.t["g33r/P"]),
        onClick: m
      })
    })
  })
}

function w() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsx)("div", {
    className: Chunk839468.connectionPlatforms,
    children: O.map((t, n) => {
      let i = s.Z.get(t);
      if (null == i) return null;
      let a = (0, l.wjy)(e) ? i.icon.darkPNG : i.icon.lightPNG;
      return (0, r.jsx)("img", {
        src: a,
        alt: i.name,
        className: h.connectionIcon
      }, n)
    })
  })
}

function S(e) {
  let {
    onClose: t
  } = e, a = (0, u.P6)("UserProfileModalV2EmptyActivityCurrentUser"), o = i.useCallback(() => {
    null == t || t(), (0, f.openUserSettings)(d.n.CONNECTIONS_PANEL, {
      section: m.oAB.CONNECTIONS
    })
  }, [t]), c = i.useCallback(() => {
    null == t || t(), (0, f.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, {
      section: m.oAB.CONTENT_AND_SOCIAL,
      subsection: "CONNECTED_GAMES"
    })
  }, [t]), s = i.useCallback(() => {
    (0, l.ZDy)(async () => {
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
    children: [(0, r.jsx)(w, {}), (0, r.jsxs)("div", {
      className: h.buttonRow,
      children: [(0, r.jsx)(p.O1, {
        text: b.intl.string(b.t["/Hl24e"]),
        onClick: o
      }), (0, r.jsx)(p.O1, {
        text: b.intl.string(b.t.GTCx0t),
        onClick: c
      })]
    }), a && (0, r.jsx)("div", {
      className: h.reportMissingActivity,
      children: (0, r.jsx)(l.Avr, {
        text: b.intl.string(b.t["+huUnJ"]),
        onClick: s,
        size: "sm"
      })
    })]
  })
}