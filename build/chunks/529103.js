/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(570140);
let i = {
  setSection(e) {
    r.Z.dispatch({
      type: "FRIENDS_SET_SECTION",
      section: e
    })
  },
  setInitialSection(e) {
    r.Z.dispatch({
      type: "FRIENDS_SET_INITIAL_SECTION",
      section: e
    })
  }
}