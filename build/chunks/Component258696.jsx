/** Chunk was on web.js **/
/** chunk id: 258696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk576645 = require("./576645.js"),
  Chunk347896 = require("./347896.js"),
  Chunk913663 = require("./913663.js"),
  Chunk117530 = require("./117530.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk713913 = require("./713913.js"),
  Chunk541716 = require("./541716.js"),
  Chunk94161 = require("./94161.jsx"),
  Chunk9277 = require("./9277.jsx"),
  Chunk655678 = require("./655678.jsx"),
  Chunk897291 = require("./897291.jsx"),
  Chunk466711 = require("./466711.jsx"),
  Chunk319417 = require("./319417.jsx"),
  Chunk728386 = require("./728386.jsx"),
  Chunk763679 = require("./763679.jsx"),
  Chunk957825 = require("./957825.js"),
  Chunk564355 = require("./564355.js");

function M(e) {
  let {
    disabled: t,
    channel: n
  } = e, i = (0, E.Z)();
  return null != i ? (0, r.jsx)(R.Z, {
    giftingPromotionConfig: i,
    disabled: t,
    channel: n
  }) : (0, r.jsx)(N.Z, {
    disabled: t,
    channel: n
  })
}

function j(e) {
  var t, n, i, a, E, b, y;
  let {
    type: N,
    disabled: R,
    channel: j,
    handleSubmit: U,
    isEmpty: G,
    showAllButtons: B
  } = e, Z = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled), F = k(j.id, N, G), {
    activeCommand: V,
    activeCommandOption: H
  } = (0, c.cj)([_.Z], () => ({
    activeCommand: _.Z.getActiveCommand(j.id),
    activeCommandOption: _.Z.getActiveOption(j.id)
  })), {
    paymentsBlocked: Y
  } = p.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: false
  }), {
    iconOrder: W,
    expressionsCombinedIntoEmojiButton: K,
    reducedGap: z
  } = I.n.useConfig({
    location: "ChannelTextAreaButtons"
  }), q = (0, m.Iu)(e => e.lastActiveView), X = [], Q = !j.isDM() || true === j.recipients || j.recipients.length > 1, J = (0, c.e7)([O.default], () => Q ? null : O.default.getUser(j.recipients[0])), $ = (0, f.R)({
    channel: j,
    chatInputType: N
  }), ee = (0, g.Nt)() && (null == (t = N.confetti) ? true : t.button) != null, et = (null == (n = N.submit) ? true : n.button) != null && ((null == (i = N.submit) ? true : i.ignorePreference) || Z);
  if (!l.tq && ((null == (E = N.gifts) ? true : E.button) != null && null == V && !Y && (null == J || v.ZP.isPremiumEligible(J)) && X.push({
      key: "gift",
      node: (0, r.jsx)(M, {
        disabled: R,
        channel: j
      }, "gift")
    }), (null == (b = N.gifs) ? true : b.button) != null && null == V && B && X.push({
      key: "gif",
      node: (0, r.jsx)(A.Z, {
        disabled: R,
        type: N
      }, "gif")
    }), ee && null == V && X.push({
      key: "confetti",
      node: (0, r.jsx)(C.Z, {
        disabled: R,
        channel: j
      }, "confetti")
    }), !ee && (null == (y = N.stickers) ? true : y.button) != null && null == V && B && X.push({
      key: "sticker",
      node: (0, r.jsx)(w.Z, {
        disabled: R,
        type: N
      }, "sticker")
    }), X.push({
      key: "upload",
      node: (0, r.jsx)(D.z, {
        disabled: R,
        inputType: N,
        channel: j
      }, "upload")
    }), N !== S.Ie.NORMAL || et || X.push({
      key: "spacer",
      node: (0, r.jsx)("div", {
        className: L.spacer
      }, "spacer")
    })), (null == (a = N.emojis) ? true : a.button) != null && (null == V || null != H && H.type !== u.jw.ATTACHMENT)) {
    let e = K && null != q ? q : x.X1.EMOJI;
    X.push({
      key: "emoji",
      node: (0, r.jsx)(T.Z, {
        disabled: R,
        type: N,
        pickerView: e
      }, "emoji")
    })
  }
  $ && X.push({
    key: "appLauncher",
    node: (0, r.jsx)(h.Z, {
      channel: j,
      type: N
    }, "appLauncher")
  }), et && X.push({
    key: "submit",
    node: (0, r.jsx)(P.Z, {
      onClick: U,
      disabled: R || F
    }, "submit")
  });
  let en = (0, s.chain)(X).filter(e => null != W[e.key]).sortBy(e => W[e.key]).map(e => e.node).value();
  return 0 === en.length ? null : (0, r.jsx)("div", {
    className: o()(L.buttons, {
      [L.reducedGap]: z
    }),
    children: en
  })
}

function k(e, t, n) {
  return (0, c.e7)([b.Z, y.Z], () => {
    let r = b.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === y.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let U = Chunk647438.memo(j)