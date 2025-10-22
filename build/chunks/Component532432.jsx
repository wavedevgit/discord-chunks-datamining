/** Chunk was on web.js **/
/** chunk id: 532432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk654904 = require("./654904.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk801292 = require("./801292.js");
let h = [{
  name: "gif",
  extensions: ["gif"]
}];

function m(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: a,
    sectionTitle: m,
    changeAvatarButtonText: g,
    guildId: E,
    className: b,
    disabled: y = false,
    isTryItOutFlow: O = false,
    forcedDivider: v,
    withHighlight: I = false
  } = e, {
    newestAnalyticsLocation: T
  } = (0, c.ZP)(), S = I ? l.gtL : s.zx, A = i.useCallback(() => {
    (0, u.$r)({
      uploadType: f.pC.AVATAR,
      analyticsSource: T,
      filters: O ? h : true,
      guildId: E,
      isTryItOutFlow: O
    })
  }, [E, T, O]);
  return (0, r.jsx)(d.Z, {
    className: b,
    title: m,
    errors: n,
    disabled: y,
    forcedDivider: v,
    children: (0, r.jsxs)("div", {
      className: p.buttonsContainer,
      children: [(0, r.jsx)(S, {
        className: o()({
          [p.buttonHighlighted]: I
        }),
        size: s.zx.Sizes.SMALL,
        onClick: A,
        children: null != g ? g : _.intl.string(_.t["4OynCD"])
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: p.removeButton,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: null != E ? _.intl.string(_.t.TDjKDm) : _.intl.string(_.t.twB3fz),
          onClick: () => a(null)
        })
      })]
    })
  })
}