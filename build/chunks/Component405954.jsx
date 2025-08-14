/** Chunk was on 54273 **/
/** chunk id: 405954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436952 = require("./436952.js"),
  Chunk839606 = require("./839606.js"),
  Chunk54480 = require("./54480.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let b = function(e) {
  let {
    channel: t
  } = e, {
    activePickerChannelId: n,
    openPickerForChannel: b,
    closePicker: y
  } = (0, o.B)(), {
    canAccessPicker: x,
    entryPoint: j
  } = (0, c.m)({
    location: "channel_header_toolbar",
    channelId: t.id
  }), _ = (0, u.Nj)(l.z.CHAT_WALLPAPERS_PICKER_COACHMARK), O = x && j === s.FN.TOOLBAR && _, [v, C] = (0, d.US)(O ? [l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE] : []), E = v === l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE, S = i.useCallback(() => {
    E && C(g.L.TAKE_ACTION), n === t.id ? (y(), h.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, {
      action: "close"
    })) : (b(t.id), h.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, {
      action: "open"
    }))
  }, [n, t.id, y, b, E, C]);
  return O ? (0, r.jsx)(p.JO, {
    onClick: S,
    tooltip: m.intl.string(m.t.GixvUl),
    icon: a.XBm,
    iconSize: 20,
    "aria-label": m.intl.string(m.t.GixvUl),
    showBadge: E,
    selected: n === t.id
  }) : null
}