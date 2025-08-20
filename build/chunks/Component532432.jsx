/** Chunk was on web.js **/
/** chunk id: 532432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk373230 = require("./373230.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk486324 = require("./486324.js"),
  Chunk485696 = require("./485696.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk801292 = require("./801292.js");
let y = [{
  name: "gif",
  extensions: ["gif"]
}];

function O(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: a,
    sectionTitle: O,
    changeAvatarButtonText: v,
    guildId: I,
    className: T,
    disabled: S = false,
    isTryItOutFlow: A = false,
    forcedDivider: C,
    withHighlight: N = false
  } = e, {
    newestAnalyticsLocation: R
  } = (0, u.ZP)(), P = N ? c.gtL : l.zx, w = (0, f.T)({
    location: "AvatarSection"
  }), D = [];
  w && D.push(s.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
  let [x, L] = (0, d.US)(D), j = x === s.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE, M = i.useCallback(() => {
    L(h.L.TAKE_ACTION), (0, _.$r)({
      uploadType: m.pC.AVATAR,
      analyticsSource: R,
      filters: A ? y : true,
      guildId: I,
      isTryItOutFlow: A
    })
  }, [I, R, A, L]);
  return (0, r.jsx)(p.Z, {
    className: T,
    title: O,
    titleIcon: j ? (0, r.jsx)(c.IGR, {
      text: E.intl.string(E.t.y2b7CA),
      className: b.newBadge
    }) : true,
    description: w ? E.intl.format(E.t.U4tZfX, {
      recentAvatarsLimit: g.iZ,
      onClick: M
    }) : true,
    errors: n,
    disabled: S,
    forcedDivider: C,
    children: (0, r.jsxs)("div", {
      className: b.buttonsContainer,
      children: [(0, r.jsx)(P, {
        className: o()({
          [b.buttonHighlighted]: N
        }),
        size: l.zx.Sizes.SMALL,
        onClick: M,
        children: null != v ? v : E.intl.string(E.t["4OynCA"])
      }), t && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: b.removeButton,
        children: (0, r.jsx)(c.zxk, {
          variant: "secondary",
          size: "sm",
          text: null != I ? E.intl.string(E.t.TDjKDg) : E.intl.string(E.t.twB3f3),
          onClick: () => a(null)
        })
      })]
    })
  })
}