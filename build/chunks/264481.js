/** Chunk was on 43473 **/
n.d(t, {
  P9: () => I,
  Uf: () => P,
  b0: () => O,
  s_: () => j
}), n(388685);
var o = n(255367),
  r = n(73800),
  c = n(392711),
  i = n(481060),
  a = n(493683),
  l = n(230711),
  s = n(410030),
  d = n(726542),
  u = n(5192),
  f = n(475413),
  m = n(981631),
  p = n(388032),
  b = n(771627);
let _ = [() => p.intl.string(p.t.madJdH), () => p.intl.string(p.t.NYmfoK), () => p.intl.string(p.t.R2PaCg), () => p.intl.string(p.t.laSR8v), () => p.intl.string(p.t.DnsJEx)],
  y = [() => p.intl.string(p.t.nFSbeH), () => p.intl.string(p.t.gTcxOz), () => p.intl.string(p.t["8T0wYm"]), () => p.intl.string(p.t.BIHl1t), () => p.intl.string(p.t.jhBm09)],
  h = [() => p.intl.string(p.t.AyMGXF), () => p.intl.string(p.t.aAFW7e), e => p.intl.formatToPlainString(p.t.h2g0cH, {
    name: e
  }), () => p.intl.string(p.t["rrYh5+"]), () => p.intl.string(p.t["HX3K+P"]), () => p.intl.string(p.t["/yW3aW"]), () => p.intl.string(p.t["PmL/v7"]), () => p.intl.string(p.t.IALa3t), () => p.intl.string(p.t.HRcTFB), () => p.intl.string(p.t.NuCqPj), () => p.intl.string(p.t["M1tw+/"]), () => p.intl.string(p.t.UBm1y8), () => p.intl.string(p.t.Cu95PT), () => p.intl.string(p.t["R/wFur"]), () => p.intl.string(p.t.HQPAVV), () => p.intl.string(p.t.YolGh4)],
  g = [m.ABu.EPIC_GAMES, m.ABu.RIOT_GAMES, m.ABu.XBOX, m.ABu.SPOTIFY, m.ABu.PLAYSTATION, m.ABu.LEAGUE_OF_LEGENDS, m.ABu.STEAM, m.ABu.CRUNCHYROLL, m.ABu.YOUTUBE, m.ABu.REDDIT, m.ABu.BATTLENET, m.ABu.GITHUB, m.ABu.TIKTOK, m.ABu.TWITTER_LEGACY, m.ABu.TWITCH];

function x(e) {
  let {
    heading: t,
    bodyText: n,
    children: r
  } = e;
  return (0, o.jsxs)("div", {
    className: b.empty,
    children: [(0, o.jsxs)("div", {
      className: b.textContainer,
      children: [(0, o.jsx)(i.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: t
      }), (0, o.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: n
      })]
    }), r]
  })
}

function j() {
  let e = p.intl.string(p.t.RnD2yc),
    [t] = r.useState(() => {
      var e;
      return (null != (e = (0, c.sample)(_)) ? e : _[0])()
    });
  return (0, o.jsx)(x, {
    heading: e,
    bodyText: t
  })
}

function O() {
  let e = p.intl.string(p.t.bFgqYG),
    [t] = r.useState(() => {
      var e;
      return (null != (e = (0, c.sample)(y)) ? e : y[0])()
    });
  return (0, o.jsx)(x, {
    heading: e,
    bodyText: t
  })
}

function I(e) {
  let {
    user: t,
    guildId: n,
    channelId: l
  } = e, s = u.ZP.getName(n, l, t), d = p.intl.formatToPlainString(p.t.sjSitL, {
    name: s
  }), [m] = r.useState(() => {
    var e;
    return (null != (e = (0, c.sample)(h)) ? e : h[0])(s)
  }), _ = r.useCallback(() => {
    a.Z.openPrivateChannel({
      recipientIds: t.id
    })
  }, [t.id]), y = r.useCallback(() => {
    a.Z.openPrivateChannel({
      recipientIds: t.id,
      joinCall: !0
    })
  }, [t.id]);
  return (0, o.jsx)(x, {
    heading: d,
    bodyText: m,
    children: (0, o.jsxs)("div", {
      className: b.buttonRow,
      children: [(0, o.jsx)(f.tG, {
        icon: i.kBi,
        text: p.intl.string(p.t["g33r/P"]),
        onClick: _,
        themeColor: "secondary"
      }), (0, o.jsx)(f.tG, {
        icon: i.qWc,
        text: p.intl.string(p.t.JJogjo),
        onClick: y,
        themeColor: "secondary"
      })]
    })
  })
}

function v() {
  let e = (0, s.ZP)();
  return (0, o.jsx)("div", {
    className: b.connectionPlatforms,
    children: g.map((t, n) => {
      let r = d.Z.get(t);
      if (null == r) return null;
      let c = (0, i.wjy)(e) ? r.icon.darkPNG : r.icon.lightPNG;
      return (0, o.jsx)("img", {
        src: c,
        alt: r.name,
        className: b.connectionIcon
      }, n)
    })
  })
}

function P(e) {
  let {
    onClose: t
  } = e, n = r.useCallback(() => {
    null == t || t(), l.Z.open(m.oAB.CONNECTIONS)
  }, [t]), c = r.useCallback(() => {
    null == t || t(), l.Z.open(m.oAB.CONTENT_AND_SOCIAL, "CONNECTED_GAMES")
  }, [t]);
  return (0, o.jsxs)(x, {
    heading: p.intl.string(p.t.Sc0oWF),
    bodyText: p.intl.string(p.t.m8UJqa),
    children: [(0, o.jsx)(v, {}), (0, o.jsxs)("div", {
      className: b.buttonRow,
      children: [(0, o.jsx)(f.tG, {
        text: p.intl.string(p.t["/Hl24e"]),
        onClick: n,
        themeColor: "secondary"
      }), (0, o.jsx)(f.tG, {
        text: p.intl.string(p.t.GTCx0t),
        onClick: c,
        themeColor: "secondary"
      })]
    })]
  })
}