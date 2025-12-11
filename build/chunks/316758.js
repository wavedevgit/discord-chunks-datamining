/** Chunk was on 68784 **/
/** chunk id: 316758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IV: () => o,
  P: () => s,
  fH: () => c,
  xt: () => u
});
var Chunk166459 = require("./166459.js"),
  Chunk476326 = require("./476326.js"),
  Chunk703558 = require("./703558.js"),
  Chunk398805 = require("./398805.js");
async function o(e, t, n) {
  let r = (0, i.Yk)(t, n),
    a = await fetch(n);
  return c(e, t, new File([await a.blob()], r, {
    type: "image/gif"
  })), n
}

function c(e, t, n) {
  let i = {
    id: t,
    channelId: e,
    file: n,
    platform: a.ow.WEB,
    origin: "unknown:poll_attachment"
  };
  r.Z.addFile({
    file: i,
    channelId: e,
    draftType: l.d.Poll
  })
}
async function s(e, t, n) {
  r.Z.remove(e, t, l.d.Poll)
}
async function u(e) {
  r.Z.clearAll(e, l.d.Poll)
}