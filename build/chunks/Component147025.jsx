/** Chunk was on web.js **/
/** chunk id: 147025, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk775602 = require("./775602.js"),
  Chunk33659 = require("./33659.js"),
  Chunk861382 = require("./861382.js"),
  Chunk86379 = require("./86379.js"),
  Chunk670655 = require("./670655.jsx"),
  Chunk412260 = require("./412260.js"),
  Chunk852218 = require("./852218.js"),
  Chunk931664 = require("./931664.js"),
  Chunk522602 = require("./522602.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk838324 = require("./838324.jsx"),
  Chunk184264 = require("./184264.jsx"),
  Chunk743477 = require("./743477.jsx"),
  Chunk336618 = require("./336618.jsx"),
  Chunk437839 = require("./437839.jsx"),
  Chunk559775 = require("./559775.jsx"),
  Chunk111314 = require("./111314.js");

function T(e) {
  let {
    disabled: t,
    channel: n
  } = e;
  return (0, o.bG)([p.A], () => Object.keys(p.A.promotionsByType[_.pt.GIFT_PROMOTION]).length > 0) ? (0, r.jsx)(v.A, {
    disabled: t,
    channel: n
  }) : (0, r.jsx)(O.A, {
    disabled: t,
    channel: n
  })
}

function C(e) {
  var t, n, i, p, _, h;
  let {
    type: m,
    disabled: O,
    channel: v,
    handleSubmit: C,
    isEmpty: w,
    showAllButtons: R
  } = e, P = (0, o.bG)([l.A], () => l.A.isSubmitButtonEnabled), D = N(v.id, m, w), {
    activeCommand: L,
    activeCommandOption: x
  } = (0, o.cf)([u.A], () => ({
    activeCommand: u.A.getActiveCommand(v.id),
    activeCommandOption: u.A.getActiveOption(v.id)
  })), {
    paymentsBlocked: M
  } = d.A.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: false
  }), j = [], k = !v.isDM() || true === v.recipients || v.recipients.length > 1, U = (0, o.bG)([g.default], () => k ? null : g.default.getUser(v.recipients[0])), G = (0, c.H)({
    channel: v,
    chatInputType: m
  }), F = (null == (t = m.submit) ? true : t.button) != null && ((null == (n = m.submit) ? true : n.ignorePreference) || P);
  return (!a.Fr && ((null == (p = m.gifts) ? true : p.button) != null && null == L && !M && (null == U || E.Ay.isPremiumEligible(U)) && j.push((0, r.jsx)(T, {
    disabled: O,
    channel: v
  }, "gift")), (null == (_ = m.gifs) ? true : _.button) != null && null == L && R && j.push((0, r.jsx)(b.A, {
    disabled: O,
    type: m,
    channel: v
  }, "gif")), (null == (h = m.stickers) ? true : h.button) != null && null == L && R && j.push((0, r.jsx)(I.A, {
    disabled: O,
    type: m,
    channel: v
  }, "sticker"))), (null == (i = m.emojis) ? true : i.button) != null && (null == L || null != x && x.type !== s.n4.ATTACHMENT) && j.push((0, r.jsx)(y.A, {
    disabled: O,
    type: m,
    channelId: v.id
  }, "emoji")), G && j.push((0, r.jsx)(f.A, {
    channelId: v.id,
    type: m
  }, "appLauncher")), F && j.push((0, r.jsx)(A.A, {
    onClick: C,
    disabled: O || D
  }, "submit")), 0 === j.length) ? null : (0, r.jsx)("div", {
    className: S.Uo,
    children: j
  })
}

function N(e, t, n) {
  return (0, o.bG)([h.A, m.A], () => {
    let r = h.A.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === m.A.getUploads(e, t.drafts.type).length && n && !i
  })
}
let w = Chunk64700.memo(C)