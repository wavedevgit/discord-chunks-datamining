/** Chunk was on web.js **/
"use strict";
n.d(t, {
  R: () => u
}), n(47120);
var r = n(442837),
  i = n(704215),
  o = n(243778),
  a = n(944486),
  s = n(54480),
  l = n(611725),
  c = n(364203);

function u(e) {
  let {
    isSettingsOpen: t
  } = e, {
    activePickerChannelId: n,
    openPickerForChannel: u
  } = (0, l.B)(), d = (0, r.e7)([a.Z], () => a.Z.getCurrentlySelectedChannelId()), {
    canAccessPicker: f
  } = (0, s.m)({
    location: "useChatWallpaperPickerConfig",
    selectedChannelId: d
  }), _ = f && !t, [p, h] = (0, o.US)(_ ? [i.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []);
  if (!f) return;
  let m = p === i.z.CHAT_WALLPAPERS_PICKER_COACHMARK;
  if (m && null != d && null == n && u(d), n === d) return {
    pickerType: m ? c.jQ.COACHMARK : c.jQ.DEFAULT,
    markDismissed: m ? h : void 0
  }
}