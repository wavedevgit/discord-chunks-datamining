/** Chunk was on 47841 **/
/** chunk id: 952385, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  v: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk492494 = require("./492494.js"),
  Chunk885617 = require("./885617.js"),
  Chunk473145 = require("./473145.js");

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
  let n = (0, c.sN)(t),
    i = (0, s.bG)([o.A], () => o.A.getEmojis(t.id)),
    [d, u] = r.useMemo(() => {
      let e = null == i ? true : i.filter(e => !(0, a.Eg)(e, t.id)),
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