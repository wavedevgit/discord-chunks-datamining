/** Chunk was on 29458 **/
/** chunk id: 264481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P9: () => _,
  Uf: () => P,
  b0: () => v,
  s_: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk452803 = require("./452803.js");
let b = [() => Chunk388032.intl.string(Chunk388032.t.madJdH), () => Chunk388032.intl.string(Chunk388032.t.NYmfoK), () => Chunk388032.intl.string(Chunk388032.t.R2PaCg), () => Chunk388032.intl.string(Chunk388032.t.laSR8v), () => Chunk388032.intl.string(Chunk388032.t.DnsJEx)],
  j = [() => Chunk388032.intl.string(Chunk388032.t.nFSbeH), () => Chunk388032.intl.string(Chunk388032.t.gTcxOz), () => Chunk388032.intl.string(Chunk388032.t["8T0wYm"]), () => Chunk388032.intl.string(Chunk388032.t.BIHl1t), () => Chunk388032.intl.string(Chunk388032.t.jhBm09)],
  y = [() => Chunk388032.intl.string(Chunk388032.t.AyMGXF), () => Chunk388032.intl.string(Chunk388032.t.aAFW7e), e => m.intl.formatToPlainString(m.t.h2g0cH, {
    name: e
  }), () => Chunk388032.intl.string(Chunk388032.t["rrYh5+"]), () => Chunk388032.intl.string(Chunk388032.t["HX3K+P"]), () => Chunk388032.intl.string(Chunk388032.t["/yW3aW"]), () => Chunk388032.intl.string(Chunk388032.t["PmL/v7"]), () => Chunk388032.intl.string(Chunk388032.t.IALa3t), () => Chunk388032.intl.string(Chunk388032.t.HRcTFB), () => Chunk388032.intl.string(Chunk388032.t.NuCqPj), () => Chunk388032.intl.string(Chunk388032.t["M1tw+/"]), () => Chunk388032.intl.string(Chunk388032.t.UBm1y8), () => Chunk388032.intl.string(Chunk388032.t.Cu95PT), () => Chunk388032.intl.string(Chunk388032.t["R/wFur"]), () => Chunk388032.intl.string(Chunk388032.t.HQPAVV), () => Chunk388032.intl.string(Chunk388032.t.YolGh4)],
  x = [Chunk981631.ABu.STEAM, Chunk981631.ABu.PLAYSTATION, Chunk981631.ABu.XBOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.BATTLENET, Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.EPIC_GAMES, Chunk981631.ABu.RIOT_GAMES, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.SPOTIFY, Chunk981631.ABu.YOUTUBE, Chunk981631.ABu.CRUNCHYROLL, Chunk981631.ABu.BUNGIE];

function O(e) {
  let {
    heading: t,
    bodyText: n,
    children: l
  } = e;
  return (0, r.jsxs)("div", {
    className: g.empty,
    children: [(0, r.jsxs)("div", {
      className: g.textContainer,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: t
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: n
      })]
    }), l]
  })
}

function h() {
  let e = Chunk388032.intl.string(Chunk388032.t.RnD2yc),
    [t] = Chunk73800.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(b)) ? module : b[0])()
    });
  return (0, Chunk255367.jsx)(O, {
    heading: module,
    bodyText: exports
  })
}

function v() {
  let e = Chunk388032.intl.string(Chunk388032.t.bFgqYG),
    [t] = Chunk73800.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(j)) ? module : j[0])()
    });
  return (0, Chunk255367.jsx)(O, {
    heading: module,
    bodyText: exports
  })
}

function _(e) {
  let {
    user: t,
    guildId: n,
    channelId: c,
    onClose: s
  } = e, d = u.ZP.getName(n, c, t), p = m.intl.formatToPlainString(m.t.sjSitL, {
    name: d
  }), [b] = l.useState(() => {
    var e;
    return (null != (e = (0, i.sample)(y)) ? e : y[0])(d)
  }), j = l.useCallback(() => {
    a.Z.openPrivateChannel({
      recipientIds: t.id
    }), null == s || s()
  }, [t.id, s]);
  return (0, r.jsx)(O, {
    heading: p,
    bodyText: b,
    children: (0, r.jsx)("div", {
      className: g.buttonRow,
      children: (0, r.jsx)(f.tG, {
        icon: o.kBi,
        text: m.intl.string(m.t["g33r/P"]),
        onClick: j,
        themeColor: "secondary"
      })
    })
  })
}

function I() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk255367.jsx)("div", {
    className: Chunk452803.connectionPlatforms,
    children: x.map((t, n) => {
      let l = d.Z.get(t);
      if (null == l) return null;
      let i = (0, o.wjy)(e) ? l.icon.darkPNG : l.icon.lightPNG;
      return (0, r.jsx)("img", {
        src: i,
        alt: l.name,
        className: g.connectionIcon
      }, n)
    })
  })
}

function P(e) {
  let {
    onClose: t
  } = e, n = l.useCallback(() => {
    null == t || t(), c.Z.open(p.oAB.CONNECTIONS)
  }, [t]), i = l.useCallback(() => {
    null == t || t(), c.Z.open(p.oAB.CONTENT_AND_SOCIAL, "CONNECTED_GAMES")
  }, [t]);
  return (0, r.jsxs)(O, {
    heading: m.intl.string(m.t.VB6LWV),
    bodyText: m.intl.string(m.t.KpjsU1),
    children: [(0, r.jsx)(I, {}), (0, r.jsxs)("div", {
      className: g.buttonRow,
      children: [(0, r.jsx)(f.tG, {
        text: m.intl.string(m.t["/Hl24e"]),
        onClick: n,
        themeColor: "secondary"
      }), (0, r.jsx)(f.tG, {
        text: m.intl.string(m.t.GTCx0t),
        onClick: i,
        themeColor: "secondary"
      })]
    })]
  })
}