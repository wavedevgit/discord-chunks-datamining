/** Chunk was on 30355 **/
/** chunk id: 264481, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  P9: () => P,
  Uf: () => S,
  b0: () => v,
  s_: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk230711 = require("./230711.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk5192 = require("./5192.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk835540 = require("./835540.js");
let p = [() => Chunk388032.intl.string(Chunk388032.t.madJdH), () => Chunk388032.intl.string(Chunk388032.t.NYmfoK), () => Chunk388032.intl.string(Chunk388032.t.R2PaCg), () => Chunk388032.intl.string(Chunk388032.t.laSR8v), () => Chunk388032.intl.string(Chunk388032.t.DnsJEx)],
  j = [() => Chunk388032.intl.string(Chunk388032.t.nFSbeH), () => Chunk388032.intl.string(Chunk388032.t.gTcxOz), () => Chunk388032.intl.string(Chunk388032.t["8T0wYm"]), () => Chunk388032.intl.string(Chunk388032.t.BIHl1t), () => Chunk388032.intl.string(Chunk388032.t.jhBm09)],
  O = [() => Chunk388032.intl.string(Chunk388032.t.AyMGXF), () => Chunk388032.intl.string(Chunk388032.t.aAFW7e), e => g.intl.formatToPlainString(g.t.h2g0cH, {
    name: e
  }), () => Chunk388032.intl.string(Chunk388032.t["rrYh5+"]), () => Chunk388032.intl.string(Chunk388032.t["HX3K+P"]), () => Chunk388032.intl.string(Chunk388032.t["/yW3aW"]), () => Chunk388032.intl.string(Chunk388032.t["PmL/v7"]), () => Chunk388032.intl.string(Chunk388032.t.IALa3t), () => Chunk388032.intl.string(Chunk388032.t.HRcTFB), () => Chunk388032.intl.string(Chunk388032.t.NuCqPj), () => Chunk388032.intl.string(Chunk388032.t["M1tw+/"]), () => Chunk388032.intl.string(Chunk388032.t.UBm1y8), () => Chunk388032.intl.string(Chunk388032.t.Cu95PT), () => Chunk388032.intl.string(Chunk388032.t["R/wFur"]), () => Chunk388032.intl.string(Chunk388032.t.HQPAVV), () => Chunk388032.intl.string(Chunk388032.t.YolGh4)],
  x = [Chunk981631.ABu.STEAM, Chunk981631.ABu.PLAYSTATION, Chunk981631.ABu.XBOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.BATTLENET, Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.EPIC_GAMES, Chunk981631.ABu.RIOT_GAMES, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.SPOTIFY, Chunk981631.ABu.YOUTUBE, Chunk981631.ABu.CRUNCHYROLL, Chunk981631.ABu.BUNGIE];

function h(e) {
  let {
    heading: t,
    bodyText: r,
    children: l
  } = e;
  return (0, n.jsxs)("div", {
    className: b.empty,
    children: [(0, n.jsxs)("div", {
      className: b.textContainer,
      children: [(0, n.jsx)(a.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: t
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: r
      })]
    }), l]
  })
}

function y() {
  let e = Chunk388032.intl.string(Chunk388032.t.RnD2yc),
    [t] = Chunk647438.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(p)) ? module : p[0])()
    });
  return (0, Chunk951288.jsx)(h, {
    heading: module,
    bodyText: exports
  })
}

function v() {
  let e = Chunk388032.intl.string(Chunk388032.t.bFgqYG),
    [t] = Chunk647438.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(j)) ? module : j[0])()
    });
  return (0, Chunk951288.jsx)(h, {
    heading: module,
    bodyText: exports
  })
}

function P(e) {
  let {
    user: t,
    guildId: r,
    channelId: o,
    onClose: c
  } = e, u = d.ZP.getName(r, o, t), m = g.intl.formatToPlainString(g.t.sjSitL, {
    name: u
  }), [p] = l.useState(() => {
    var e;
    return (null != (e = (0, i.sample)(O)) ? e : O[0])(u)
  }), j = l.useCallback(() => {
    s.Z.openPrivateChannel({
      recipientIds: t.id
    }), null == c || c()
  }, [t.id, c]);
  return (0, n.jsx)(h, {
    heading: m,
    bodyText: p,
    children: (0, n.jsx)("div", {
      className: b.buttonRow,
      children: (0, n.jsx)(f.tG, {
        icon: a.kBi,
        text: g.intl.string(g.t["g33r/P"]),
        onClick: j,
        themeColor: "secondary"
      })
    })
  })
}

function A() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsx)("div", {
    className: Chunk835540.connectionPlatforms,
    children: x.map((t, r) => {
      let l = u.Z.get(t);
      if (null == l) return null;
      let i = (0, a.wjy)(e) ? l.icon.darkPNG : l.icon.lightPNG;
      return (0, n.jsx)("img", {
        src: i,
        alt: l.name,
        className: b.connectionIcon
      }, r)
    })
  })
}

function S(e) {
  let {
    onClose: t
  } = e, r = l.useCallback(() => {
    null == t || t(), o.Z.open(m.oAB.CONNECTIONS)
  }, [t]), i = l.useCallback(() => {
    null == t || t(), o.Z.open(m.oAB.CONTENT_AND_SOCIAL, "CONNECTED_GAMES")
  }, [t]);
  return (0, n.jsxs)(h, {
    heading: g.intl.string(g.t.VB6LWV),
    bodyText: g.intl.string(g.t.KpjsU1),
    children: [(0, n.jsx)(A, {}), (0, n.jsxs)("div", {
      className: b.buttonRow,
      children: [(0, n.jsx)(f.tG, {
        text: g.intl.string(g.t["/Hl24e"]),
        onClick: r,
        themeColor: "secondary"
      }), (0, n.jsx)(f.tG, {
        text: g.intl.string(g.t.GTCx0t),
        onClick: i,
        themeColor: "secondary"
      })]
    })]
  })
}