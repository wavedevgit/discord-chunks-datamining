/** Chunk was on web.js **/
/** chunk id: 987209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KB: () => y,
  b6: () => v,
  wD: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk597688 = require("./597688.js"),
  Chunk479446 = require("./479446.js"),
  Chunk717401 = require("./717401.js"),
  Chunk975104 = require("./975104.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let h = Chunk474936.Cj.STANDARD_BOX,
  m = true,
  [g, E, b] = (0, Chunk975104.Z)();

function y(e) {
  let {
    isGift: t = false,
    giftRecipient: n,
    giftMessage: c,
    giftStyle: f,
    giftingOrigin: _,
    children: E
  } = e, {
    selectedSkuId: b
  } = (0, d.JL)(), [y, O] = i.useState(n), [v, I] = i.useState(), [T, S] = i.useState(false), A = (0, u.pO)(y), C = m;
  A && (C = null != f ? f : h);
  let [N, R] = i.useState(C), P = (0, l.iE)(), D = (0, l.yX)(), [w, L] = i.useState(), [x, M] = i.useState(t && (0, u.MY)(y) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? p.intl.string(p.t.ZkOo1U) : c), [k, j] = i.useState(true), [U, G] = i.useState(true), B = (0, u.E5)(b, t), [Z, F] = i.useState(false), [V, H] = i.useState(false), [Y, W] = i.useState(), K = i.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return H(true), (0, s.YD)(y, B).then(() => {
      H(false), null == t || t(), F(true)
    }).catch(e => {
      H(false), W(e), F(true)
    })
  }, [y, B, H, F, W]), z = (0, a.Wu)([o.Z], () => o.Z.recommendedGiftSkuIds);
  return (0, r.jsx)(g.Provider, {
    value: {
      isGift: t,
      giftCode: B,
      giftMessage: c,
      giftRecipient: y,
      setGiftRecipient: O,
      giftRecipientError: v,
      setGiftRecipientError: I,
      validatingGiftRecipient: T,
      setValidatingGiftRecipient: S,
      soundEffect: k,
      setSoundEffect: j,
      emojiConfetti: U,
      setEmojiConfetti: G,
      customGiftMessage: x,
      setCustomGiftMessage: M,
      selectedGiftStyle: N,
      setSelectedGiftStyle: R,
      sendGiftMessage: K,
      hasSentMessage: Z,
      isSendingMessage: V,
      giftMessageError: Y,
      recommendedGiftSkuIds: z,
      giftingOrigin: _,
      claimableRewards: P,
      claimableVariants: D,
      selectedGiftingPromotionReward: w,
      setSelectedGiftingPromotionReward: L
    },
    children: E
  })
}
let O = {
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
    claimableVariants: true,
    setSelectedGiftingPromotionReward: Chunk981631.dG4
  },
  v = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(g.Provider, {
      value: O,
      children: t
    })
  }