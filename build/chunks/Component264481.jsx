/** Chunk was on 90882 **/
/** chunk id: 264481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P9: () => P,
  Uf: () => E,
  b0: () => I,
  s_: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk771838 = require("./771838.js");
let y = [() => m.intl.string(m.t.madJdE), () => m.intl.string(m.t.NYmfoP), () => m.intl.string(m.t.R2PaCg), () => m.intl.string(m.t.laSR8h), () => m.intl.string(m.t.DnsJE8)],
  h = [() => m.intl.string(m.t.nFSbeE), () => m.intl.string(m.t.gTcxOz), () => m.intl.string(m.t["8T0wYj"]), () => m.intl.string(m.t.BIHl1g), () => m.intl.string(m.t["jhBm0+"])],
  j = [() => m.intl.string(m.t.AyMGXA), () => m.intl.string(m.t.aAFW7V), e => m.intl.formatToPlainString(m.t.h2g0cM, {
    name: e
  }), () => m.intl.string(m.t.rrYh58), () => m.intl.string(m.t["HX3K+F"]), () => m.intl.string(m.t["/yW3aY"]), () => m.intl.string(m.t["PmL/v0"]), () => m.intl.string(m.t.IALa3h), () => m.intl.string(m.t.HRcTFL), () => m.intl.string(m.t.NuCqPt), () => m.intl.string(m.t["M1tw+4"]), () => m.intl.string(m.t.UBm1y2), () => m.intl.string(m.t.Cu95PQ), () => m.intl.string(m.t["R/wFuh"]), () => m.intl.string(m.t.HQPAVT), () => m.intl.string(m.t.YolGh4)],
  O = [Chunk981631.ABu.STEAM, Chunk981631.ABu.PLAYSTATION, Chunk981631.ABu.XBOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.BATTLENET, Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.EPIC_GAMES, Chunk981631.ABu.RIOT_GAMES, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.SPOTIFY, Chunk981631.ABu.YOUTUBE, Chunk981631.ABu.CRUNCHYROLL, Chunk981631.ABu.BUNGIE];

function x(e) {
  let {
    heading: t,
    bodyText: n,
    children: i
  } = e;
  return (0, r.jsxs)("div", {
    className: b.empty,
    children: [(0, r.jsxs)("div", {
      className: b.textContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        children: t
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: n
      })]
    }), i]
  })
}

function v() {
  let e = m.intl.string(m.t.RnD2yZ),
    [t] = i.useState(() => {
      var e;
      return (null != (e = (0, l.sample)(y)) ? e : y[0])()
    });
  return (0, r.jsx)(x, {
    heading: e,
    bodyText: t
  })
}

function I() {
  let e = m.intl.string(m.t.bFgqYJ),
    [t] = i.useState(() => {
      var e;
      return (null != (e = (0, l.sample)(h)) ? e : h[0])()
    });
  return (0, r.jsx)(x, {
    heading: e,
    bodyText: t
  })
}

function P(e) {
  let {
    user: t,
    guildId: n,
    channelId: c,
    onClose: s
  } = e, u = f.ZP.getName(n, c, t), d = m.intl.formatToPlainString(m.t.sjSitP, {
    name: u
  }), [p] = i.useState(() => {
    var e;
    return (null != (e = (0, l.sample)(j)) ? e : j[0])(u)
  }), y = i.useCallback(() => {
    o.Z.openPrivateChannel({
      recipientIds: t.id
    }), null == s || s()
  }, [t.id, s]);
  return (0, r.jsx)(x, {
    heading: d,
    bodyText: p,
    children: (0, r.jsx)("div", {
      className: b.buttonRow,
      children: (0, r.jsx)(g.i6, {
        icon: a.kBi,
        text: m.intl.string(m.t["g33r/P"]),
        onClick: y
      })
    })
  })
}

function w() {
  let e = (0, c.ZP)();
  return (0, r.jsx)("div", {
    className: b.connectionPlatforms,
    children: O.map((t, n) => {
      let i = s.Z.get(t);
      if (null == i) return null;
      let l = (0, a.wjy)(e) ? i.icon.darkPNG : i.icon.lightPNG;
      return (0, r.jsx)("img", {
        src: l,
        alt: i.name,
        className: b.connectionIcon
      }, n)
    })
  })
}

function E(e) {
  let {
    onClose: t
  } = e, n = i.useCallback(() => {
    null == t || t(), (0, d.openUserSettings)(u.n.CONNECTIONS_PANEL, {
      section: p.oAB.CONNECTIONS
    })
  }, [t]), l = i.useCallback(() => {
    null == t || t(), (0, d.openUserSettings)(u.n.CONTENT_AND_SOCIAL_PANEL, {
      section: p.oAB.CONTENT_AND_SOCIAL,
      subsection: "CONNECTED_GAMES"
    })
  }, [t]);
  return (0, r.jsxs)(x, {
    heading: m.intl.string(m.t.VB6LWY),
    bodyText: m.intl.string(m.t.KpjsU9),
    children: [(0, r.jsx)(w, {}), (0, r.jsxs)("div", {
      className: b.buttonRow,
      children: [(0, r.jsx)(g.i6, {
        text: m.intl.string(m.t["/Hl24U"]),
        onClick: n
      }), (0, r.jsx)(g.i6, {
        text: m.intl.string(m.t.GTCx0p),
        onClick: l
      })]
    })]
  })
}