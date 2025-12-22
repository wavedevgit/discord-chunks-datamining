/** Chunk was on 67000 **/
/** chunk id: 782896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => h
}), require("./388685.js"), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk797670 = require("./797670.jsx"),
  Chunk956778 = require("./956778.js");

function f(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(o.ZP, {
    className: d.facepileItemContainer,
    mask: o.ZP.Masks.SQUIRCLE,
    width: 25,
    height: 25,
    children: t
  })
}

function h(e) {
  let {
    guildIds: t
  } = e, n = (0, l.e7)([c.Z], () => c.Z.getGuildId()), o = (0, l.Wu)([s.Z], () => t.map(e => s.Z.getGuild(e)), [t]), h = (0, i.useMemo)(() => o.filter(e => null != e), [o]), {
    visibleGuilds: p,
    numTruncated: g
  } = (0, i.useMemo)(() => {
    let e = [...h];
    if (null != n) {
      let t = h.findIndex(e => e.id === n);
      false !== t && (e.splice(t, 1), e.unshift(h[t]))
    }
    return 4 === e.length ? {
      visibleGuilds: e,
      numTruncated: 0,
      visibleGuildsTooltip: e,
      numTruncatedTooltipGuilds: 0
    } : {
      visibleGuilds: e.slice(0, 3),
      numTruncated: e.length - 3
    }
  }, [h, n]);
  return (0, r.jsxs)("div", {
    className: d.facepile,
    children: [p.map(e => (0, r.jsx)(f, {
      children: (0, r.jsx)(u.V, {
        guild: e,
        size: 20
      })
    }, e.id)), g > 0 && (0, r.jsx)(f, {
      children: (0, r.jsxs)(a.Text, {
        className: d.textItem,
        color: "text-subtle",
        variant: "text-xxs/semibold",
        children: ["+", g]
      })
    })]
  })
}