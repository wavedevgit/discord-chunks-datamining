/** Chunk was on web.js **/
/** chunk id: 532432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk654904 = require("./654904.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk282341 = require("./282341.js");
let m = [{
  name: "gif",
  extensions: ["gif"]
}];

function h(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: a,
    sectionTitle: h,
    changeAvatarButtonText: g,
    guildId: E,
    className: b,
    disabled: y = false,
    isTryItOut: O = false,
    forcedDivider: v,
    withHighlight: S = false
  } = e, {
    newestAnalyticsLocation: I
  } = (0, c.ZP)(), T = S ? l.gtL : s.zx, C = i.useCallback(() => {
    (0, u.$r)({
      uploadType: f.pC.AVATAR,
      analyticsSource: I,
      filters: O ? m : true,
      guildId: E,
      isTryItOut: O
    })
  }, [E, I, O]);
  return (0, r.jsx)(d.Z, {
    className: b,
    title: h,
    errors: n,
    disabled: y,
    forcedDivider: v,
    children: (0, r.jsxs)("div", {
      className: _.buttonsContainer,
      children: [(0, r.jsx)(T, {
        className: o()({
          [_.buttonHighlighted]: S
        }),
        size: s.zx.Sizes.SMALL,
        onClick: C,
        children: null != g ? g : p.intl.string(p.t["4OynCD"])
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: _.removeButton,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: null != E ? p.intl.string(p.t.TDjKDm) : p.intl.string(p.t.twB3fz),
          onClick: () => a(null)
        })
      })]
    })
  })
}