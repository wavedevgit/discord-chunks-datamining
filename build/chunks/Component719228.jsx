/** Chunk was on 30419 **/
/** chunk id: 719228, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v,
  e: () => C,
  g: () => f
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  s = require.n(Chunk658722),
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
  Chunk30408 = require("./30408.js");

function f(e) {
  let {
    isTransfer: t = false,
    setQuery: n,
    query: r
  } = e;
  return (0, l.jsxs)(o.xBx, {
    className: j.selectHeaderContainer,
    children: [(0, l.jsx)(o.X6q, {
      className: j.selectHeader,
      variant: "heading-md/semibold",
      children: t ? g.intl.string(g.t.IB13DQ) : g.intl.string(g.t.cQYceX)
    }), (0, l.jsx)(o.E1j, {
      placeholder: g.intl.string(g.t.vf3ZTU),
      "aria-label": g.intl.string(g.t.vf3ZTU),
      className: j.selectSearch,
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
    onSelectGuild: i,
    query: f
  } = e, C = (0, a.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()), v = (0, a.Wu)([m.Z], () => C.reduce((e, t) => {
    let l = m.Z.getGuild(t);
    return null == l || null != n && n.some(e => e.id === t) || (f.length <= 0 || s()(f.toLowerCase(), null == l ? true : l.name.toLowerCase())) && e.push(l), e
  }, []));

  function y() {
    r(), (0, d.xf)(), (0, u.uL)(p.Z5c.GUILD_DISCOVERY)
  }
  return (0, l.jsxs)(l.Fragment, {
    children: [0 === v.length && (0, l.jsx)("div", {
      className: j.emptyStateWrapper,
      children: (0, l.jsx)(o.Text, {
        variant: "text-md/normal",
        children: 0 === C.length ? g.intl.format(g.t["E3tB6+"], {
          publicGuildDirectoryHook: (e, t) => (0, l.jsx)(o.P3F, {
            onClick: y,
            tag: "a",
            children: e
          }, t)
        }) : g.intl.string(g.t.w3GLl5)
      })
    }), v.map(e => (0, l.jsxs)(o.P3F, {
      className: j.selectGuild,
      onClick: () => {
        i(e)
      },
      children: [(0, l.jsx)(c.Z, {
        className: j.selectGuildIcon,
        guild: e,
        size: c.Z.Sizes.SMALL
      }), (0, l.jsxs)("div", {
        className: j.selectGuildCopy,
        children: [(0, l.jsx)(o.Text, {
          className: j.selectGuildName,
          variant: "text-md/normal",
          children: e.name
        }), (0, l.jsx)(o.Text, {
          className: j.selectGuildLevel,
          color: "text-muted",
          variant: "text-xs/normal",
          children: (0, h.nW)(e.premiumTier)
        })]
      }), (0, l.jsx)(o.Text, {
        className: j.selectGuildPseudoCta,
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
    transitionState: i
  } = e, [s, a] = r.useState("");
  return (0, l.jsxs)(o.Y0X, {
    transitionState: i,
    className: j.modal,
    size: o.CgR.SMALL,
    parentComponent: "GuildSelectModal",
    children: [(0, l.jsx)(f, {
      query: s,
      setQuery: a
    }), (0, l.jsx)(o.hzk, {
      className: j.modalContent,
      children: (0, l.jsx)(C, {
        onClose: t,
        onSelectGuild: n,
        query: s
      })
    }), (0, l.jsx)(o.olH, {
      className: j.modalCloseButton,
      onClick: t
    })]
  })
}