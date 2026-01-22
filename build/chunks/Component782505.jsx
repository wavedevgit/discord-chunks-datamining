/** Chunk was on 38663 **/
/** chunk id: 782505, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IA: () => v,
  jB: () => A,
  qv: () => P,
  zf: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308497 = require("./308497.js");
let y = [() => g.intl.string(g.t.madJdE), () => g.intl.string(g.t.NYmfoP), () => g.intl.string(g.t.R2PaCg), () => g.intl.string(g.t.laSR8h), () => g.intl.string(g.t.DnsJE8)],
  O = [() => g.intl.string(g.t.nFSbeE), () => g.intl.string(g.t.gTcxOz), () => g.intl.string(g.t["8T0wYj"]), () => g.intl.string(g.t.BIHl1g), () => g.intl.string(g.t["jhBm0+"])],
  j = [() => g.intl.string(g.t.AyMGXA), () => g.intl.string(g.t.aAFW7V), e => g.intl.formatToPlainString(g.t.h2g0cM, {
    name: e
  }), () => g.intl.string(g.t.rrYh58), () => g.intl.string(g.t["HX3K+F"]), () => g.intl.string(g.t["/yW3aY"]), () => g.intl.string(g.t["PmL/v0"]), () => g.intl.string(g.t.IALa3h), () => g.intl.string(g.t.HRcTFL), () => g.intl.string(g.t.NuCqPt), () => g.intl.string(g.t["M1tw+4"]), () => g.intl.string(g.t.UBm1y2), () => g.intl.string(g.t.Cu95PQ), () => g.intl.string(g.t["R/wFuh"]), () => g.intl.string(g.t.HQPAVT), () => g.intl.string(g.t.YolGh4)],
  x = [Chunk652215.fg2.STEAM, Chunk652215.fg2.PLAYSTATION, Chunk652215.fg2.XBOX, Chunk652215.fg2.TWITCH, Chunk652215.fg2.BATTLENET, Chunk652215.fg2.LEAGUE_OF_LEGENDS, Chunk652215.fg2.EPIC_GAMES, Chunk652215.fg2.RIOT_GAMES, Chunk652215.fg2.ROBLOX, Chunk652215.fg2.SPOTIFY, Chunk652215.fg2.YOUTUBE, Chunk652215.fg2.CRUNCHYROLL, Chunk652215.fg2.BUNGIE];

function h(e) {
  let {
    heading: t,
    bodyText: n,
    children: l
  } = e;
  return (0, r.jsxs)("div", {
    className: m.Ie,
    children: [(0, r.jsxs)("div", {
      className: m.FS,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        children: t
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: n
      })]
    }), l]
  })
}

function v() {
  let e = g.intl.string(g.t.RnD2yZ),
    [t] = l.useState(() => {
      var e;
      return (null != (e = (0, i.sample)(y)) ? e : y[0])()
    });
  return (0, r.jsx)(h, {
    heading: e,
    bodyText: t
  })
}

function A() {
  let e = g.intl.string(g.t.bFgqYJ),
    [t] = l.useState(() => {
      var e;
      return (null != (e = (0, i.sample)(O)) ? e : O[0])()
    });
  return (0, r.jsx)(h, {
    heading: e,
    bodyText: t
  })
}

function w(e) {
  let {
    user: t,
    guildId: n,
    channelId: o,
    onClose: c
  } = e, u = f.Ay.getName(n, o, t), d = g.intl.formatToPlainString(g.t.sjSitP, {
    name: u
  }), [b] = l.useState(() => {
    var e;
    return (null != (e = (0, i.sample)(j)) ? e : j[0])(u)
  }), y = l.useCallback(() => {
    s.A.openPrivateChannel({
      recipientIds: t.id
    }), null == c || c()
  }, [t.id, c]);
  return (0, r.jsx)(h, {
    heading: d,
    bodyText: b,
    children: (0, r.jsx)("div", {
      className: m.v0,
      children: (0, r.jsx)(p.FD, {
        icon: a.oyn,
        text: g.intl.string(g.t["g33r/P"]),
        onClick: y
      })
    })
  })
}

function I() {
  let e = (0, o.Ay)();
  return (0, r.jsx)("div", {
    className: m.HU,
    children: x.map((t, n) => {
      let l = c.A.get(t);
      if (null == l) return null;
      let i = (0, a.Mwr)(e) ? l.icon.darkPNG : l.icon.lightPNG;
      return (0, r.jsx)("img", {
        src: i,
        alt: l.name,
        className: m.gj
      }, n)
    })
  })
}

function P(e) {
  let {
    onClose: t
  } = e, n = l.useCallback(() => {
    null == t || t(), (0, d.openUserSettings)(u.X.CONNECTIONS_PANEL, {
      section: b.nc_.CONNECTIONS
    })
  }, [t]), i = l.useCallback(() => {
    null == t || t(), (0, d.openUserSettings)(u.X.CONTENT_AND_SOCIAL_PANEL, {
      section: b.nc_.CONTENT_AND_SOCIAL,
      subsection: "CONNECTED_GAMES"
    })
  }, [t]);
  return (0, r.jsxs)(h, {
    heading: g.intl.string(g.t.VB6LWY),
    bodyText: g.intl.string(g.t.KpjsU9),
    children: [(0, r.jsx)(I, {}), (0, r.jsxs)("div", {
      className: m.v0,
      children: [(0, r.jsx)(p.FD, {
        text: g.intl.string(g.t["/Hl24U"]),
        onClick: n
      }), (0, r.jsx)(p.FD, {
        text: g.intl.string(g.t.GTCx0p),
        onClick: i
      })]
    })]
  })
}