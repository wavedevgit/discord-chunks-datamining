/** Chunk was on 52786 **/
/** chunk id: 676779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AY: () => u,
  Sw: () => o,
  _N: () => c,
  k7: () => s
});
var Chunk608299 = require("./608299.js"),
  Chunk565150 = require("./565150.js"),
  Chunk31717 = require("./31717.js"),
  Chunk214162 = require("./214162.js");
async function o(e, t, n) {
  let r = (0, i.$P)(t, n),
    l = await fetch(n);
  return c(e, t, new File([await l.blob()], r, {
    type: "image/gif"
  })), n
}

function c(e, t, n) {
  let i = {
    id: t,
    channelId: e,
    file: n,
    platform: l.xz.WEB,
    origin: "unknown:poll_attachment"
  };
  r.A.addFile({
    file: i,
    channelId: e,
    draftType: a.C.Poll
  })
}
async function s(e, t, n) {
  r.A.remove(e, t, a.C.Poll)
}
async function u(e) {
  r.A.clearAll(e, a.C.Poll)
}