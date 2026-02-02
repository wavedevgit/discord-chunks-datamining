/** Chunk was on 23628 **/
/** chunk id: 457775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ce: () => c,
  f7: () => d
}), require("./896048.js"), require("./64700.js");
var Chunk846293 = require("./846293.js"),
  Chunk167189 = require("./167189.js"),
  Chunk833291 = require("./833291.js"),
  Chunk299091 = require("./299091.js"),
  Chunk711014 = require("./711014.js"),
  Chunk998218 = require("./998218.js");
let c = e => null != e.text;
async function u(e) {
  try {
    var t;
    let n = (0, o.br)(e);
    if (null == n || n.type !== l.I.INVITE) returnfalse;
    let a = i.A.getInvite(n.code);
    if (null == a) {
      let {
        invite: e
      } = await r.Ay.resolveInvite(n.code, "Markdown Link");
      a = e
    }
    if (null == a) returnfalse;
    let c = s.Ay.getFlattenedGuildIds(),
      u = null == a || null == (t = a.guild) ? true : t.id;
    return null != u && c.includes(u)
  } catch (e) {
    returnfalse
  }
}
async function d(e) {
  try {
    if (a.A.isDiscordUrl(e)) returntrue;
    return await u(e)
  } catch (e) {
    returnfalse
  }
}