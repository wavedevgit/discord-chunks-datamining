/** Chunk was on web.js **/
/** chunk id: 258696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
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
  } = e, i = (0, E.Z)();
  return null != i ? (0, r.jsx)(P.Z, {
    giftingPromotionConfig: i,
    disabled: t,
    channel: n
  }) : (0, r.jsx)(N.Z, {
    disabled: t,
    channel: n
  })
}

function M(e) {
  var t, n, i, a, E, b, y, N, P;
  let {
    type: M,
    disabled: U,
    channel: G,
    handleSubmit: Z,
    isEmpty: B,
    showAllButtons: F
  } = e, V = (0, c.e7)([d.Z], () => d.Z.isSubmitButtonEnabled), H = k(G.id, M, B), {
    activeCommand: Y,
    activeCommandOption: W
  } = (0, c.cj)([p.Z], () => ({
    activeCommand: p.Z.getActiveCommand(G.id),
    activeCommandOption: p.Z.getActiveOption(G.id)
  })), {
    paymentsBlocked: K
  } = _.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: false
  }), {
    iconOrder: z,
    expressionsCombinedIntoEmojiButton: q,
    reducedGap: Q
  } = S.n.useConfig({
    location: "ChannelTextAreaButtons"
  }), X = (0, h.Iu)(e => e.lastActiveView), J = (null == (t = M.gifs) ? true : t.button) != null && (null == (n = M.stickers) ? true : n.button) != null && null != X ? X : x.X1.EMOJI, $ = [], ee = !G.isDM() || true === G.recipients || G.recipients.length > 1, et = (0, c.e7)([O.default], () => ee ? null : O.default.getUser(G.recipients[0])), en = (0, f.R)({
    channel: G,
    chatInputType: M
  }), er = (0, g.Nt)() && (null == (i = M.confetti) ? true : i.button) != null, ei = (null == (a = M.submit) ? true : a.button) != null && ((null == (E = M.submit) ? true : E.ignorePreference) || V);
  if (!l.tq && ((null == (y = M.gifts) ? true : y.button) != null && null == Y && !K && (null == et || v.ZP.isPremiumEligible(et)) && $.push({
      key: "gift",
      node: (0, r.jsx)(j, {
        disabled: U,
        channel: G
      }, "gift")
    }), (null == (N = M.gifs) ? true : N.button) != null && null == Y && F && $.push({
      key: "gif",
      node: (0, r.jsx)(A.Z, {
        disabled: U,
        type: M,
        channel: G
      }, "gif")
    }), er && null == Y && $.push({
      key: "confetti",
      node: (0, r.jsx)(C.Z, {
        disabled: U,
        channel: G
      }, "confetti")
    }), !er && (null == (P = M.stickers) ? true : P.button) != null && null == Y && F && $.push({
      key: "sticker",
      node: (0, r.jsx)(w.Z, {
        disabled: U,
        type: M,
        channel: G
      }, "sticker")
    }), $.push({
      key: "upload",
      node: (0, r.jsx)(D.z, {
        disabled: U,
        inputType: M,
        channel: G
      }, "upload")
    }), M !== I.Ie.NORMAL || ei || $.push({
      key: "spacer",
      node: (0, r.jsx)("div", {
        className: L.spacer
      }, "spacer")
    })), (null == (b = M.emojis) ? true : b.button) != null && (null == Y || null != W && W.type !== u.jw.ATTACHMENT)) {
    let e = q ? J : x.X1.EMOJI;
    $.push({
      key: "emoji",
      node: (0, r.jsx)(T.Z, {
        disabled: U,
        type: M,
        pickerView: e,
        channelId: G.id
      }, "emoji")
    })
  }
  en && $.push({
    key: "appLauncher",
    node: (0, r.jsx)(m.Z, {
      channel: G,
      type: M
    }, "appLauncher")
  }), ei && $.push({
    key: "submit",
    node: (0, r.jsx)(R.Z, {
      onClick: Z,
      disabled: U || H
    }, "submit")
  });
  let ea = (0, s.chain)($).filter(e => null != z[e.key]).sortBy(e => z[e.key]).map(e => e.node).value();
  return 0 === ea.length ? null : (0, r.jsx)("div", {
    className: o()(L.buttons, {
      [L.reducedGap]: Q
    }),
    children: ea
  })
}

function k(e, t, n) {
  return (0, c.e7)([b.Z, y.Z], () => {
    let r = b.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === y.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let U = Chunk473749.memo(M)