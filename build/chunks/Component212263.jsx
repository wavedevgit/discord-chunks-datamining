/** Chunk was on web.js **/
/** chunk id: 212263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk357355 = require("./357355.js"),
  Chunk609218 = require("./609218.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk176354 = require("./176354.js"),
  Chunk74538 = require("./74538.js"),
  Chunk149203 = require("./149203.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
  let t, {
      onClose: n,
      channel: y,
      emojiDescriptor: v,
      pickerIntention: I,
      analyticsLocation: T,
      containerContext: C
    } = e,
    A = (0, o.e7)([f.Z], () => f.Z.theme) === h.BRd.LIGHT ? "light" : "dark",
    N = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_".concat(A, ".png"),
    P = (0, c.Iu)(e => e.searchQuery),
    {
      analyticsLocations: R
    } = (0, l.ZP)(s.Z.EMOJI_PICKER);
  t = I === g.Hz.REACTION ? E.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == v ? E.cd.EMOJI_PICKER_FLOATING_UPSELL : v.subCategory === m.t0.TOP_GUILD_EMOJI ? E.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : v.subCategory === m.t0.NEWLY_ADDED_EMOJI ? E.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : E.cd.EMOJI_PICKER_EMOJI_CLICKED;
  let w = null != v ? v.emoji : true,
    D = null != w && w.animated,
    x = null != w && !p.ZP.isInternalEmojiForGuildId(w, null == y ? true : y.getGuildId()),
    L = null != w ? h.qAy.EMOJI : h.qAy.EMOJI_PICKER_FLOATING_UPSELL,
    j = (0, o.e7)([u.Z], () => u.Z.hasFetched);
  return i.useEffect(() => {
    j || a.MH()
  }, [j]), (0, r.jsx)(d.Z, {
    containerContext: C,
    image: {
      url: N,
      width: 220,
      height: 132
    },
    title: b.intl.string(b.t["0+11FF"]),
    description: b.intl.string(b.t.dURIzS),
    enableSocialProof: false,
    analyticsLocationSection: h.jXE.EMOJI_UPSELL_POPOUT,
    onClose: n,
    upsellViewedTrackingData: {
      type: t,
      is_external: x,
      location: S(O({}, T), {
        object: L
      }),
      location_stack: R,
      sku_id: (0, _.Wz)(_.ZP.getSkuIdForPremiumType(E.PremiumTypes.TIER_2)),
      has_search_query: null != P && "" !== P,
      is_animated: D
    },
    isEmojiPickerOverlay: true
  })
}