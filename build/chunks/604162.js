/** Chunk was on 32249 **/
/** chunk id: 604162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G6: () => d,
  JC: () => c,
  qP: () => f,
  yv: () => u
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk447543 = require("./447543.js"),
  Chunk960904 = require("./960904.js"),
  Chunk830121 = require("./830121.js"),
  Chunk701190 = require("./701190.js"),
  Chunk771845 = require("./771845.js");
let c = e => null != e.text;

function u(e) {
  let t = 0 | Math.round(e),
    n = t % 60;
  return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
}

function d(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 2e3,
    [o, l] = (0, r.useState)(e),
    a = (0, r.useRef)(null);
  return (0, r.useEffect)(() => () => {
    null != a.current && clearTimeout(a.current)
  }, [e]), [o, () => {
    l(t), null != a.current && clearTimeout(a.current), a.current = setTimeout(() => {
      l(e)
    }, n)
  }]
}
async function f(e) {
  try {
    var t;
    let n = (0, a.zO)(e);
    if (null == n || n.type !== l.g.INVITE) returnfalse;
    let r = i.Z.getInvite(n.code);
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