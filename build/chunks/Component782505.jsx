/** Chunk was on 94682 **/
/** chunk id: 782505, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IA: () => v,
  jB: () => _,
  qv: () => w,
  zf: () => A
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
let y = [() => m.intl.string(m.t.madJdE), () => m.intl.string(m.t.NYmfoP), () => m.intl.string(m.t.R2PaCg), () => m.intl.string(m.t.laSR8h), () => m.intl.string(m.t.DnsJE8)],
  O = [() => m.intl.string(m.t.nFSbeE), () => m.intl.string(m.t.gTcxOz), () => m.intl.string(m.t["8T0wYj"]), () => m.intl.string(m.t.BIHl1g), () => m.intl.string(m.t["jhBm0+"])],
  j = [() => m.intl.string(m.t.AyMGXA), () => m.intl.string(m.t.aAFW7V), e => m.intl.formatToPlainString(m.t.h2g0cM, {
    name: e
  }), () => m.intl.string(m.t.rrYh58), () => m.intl.string(m.t["HX3K+F"]), () => m.intl.string(m.t["/yW3aY"]), () => m.intl.string(m.t["PmL/v0"]), () => m.intl.string(m.t.IALa3h), () => m.intl.string(m.t.HRcTFL), () => m.intl.string(m.t.NuCqPt), () => m.intl.string(m.t["M1tw+4"]), () => m.intl.string(m.t.UBm1y2), () => m.intl.string(m.t.Cu95PQ), () => m.intl.string(m.t["R/wFuh"]), () => m.intl.string(m.t.HQPAVT), () => m.intl.string(m.t.YolGh4)],
  x = [Chunk652215.fg2.STEAM, Chunk652215.fg2.PLAYSTATION, Chunk652215.fg2.XBOX, Chunk652215.fg2.TWITCH, Chunk652215.fg2.BATTLENET, Chunk652215.fg2.LEAGUE_OF_LEGENDS, Chunk652215.fg2.EPIC_GAMES, Chunk652215.fg2.RIOT_GAMES, Chunk652215.fg2.ROBLOX, Chunk652215.fg2.SPOTIFY, Chunk652215.fg2.YOUTUBE, Chunk652215.fg2.CRUNCHYROLL, Chunk652215.fg2.BUNGIE];

function h(e) {
  let {
    heading: t,
    bodyText: n,
    children: l
  } = e;
  return (0, r.jsxs)("div", {
    className: b.Ie,
    children: [(0, r.jsxs)("div", {
      className: b.FS,
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
  let e = m.intl.string(m.t.RnD2yZ),
    [t] = l.useState(() => {
      var e;
      return (null != (e = (0, i.sample)(y)) ? e : y[0])()
    });
  return (0, r.jsx)(h, {
    heading: e,
    bodyText: t
  })
}

function _() {
  let e = m.intl.string(m.t.bFgqYJ),
    [t] = l.useState(() => {
      var e;
      return (null != (e = (0, i.sample)(O)) ? e : O[0])()
    });
  return (0, r.jsx)(h, {
    heading: e,
    bodyText: t
  })
}

function A(e) {
  let {
    user: t,
    guildId: n,
    channelId: s,
    onClose: c
  } = e, u = f.Ay.getName(n, s, t), d = m.intl.formatToPlainString(m.t.sjSitP, {
    name: u
  }), [g] = l.useState(() => {
    var e;
    return (null != (e = (0, i.sample)(j)) ? e : j[0])(u)
  }), y = l.useCallback(() => {
    o.A.openPrivateChannel({
      recipientIds: t.id
    }), null == c || c()
  }, [t.id, c]);
  return (0, r.jsx)(h, {
    heading: d,
    bodyText: g,
    children: (0, r.jsx)("div", {
      className: b.v0,
      children: (0, r.jsx)(p.FD, {
        icon: a.oyn,
        text: m.intl.string(m.t["g33r/P"]),
        onClick: y
      })
    })
  })
}

function I() {
  let e = (0, s.Ay)();
  return (0, r.jsx)("div", {
    className: b.HU,
    children: x.map((t, n) => {
      let l = c.A.get(t);
      if (null == l) return null;
      let i = (0, a.Mwr)(e) ? l.icon.darkPNG : l.icon.lightPNG;
      return (0, r.jsx)("img", {
        src: i,
        alt: l.name,
        className: b.gj
      }, n)
    })
  })
}

function w(e) {
  let {
    onClose: t
  } = e, n = l.useCallback(() => {
    null == t || t(), (0, d.openUserSettings)(u.X.CONNECTIONS_PANEL, {
      section: g.nc_.CONNECTIONS
    })
  }, [t]), i = l.useCallback(() => {
    null == t || t(), (0, d.openUserSettings)(u.X.CONTENT_AND_SOCIAL_PANEL, {
      section: g.nc_.CONTENT_AND_SOCIAL,
      subsection: "CONNECTED_GAMES"
    })
  }, [t]);
  return (0, r.jsxs)(h, {
    heading: m.intl.string(m.t.VB6LWY),
    bodyText: m.intl.string(m.t.KpjsU9),
    children: [(0, r.jsx)(I, {}), (0, r.jsxs)("div", {
      className: b.v0,
      children: [(0, r.jsx)(p.FD, {
        text: m.intl.string(m.t["/Hl24U"]),
        onClick: n
      }), (0, r.jsx)(p.FD, {
        text: m.intl.string(m.t.GTCx0p),
        onClick: i
      })]
    })]
  })
}