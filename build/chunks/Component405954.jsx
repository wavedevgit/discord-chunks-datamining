/** Chunk was on 5665 **/
/** chunk id: 405954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    closePicker: _
  } = (0, s.B)(), {
    canAccessPicker: y,
    entryPoint: C
  } = (0, c.m)({
    location: "channel_header_toolbar",
    channelId: t.id
  }), x = (0, u.Nj)(l.z.CHAT_WALLPAPERS_PICKER_COACHMARK), v = y && C === o.FN.TOOLBAR && x, [O, j] = (0, d.US)(v ? [l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE] : []), E = O === l.z.CHAT_WALLPAPERS_TOOLBAR_ENTRYPOINT_BADGE, S = i.useCallback(() => {
    E && j(m.L.TAKE_ACTION), n === t.id ? (_(), p.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, {
      action: "close"
    })) : (b(t.id), p.default.track(f.rMx.CHAT_WALLPAPER_TOOLBAR_ENTRY_POINT_CLICKED, {
      action: "open"
    }))
  }, [n, t.id, _, b, E, j]);
  return v ? (0, r.jsx)(h.JO, {
    onClick: S,
    tooltip: g.intl.string(g.t.GixvUl),
    icon: a.XBm,
    iconSize: 20,
    "aria-label": g.intl.string(g.t.GixvUl),
    showBadge: E,
    selected: n === t.id
  }) : null
}