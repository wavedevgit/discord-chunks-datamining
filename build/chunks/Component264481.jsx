/** Chunk was on 77443 **/
/** chunk id: 264481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P9: () => P,
  Uf: () => w,
  b0: () => _,
  s_: () => x
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
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk839468 = require("./839468.js");
let h = [() => Chunk388032.intl.string(Chunk388032.t.madJdE), () => Chunk388032.intl.string(Chunk388032.t.NYmfoP), () => Chunk388032.intl.string(Chunk388032.t.R2PaCg), () => Chunk388032.intl.string(Chunk388032.t.laSR8h), () => Chunk388032.intl.string(Chunk388032.t.DnsJE8)],
  y = [() => Chunk388032.intl.string(Chunk388032.t.nFSbeE), () => Chunk388032.intl.string(Chunk388032.t.gTcxOz), () => Chunk388032.intl.string(Chunk388032.t["8T0wYj"]), () => Chunk388032.intl.string(Chunk388032.t.BIHl1g), () => Chunk388032.intl.string(Chunk388032.t["jhBm0+"])],
  v = [() => Chunk388032.intl.string(Chunk388032.t.AyMGXA), () => Chunk388032.intl.string(Chunk388032.t.aAFW7V), e => m.intl.formatToPlainString(m.t.h2g0cM, {
    name: e
  }), () => Chunk388032.intl.string(Chunk388032.t.rrYh58), () => Chunk388032.intl.string(Chunk388032.t["HX3K+F"]), () => Chunk388032.intl.string(Chunk388032.t["/yW3aY"]), () => Chunk388032.intl.string(Chunk388032.t["PmL/v0"]), () => Chunk388032.intl.string(Chunk388032.t.IALa3h), () => Chunk388032.intl.string(Chunk388032.t.HRcTFL), () => Chunk388032.intl.string(Chunk388032.t.NuCqPt), () => Chunk388032.intl.string(Chunk388032.t["M1tw+4"]), () => Chunk388032.intl.string(Chunk388032.t.UBm1y2), () => Chunk388032.intl.string(Chunk388032.t.Cu95PQ), () => Chunk388032.intl.string(Chunk388032.t["R/wFuh"]), () => Chunk388032.intl.string(Chunk388032.t.HQPAVT), () => Chunk388032.intl.string(Chunk388032.t.YolGh4)],
  O = [Chunk981631.ABu.STEAM, Chunk981631.ABu.PLAYSTATION, Chunk981631.ABu.XBOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.BATTLENET, Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.EPIC_GAMES, Chunk981631.ABu.RIOT_GAMES, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.SPOTIFY, Chunk981631.ABu.YOUTUBE, Chunk981631.ABu.CRUNCHYROLL, Chunk981631.ABu.BUNGIE];

function j(e) {
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
        color: "header-primary",
        children: t
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: n
      })]
    }), i]
  })
}

function x() {
  let e = Chunk388032.intl.string(Chunk388032.t.RnD2yZ),
    [t] = Chunk473749.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(h)) ? module : h[0])()
    });
  return (0, Chunk54381.jsx)(j, {
    heading: module,
    bodyText: exports
  })
}

function _() {
  let e = Chunk388032.intl.string(Chunk388032.t.bFgqYJ),
    [t] = Chunk473749.useState(() => {
      var e;
      return (null != (e = (0, Chunk392711.sample)(y)) ? module : y[0])()
    });
  return (0, Chunk54381.jsx)(j, {
    heading: module,
    bodyText: exports
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
    return (null != (e = (0, l.sample)(v)) ? e : v[0])(u)
  }), h = i.useCallback(() => {
    o.Z.openPrivateChannel({
      recipientIds: t.id
    }), null == s || s()
  }, [t.id, s]);
  return (0, r.jsx)(j, {
    heading: d,
    bodyText: p,
    children: (0, r.jsx)("div", {
      className: b.buttonRow,
      children: (0, r.jsx)(g.O1, {
        icon: a.kBi,
        text: m.intl.string(m.t["g33r/P"]),
        onClick: h
      })
    })
  })
}

function I() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk54381.jsx)("div", {
    className: Chunk839468.connectionPlatforms,
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

function w(e) {
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
  return (0, r.jsxs)(j, {
    heading: m.intl.string(m.t.VB6LWY),
    bodyText: m.intl.string(m.t.KpjsU9),
    children: [(0, r.jsx)(I, {}), (0, r.jsxs)("div", {
      className: b.buttonRow,
      children: [(0, r.jsx)(g.O1, {
        text: m.intl.string(m.t["/Hl24U"]),
        onClick: n
      }), (0, r.jsx)(g.O1, {
        text: m.intl.string(m.t.GTCx0p),
        onClick: l
      })]
    })]
  })
}