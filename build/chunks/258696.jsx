/** Chunk was on web.js **/
/** chunk id: 258696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk607070 = require("./607070.js"),
  Chunk998698 = require("./998698.js"),
  Chunk211242 = require("./211242.js"),
  Chunk576645 = require("./576645.js"),
  Chunk286961 = require("./286961.js"),
  Chunk913663 = require("./913663.js"),
  Chunk117530 = require("./117530.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk94161 = require("./94161.jsx"),
  Chunk9277 = require("./9277.jsx"),
  Chunk655678 = require("./655678.js"),
  Chunk897291 = require("./897291.js"),
  Chunk466711 = require("./466711.js"),
  Chunk319417 = require("./319417.js"),
  Chunk728386 = require("./728386.js"),
  Chunk302195 = require("./302195.js");

function S(e) {
  let {
    disabled: t,
    channel: n
  } = e, i = (0, f.Z)();
  return null != i ? <O.Z giftingPromotionConfig={i} disabled={t} channel={n} /> : <y.Z disabled={t} channel={n} />
}

function A(e) {
  var t, n, i, f, _, p, y;
  let {
    type: O,
    disabled: A,
    channel: C,
    handleSubmit: R,
    isEmpty: P,
    showAllButtons: w,
    children: D
  } = e, L = (0, a.e7)([l.Z], () => l.Z.isSubmitButtonEnabled), x = N(C.id, O, P), {
    activeCommand: M,
    activeCommandOption: k
  } = (0, a.cj)([c.Z], () => ({
    activeCommand: c.Z.getActiveCommand(C.id),
    activeCommandOption: c.Z.getActiveOption(C.id)
  })), {
    paymentsBlocked: j
  } = u.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: false
  }), U = [], G = !C.isDM() || true === C.recipients || C.recipients.length > 1, B = (0, a.e7)([h.default], () => G ? null : h.default.getUser(C.recipients[0])), Z = (0, d.Nt)() && (null == (t = O.confetti) ? true : t.button) != null;
  return (o.tq || ((null == (_ = O.gifts) ? true : _.button) != null && null == M && !j && (null == B || m.ZP.isPremiumEligible(B)) && U.push(<S disabled={A} channel={C} />), (null == (p = O.gifs) ? true : p.button) != null && null == M && w && U.push(<E.Z disabled={A} type={O} />), Z && null == M && U.push(<b.Z disabled={A} channel={C} />), !Z && (null == (y = O.stickers) ? true : y.button) != null && null == M && w && U.push(<I.Z disabled={A} type={O} />)), (null == (n = O.emojis) ? true : n.button) != null && (null == M || null != k && k.type !== s.jw.ATTACHMENT) && U.push(<g.Z disabled={A} type={O} />), null != D && U.push(D), (null == (i = O.submit) ? true : i.button) != null && ((null == (f = O.submit) ? true : f.ignorePreference) || L) && U.push(<v.Z onClick={R} disabled={A || x} />), 0 === U.length) ? null : <div className={T.buttons}>{U}</div>
}

function N(e, t, n) {
  return (0, a.e7)([_.Z, p.Z], () => {
    let r = _.Z.getStickerPreview(e, t.drafts.type),
      i = null != r && r.length > 0;
    return 0 === p.Z.getUploads(e, t.drafts.type).length && n && !i
  })
}
let C = Chunk73800.memo(A)