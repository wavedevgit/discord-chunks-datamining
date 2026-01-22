/** Chunk was on web.js **/
/** chunk id: 989799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk756349 = require("./756349.js"),
  Chunk237248 = require("./237248.js"),
  Chunk338821 = require("./338821.jsx"),
  Chunk732611 = require("./732611.js");

function h(e) {
  let {
    guildId: t,
    channel: n,
    containerWidth: a,
    onClose: h,
    onSelect: m,
    analyticsSource: g,
    suppressPlaySound: E,
    shouldValidateSelectedSound: b,
    shouldShowUpsell: y = true,
    gridNotice: O,
    inExpressionPicker: A,
    soundButtonOverlay: v,
    listPadding: S,
    renderHeader: I,
    defaultSoundsOnly: T
  } = e, {
    fetching: C,
    maybeFetchData: N
  } = (0, f.A)(), R = (0, d.A)({
    location: "SoundboardSoundPicker"
  }), {
    analyticsLocations: w
  } = (0, c.Ay)(l.A.SOUNDBOARD_POPOUT);
  return i.useEffect(() => {
    N()
  }, [N]), i.useEffect(() => {
    A || (0, u.Ri)("")
  }, [A]), (0, r.jsx)(c.f5, {
    value: w,
    children: (0, r.jsx)(o.lGe, {
      className: s()(_.Nz, {
        [_.Bg]: C,
        [_.yV]: A
      }),
      children: C ? (0, r.jsx)(o.y$y, {}) : (0, r.jsx)(p.A, {
        guildId: t,
        channel: n,
        onClose: h,
        onSelect: m,
        shouldValidateSelectedSound: b,
        containerWidth: a,
        suppressPlaySound: E,
        shouldShowUpsell: y,
        gridNotice: O,
        soundButtonOverlay: v,
        listPadding: S,
        renderHeader: I,
        defaultSoundsOnly: T,
        inExpressionPicker: A,
        analyticsSource: g,
        enablePickerUpsellPremiumBrandRefresh: R
      })
    })
  })
}