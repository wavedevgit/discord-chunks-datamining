/** Chunk was on web.js **/
/** chunk id: 258696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk607070 = require("./607070.js"),
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

function A(e) {
  let {
    disabled: t,
    channel: n
  } = e, i = (0, _.Z)();
  return null != i ? (0, r.jsx)(v.Z, {
    giftingPromotionConfig: i,
    disabled: t,
    channel: n
  }) : (0, r.jsx)(O.Z, {
    disabled: t,
    channel: n
  })
}

function C(e) {
  var t, n, i, _, p, h, O;
  let {
    type: v,
    disabled: C,
    channel: R,
    handleSubmit: P,
    isEmpty: w,
    showAllButtons: D
  } = e, x = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled), L = N(R.id, v, w), {
    activeCommand: M,
    activeCommandOption: j
  } = (0, o.cj)([c.Z], () => ({
    activeCommand: c.Z.getActiveCommand(R.id),
    activeCommandOption: c.Z.getActiveOption(R.id)
  })), {
    paymentsBlocked: k
  } = u.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: false
  }), U = [], G = !R.isDM() || true === R.recipients || R.recipients.length > 1, B = (0, o.e7)([m.default], () => G ? null : m.default.getUser(R.recipients[0])), Z = (0, f.Nt)() && (null == (t = v.confetti) ? true : t.button) != null;
  return (a.tq || ((null == (p = v.gifts) ? true : p.button) != null && null == M && !k && (null == B || g.ZP.isPremiumEligible(B)) && U.push((0, r.jsx)(A, {
    disabled: C,
    channel: R
  }, "gift")), (null == (h = v.gifs) ? true : h.button) != null && null == M && D && U.push((0, r.jsx)(b.Z, {
    disabled: C,
    type: v
  }, "gif")), Z && null == M && U.push((0, r.jsx)(y.Z, {
    disabled: C,
    channel: R
  }, "confetti")), !Z && (null == (O = v.stickers) ? true : O.button) != null && null == M && D && U.push((0, r.jsx)(S.Z, {
    disabled: C,
    type: v
  }, "sticker"))), (null == (n = v.emojis) ? true : n.button) != null && (null == M || null != j && j.type !== s.jw.ATTACHMENT) && U.push((0, r.jsx)(E.Z, {
    disabled: C,
    type: v
  }, "emoji")), U.push((0, r.jsx)(d.Z, {
    channel: R,
    type: v
  }, "app-launcher")), (null == (i = v.submit) ? true : i.button) != null && ((null == (_ = v.submit) ? true : _.ignorePreference) || x) && U.push((0, r.jsx)(I.Z, {
    onClick: P,
    disabled: C || L
  }, "submit")), 0 === U.length) ? null : (0, r.jsx)("div", {
    className: T.buttons,
    children: U
  })
}

function N(e, t, n) {
  return (0, o.e7)([p.Z, h.Z], () => {
    let r = p.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === h.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let R = Chunk647438.memo(C)