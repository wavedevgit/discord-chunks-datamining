/** Chunk was on web.js **/
/** chunk id: 258696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
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
  Chunk576645 = require("./576645.js"),
  Chunk347896 = require("./347896.js"),
  Chunk717401 = require("./717401.js"),
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

function j(e) {
  let {
    disabled: t,
    channel: n
  } = e, i = (0, E.Z)(), a = (0, b.iE)(), o = null != a && a.length > 0;
  return null != i && o ? (0, r.jsx)(P.Z, {
    giftingPromotionConfig: i,
    disabled: t,
    channel: n
  }) : (0, r.jsx)(R.Z, {
    disabled: t,
    channel: n
  })
}

function k(e) {
  var t, n, i, a, E, b, y;
  let {
    type: O,
    disabled: R,
    channel: P,
    handleSubmit: k,
    isEmpty: G,
    showAllButtons: B
  } = e, Z = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled), F = U(P.id, O, G), {
    activeCommand: V,
    activeCommandOption: H
  } = (0, c.cj)([_.Z], () => ({
    activeCommand: _.Z.getActiveCommand(P.id),
    activeCommandOption: _.Z.getActiveOption(P.id)
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
  } = T.n.useConfig({
    location: "ChannelTextAreaButtons"
  }), q = (0, m.Iu)(e => e.lastActiveView), X = [], Q = !P.isDM() || true === P.recipients || P.recipients.length > 1, J = (0, c.e7)([v.default], () => Q ? null : v.default.getUser(P.recipients[0])), $ = (0, f.R)({
    channel: P,
    chatInputType: O
  }), ee = (0, g.Nt)() && (null == (t = O.confetti) ? true : t.button) != null, et = (null == (n = O.submit) ? true : n.button) != null && ((null == (i = O.submit) ? true : i.ignorePreference) || Z);
  if (!l.tq && ((null == (E = O.gifts) ? true : E.button) != null && null == V && !Y && (null == J || I.ZP.isPremiumEligible(J)) && X.push({
      key: "gift",
      node: (0, r.jsx)(j, {
        disabled: R,
        channel: P
      }, "gift")
    }), (null == (b = O.gifs) ? true : b.button) != null && null == V && B && X.push({
      key: "gif",
      node: (0, r.jsx)(C.Z, {
        disabled: R,
        type: O
      }, "gif")
    }), ee && null == V && X.push({
      key: "confetti",
      node: (0, r.jsx)(N.Z, {
        disabled: R,
        channel: P
      }, "confetti")
    }), !ee && (null == (y = O.stickers) ? true : y.button) != null && null == V && B && X.push({
      key: "sticker",
      node: (0, r.jsx)(w.Z, {
        disabled: R,
        type: O
      }, "sticker")
    }), X.push({
      key: "upload",
      node: (0, r.jsx)(L.z, {
        disabled: R,
        inputType: O,
        channel: P
      }, "upload")
    }), O !== S.Ie.NORMAL || et || X.push({
      key: "spacer",
      node: (0, r.jsx)("div", {
        className: M.spacer
      }, "spacer")
    })), (null == (a = O.emojis) ? true : a.button) != null && (null == V || null != H && H.type !== u.jw.ATTACHMENT)) {
    let e = K && null != q ? q : x.X1.EMOJI;
    X.push({
      key: "emoji",
      node: (0, r.jsx)(A.Z, {
        disabled: R,
        type: O,
        pickerView: e
      }, "emoji")
    })
  }
  $ && X.push({
    key: "appLauncher",
    node: (0, r.jsx)(h.Z, {
      channel: P,
      type: O
    }, "appLauncher")
  }), et && X.push({
    key: "submit",
    node: (0, r.jsx)(D.Z, {
      onClick: k,
      disabled: R || F
    }, "submit")
  });
  let en = (0, s.chain)(X).filter(e => null != W[e.key]).sortBy(e => W[e.key]).map(e => e.node).value();
  return 0 === en.length ? null : (0, r.jsx)("div", {
    className: o()(M.buttons, {
      [M.reducedGap]: z
    }),
    children: en
  })
}

function U(e, t, n) {
  return (0, c.e7)([y.Z, O.Z], () => {
    let r = y.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === O.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let G = Chunk473749.memo(k)