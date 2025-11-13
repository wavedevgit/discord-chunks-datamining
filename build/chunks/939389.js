/** Chunk was on 75909 **/
/** chunk id: 939389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G6: () => m,
  JC: () => u,
  PW: () => f,
  yv: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk447543 = require("./447543.js"),
  Chunk960904 = require("./960904.js"),
  Chunk830121 = require("./830121.js"),
  Chunk701190 = require("./701190.js"),
  Chunk771845 = require("./771845.js"),
  Chunk591759 = require("./591759.js");
let u = e => null != e.text;

function d(e) {
  let t = 0 | Math.round(e),
    n = t % 60;
  return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
}

function m(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 2e3,
    [o, l] = (0, r.useState)(e),
    i = (0, r.useRef)(null);
  return (0, r.useEffect)(() => () => {
    null != i.current && clearTimeout(i.current)
  }, [e]), [o, () => {
    l(t), null != i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      l(e)
    }, n)
  }]
}
async function p(e) {
  try {
    var t;
    let n = (0, i.zO)(e);
    if (null == n || n.type !== l.g.INVITE) returnfalse;
    let r = a.Z.getInvite(n.code);
    if (null == r) {
      let {
        invite: e
      } = await o.ZP.resolveInvite(n.code, "Markdown Link");
      r = e
    }
    if (null == r) returnfalse;
    let c = s.ZP.getFlattenedGuildIds(),
      u = null == r || null == (t = r.guild) ? true : t.id;
    return null != u && c.includes(u)
  } catch (e) {
    returnfalse
  }
}
async function f(e) {
  try {
    if (c.Z.isDiscordUrl(e)) returntrue;
    return await p(e)
  } catch (e) {
    returnfalse
  }
}