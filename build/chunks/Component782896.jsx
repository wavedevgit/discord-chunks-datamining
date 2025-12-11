/** Chunk was on 51235 **/
/** chunk id: 782896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => b
}), require("./388685.js"), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk797670 = require("./797670.jsx"),
  Chunk512929 = require("./512929.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk956778 = require("./956778.js");

function p(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(o.ZP, {
    className: h.facepileItemContainer,
    mask: o.ZP.Masks.SQUIRCLE,
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
    className: h.guildIconList,
    children: [t.map(e => (0, r.jsxs)("div", {
      className: h.guildIconItem,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(u.V, {
          guild: e,
          size: 20
        })
      }), (0, r.jsx)(a.Text, {
        className: h.guildIconItemText,
        variant: "text-xs/medium",
        children: e.name
      })]
    }, e.id)), n > 0 && (0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      color: "text-subtle",
      children: f.intl.format(d.default.bAzBIf, {
        numServers: n
      })
    })]
  })
}

function b(e) {
  let {
    guildIds: t
  } = e, n = (0, l.e7)([c.Z], () => c.Z.getGuildId()), o = (0, l.Wu)([s.Z], () => t.map(e => s.Z.getGuild(e)), [t]), b = (0, i.useMemo)(() => o.filter(e => null != e), [o]), {
    visibleGuilds: m,
    numTruncated: y,
    visibleGuildsTooltip: O,
    numTruncatedTooltipGuilds: v
  } = (0, i.useMemo)(() => {
    let e = [...b];
    if (null != n) {
      let t = b.findIndex(e => e.id === n);
      false !== t && (e.splice(t, 1), e.unshift(b[t]))
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
  }, [b, n]);
  return (0, r.jsx)(a.jSM, {
    "aria-label": f.intl.string(d.default.TG0QsS),
    text: (0, r.jsx)(g, {
      guilds: O,
      numTruncated: v
    }),
    position: "top",
    children: (0, r.jsxs)("div", {
      className: h.facepile,
      children: [m.map(e => (0, r.jsx)(p, {
        children: (0, r.jsx)(u.V, {
          guild: e,
          size: 20
        })
      }, e.id)), y > 0 && (0, r.jsx)(p, {
        children: (0, r.jsxs)(a.Text, {
          className: h.textItem,
          color: "text-subtle",
          variant: "text-xxs/semibold",
          children: ["+", y]
        })
      })]
    })
  })
}