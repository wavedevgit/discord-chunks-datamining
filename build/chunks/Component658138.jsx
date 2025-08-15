/** Chunk was on 57789 **/
/** chunk id: 658138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk213609 = require("./213609.js"),
  Chunk377171 = require("./377171.js"),
  Chunk626135 = require("./626135.js"),
  Chunk839606 = require("./839606.js"),
  Chunk54480 = require("./54480.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209863 = require("./209863.js");

function p(e) {
  let {
    openPickerForChannel: t
  } = (0, d.B)(), n = (0, i.useCallback)(() => {
    o.default.selectPrivateChannel(e.id), t(e.id), u.default.track(O.rMx.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT_CLICKED, {
      channel_id: e.id
    })
  }, [e.id, t]), {
    canAccessPicker: p
  } = (0, f.m)({
    location: "useChannelWallpaperItem",
    channelId: e.id
  }), h = e.isPrivate() && p;
  return ((0, c.Z)({
    type: l.ImpressionTypes.MENU,
    name: l.ImpressionNames.CHAT_WALLPAPER_DM_CONTEXT_MENU_ENTRY_POINT
  }, {
    disableTrack: !h
  }), h) ? (0, r.jsx)(a.sNh, {
    id: "set-wallpaper",
    label: (0, r.jsxs)("div", {
      className: _.label,
      children: [b.intl.string(b.t.GixvUl), (0, r.jsx)(a.IGR, {
        text: b.intl.string(b.t.y2b7CA),
        color: s.Z.BG_BRAND
      })]
    }),
    icon: () => (0, r.jsx)("div", {
      className: _.iconWrapper,
      children: (0, r.jsx)(a.SrA, {
        size: "xs"
      })
    }),
    action: n
  }) : null
}