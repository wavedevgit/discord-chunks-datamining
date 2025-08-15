/** Chunk was on web.js **/
/** chunk id: 253696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b,
  b: () => E
});
var Chunk647438 = require("./647438.js"),
  Chunk367907 = require("./367907.js"),
  Chunk339085 = require("./339085.js"),
  Chunk689789 = require("./689789.js"),
  Chunk407477 = require("./407477.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk176354 = require("./176354.js"),
  Chunk304852 = require("./304852.js"),
  Chunk199257 = require("./199257.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk957825 = require("./957825.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  let t = r.useRef(e);
  r.useEffect(() => {
    t.current.intention === p.Hz.REACTION && b(t.current)
  }, [])
}

function b(e) {
  var t;
  let {
    intention: n,
    containerWidth: r,
    rowSize: m,
    isBurstReaction: E,
    analyticsObject: b
  } = e, y = l.Z.getChannel(c.Z.getChannelId()), O = null == y ? true : y.getGuildId(), {
    canSplitFrecencyList: v
  } = o.Z.getCurrentConfig({
    location: "trackOnEmojiPickerOpened"
  }, {
    autoTrackExposure: true
  }), I = (0, s.E2)({
    location: "trackOnEmojiPickerOpened",
    autoTrackExposure: true
  });
  s.Xb.trackExposure({
    location: "trackOnEmojiPickerOpened"
  });
  let T = (v || I) && n === p.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice() : a.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
    S = null != y ? a.ZP.getDisambiguatedEmojiContext(y.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
    A = (v || I) && n === p.Hz.REACTION ? a.ZP.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems : a.ZP.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
    N = T.slice(0, A),
    C = null != O ? a.ZP.getGuildEmoji(O) : [],
    R = Object.values(null != (t = a.ZP.getDisambiguatedEmojiContext(null == y ? true : y.getGuildId()).groupedCustomEmojis) ? t : {}).reduce((e, t) => e += t.length, 0),
    {
      topEmojis: P,
      newlyAddedEmojis: w
    } = (0, f._)({
      guildId: null == y ? true : y.getGuildId(),
      pickerIntention: n
    }),
    {
      visibleTopEmojis: D,
      visibleNewlyAddedEmojis: L
    } = (0, d.J)({
      topEmojis: P,
      newlyAddedEmojis: w,
      rowSize: m
    });
  i.ZP.trackWithMetadata(n === p.Hz.REACTION ? _.rMx.REACTION_PICKER_OPENED : _.rMx.EXPRESSION_PICKER_OPENED, g({
    width: r,
    tab: h.X1.EMOJI,
    badged: false,
    num_expressions_favorites: S.length,
    num_animated_expressions_favorites: S.filter(e => null == e ? true : e.animated).length,
    num_custom_expressions_favorites: S.filter(u.ZP.isCustomEmoji).length,
    num_standard_expressions_favorites: S.filter(e => null == e.id).length,
    num_expressions_frecent: N.length,
    num_animated_expressions_frecent: N.filter(e => null == e ? true : e.animated).length,
    num_custom_expressions_frecent: N.filter(u.ZP.isCustomEmoji).length,
    num_standard_expressions_frecent: N.filter(e => null == e.id).length,
    num_current_guild_expressions: C.length,
    num_custom_expressions_total: R,
    num_expressions_top_server: D.length,
    num_animated_expressions_top_server: D.filter(e => e.animated).length,
    num_expressions_newly_added: L.length,
    num_animated_expressions_newly_added: L.filter(e => e.animated).length
  }, n === p.Hz.REACTION && {
    is_burst: E
  }, null != b && {
    location_object: b
  }))
}