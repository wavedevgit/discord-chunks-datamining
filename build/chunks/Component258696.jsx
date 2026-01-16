/** Chunk was on web.js **/
/** chunk id: 258696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk607070 = require("./607070.js"),
  Chunk533379 = require("./533379.js"),
  Chunk998698 = require("./998698.js"),
  Chunk211242 = require("./211242.js"),
  Chunk775685 = require("./775685.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk1844 = require("./1844.js"),
  Chunk397047 = require("./397047.js"),
  Chunk913663 = require("./913663.js"),
  Chunk117530 = require("./117530.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk713913 = require("./713913.js"),
  Chunk541716 = require("./541716.js"),
  Chunk94161 = require("./94161.jsx"),
  Chunk9277 = require("./9277.jsx"),
  Chunk897291 = require("./897291.jsx"),
  Chunk466711 = require("./466711.jsx"),
  Chunk319417 = require("./319417.jsx"),
  Chunk728386 = require("./728386.jsx"),
  Chunk763679 = require("./763679.jsx"),
  Chunk957825 = require("./957825.js"),
  Chunk72775 = require("./72775.js");

function L(e) {
  let {
    disabled: t,
    channel: n
  } = e;
  return (0, c.e7)([g.Z], () => Object.keys(g.Z.promotionsByType[E.$k.GIFT_PROMOTION]).length > 0) ? (0, r.jsx)(N.Z, {
    disabled: t,
    channel: n
  }) : (0, r.jsx)(A.Z, {
    disabled: t,
    channel: n
  })
}

function j(e) {
  var t, n, i, a, g, E, b, y;
  let {
    type: A,
    disabled: N,
    channel: j,
    handleSubmit: k,
    isEmpty: U,
    showAllButtons: G
  } = e, Z = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled), F = M(j.id, A, U), {
    activeCommand: B,
    activeCommandOption: V
  } = (0, c.cj)([p.Z], () => ({
    activeCommand: p.Z.getActiveCommand(j.id),
    activeCommandOption: p.Z.getActiveOption(j.id)
  })), {
    paymentsBlocked: H
  } = _.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: false
  }), {
    iconOrder: Y,
    expressionsCombinedIntoEmojiButton: W,
    reducedGap: K
  } = S.n.useConfig({
    location: "ChannelTextAreaButtons"
  }), z = (0, m.Iu)(e => e.lastActiveView), q = (null == (t = A.gifs) ? true : t.button) != null && (null == (n = A.stickers) ? true : n.button) != null && null != z ? z : D.X1.EMOJI, Q = [], X = !j.isDM() || true === j.recipients || j.recipients.length > 1, J = (0, c.e7)([O.default], () => X ? null : O.default.getUser(j.recipients[0])), $ = (0, f.R)({
    channel: j,
    chatInputType: A
  }), ee = (null == (i = A.submit) ? true : i.button) != null && ((null == (a = A.submit) ? true : a.ignorePreference) || Z);
  if (!l.tq && ((null == (E = A.gifts) ? true : E.button) != null && null == B && !H && (null == J || v.ZP.isPremiumEligible(J)) && Q.push({
      key: "gift",
      node: (0, r.jsx)(L, {
        disabled: N,
        channel: j
      }, "gift")
    }), (null == (b = A.gifs) ? true : b.button) != null && null == B && G && Q.push({
      key: "gif",
      node: (0, r.jsx)(C.Z, {
        disabled: N,
        type: A,
        channel: j
      }, "gif")
    }), (null == (y = A.stickers) ? true : y.button) != null && null == B && G && Q.push({
      key: "sticker",
      node: (0, r.jsx)(w.Z, {
        disabled: N,
        type: A,
        channel: j
      }, "sticker")
    }), Q.push({
      key: "upload",
      node: (0, r.jsx)(R.z, {
        disabled: N,
        inputType: A,
        channel: j
      }, "upload")
    }), A !== I.Ie.NORMAL || ee || Q.push({
      key: "spacer",
      node: (0, r.jsx)("div", {
        className: x.spacer
      }, "spacer")
    })), (null == (g = A.emojis) ? true : g.button) != null && (null == B || null != V && V.type !== u.jw.ATTACHMENT)) {
    let e = W ? q : D.X1.EMOJI;
    Q.push({
      key: "emoji",
      node: (0, r.jsx)(T.Z, {
        disabled: N,
        type: A,
        pickerView: e,
        channelId: j.id
      }, "emoji")
    })
  }
  $ && Q.push({
    key: "appLauncher",
    node: (0, r.jsx)(h.Z, {
      channelId: j.id,
      type: A
    }, "appLauncher")
  }), ee && Q.push({
    key: "submit",
    node: (0, r.jsx)(P.Z, {
      onClick: k,
      disabled: N || F
    }, "submit")
  });
  let et = (0, s.chain)(Q).filter(e => null != Y[e.key]).sortBy(e => Y[e.key]).map(e => e.node).value();
  return 0 === et.length ? null : (0, r.jsx)("div", {
    className: o()(x.buttons, {
      [x.reducedGap]: K
    }),
    children: et
  })
}

function M(e, t, n) {
  return (0, c.e7)([b.Z, y.Z], () => {
    let r = b.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === y.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let k = Chunk473749.memo(j)