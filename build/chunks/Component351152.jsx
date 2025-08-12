/** Chunk was on 46746 **/
/** chunk id: 351152, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk771845 = require("./771845.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk102172 = require("./102172.js"),
  Chunk148381 = require("./148381.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84162 = require("./84162.js"),
  Chunk524028 = require("./524028.js");

function b(e) {
  let {
    guildId: t,
    onClick: n
  } = e, i = (0, a.e7)([f.Z], () => f.Z.getGuild(t)), l = (0, a.e7)([u.ZP, f.Z, m.Z], () => u.ZP.getChannels(t)[u.Zb].some(e => {
    let {
      channel: t
    } = e;
    return (0, x.JL)(t, f.Z, m.Z)
  }));
  return null != i && l ? (0, r.jsxs)(c.P3F, {
    onClick: () => n(t),
    className: j.guildRow,
    children: [(0, r.jsx)(d.Z, {
      guild: i,
      size: d.Z.Sizes.SMALL,
      className: j.guildIcon
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      className: j.guildName,
      children: i.name
    }), (0, r.jsx)(p.Z, {
      direction: p.Z.Directions.RIGHT,
      className: j.guildArrow
    })]
  }) : null
}

function S(e) {
  let {
    onSelectGuild: t
  } = e, n = (0, a.e7)([h.ZP], () => h.ZP.getGuildFolders());
  return (0, r.jsx)(g.Z, {
    title: _.intl.string(_.t.JsqeEh),
    scrollerClassName: l()(j.guildScroller, v.marginBottom),
    children: o().flatMap(n, e => {
      let {
        guildIds: n
      } = e;
      return n.map(e => (0, r.jsx)(b, {
        guildId: e,
        onClick: t
      }, e))
    })
  })
}