/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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