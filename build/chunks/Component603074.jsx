/** Chunk was on web.js **/
/** chunk id: 603074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk675478 = require("./675478.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk526617 = require("./526617.jsx"),
  Chunk119547 = require("./119547.js");

function g(e) {
  let {
    guildId: t,
    channel: n,
    containerWidth: o,
    onClose: g,
    onSelect: E,
    analyticsSource: b,
    suppressPlaySound: y,
    shouldValidateSelectedSound: O,
    shouldShowUpsell: v = true,
    gridNotice: I,
    inExpressionPicker: T,
    soundButtonOverlay: S,
    listPadding: A,
    renderHeader: N,
    defaultSoundsOnly: C
  } = e, R = (0, s.e7)([p.Z], () => p.Z.isFetchingSounds() || p.Z.isFetchingDefaultSounds()), {
    analyticsLocations: P
  } = (0, u.ZP)(c.Z.SOUNDBOARD_POPOUT);
  return i.useEffect(() => {
    _.w(), f.DZ.loadIfNecessary(), T || (0, d.ql)("")
  }, [T]), (0, r.jsx)(u.Gt, {
    value: P,
    children: (0, r.jsx)(l.VqE, {
      className: a()(m.picker, {
        [m.fetching]: R,
        [m.inExpressionPicker]: T
      }),
      children: R ? (0, r.jsx)(l.$jN, {}) : (0, r.jsx)(h.Z, {
        guildId: t,
        channel: n,
        onClose: g,
        onSelect: E,
        shouldValidateSelectedSound: O,
        containerWidth: o,
        suppressPlaySound: y,
        shouldShowUpsell: v,
        gridNotice: I,
        soundButtonOverlay: S,
        listPadding: A,
        renderHeader: N,
        defaultSoundsOnly: C,
        inExpressionPicker: T,
        analyticsSource: b
      })
    })
  })
}