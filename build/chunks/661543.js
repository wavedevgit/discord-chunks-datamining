/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  j: () => i
});
var r = n(570140);

function i(e) {
  let {
    imageSrc: t,
    file: n,
    uploadType: i,
    guildId: o,
    isTryItOutFlow: a = !1
  } = e;
  r.Z.dispatch({
    type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
    imageSrc: t,
    file: n,
    uploadType: i,
    guildId: o,
    isTryItOutFlow: a
  })
}