/** Chunk was on web.js **/
/** chunk id: 630242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => g
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk211644 = require("./211644.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk436952 = require("./436952.js"),
  Chunk839606 = require("./839606.js"),
  Chunk54480 = require("./54480.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");

function g(e) {
  let {
    isSettingsOpen: t
  } = e, {
    activePickerChannelId: n,
    openPickerForChannel: g,
    setLastShownChatWallpaperPickerType: E,
    lastShownChatWallpaperPickerType: b
  } = (0, _.B)(), y = (0, i.e7)([u.Z], () => u.Z.getCurrentlySelectedChannelId()), {
    isChatWallpaperEnabled: O,
    channelType: v
  } = (0, i.cj)([c.Z], () => {
    let e = c.Z.getChannel(y);
    return {
      isChatWallpaperEnabled: null == e ? true : e.isChatWallpaperEnabled,
      channelType: null == e ? true : e.type
    }
  }), {
    canAccessPicker: I,
    entryPoint: T,
    isChatWallpaperSetterExperimentEnabled: S,
    isDarkTheme: A
  } = (0, p.m)({
    location: "useChatWallpaperPickerConfig",
    channelId: y
  }), N = I && !t, [C, R] = (0, l.US)(N ? [a.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : [], true, true), P = C === a.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK, [w, D] = (0, l.US)(P ? [a.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []), L = (0, o.ZP)(e => e.recentlyShown[0]), x = (0, s.Nj)(a.z.CHAT_WALLPAPERS_PICKER_COACHMARK);
  if (r.useMemo(() => {
      S && true === O && !x && w !== a.z.CHAT_WALLPAPERS_PICKER_COACHMARK && d.default.track(h.rMx.CHAT_WALLPAPER_PICKER_COACHMARK_NOT_SHOW_REASON, {
        channel_id: y,
        channel_type: v,
        is_settings_open: t,
        is_dark_theme: A,
        is_overseer_dismissible_content_selected: P,
        last_dismissible_content_winner: null != L ? a.z[L] : "None"
      })
    }, [O, S, v, y, x, w]), !I) return;
  let M = P && w === a.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
  if (M && null != y && null == n && b !== _.j.COACHMARK && g(y), n === y) {
    let e = M ? _.j.COACHMARK : _.j.DEFAULT;
    return b !== e && E(e), {
      pickerType: e,
      markDismissed: M ? e => {
        D(e), T === f.FN.TOOLBAR && R(m.L.INDIRECT_ACTION)
      } : true
    }
  }
}