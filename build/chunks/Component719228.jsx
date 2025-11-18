/** Chunk was on web.js **/
/** chunk id: 719228, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk52779 = require("./52779.js");

function b(e) {
  let {
    setQuery: t,
    query: n
  } = e;
  return (0, r.jsx)(c.E1j, {
    placeholder: g.intl.string(g.t.vf3ZTa),
    "aria-label": g.intl.string(g.t.vf3ZTa),
    query: n,
    onChange: t,
    onClear: () => t("")
  })
}

function y(e) {
  let {
    isTransfer: t = false,
    selectedSlotGuilds: n,
    onClose: i,
    onSelectGuild: a,
    query: s
  } = e, b = (0, l.e7)([p.ZP], () => p.ZP.getFlattenedGuildIds()), y = (0, l.Wu)([_.Z], () => b.reduce((e, t) => {
    let r = _.Z.getGuild(t);
    return null == r || null != n && n.some(e => e.id === t) || (s.length <= 0 || o()(s.toLowerCase(), null == r ? true : r.name.toLowerCase())) && e.push(r), e
  }, []));

  function O() {
    i(), (0, u.xf)(), (0, f.uL)(m.Z5c.GUILD_DISCOVERY)
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [0 === y.length && (0, r.jsx)("div", {
      className: E.emptyStateWrapper,
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        children: 0 === b.length ? g.intl.format(g.t["E3tB6+"], {
          publicGuildDirectoryHook: (e, t) => (0, r.jsx)(c.P3F, {
            onClick: O,
            tag: "a",
            children: e
          }, t)
        }) : g.intl.string(g.t.w3GLl9)
      })
    }), y.map(e => (0, r.jsxs)(c.P3F, {
      className: E.selectGuild,
      onClick: () => {
        a(e)
      },
      children: [(0, r.jsx)(d.Z, {
        className: E.selectGuildIcon,
        guild: e,
        size: d.Z.Sizes.SMALL
      }), (0, r.jsxs)("div", {
        className: E.selectGuildCopy,
        children: [(0, r.jsx)(c.Text, {
          className: E.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, r.jsx)(c.Text, {
          className: E.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, h.nW)(e.premiumTier)
        })]
      }), (0, r.jsx)(c.Text, {
        className: E.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? g.intl.string(g.t.dUgaF8) : g.intl.string(g.t.Uj0md3)
      })]
    }, e.id))]
  })
}

function O(e) {
  let {
    onClose: t,
    onSelectGuild: n,
    transitionState: a,
    isTransfer: o = false,
    selectedSlotGuilds: l
  } = e, [c, u] = i.useState(""), d = async () => {
    await t()
  }, f = o ? g.intl.string(g.t.IB13DV) : g.intl.string(g.t.cQYceV);
  return (0, r.jsx)(s.Modal, {
    transitionState: a,
    onClose: d,
    size: "md",
    title: f,
    input: (0, r.jsx)(b, {
      query: c,
      setQuery: u
    }),
    actions: [],
    children: (0, r.jsx)(y, {
      onClose: t,
      onSelectGuild: n,
      query: c,
      isTransfer: o,
      selectedSlotGuilds: l
    })
  })
}