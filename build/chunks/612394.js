/** Chunk was on web.js **/
/** chunk id: 612394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  So: () => f,
  fh: () => _,
  uA: () => d
});
var Chunk58149 = require("./58149.js"),
  Chunk842086 = require("./842086.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t, n, i) {
  var s, c, d;
  a.default.track(o.HAw.CHANNEL_AUTOCOMPLETE_OPEN, u(l({}, (0, r.dI)(t), (0, r.H$)(t.guild_id)), {
    autocomplete_type: e,
    num_emoji_results: null != (s = null == n ? true : n.numEmojiResults) ? s : 0,
    num_locked_emoji_results: null != (c = null == n ? true : n.numLockedEmojiResults) ? c : 0,
    num_sticker_results: null != (d = null == n ? true : n.numStickerResults) ? d : 0,
    game_mentions_available: null != i && i
  }))
}

function f(e, t, n, i) {
  var s, c, d, f, p;
  a.default.track(o.HAw.CHANNEL_AUTOCOMPLETE_SELECTED, u(l({}, (0, r.dI)(n), (0, r.H$)(n.guild_id)), {
    autocomplete_type: e,
    selection_type: t,
    emoji_id: null == i ? true : i.emojiId,
    sticker_id: null == i ? true : i.stickerId,
    num_emoji_results: null != (s = null == i ? true : i.numEmojiResults) ? s : 0,
    num_sticker_results: null != (c = null == i ? true : i.numStickerResults) ? c : 0,
    emoji_name: null != (d = null == i ? true : i.expressionName) ? d : "",
    is_custom: null != (f = null == i ? true : i.isCustom) && f,
    is_animated: null != (p = null == i ? true : i.isAnimated) && p,
    application_id: null == i ? true : i.applicationId
  }))
}

function p(e) {
  switch (e) {
    case i.D6.AUTOCOMPLETE:
      return "autocomplete";
    case i.D6.STICKER_PICKER:
      return "picker";
    case i.D6.BUILT_IN_INTEGRATION:
      return "built_in_integration";
    default:
      return null
  }
}

function _(e) {
  let {
    sticker: t,
    stickerSelectLocation: n,
    isReplacement: r,
    analyticsLocations: i
  } = e;
  a.default.track(o.HAw.STICKER_ATTACHED, {
    replaced: r,
    source: p(n),
    sticker_id: t.id,
    location_stack: i
  })
}