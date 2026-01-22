/** Chunk was on web.js **/
/** chunk id: 937008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mq: () => A,
  Pv: () => E,
  dX: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk590180 = require("./590180.js"),
  Chunk242874 = require("./242874.js"),
  Chunk810498 = require("./810498.js"),
  Chunk786300 = require("./786300.jsx"),
  Chunk45938 = require("./45938.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let h = Chunk788868.o2.STANDARD_BOX,
  m, [g, E, b] = (0, Chunk786300.A)();

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
  } = (0, d.P5)(), [O, A] = i.useState(n), [v, S] = i.useState(), [I, T] = i.useState(false), C = (0, u.Ik)(O), N = m;
  C && (N = null != f ? f : h);
  let [R, w] = i.useState(N), P = (0, l.R_)(), D = (0, l.V$)(), [x, L] = i.useState(), [j, M] = i.useState(t && (0, u.lo)(O) === u.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? _.intl.string(_.t.ZkOo1U) : c), [k, U] = i.useState(true), [G, V] = i.useState(true), F = (0, u.Vt)(y, t), [B, H] = i.useState(false), [Y, W] = i.useState(false), [K, z] = i.useState(), q = i.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return W(true), (0, o.UN)(O, F).then(() => {
      W(false), null == t || t(), H(true)
    }).catch(e => {
      W(false), z(e), H(true)
    })
  }, [O, F, W, H, z]), X = (0, a.yK)([s.A], () => s.A.recommendedGiftSkuIds);
  return (0, r.jsx)(g.Provider, {
    value: {
      isGift: t,
      giftCode: F,
      giftMessage: c,
      giftRecipient: O,
      setGiftRecipient: A,
      giftRecipientError: v,
      setGiftRecipientError: S,
      validatingGiftRecipient: I,
      setValidatingGiftRecipient: T,
      soundEffect: k,
      setSoundEffect: U,
      emojiConfetti: G,
      setEmojiConfetti: V,
      customGiftMessage: j,
      setCustomGiftMessage: M,
      selectedGiftStyle: R,
      setSelectedGiftStyle: w,
      sendGiftMessage: q,
      hasSentMessage: B,
      isSendingMessage: Y,
      giftMessageError: K,
      recommendedGiftSkuIds: X,
      giftingOrigin: p,
      claimableRewards: P,
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
    setGiftRecipient: Chunk652215.tEg,
    setGiftRecipientError: Chunk652215.tEg,
    setValidatingGiftRecipient: Chunk652215.tEg,
    selectedGiftStyle: true,
    setSelectedGiftStyle: Chunk652215.tEg,
    giftCode: null,
    sendGiftMessage: Chunk652215.tEg,
    hasSentMessage: false,
    isSendingMessage: false,
    giftMessageError: true,
    recommendedGiftSkuIds: [],
    claimableRewards: true,
    claimableVariants: true,
    setSelectedGiftingPromotionReward: Chunk652215.tEg
  },
  A = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(g.Provider, {
      value: O,
      children: t
    })
  }