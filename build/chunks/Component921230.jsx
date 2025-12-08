/** Chunk was on 46467 **/
/** chunk id: 921230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk905423 = require("./905423.js"),
  Chunk430824 = require("./430824.js"),
  Chunk451478 = require("./451478.js"),
  Chunk727258 = require("./727258.js"),
  Chunk61634 = require("./61634.js"),
  Chunk325257 = require("./325257.jsx");

function f(e) {
  let {
    guildId: t
  } = e, n = i.useMemo(() => (0, c.Mg)(t), [t]), f = (0, l.e7)([a.Z], () => a.Z.getGuild(t)), h = (0, l.e7)([s.Z], () => s.Z.isFocused()), p = t === (0, o.Z)(e => {
    let {
      guildId: t
    } = e;
    return t
  }), g = (0, u.Z)(t);
  return null == f ? null : (0, r.jsx)(d.Z, {
    guildNode: n,
    guild: f,
    animatable: h,
    selected: p,
    draggable: false,
    mediaState: g
  })
}