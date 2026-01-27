/** Chunk was on web.js **/
/** chunk id: 147025, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk775602 = require("./775602.js"),
  Chunk33659 = require("./33659.js"),
  Chunk861382 = require("./861382.js"),
  Chunk86379 = require("./86379.js"),
  Chunk670655 = require("./670655.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk412260 = require("./412260.js"),
  Chunk852218 = require("./852218.js"),
  Chunk931664 = require("./931664.js"),
  Chunk522602 = require("./522602.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk184761 = require("./184761.js"),
  Chunk355622 = require("./355622.js"),
  Chunk838324 = require("./838324.jsx"),
  Chunk184264 = require("./184264.jsx"),
  Chunk743477 = require("./743477.jsx"),
  Chunk336618 = require("./336618.jsx"),
  Chunk437839 = require("./437839.jsx"),
  Chunk559775 = require("./559775.jsx"),
  Chunk584905 = require("./584905.jsx"),
  Chunk698279 = require("./698279.js"),
  Chunk111314 = require("./111314.js");

function x(e) {
  let {
    disabled: t,
    channel: n
  } = e;
  return (0, c.bG)([g.A], () => Object.keys(g.A.promotionsByType[E.pt.GIFT_PROMOTION]).length > 0) ? (0, r.jsx)(N.A, {
    disabled: t,
    channel: n
  }) : (0, r.jsx)(C.A, {
    disabled: t,
    channel: n
  })
}

function M(e) {
  var t, n, i, a, g, E, y, b;
  let {
    type: C,
    disabled: N,
    channel: M,
    handleSubmit: k,
    isEmpty: U,
    showAllButtons: G
  } = e, F = (0, c.bG)([d.A], () => d.A.isSubmitButtonEnabled), V = j(M.id, C, U), {
    activeCommand: B,
    activeCommandOption: H
  } = (0, c.cf)([p.A], () => ({
    activeCommand: p.A.getActiveCommand(M.id),
    activeCommandOption: p.A.getActiveOption(M.id)
  })), {
    paymentsBlocked: Y
  } = _.A.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: false
  }), {
    iconOrder: W,
    expressionsCombinedIntoEmojiButton: K,
    reducedGap: z
  } = A.C.useConfig({
    location: "ChannelTextAreaButtons"
  }), q = (0, m.RQ)(e => e.lastActiveView), Z = (null == (t = C.gifs) ? true : t.button) != null && (null == (n = C.stickers) ? true : n.button) != null && null != q ? q : D.kx.EMOJI, Q = [], X = !M.isDM() || true === M.recipients || M.recipients.length > 1, J = (0, c.bG)([O.default], () => X ? null : O.default.getUser(M.recipients[0])), $ = (0, f.H)({
    channel: M,
    chatInputType: C
  }), ee = (null == (i = C.submit) ? true : i.button) != null && ((null == (a = C.submit) ? true : a.ignorePreference) || F);
  if (!l.Fr && ((null == (E = C.gifts) ? true : E.button) != null && null == B && !Y && (null == J || v.Ay.isPremiumEligible(J)) && Q.push({
      key: "gift",
      node: (0, r.jsx)(x, {
        disabled: N,
        channel: M
      }, "gift")
    }), (null == (y = C.gifs) ? true : y.button) != null && null == B && G && Q.push({
      key: "gif",
      node: (0, r.jsx)(T.A, {
        disabled: N,
        type: C,
        channel: M
      }, "gif")
    }), (null == (b = C.stickers) ? true : b.button) != null && null == B && G && Q.push({
      key: "sticker",
      node: (0, r.jsx)(R.A, {
        disabled: N,
        type: C,
        channel: M
      }, "sticker")
    }), Q.push({
      key: "upload",
      node: (0, r.jsx)(P.n, {
        disabled: N,
        inputType: C,
        channel: M
      }, "upload")
    }), C !== I.oU.NORMAL || ee || Q.push({
      key: "spacer",
      node: (0, r.jsx)("div", {
        className: L.jH
      }, "spacer")
    })), (null == (g = C.emojis) ? true : g.button) != null && (null == B || null != H && H.type !== u.n4.ATTACHMENT)) {
    let e = K ? Z : D.kx.EMOJI;
    Q.push({
      key: "emoji",
      node: (0, r.jsx)(S.A, {
        disabled: N,
        type: C,
        pickerView: e,
        channelId: M.id
      }, "emoji")
    })
  }
  $ && Q.push({
    key: "appLauncher",
    node: (0, r.jsx)(h.A, {
      channelId: M.id,
      type: C
    }, "appLauncher")
  }), ee && Q.push({
    key: "submit",
    node: (0, r.jsx)(w.A, {
      onClick: k,
      disabled: N || V
    }, "submit")
  });
  let et = (0, s.chain)(Q).filter(e => null != W[e.key]).sortBy(e => W[e.key]).map(e => e.node).value();
  return 0 === et.length ? null : (0, r.jsx)("div", {
    className: o()(L.Uo, {
      [L.d5]: z
    }),
    children: et
  })
}

function j(e, t, n) {
  return (0, c.bG)([y.A, b.A], () => {
    let r = y.A.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === b.A.getUploads(e, t.drafts.type).length && n && !i
  })
}
let k = Chunk64700.memo(M)