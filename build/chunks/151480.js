/** Chunk was on web.js **/
"use strict";
n.d(t, {
  k: () => c
});
var r = n(544891),
  i = n(570140),
  o = n(881052),
  a = n(439170),
  s = n(860987),
  l = n(981631);
let c = async () => {
  i.Z.dispatch({
    type: "FETCH_CHAT_WALLPAPERS_START"
  });
  try {
    let e = await r.tn.get({
      url: l.ANM.CHAT_WALLPAPERS,
      rejectWithError: !0
    });
    i.Z.dispatch({
      type: "FETCH_CHAT_WALLPAPERS_SUCCESS",
      wallpapers: e.body.chat_wallpapers.map(s.w)
    })
  } catch (t) {
    let e = new o.Hx(t);
    (0, a.G)(e), i.Z.dispatch({
      type: "FETCH_CHAT_WALLPAPERS_FAILURE",
      error: e
    })
  }
}