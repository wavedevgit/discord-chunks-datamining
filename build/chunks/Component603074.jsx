/** Chunk was on web.js **/
/** chunk id: 603074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk895421 = require("./895421.js"),
  Chunk526617 = require("./526617.jsx"),
  Chunk411655 = require("./411655.js");

function p(e) {
  let {
    guildId: t,
    channel: n,
    containerWidth: a,
    onClose: p,
    onSelect: h,
    analyticsSource: m,
    suppressPlaySound: g,
    shouldValidateSelectedSound: E,
    shouldShowUpsell: b = true,
    gridNotice: y,
    inExpressionPicker: O,
    soundButtonOverlay: v,
    listPadding: I,
    renderHeader: T,
    defaultSoundsOnly: S
  } = e, {
    fetching: A,
    maybeFetchData: C
  } = (0, d.Z)(), {
    analyticsLocations: N
  } = (0, c.ZP)(l.Z.SOUNDBOARD_POPOUT);
  return i.useEffect(() => {
    C()
  }, [C]), i.useEffect(() => {
    O || (0, u.ql)("")
  }, [O]), (0, r.jsx)(c.Gt, {
    value: N,
    children: (0, r.jsx)(s.VqE, {
      className: o()(_.picker, {
        [_.fetching]: A,
        [_.inExpressionPicker]: O
      }),
      children: A ? (0, r.jsx)(s.$jN, {}) : (0, r.jsx)(f.Z, {
        guildId: t,
        channel: n,
        onClose: p,
        onSelect: h,
        shouldValidateSelectedSound: E,
        containerWidth: a,
        suppressPlaySound: g,
        shouldShowUpsell: b,
        gridNotice: y,
        soundButtonOverlay: v,
        listPadding: I,
        renderHeader: T,
        defaultSoundsOnly: S,
        inExpressionPicker: O,
        analyticsSource: m
      })
    })
  })
}