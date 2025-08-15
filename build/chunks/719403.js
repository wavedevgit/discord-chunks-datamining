/** Chunk was on web.js **/
/** chunk id: 719403, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => u
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk889564 = require("./889564.js"),
  Chunk471613 = require("./471613.js"),
  Chunk267642 = require("./267642.js");

function u(e) {
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
    i = (0, o.e7)([l.Z], () => l.Z.getEmojis(t.id)),
    [u, d] = r.useMemo(() => {
      let e = null == i ? true : i.filter(e => !(0, s.Kt)(e, t.id)),
        [n, r] = a().partition(e, e => !e.animated);
      return [n, r]
    }, [i, t]),
    f = Math.max(n - u.length, n - d.length);
  return {
    maxEmojiSlots: n,
    availableEmojiSlots: f,
    staticEmoji: u,
    totalStaticEmoji: u.length,
    animatedEmoji: d,
    totalAnimatedEmoji: d.length
  }
}