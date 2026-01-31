/** Chunk was on 17534 **/
/** chunk id: 704037, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => p
}), require("./896048.js"), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk743790 = require("./743790.jsx"),
  Chunk960016 = require("./960016.js");

function h(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(a.Ay, {
    className: d.Iu,
    mask: a.Ay.Masks.SQUIRCLE,
    width: 25,
    height: 25,
    children: t
  })
}

function p(e) {
  let {
    guildIds: t
  } = e, n = (0, i.bG)([c.A], () => c.A.getGuildId()), a = (0, i.yK)([o.A], () => t.map(e => o.A.getGuild(e)), [t]), p = (0, l.useMemo)(() => a.filter(e => null != e), [a]), {
    visibleGuilds: g,
    numTruncated: f
  } = (0, l.useMemo)(() => {
    let e = [...p];
    if (null != n) {
      let t = p.findIndex(e => e.id === n);
      false !== t && (e.splice(t, 1), e.unshift(p[t]))
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
  }, [p, n]);
  return (0, r.jsxs)("div", {
    className: d.WM,
    children: [g.map(e => (0, r.jsx)(h, {
      children: (0, r.jsx)(u.$, {
        guild: e,
        size: 20
      })
    }, e.id)), f > 0 && (0, r.jsx)(h, {
      children: (0, r.jsxs)(s.Text, {
        className: d.br,
        color: "text-subtle",
        variant: "text-xxs/semibold",
        children: ["+", f]
      })
    })]
  })
}