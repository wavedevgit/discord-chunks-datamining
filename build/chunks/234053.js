/** Chunk was on 72165 **/
/** chunk id: 234053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Lu: () => f,
  cE: () => u,
  le: () => b
}), require("./938796.js"), require("./896048.js"), require("./321073.js");
var Chunk665260 = require("./665260.js");
require("./873298.js");
var Chunk669953 = require("./669953.js");
require("./617617.js");
var Chunk808728 = require("./808728.js"),
  Chunk696451 = require("./696451.js"),
  Chunk543465 = require("./543465.js"),
  Chunk816662 = require("./816662.js"),
  Chunk395504 = require("./395504.js"),
  Chunk340837 = require("./340837.js");

function u(e) {
  var t, n;
  let r = (0, d.WW)(e),
    i = null != (t = null == (n = a.Ay.getSelfMember(e)) ? true : n.flags) ? t : 0,
    c = (0, l.Lt)(i, o.D.COMPLETED_ONBOARDING),
    u = s.Ay.getOptedInChannels(e).size > 0;
  return !r && !c && !u
}

function f(e) {
  if (u(e)) return void b(e);
  {
    let t = (0, d.WW)(e);
    (0, c.e4)(e, !t)
  }
}

function b(e) {
  let {
    include: t = new Set,
    exclude: n = new Set
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, l = i.Ay.getChannels(e), a = [...l[i.I6], ...l[i.vM]].filter(e => {
    let {
      channel: t
    } = e;
    return !t.isThread() && !n.has(t.id)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t.id
  });
  t.forEach(e => a.push(e)), r.A.onboardExistingMember(e, new Set(a))
}