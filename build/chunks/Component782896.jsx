/** Chunk was on 73895 **/
/** chunk id: 782896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => m
}), require("./388685.js"), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk797670 = require("./797670.jsx"),
  Chunk856785 = require("./856785.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk906530 = require("./906530.js");

function p(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(a.ZP, {
    className: f.facepileItemContainer,
    mask: a.ZP.Masks.SQUIRCLE,
    width: 25,
    height: 25,
    children: t
  })
}

function g(e) {
  let {
    guilds: t,
    numTruncated: n
  } = e;
  return (0, r.jsxs)("div", {
    className: f.guildIconList,
    children: [t.map(e => (0, r.jsxs)("div", {
      className: f.guildIconItem,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(u.V, {
          guild: e,
          size: 20
        })
      }), (0, r.jsx)(o.Text, {
        className: f.guildIconItemText,
        variant: "text-xs/medium",
        children: e.name
      })]
    }, e.id)), n > 0 && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-subtle",
      children: h.intl.format(d.default.bAzBIf, {
        numServers: n
      })
    })]
  })
}

function m(e) {
  let {
    guildIds: t
  } = e, n = (0, l.e7)([c.Z], () => c.Z.getGuildId()), a = (0, l.Wu)([s.Z], () => t.map(e => s.Z.getGuild(e)), [t]), m = (0, i.useMemo)(() => a.filter(e => null != e), [a]), {
    visibleGuilds: b,
    numTruncated: _,
    visibleGuildsTooltip: y,
    numTruncatedTooltipGuilds: O
  } = (0, i.useMemo)(() => {
    let e = [...m];
    if (null != n) {
      let t = m.findIndex(e => e.id === n);
      false !== t && (e.splice(t, 1), e.unshift(m[t]))
    }
    return 4 === e.length ? {
      visibleGuilds: e,
      numTruncated: 0,
      visibleGuildsTooltip: e,
      numTruncatedTooltipGuilds: 0
    } : {
      visibleGuilds: e.slice(0, 3),
      numTruncated: e.length - 3,
      visibleGuildsTooltip: e.slice(0, 15),
      numTruncatedTooltipGuilds: e.length - 15
    }
  }, [m, n]);
  return (0, r.jsx)(o.jSM, {
    "aria-label": h.intl.string(d.default.TG0QsS),
    text: (0, r.jsx)(g, {
      guilds: y,
      numTruncated: O
    }),
    position: "top",
    children: (0, r.jsxs)("div", {
      className: f.facepile,
      children: [b.map(e => (0, r.jsx)(p, {
        children: (0, r.jsx)(u.V, {
          guild: e,
          size: 20
        })
      }, e.id)), _ > 0 && (0, r.jsx)(p, {
        children: (0, r.jsxs)(o.Text, {
          className: f.textItem,
          color: "text-subtle",
          variant: "text-xxs/semibold",
          children: ["+", _]
        })
      })]
    })
  })
}