/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  c: () => s
});
var r = n(570140),
  i = n(626135),
  o = n(474873),
  a = n(981631);

function s(e, t) {
  i.default.track(a.rMx.SOUNDPACK_UPDATED, {
    soundpack: e,
    previous_soundpack: o.Z.getSoundpack()
  }), r.Z.dispatch({
    type: "SET_SOUNDPACK",
    soundpack: e,
    forExperimentId: t
  })
}