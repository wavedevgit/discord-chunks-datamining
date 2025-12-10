/** Chunk was on web.js **/
/** chunk id: 603074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk597276 = require("./597276.js"),
  Chunk895421 = require("./895421.js"),
  Chunk526617 = require("./526617.jsx"),
  Chunk767354 = require("./767354.js");

function m(e) {
  let {
    guildId: t,
    channel: n,
    containerWidth: a,
    onClose: m,
    onSelect: h,
    analyticsSource: g,
    suppressPlaySound: E,
    shouldValidateSelectedSound: b,
    shouldShowUpsell: y = true,
    gridNotice: O,
    inExpressionPicker: v,
    soundButtonOverlay: S,
    listPadding: I,
    renderHeader: T,
    defaultSoundsOnly: C
  } = e, {
    fetching: A,
    maybeFetchData: N
  } = (0, f.Z)(), P = (0, d.Z)({
    location: "SoundboardSoundPicker"
  }), {
    analyticsLocations: R
  } = (0, c.ZP)(l.Z.SOUNDBOARD_POPOUT);
  return i.useEffect(() => {
    N()
  }, [N]), i.useEffect(() => {
    v || (0, u.ql)("")
  }, [v]), (0, r.jsx)(c.Gt, {
    value: R,
    children: (0, r.jsx)(s.VqE, {
      className: o()(_.picker, {
        [_.fetching]: A,
        [_.inExpressionPicker]: v
      }),
      children: A ? (0, r.jsx)(s.$jN, {}) : (0, r.jsx)(p.Z, {
        guildId: t,
        channel: n,
        onClose: m,
        onSelect: h,
        shouldValidateSelectedSound: b,
        containerWidth: a,
        suppressPlaySound: E,
        shouldShowUpsell: y,
        gridNotice: O,
        soundButtonOverlay: S,
        listPadding: I,
        renderHeader: T,
        defaultSoundsOnly: C,
        inExpressionPicker: v,
        analyticsSource: g,
        enablePickerUpsellPremiumBrandRefresh: P
      })
    })
  })
}