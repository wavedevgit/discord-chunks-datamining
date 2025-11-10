/** Chunk was on 31899 **/
/** chunk id: 921230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk905423 = require("./905423.js"),
  Chunk430824 = require("./430824.js"),
  Chunk451478 = require("./451478.js"),
  Chunk727258 = require("./727258.js"),
  Chunk61634 = require("./61634.js"),
  Chunk325257 = require("./325257.jsx");

function p(e) {
  let {
    guildId: t
  } = e, n = i.useMemo(() => (0, c.Mg)(t), [t]), p = (0, l.e7)([a.Z], () => a.Z.getGuild(t)), h = (0, l.e7)([s.Z], () => s.Z.isFocused()), f = t === (0, o.Z)(e => {
    let {
      guildId: t
    } = e;
    return t
  }), g = (0, u.Z)(t);
  return null == p ? null : (0, r.jsx)(d.Z, {
    guildNode: n,
    guild: p,
    animatable: h,
    selected: f,
    draggable: false,
    mediaState: g
  })
}