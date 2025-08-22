/** Chunk was on 82008 **/
/** chunk id: 264481, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  P9: () => I,
  Uf: () => Z,
  b0: () => O,
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
  Chunk839468 = require("./839468.js");
let x = [() => Chunk388032.intl.string(Chunk388032.t.madJdH), () => Chunk388032.intl.string(Chunk388032.t.NYmfoK), () => Chunk388032.intl.string(Chunk388032.t.R2PaCg), () => Chunk388032.intl.string(Chunk388032.t.laSR8v), () => Chunk388032.intl.string(Chunk388032.t.DnsJEx)],
  b = [() => Chunk388032.intl.string(Chunk388032.t.nFSbeH), () => Chunk388032.intl.string(Chunk388032.t.gTcxOz), () => Chunk388032.intl.string(Chunk388032.t["8T0wYm"]), () => Chunk388032.intl.string(Chunk388032.t.BIHl1t), () => Chunk388032.intl.string(Chunk388032.t.jhBm09)],
  j = [() => Chunk388032.intl.string(Chunk388032.t.AyMGXF), () => Chunk388032.intl.string(Chunk388032.t.aAFW7e), e => p.intl.formatToPlainString(p.t.h2g0cH, {
    name: e
  }), () => Chunk388032.intl.string(Chunk388032.t["rrYh5+"]), () => Chunk388032.intl.string(Chunk388032.t["HX3K+P"]), () => Chunk388032.intl.string(Chunk388032.t["/yW3aW"]), () => Chunk388032.intl.string(Chunk388032.t["PmL/v7"]), () => Chunk388032.intl.string(Chunk388032.t.IALa3t), () => Chunk388032.intl.string(Chunk388032.t.HRcTFB), () => Chunk388032.intl.string(Chunk388032.t.NuCqPj), () => Chunk388032.intl.string(Chunk388032.t["M1tw+/"]), () => Chunk388032.intl.string(Chunk388032.t.UBm1y8), () => Chunk388032.intl.string(Chunk388032.t.Cu95PT), () => Chunk388032.intl.string(Chunk388032.t["R/wFur"]), () => Chunk388032.intl.string(Chunk388032.t.HQPAVV), () => Chunk388032.intl.string(Chunk388032.t.YolGh4)],
  g = [Chunk981631.ABu.STEAM, Chunk981631.ABu.PLAYSTATION, Chunk981631.ABu.XBOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.BATTLENET, Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.EPIC_GAMES, Chunk981631.ABu.RIOT_GAMES, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.SPOTIFY, Chunk981631.ABu.YOUTUBE, Chunk981631.ABu.CRUNCHYROLL, Chunk981631.ABu.BUNGIE];

function v(e) {
  let {
    heading: n,
    bodyText: t,
    children: l
  } = e;
  return (0, r.jsxs)("div", {
    className: h.empty,
    children: [(0, r.jsxs)("div", {
      className: h.textContainer,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: n
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: t
      })]
    }), l]
  })
}

function y() {
  let e = Chunk388032.intl.string(Chunk388032.t.RnD2yc),
    [n] = Chunk647438.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(x)) ? module : x[0])()
    });
  return (0, Chunk951288.jsx)(v, {
    heading: module,
    bodyText: exports
  })
}

function O() {
  let e = Chunk388032.intl.string(Chunk388032.t.bFgqYG),
    [n] = Chunk647438.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(b)) ? module : b[0])()
    });
  return (0, Chunk951288.jsx)(v, {
    heading: module,
    bodyText: exports
  })
}

function I(e) {
  let {
    user: n,
    guildId: t,
    channelId: s,
    onClose: a
  } = e, d = u.ZP.getName(t, s, n), m = p.intl.formatToPlainString(p.t.sjSitL, {
    name: d
  }), [x] = l.useState(() => {
    var e;
    return (null != (e = (0, o.sample)(j)) ? e : j[0])(d)
  }), b = l.useCallback(() => {
    c.Z.openPrivateChannel({
      recipientIds: n.id
    }), null == a || a()
  }, [n.id, a]);
  return (0, r.jsx)(v, {
    heading: m,
    bodyText: x,
    children: (0, r.jsx)("div", {
      className: h.buttonRow,
      children: (0, r.jsx)(f.tG, {
        icon: i.kBi,
        text: p.intl.string(p.t["g33r/P"]),
        onClick: b,
        themeColor: "secondary"
      })
    })
  })
}

function _() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsx)("div", {
    className: Chunk839468.connectionPlatforms,
    children: g.map((n, t) => {
      let l = d.Z.get(n);
      if (null == l) return null;
      let o = (0, i.wjy)(e) ? l.icon.darkPNG : l.icon.lightPNG;
      return (0, r.jsx)("img", {
        src: o,
        alt: l.name,
        className: h.connectionIcon
      }, t)
    })
  })
}

function Z(e) {
  let {
    onClose: n
  } = e, t = l.useCallback(() => {
    null == n || n(), s.Z.open(m.oAB.CONNECTIONS)
  }, [n]), o = l.useCallback(() => {
    null == n || n(), s.Z.open(m.oAB.CONTENT_AND_SOCIAL, "CONNECTED_GAMES")
  }, [n]);
  return (0, r.jsxs)(v, {
    heading: p.intl.string(p.t.VB6LWV),
    bodyText: p.intl.string(p.t.KpjsU1),
    children: [(0, r.jsx)(_, {}), (0, r.jsxs)("div", {
      className: h.buttonRow,
      children: [(0, r.jsx)(f.tG, {
        text: p.intl.string(p.t["/Hl24e"]),
        onClick: t,
        themeColor: "secondary"
      }), (0, r.jsx)(f.tG, {
        text: p.intl.string(p.t.GTCx0t),
        onClick: o,
        themeColor: "secondary"
      })]
    })]
  })
}