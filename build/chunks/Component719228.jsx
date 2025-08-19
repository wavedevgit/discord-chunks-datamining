/** Chunk was on 30419 **/
/** chunk id: 719228, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  s = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30408 = require("./30408.js");

function p(e) {
  let {
    setQuery: t,
    query: l
  } = e;
  return (0, n.jsx)(c.E1j, {
    placeholder: C.intl.string(C.t.vf3ZTU),
    "aria-label": C.intl.string(C.t.vf3ZTU),
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
    query: o
  } = e, p = (0, a.e7)([g.ZP], () => g.ZP.getFlattenedGuildIds()), v = (0, a.Wu)([x.Z], () => p.reduce((e, t) => {
    let n = x.Z.getGuild(t);
    return null == n || null != l && l.some(e => e.id === t) || (o.length <= 0 || s()(o.toLowerCase(), null == n ? true : n.name.toLowerCase())) && e.push(n), e
  }, []));

  function S() {
    r(), (0, d.xf)(), (0, m.uL)(f.Z5c.GUILD_DISCOVERY)
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [0 === v.length && (0, n.jsx)("div", {
      className: j.emptyStateWrapper,
      children: (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        children: 0 === p.length ? C.intl.format(C.t["E3tB6+"], {
          publicGuildDirectoryHook: (e, t) => (0, n.jsx)(c.P3F, {
            onClick: S,
            tag: "a",
            children: e
          }, t)
        }) : C.intl.string(C.t.w3GLl5)
      })
    }), v.map(e => (0, n.jsxs)(c.P3F, {
      className: j.selectGuild,
      onClick: () => {
        i(e)
      },
      children: [(0, n.jsx)(u.Z, {
        className: j.selectGuildIcon,
        guild: e,
        size: u.Z.Sizes.SMALL
      }), (0, n.jsxs)("div", {
        className: j.selectGuildCopy,
        children: [(0, n.jsx)(c.Text, {
          className: j.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, n.jsx)(c.Text, {
          className: j.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, h.nW)(e.premiumTier)
        })]
      }), (0, n.jsx)(c.Text, {
        className: j.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? C.intl.string(C.t.dUgaFx) : C.intl.string(C.t.Uj0md3)
      })]
    }, e.id))]
  })
}

function S(e) {
  let {
    onClose: t,
    onSelectGuild: l,
    transitionState: i,
    isTransfer: s = false,
    selectedSlotGuilds: a
  } = e, [c, d] = r.useState(""), u = async () => {
    await t()
  }, m = s ? C.intl.string(C.t.IB13DQ) : C.intl.string(C.t.cQYceX);
  return (0, n.jsx)(o.Modal, {
    transitionState: i,
    onClose: u,
    size: "md",
    title: m,
    input: (0, n.jsx)(p, {
      query: c,
      setQuery: d
    }),
    actions: [],
    children: (0, n.jsx)(v, {
      onClose: t,
      onSelectGuild: l,
      query: c,
      isTransfer: s,
      selectedSlotGuilds: a
    })
  })
}