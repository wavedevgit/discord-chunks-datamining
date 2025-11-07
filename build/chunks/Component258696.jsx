/** Chunk was on web.js **/
/** chunk id: 258696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk607070 = require("./607070.js"),
  Chunk533379 = require("./533379.js"),
  Chunk998698 = require("./998698.js"),
  Chunk211242 = require("./211242.js"),
  Chunk775685 = require("./775685.jsx"),
  Chunk576645 = require("./576645.js"),
  Chunk347896 = require("./347896.js"),
  Chunk913663 = require("./913663.js"),
  Chunk117530 = require("./117530.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk94161 = require("./94161.jsx"),
  Chunk9277 = require("./9277.jsx"),
  Chunk655678 = require("./655678.jsx"),
  Chunk897291 = require("./897291.jsx"),
  Chunk466711 = require("./466711.jsx"),
  Chunk319417 = require("./319417.jsx"),
  Chunk728386 = require("./728386.jsx"),
  Chunk564355 = require("./564355.js");

function C(e) {
  let {
    disabled: t,
    channel: n
  } = e, i = (0, p.Z)();
  return null != i ? (0, r.jsx)(I.Z, {
    giftingPromotionConfig: i,
    disabled: t,
    channel: n
  }) : (0, r.jsx)(v.Z, {
    disabled: t,
    channel: n
  })
}

function N(e) {
  var t, n, i, p, h, m, v;
  let {
    type: I,
    disabled: N,
    channel: P,
    handleSubmit: w,
    isEmpty: D,
    showAllButtons: x
  } = e, L = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled), M = R(P.id, I, D), {
    activeCommand: j,
    activeCommandOption: k
  } = (0, o.cj)([u.Z], () => ({
    activeCommand: u.Z.getActiveCommand(P.id),
    activeCommandOption: u.Z.getActiveOption(P.id)
  })), {
    paymentsBlocked: U
  } = d.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: false
  }), G = [], B = !P.isDM() || true === P.recipients || P.recipients.length > 1, Z = (0, o.e7)([g.default], () => B ? null : g.default.getUser(P.recipients[0])), F = (0, c.R)({
    channel: P,
    chatInputType: I
  }), V = (0, _.Nt)() && (null == (t = I.confetti) ? true : t.button) != null;
  return (a.tq || ((null == (h = I.gifts) ? true : h.button) != null && null == j && !U && (null == Z || E.ZP.isPremiumEligible(Z)) && G.push((0, r.jsx)(C, {
    disabled: N,
    channel: P
  }, "gift")), (null == (m = I.gifs) ? true : m.button) != null && null == j && x && G.push((0, r.jsx)(y.Z, {
    disabled: N,
    type: I
  }, "gif")), V && null == j && G.push((0, r.jsx)(O.Z, {
    disabled: N,
    channel: P
  }, "confetti")), !V && (null == (v = I.stickers) ? true : v.button) != null && null == j && x && G.push((0, r.jsx)(T.Z, {
    disabled: N,
    type: I
  }, "sticker"))), (null == (n = I.emojis) ? true : n.button) != null && (null == j || null != k && k.type !== s.jw.ATTACHMENT) && G.push((0, r.jsx)(b.Z, {
    disabled: N,
    type: I
  }, "emoji")), F && G.push((0, r.jsx)(f.Z, {
    channel: P,
    type: I
  }, "app-launcher")), (null == (i = I.submit) ? true : i.button) != null && ((null == (p = I.submit) ? true : p.ignorePreference) || L) && G.push((0, r.jsx)(S.Z, {
    onClick: w,
    disabled: N || M
  }, "submit")), 0 === G.length) ? null : (0, r.jsx)("div", {
    className: A.buttons,
    children: G
  })
}

function R(e, t, n) {
  return (0, o.e7)([h.Z, m.Z], () => {
    let r = h.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === m.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let P = Chunk647438.memo(N)