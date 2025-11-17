/** Chunk was on 384 **/
/** chunk id: 719403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk889564 = require("./889564.js"),
  Chunk471613 = require("./471613.js"),
  Chunk267642 = require("./267642.js");

function d(e) {
  let {
    guild: t
  } = e;
  if (null == t) return {
    maxEmojiSlots: 0,
    availableEmojiSlots: 0,
    staticEmoji: [],
    totalStaticEmoji: 0,
    animatedEmoji: [],
    totalAnimatedEmoji: 0
  };
  let n = (0, c.y4)(t),
    i = (0, a.e7)([o.Z], () => o.Z.getEmojis(t.id)),
    [d, u] = r.useMemo(() => {
      let e = null == i ? true : i.filter(e => !(0, s.Kt)(e, t.id)),
        [n, r] = l().partition(e, e => !e.animated);
      return [n, r]
    }, [i, t]),
    g = Math.max(n - d.length, n - u.length);
  return {
    maxEmojiSlots: n,
    availableEmojiSlots: g,
    staticEmoji: d,
    totalStaticEmoji: d.length,
    animatedEmoji: u,
    totalAnimatedEmoji: u.length
  }
}