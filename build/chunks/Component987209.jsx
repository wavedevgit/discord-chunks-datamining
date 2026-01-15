/** Chunk was on web.js **/
/** chunk id: 987209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KB: () => y,
  b6: () => v,
  wD: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    giftingOrigin: p,
    children: E,
    additionalUserIds: b
  } = e, {
    selectedSkuId: y
  } = (0, d.JL)(), [O, v] = i.useState(n), [S, I] = i.useState(), [T, C] = i.useState(false), A = (0, u.pO)(O), N = m;
  A && (N = null != f ? f : h);
  let [P, w] = i.useState(N), R = (0, l.hi)(), D = (0, l.yX)(), [x, L] = i.useState(), [j, M] = i.useState(t && (0, u.MY)(O) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? _.intl.string(_.t.ZkOo1U) : c), [k, U] = i.useState(true), [G, Z] = i.useState(true), F = (0, u.E5)(y, t), [B, V] = i.useState(false), [H, Y] = i.useState(false), [W, K] = i.useState(), z = i.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return Y(true), (0, s.YD)(O, F).then(() => {
      Y(false), null == t || t(), V(true)
    }).catch(e => {
      Y(false), K(e), V(true)
    })
  }, [O, F, Y, V, K]), q = (0, a.Wu)([o.Z], () => o.Z.recommendedGiftSkuIds);
  return (0, r.jsx)(g.Provider, {
    value: {
      isGift: t,
      giftCode: F,
      giftMessage: c,
      giftRecipient: O,
      setGiftRecipient: v,
      giftRecipientError: S,
      setGiftRecipientError: I,
      validatingGiftRecipient: T,
      setValidatingGiftRecipient: C,
      soundEffect: k,
      setSoundEffect: U,
      emojiConfetti: G,
      setEmojiConfetti: Z,
      customGiftMessage: j,
      setCustomGiftMessage: M,
      selectedGiftStyle: P,
      setSelectedGiftStyle: w,
      sendGiftMessage: z,
      hasSentMessage: B,
      isSendingMessage: H,
      giftMessageError: W,
      recommendedGiftSkuIds: q,
      giftingOrigin: p,
      claimableRewards: R,
      claimableVariants: D,
      selectedGiftingPromotionReward: x,
      setSelectedGiftingPromotionReward: L,
      additionalUserIds: b
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