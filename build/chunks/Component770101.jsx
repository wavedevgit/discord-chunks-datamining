/** Chunk was on web.js **/
/** chunk id: 770101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => O
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk91871 = require("./91871.js"),
  s = require.n(Chunk91871),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk71393 = require("./71393.js"),
  Chunk711014 = require("./711014.js"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk197161 = require("./197161.js");

function b(e) {
  let {
    setQuery: t,
    query: n
  } = e;
  return (0, r.jsx)(c.IWV, {
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
    query: o
  } = e, b = (0, l.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()), y = (0, l.yK)([p.A], () => b.reduce((e, t) => {
    let r = p.A.getGuild(t);
    return null == r || null != n && n.some(e => e.id === t) || (o.length <= 0 || s()(o.toLowerCase(), null == r ? true : r.name.toLowerCase())) && e.push(r), e
  }, []));

  function O() {
    i(), (0, u.jH)(), (0, f.pX)(m.BVt.GUILD_DISCOVERY)
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [0 === y.length && (0, r.jsx)("div", {
      className: E.Kl,
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        children: 0 === b.length ? g.intl.format(g.t["E3tB6+"], {
          publicGuildDirectoryHook: (e, t) => (0, r.jsx)(c.DUT, {
            onClick: O,
            tag: "a",
            children: e
          }, t)
        }) : g.intl.string(g.t.w3GLl9)
      })
    }), y.map(e => (0, r.jsxs)(c.DUT, {
      className: E.Ss,
      onClick: () => {
        a(e)
      },
      children: [(0, r.jsx)(d.A, {
        className: E.Bq,
        guild: e,
        size: d.A.Sizes.SMALL
      }), (0, r.jsxs)("div", {
        className: E.Vi,
        children: [(0, r.jsx)(c.Text, {
          className: E.tD,
          variant: "text-md/normal",
          children: e.name
        }), (0, r.jsx)(c.Text, {
          className: E.w2,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, h.gb)(e.premiumTier)
        })]
      }), (0, r.jsx)(c.Text, {
        className: E.qW,
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
    isTransfer: s = false,
    selectedSlotGuilds: l
  } = e, [c, u] = i.useState(""), d = async () => {
    await t()
  }, f = s ? g.intl.string(g.t.IB13DV) : g.intl.string(g.t.cQYceV);
  return (0, r.jsx)(o.Modal, {
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
      isTransfer: s,
      selectedSlotGuilds: l
    })
  })
}