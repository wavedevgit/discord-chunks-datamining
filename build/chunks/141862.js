/** Chunk was on web.js **/
/** chunk id: 141862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  y: () => m
});
var Chunk64700 = require("./64700.js"),
  Chunk58149 = require("./58149.js"),
  Chunk508675 = require("./508675.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk690521 = require("./690521.js"),
  Chunk818645 = require("./818645.js"),
  Chunk316884 = require("./316884.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk698279 = require("./698279.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let t = r.useRef(e);
  r.useEffect(() => {
    t.current.intention === f.b_.REACTION && g(t.current)
  }, [])
}

function g(e) {
  var t;
  let {
    intention: n,
    containerWidth: r,
    rowSize: _,
    isBurstReaction: m,
    analyticsObject: g
  } = e, E = s.A.getChannel(o.A.getChannelId()), y = null == E ? true : E.getGuildId(), b = n === f.b_.REACTION ? a.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : a.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(), O = null != E ? a.Ay.getDisambiguatedEmojiContext(E.getGuildId()).favoriteEmojisWithoutFetchingLatest : [], v = n === f.b_.REACTION ? a.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : a.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems, A = b.slice(0, v), I = null != y ? a.Ay.getGuildEmoji(y) : [], S = Object.values(null != (t = a.Ay.getDisambiguatedEmojiContext(null == E ? true : E.getGuildId()).groupedCustomEmojis) ? t : {}).reduce((e, t) => e += t.length, 0), {
    topEmojis: T,
    newlyAddedEmojis: C
  } = (0, u.b)({
    guildId: null == E ? true : E.getGuildId(),
    pickerIntention: n
  }), {
    visibleTopEmojis: N,
    visibleNewlyAddedEmojis: R
  } = (0, c.W)({
    topEmojis: T,
    newlyAddedEmojis: C,
    rowSize: _
  });
  i.Ay.trackWithMetadata(n === f.b_.REACTION ? d.HAw.REACTION_PICKER_OPENED : d.HAw.EXPRESSION_PICKER_OPENED, h({
    width: r,
    tab: p.kx.EMOJI,
    badged: false,
    num_expressions_favorites: O.length,
    num_animated_expressions_favorites: O.filter(e => null == e ? true : e.animated).length,
    num_custom_expressions_favorites: O.filter(l.Ay.isCustomEmoji).length,
    num_standard_expressions_favorites: O.filter(e => null == e.id).length,
    num_expressions_frecent: A.length,
    num_animated_expressions_frecent: A.filter(e => null == e ? true : e.animated).length,
    num_custom_expressions_frecent: A.filter(l.Ay.isCustomEmoji).length,
    num_standard_expressions_frecent: A.filter(e => null == e.id).length,
    num_current_guild_expressions: I.length,
    num_custom_expressions_total: S,
    num_expressions_top_server: N.length,
    num_animated_expressions_top_server: N.filter(e => e.animated).length,
    num_expressions_newly_added: R.length,
    num_animated_expressions_newly_added: R.filter(e => e.animated).length
  }, n === f.b_.REACTION && {
    is_burst: m
  }, null != g && {
    location_object: g
  }))
}