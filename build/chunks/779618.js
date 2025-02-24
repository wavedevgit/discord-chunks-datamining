/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(358085),
  i = n(924557),
  o = n(65154);

function a(e) {
  let {
    ignorePlatformRestriction: t
  } = i.NV.getCurrentConfig({
    location: "isClipsClientCapable"
  }, {
    autoTrackExposure: !1
  });
  return t || r.isDesktop() && e.getMediaEngine().supports(o.AN.CLIPS)
}