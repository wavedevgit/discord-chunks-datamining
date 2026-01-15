/** Chunk was on web.js **/
/** chunk id: 258696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
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
  Chunk347896 = require("./347896.js"),
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

function x(e) {
  let {
    disabled: t,
    channel: n
  } = e, i = (0, g.Z)();
  return null != i ? (0, r.jsx)(A.Z, {
    giftingPromotionConfig: i,
    disabled: t,
    channel: n
  }) : (0, r.jsx)(C.Z, {
    disabled: t,
    channel: n
  })
}

function L(e) {
  var t, n, i, a, g, E, b, C;
  let {
    type: A,
    disabled: L,
    channel: M,
    handleSubmit: k,
    isEmpty: U,
    showAllButtons: G
  } = e, Z = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled), F = j(M.id, A, U), {
    activeCommand: B,
    activeCommandOption: V
  } = (0, c.cj)([p.Z], () => ({
    activeCommand: p.Z.getActiveCommand(M.id),
    activeCommandOption: p.Z.getActiveOption(M.id)
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
  } = v.n.useConfig({
    location: "ChannelTextAreaButtons"
  }), z = (0, m.Iu)(e => e.lastActiveView), q = (null == (t = A.gifs) ? true : t.button) != null && (null == (n = A.stickers) ? true : n.button) != null && null != z ? z : R.X1.EMOJI, Q = [], X = !M.isDM() || true === M.recipients || M.recipients.length > 1, J = (0, c.e7)([y.default], () => X ? null : y.default.getUser(M.recipients[0])), $ = (0, f.R)({
    channel: M,
    chatInputType: A
  }), ee = (null == (i = A.submit) ? true : i.button) != null && ((null == (a = A.submit) ? true : a.ignorePreference) || Z);
  if (!l.tq && ((null == (E = A.gifts) ? true : E.button) != null && null == B && !H && (null == J || O.ZP.isPremiumEligible(J)) && Q.push({
      key: "gift",
      node: (0, r.jsx)(x, {
        disabled: L,
        channel: M
      }, "gift")
    }), (null == (b = A.gifs) ? true : b.button) != null && null == B && G && Q.push({
      key: "gif",
      node: (0, r.jsx)(T.Z, {
        disabled: L,
        type: A,
        channel: M
      }, "gif")
    }), (null == (C = A.stickers) ? true : C.button) != null && null == B && G && Q.push({
      key: "sticker",
      node: (0, r.jsx)(P.Z, {
        disabled: L,
        type: A,
        channel: M
      }, "sticker")
    }), Q.push({
      key: "upload",
      node: (0, r.jsx)(w.z, {
        disabled: L,
        inputType: A,
        channel: M
      }, "upload")
    }), A !== S.Ie.NORMAL || ee || Q.push({
      key: "spacer",
      node: (0, r.jsx)("div", {
        className: D.spacer
      }, "spacer")
    })), (null == (g = A.emojis) ? true : g.button) != null && (null == B || null != V && V.type !== u.jw.ATTACHMENT)) {
    let e = W ? q : R.X1.EMOJI;
    Q.push({
      key: "emoji",
      node: (0, r.jsx)(I.Z, {
        disabled: L,
        type: A,
        pickerView: e,
        channelId: M.id
      }, "emoji")
    })
  }
  $ && Q.push({
    key: "appLauncher",
    node: (0, r.jsx)(h.Z, {
      channelId: M.id,
      type: A
    }, "appLauncher")
  }), ee && Q.push({
    key: "submit",
    node: (0, r.jsx)(N.Z, {
      onClick: k,
      disabled: L || F
    }, "submit")
  });
  let et = (0, s.chain)(Q).filter(e => null != Y[e.key]).sortBy(e => Y[e.key]).map(e => e.node).value();
  return 0 === et.length ? null : (0, r.jsx)("div", {
    className: o()(D.buttons, {
      [D.reducedGap]: K
    }),
    children: et
  })
}

function j(e, t, n) {
  return (0, c.e7)([E.Z, b.Z], () => {
    let r = E.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === b.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let M = Chunk473749.memo(L)