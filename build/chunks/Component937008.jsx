/** Chunk was on web.js **/
/** chunk id: 937008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mq: () => v,
  Pv: () => E,
  dX: () => b
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
  m, [g, E, y] = (0, Chunk786300.A)();

function b(e) {
  let {
    isGift: t = false,
    giftRecipient: n,
    giftMessage: c,
    giftStyle: f,
    giftingOrigin: p,
    children: E,
    additionalUserIds: y
  } = e, {
    selectedSkuId: b
  } = (0, d.P5)(), [O, v] = i.useState(n), [A, I] = i.useState(), [S, T] = i.useState(false), C = (0, u.Ik)(O), N = m;
  C && (N = null != f ? f : h);
  let [w, R] = i.useState(N), P = (0, l.JW)(), [D, L] = i.useState(), [x, M] = i.useState(t && (0, u.lo)(O) === u.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? _.intl.string(_.t.ZkOo1U) : c), [j, k] = i.useState(true), [U, G] = i.useState(true), V = (0, u.Vt)(b, t), [F, B] = i.useState(false), [H, Y] = i.useState(false), [W, K] = i.useState(), z = i.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return Y(true), (0, s.UN)(O, V).then(() => {
      Y(false), null == t || t(), B(true)
    }).catch(e => {
      Y(false), K(e), B(true)
    })
  }, [O, V, Y, B, K]), q = (0, a.yK)([o.A], () => o.A.recommendedGiftSkuIds);
  return (0, r.jsx)(g.Provider, {
    value: {
      isGift: t,
      giftCode: V,
      giftMessage: c,
      giftRecipient: O,
      setGiftRecipient: v,
      giftRecipientError: A,
      setGiftRecipientError: I,
      validatingGiftRecipient: S,
      setValidatingGiftRecipient: T,
      soundEffect: j,
      setSoundEffect: k,
      emojiConfetti: U,
      setEmojiConfetti: G,
      customGiftMessage: x,
      setCustomGiftMessage: M,
      selectedGiftStyle: w,
      setSelectedGiftStyle: R,
      sendGiftMessage: z,
      hasSentMessage: F,
      isSendingMessage: H,
      giftMessageError: W,
      recommendedGiftSkuIds: q,
      giftingOrigin: p,
      claimableRewards: P,
      selectedGiftingPromotionReward: D,
      setSelectedGiftingPromotionReward: L,
      additionalUserIds: y
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
    setSelectedGiftingPromotionReward: Chunk652215.tEg
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