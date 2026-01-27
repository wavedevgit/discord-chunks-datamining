/** Chunk was on 34749 **/
/** chunk id: 770101, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => y
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

function f(e) {
  let {
    setQuery: t,
    query: l
  } = e;
  return (0, n.jsx)(u.IWV, {
    placeholder: p.intl.string(p.t.vf3ZTa),
    "aria-label": p.intl.string(p.t.vf3ZTa),
    query: l,
    onChange: t,
    onClear: () => t("")
  })
}

function v(e) {
  let {
    isTransfer: t = false,
    selectedSlotGuilds: l,
    onClose: r,
    onSelectGuild: i,
    query: a
  } = e, f = (0, o.bG)([g.Ay], () => g.Ay.getFlattenedGuildIds()), v = (0, o.yK)([x.A], () => f.reduce((e, t) => {
    let n = x.A.getGuild(t);
    return null == n || null != l && l.some(e => e.id === t) || (a.length <= 0 || s()(a.toLowerCase(), null == n ? true : n.name.toLowerCase())) && e.push(n), e
  }, []));

  function y() {
    r(), (0, c.jH)(), (0, m.pX)(j.BVt.GUILD_DISCOVERY)
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [0 === v.length && (0, n.jsx)("div", {
      className: C.Kl,
      children: (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        children: 0 === f.length ? p.intl.format(p.t["E3tB6+"], {
          publicGuildDirectoryHook: (e, t) => (0, n.jsx)(u.DUT, {
            onClick: y,
            tag: "a",
            children: e
          }, t)
        }) : p.intl.string(p.t.w3GLl9)
      })
    }), v.map(e => (0, n.jsxs)(u.DUT, {
      className: C.Ss,
      onClick: () => {
        i(e)
      },
      children: [(0, n.jsx)(d.A, {
        className: C.Bq,
        guild: e,
        size: d.A.Sizes.SMALL
      }), (0, n.jsxs)("div", {
        className: C.Vi,
        children: [(0, n.jsx)(u.Text, {
          className: C.tD,
          variant: "text-md/normal",
          children: e.name
        }), (0, n.jsx)(u.Text, {
          className: C.w2,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, h.gb)(e.premiumTier)
        })]
      }), (0, n.jsx)(u.Text, {
        className: C.qW,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? p.intl.string(p.t.dUgaF8) : p.intl.string(p.t.Uj0md3)
      })]
    }, e.id))]
  })
}

function y(e) {
  let {
    onClose: t,
    onSelectGuild: l,
    transitionState: i,
    isTransfer: s = false,
    selectedSlotGuilds: o
  } = e, [u, c] = r.useState(""), d = async () => {
    await t()
  }, m = s ? p.intl.string(p.t.IB13DV) : p.intl.string(p.t.cQYceV);
  return (0, n.jsx)(a.Modal, {
    transitionState: i,
    onClose: d,
    size: "md",
    title: m,
    input: (0, n.jsx)(f, {
      query: u,
      setQuery: c
    }),
    actions: [],
    children: (0, n.jsx)(v, {
      onClose: t,
      onSelectGuild: l,
      query: u,
      isTransfer: s,
      selectedSlotGuilds: o
    })
  })
}