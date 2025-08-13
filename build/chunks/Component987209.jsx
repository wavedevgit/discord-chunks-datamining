/** Chunk was on web.js **/
/** chunk id: 987209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KB: () => O,
  b6: () => I,
  wD: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk597688 = require("./597688.js"),
  Chunk479446 = require("./479446.js"),
  Chunk646476 = require("./646476.js"),
  Chunk717401 = require("./717401.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let m = Chunk474936.Cj.STANDARD_BOX,
  g = true,
  [E, b, y] = (0, Chunk975104.Z)();

function O(e) {
  let {
    isGift: t = false,
    giftRecipient: n,
    giftMessage: u,
    giftStyle: _,
    giftingOrigin: b,
    children: y
  } = e, {
    selectedSkuId: O
  } = (0, f.JL)(), [v, I] = i.useState(n), [T, S] = i.useState(), [A, N] = i.useState(false), C = (0, d.pO)(v), R = (0, l.TX)(), P = g;
  C && (P = R ? p.Cj.SEASONAL_STANDARD_BOX : null != _ ? _ : m);
  let [w, D] = i.useState(P), L = (0, c.iE)(), [x, M] = i.useState(), [j, k] = i.useState(t && (0, d.MY)(v) === d.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == u ? h.intl.string(h.t.ZkOo1d) : u), [U, G] = i.useState(true), [B, Z] = i.useState(true), F = (0, d.E5)(O, t), [V, H] = i.useState(false), [Y, W] = i.useState(false), [K, z] = i.useState(), q = i.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return W(true), (0, s.YD)(v, F).then(() => {
      W(false), null == t || t(), H(true)
    }).catch(e => {
      W(false), z(e), H(true)
    })
  }, [v, F, W, H, z]), X = (0, o.Wu)([a.Z], () => a.Z.recommendedGiftSkuIds);
  return (0, r.jsx)(E.Provider, {
    value: {
      isGift: t,
      giftCode: F,
      giftMessage: u,
      giftRecipient: v,
      setGiftRecipient: I,
      giftRecipientError: T,
      setGiftRecipientError: S,
      validatingGiftRecipient: A,
      setValidatingGiftRecipient: N,
      soundEffect: U,
      setSoundEffect: G,
      emojiConfetti: B,
      setEmojiConfetti: Z,
      customGiftMessage: j,
      setCustomGiftMessage: k,
      selectedGiftStyle: w,
      setSelectedGiftStyle: D,
      sendGiftMessage: q,
      hasSentMessage: V,
      isSendingMessage: Y,
      giftMessageError: K,
      recommendedGiftSkuIds: X,
      giftingOrigin: b,
      claimableRewards: L,
      selectedGiftingPromotionReward: x,
      setSelectedGiftingPromotionReward: M
    },
    children: y
  })
}
let v = {
    isGift: false,
    setGiftRecipient: Chunk981631.dG4,
    setGiftRecipientError: Chunk981631.dG4,
    setValidatingGiftRecipient: Chunk981631.dG4,
    selectedGiftStyle: true,
    setSelectedGiftStyle: Chunk981631.dG4,
    giftCode: null,
    sendGiftMessage: Chunk981631.dG4,
    hasSentMessage: false,
    isSendingMessage: false,
    giftMessageError: true,
    recommendedGiftSkuIds: [],
    claimableRewards: true,
    setSelectedGiftingPromotionReward: Chunk981631.dG4
  },
  I = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(E.Provider, {
      value: v,
      children: t
    })
  }