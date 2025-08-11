/** Chunk was on 30419 **/
/** chunk id: 719228, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v,
  e: () => C,
  g: () => j
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
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
  Chunk544197 = require("./544197.js");

function j(e) {
  let {
    isTransfer: t = false,
    setQuery: n,
    query: r
  } = e;
  return (0, l.jsxs)(o.xBx, {
    className: f.selectHeaderContainer,
    children: [(0, l.jsx)(o.X6q, {
      className: f.selectHeader,
      variant: "heading-md/semibold",
      children: t ? g.intl.string(g.t.IB13DQ) : g.intl.string(g.t.cQYceX)
    }), (0, l.jsx)(o.E1j, {
      placeholder: g.intl.string(g.t.vf3ZTU),
      "aria-label": g.intl.string(g.t.vf3ZTU),
      className: f.selectSearch,
      query: r,
      onChange: n,
      onClear: () => n("")
    })]
  })
}

function C(e) {
  let {
    isTransfer: t = false,
    selectedSlotGuilds: n,
    onClose: r,
    onSelectGuild: s,
    query: j
  } = e, C = (0, a.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()), v = (0, a.Wu)([m.Z], () => C.reduce((e, t) => {
    let l = m.Z.getGuild(t);
    return null == l || null != n && n.some(e => e.id === t) || (j.length <= 0 || i()(j.toLowerCase(), null == l ? true : l.name.toLowerCase())) && e.push(l), e
  }, []));

  function b() {
    r(), (0, c.xf)(), (0, u.uL)(p.Z5c.GUILD_DISCOVERY)
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [0 === v.length && (0, l.jsx)("div", {
      className: f.emptyStateWrapper,
      children: (0, l.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === C.length ? g.intl.format(g.t["E3tB6+"], {
          publicGuildDirectoryHook: (e, t) => (0, l.jsx)(o.P3F, {
            onClick: b,
            tag: "a",
            children: e
          }, t)
        }) : g.intl.string(g.t.w3GLl5)
      })
    }), v.map(e => (0, l.jsxs)(o.P3F, {
      className: f.selectGuild,
      onClick: () => {
        s(e)
      },
      children: [(0, l.jsx)(d.Z, {
        className: f.selectGuildIcon,
        guild: e,
        size: d.Z.Sizes.SMALL
      }), (0, l.jsxs)("div", {
        className: f.selectGuildCopy,
        children: [(0, l.jsx)(o.Text, {
          className: f.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, l.jsx)(o.Text, {
          className: f.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, h.nW)(e.premiumTier)
        })]
      }), (0, l.jsx)(o.Text, {
        className: f.selectGuildPseudoCta,
        color: "always-white",
        variant: "text-sm/medium",
        children: t ? g.intl.string(g.t.dUgaFx) : g.intl.string(g.t.Uj0md3)
      })]
    }, e.id))]
  })
}

function v(e) {
  let {
    onClose: t,
    onSelectGuild: n,
    transitionState: s
  } = e, [i, a] = r.useState("");
  return (0, l.jsxs)(o.Y0X, {
    transitionState: s,
    className: f.modal,
    size: o.CgR.SMALL,
    parentComponent: "GuildSelectModal",
    children: [(0, l.jsx)(j, {
      query: i,
      setQuery: a
    }), (0, l.jsx)(o.hzk, {
      className: f.modalContent,
      children: (0, l.jsx)(C, {
        onClose: t,
        onSelectGuild: n,
        query: i
      })
    }), (0, l.jsx)(o.olH, {
      className: f.modalCloseButton,
      onClick: t
    })]
  })
}