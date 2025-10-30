/** Chunk was on web.js **/
/** chunk id: 258696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk607070 = require("./607070.js"),
  Chunk998698 = require("./998698.js"),
  Chunk211242 = require("./211242.js"),
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

function T(e) {
  let {
    disabled: t,
    channel: n
  } = e, i = (0, f.Z)();
  return null != i ? (0, r.jsx)(O.Z, {
    giftingPromotionConfig: i,
    disabled: t,
    channel: n
  }) : (0, r.jsx)(y.Z, {
    disabled: t,
    channel: n
  })
}

function A(e) {
  var t, n, i, f, _, p, y;
  let {
    type: O,
    disabled: A,
    channel: N,
    handleSubmit: R,
    isEmpty: P,
    showAllButtons: w,
    children: D
  } = e, L = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled), x = C(N.id, O, P), {
    activeCommand: M,
    activeCommandOption: k
  } = (0, o.cj)([c.Z], () => ({
    activeCommand: c.Z.getActiveCommand(N.id),
    activeCommandOption: c.Z.getActiveOption(N.id)
  })), {
    paymentsBlocked: j
  } = u.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: false
  }), U = [], G = !N.isDM() || true === N.recipients || N.recipients.length > 1, B = (0, o.e7)([h.default], () => G ? null : h.default.getUser(N.recipients[0])), Z = (0, d.Nt)() && (null == (t = O.confetti) ? true : t.button) != null;
  return (a.tq || ((null == (_ = O.gifts) ? true : _.button) != null && null == M && !j && (null == B || m.ZP.isPremiumEligible(B)) && U.push((0, r.jsx)(T, {
    disabled: A,
    channel: N
  }, "gift")), (null == (p = O.gifs) ? true : p.button) != null && null == M && w && U.push((0, r.jsx)(E.Z, {
    disabled: A,
    type: O
  }, "gif")), Z && null == M && U.push((0, r.jsx)(b.Z, {
    disabled: A,
    channel: N
  }, "confetti")), !Z && (null == (y = O.stickers) ? true : y.button) != null && null == M && w && U.push((0, r.jsx)(I.Z, {
    disabled: A,
    type: O
  }, "sticker"))), (null == (n = O.emojis) ? true : n.button) != null && (null == M || null != k && k.type !== s.jw.ATTACHMENT) && U.push((0, r.jsx)(g.Z, {
    disabled: A,
    type: O
  }, "emoji")), null != D && U.push(D), (null == (i = O.submit) ? true : i.button) != null && ((null == (f = O.submit) ? true : f.ignorePreference) || L) && U.push((0, r.jsx)(v.Z, {
    onClick: R,
    disabled: A || x
  }, "submit")), 0 === U.length) ? null : (0, r.jsx)("div", {
    className: S.buttons,
    children: U
  })
}

function C(e, t, n) {
  return (0, o.e7)([_.Z, p.Z], () => {
    let r = _.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === p.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let N = Chunk647438.memo(A)