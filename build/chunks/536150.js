/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  i: () => a
});
var r = n(544891),
  i = n(881052),
  o = n(981631);
async function a(e, t) {
  try {
    await r.tn.patch({
      url: o.ANM.MY_CONTENT_INVENTORY_APPLICATION(e),
      body: t,
      rejectWithError: !1
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}