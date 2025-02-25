/** Chunk was on web.js **/
"use strict";
n.d(t, {
  G: () => x,
  Z: () => M
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  o = n(873546),
  a = n(442837),
  s = n(911969),
  l = n(607070),
  c = n(998698),
  u = n(211242),
  d = n(540059),
  f = n(576645),
  _ = n(276444),
  p = n(599659),
  h = n(963198),
  g = n(286961),
  m = n(913663),
  E = n(117530),
  v = n(594174),
  b = n(74538),
  y = n(94161),
  O = n(9277),
  S = n(58995),
  I = n(655678),
  T = n(897291),
  N = n(466711),
  A = n(764794),
  C = n(319417),
  R = n(728386),
  P = n(474936),
  D = n(342203);

function w(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    enabled: i
  } = p.O.useExperiment({
    location: "gift-button"
  }), o = (0, g.Z)();
  return i ? (0, r.jsx)(S.Z, {
    disabled: t,
    channel: n
  }) : null != o ? (0, r.jsx)(N.Z, {
    giftingPromotionConfig: o,
    disabled: t,
    channel: n
  }) : (0, r.jsx)(T.Z, {
    disabled: t,
    channel: n
  })
}

function L(e) {
  var t, n, i, p, g, m, E, S, T;
  let {
    type: N,
    disabled: L,
    channel: M,
    handleSubmit: j,
    isEmpty: k,
    showAllButtons: U,
    children: G
  } = e, B = (0, a.e7)([l.Z], () => l.Z.isSubmitButtonEnabled), F = x(M.id, N, k), {
    activeCommand: V,
    activeCommandOption: Z
  } = (0, a.cj)([c.Z], () => ({
    activeCommand: c.Z.getActiveCommand(M.id),
    activeCommandOption: c.Z.getActiveOption(M.id)
  })), {
    paymentsBlocked: H
  } = u.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: !1
  }), W = [], {
    enabled: Y
  } = h.Z.getCurrentConfig({
    location: "dc120b_4"
  }, {
    autoTrackExposure: !1
  }), K = v.default.getCurrentUser(), z = null !== (g = (0, a.e7)([_.Z], () => Y && b.ZP.isPremiumExactly(K, P.p9.TIER_2) ? _.Z.getReferralsRemaining() : 0)) && void 0 !== g ? g : 0, q = (0, a.e7)([_.Z], () => {
    if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || !Y) return !1;
    let e = M.recipients[0];
    return _.Z.getSentUserIds().includes(e)
  }), Q = (0, a.e7)([v.default], () => !M.isDM() || void 0 === M.recipients || M.recipients.length > 1 ? null : v.default.getUser(M.recipients[0])), [X, J] = (0, a.Wu)([_.Z], () => {
    let e = [!1, !1];
    if (!M.isDM() || void 0 === M.recipients || M.recipients.length > 1 || null == Q || Q.bot) return e;
    let t = q || z > 0,
      n = _.Z.getRecipientEligibility(Q.id);
    return [Y && t && n, n]
  }), $ = (0, d.R6)("ChannelTextAreaButtons"), ee = (0, f.Nt)() && (null === (t = N.confetti) || void 0 === t ? void 0 : t.button) != null;
  return (o.tq || (M.isDM() && (null === (m = N.gifts) || void 0 === m ? void 0 : m.button) != null && null == V && (b.ZP.isPremiumExactly(K, P.p9.TIER_2) && J && h.Z.trackExposure({
    location: "dc120b_5"
  }), X && W.push((0, r.jsx)(A.Z, {
    disabled: L,
    referralsRemaining: z,
    channel: M,
    isResending: q
  }, "referral"))), (null === (E = N.gifts) || void 0 === E ? void 0 : E.button) != null && null == V && !H && (null == Q || b.ZP.isPremiumEligible(Q)) && W.push((0, r.jsx)(w, {
    disabled: L,
    channel: M
  }, "gift")), (null === (S = N.gifs) || void 0 === S ? void 0 : S.button) != null && null == V && U && W.push((0, r.jsx)(O.Z, {
    disabled: L,
    type: N
  }, "gif")), ee && null == V && W.push((0, r.jsx)(I.Z, {
    disabled: L,
    channel: M
  }, "confetti")), !ee && (null === (T = N.stickers) || void 0 === T ? void 0 : T.button) != null && null == V && U && W.push((0, r.jsx)(R.Z, {
    disabled: L,
    type: N
  }, "sticker"))), (null === (n = N.emojis) || void 0 === n ? void 0 : n.button) != null && (null == V || null != Z && Z.type !== s.jw.ATTACHMENT) && W.push((0, r.jsx)(y.Z, {
    disabled: L,
    type: N
  }, "emoji")), $ || null == G || W.push(G), (null === (i = N.submit) || void 0 === i ? void 0 : i.button) != null && ((null === (p = N.submit) || void 0 === p ? void 0 : p.ignorePreference) || B) && !$ && W.push((0, r.jsx)(C.Z, {
    onClick: j,
    disabled: L || F
  }, "submit")), $ && null != G && W.push(G), 0 === W.length) ? null : (0, r.jsx)("div", {
    className: D.buttons,
    children: W
  })
}

function x(e, t, n) {
  return (0, a.e7)([m.Z, E.Z], () => {
    let r = m.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === E.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let M = i.memo(L)