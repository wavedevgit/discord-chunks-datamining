/** Chunk was on web.js **/
/** chunk id: 148361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk384904 = require("./384904.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk560138 = require("./560138.js"),
  Chunk421162 = require("./421162.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk690521 = require("./690521.js"),
  Chunk927578 = require("./927578.js"),
  Chunk732139 = require("./732139.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = e => {
  let t, {
      onClose: n,
      channel: y,
      emojiDescriptor: A,
      pickerIntention: S,
      analyticsLocation: I,
      containerContext: T
    } = e,
    C = (0, a.bG)([f.A], () => f.A.theme) === m.NJ8.LIGHT ? "light" : "dark",
    N = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_".concat(C, ".png"),
    R = (0, c.RQ)(e => e.searchQuery),
    {
      analyticsLocations: w
    } = (0, l.Ay)(o.A.EMOJI_PICKER);
  t = S === g.b_.REACTION ? E.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == A ? E.e.EMOJI_PICKER_FLOATING_UPSELL : A.subCategory === h.tm.TOP_GUILD_EMOJI ? E.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : A.subCategory === h.tm.NEWLY_ADDED_EMOJI ? E.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : E.e.EMOJI_PICKER_EMOJI_CLICKED;
  let P = null != A ? A.emoji : true,
    D = null != P && P.animated,
    x = null != P && !p.Ay.isInternalEmojiForGuildId(P, null == y ? true : y.getGuildId()),
    L = null != P ? m.ZSU.EMOJI : m.ZSU.EMOJI_PICKER_FLOATING_UPSELL,
    j = (0, a.bG)([u.A], () => u.A.hasFetched);
  return i.useEffect(() => {
    j || s.xG()
  }, [j]), (0, r.jsx)(d.A, {
    containerContext: T,
    image: {
      url: N,
      width: 220,
      height: 132
    },
    title: b.intl.string(b.t["0+11FF"]),
    description: b.intl.string(b.t.dURIzS),
    enableSocialProof: false,
    analyticsLocationSection: m.JJy.EMOJI_UPSELL_POPOUT,
    onClose: n,
    upsellViewedTrackingData: {
      type: t,
      is_external: x,
      location: v(O({}, I), {
        object: L
      }),
      location_stack: w,
      sku_id: (0, _.mH)(_.Ay.getSkuIdForPremiumType(E.PremiumTypes.TIER_2)),
      has_search_query: null != R && "" !== R,
      is_animated: D
    },
    isEmojiPickerOverlay: true
  })
}