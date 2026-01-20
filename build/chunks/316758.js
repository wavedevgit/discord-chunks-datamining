/** Chunk was on 68784 **/
/** chunk id: 316758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IV: () => o,
  P: () => u,
  fH: () => c,
  xt: () => s
});
var Chunk166459 = require("./166459.js"),
  Chunk476326 = require("./476326.js"),
  Chunk703558 = require("./703558.js"),
  Chunk398805 = require("./398805.js");
async function o(e, t, n) {
  let r = (0, i.Yk)(t, n),
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
    platform: l.ow.WEB,
    origin: "unknown:poll_attachment"
  };
  r.Z.addFile({
    file: i,
    channelId: e,
    draftType: a.d.Poll
  })
}
async function u(e, t, n) {
  r.Z.remove(e, t, a.d.Poll)
}
async function s(e) {
  r.Z.clearAll(e, a.d.Poll)
}