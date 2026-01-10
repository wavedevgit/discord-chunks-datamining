/** Chunk was on 75909 **/
/** chunk id: 939389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $R: () => f,
  JC: () => c,
  PW: () => m,
  yv: () => u
}), require("./388685.js"), require("./473749.js");
var Chunk447543 = require("./447543.js"),
  Chunk960904 = require("./960904.js"),
  Chunk830121 = require("./830121.js"),
  Chunk701190 = require("./701190.js"),
  Chunk771845 = require("./771845.js"),
  Chunk591759 = require("./591759.js");
let c = e => null != e.text;

function u(e) {
  let t = 0 | e,
    n = Math.floor(t / 3600),
    r = Math.floor(t % 3600 / 60),
    o = t % 60;
  return n > 0 ? "".concat(n, ":").concat(String(r).padStart(2, "0"), ":").concat(String(o).padStart(2, "0")) : "".concat(r, ":").concat(String(o).padStart(2, "0"))
}
async function d(e) {
  try {
    var t;
    let n = (0, l.zO)(e);
    if (null == n || n.type !== o.g.INVITE) returnfalse;
    let s = i.Z.getInvite(n.code);
    if (null == s) {
      let {
        invite: e
      } = await r.ZP.resolveInvite(n.code, "Markdown Link");
      s = e
    }
    if (null == s) returnfalse;
    let c = a.ZP.getFlattenedGuildIds(),
      u = null == s || null == (t = s.guild) ? true : t.id;
    return null != u && c.includes(u)
  } catch (e) {
    returnfalse
  }
}
async function m(e) {
  try {
    if (s.Z.isDiscordUrl(e)) returntrue;
    return await d(e)
  } catch (e) {
    returnfalse
  }
}

function f(e, t, n) {
  return e ? t.timestampSec >= t.duration ? 0 : t.timestampSec : Math.max(t.timestampSec, n.progressSeconds)
}