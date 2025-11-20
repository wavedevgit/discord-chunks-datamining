/** Chunk was on 87154 **/
/** chunk id: 724213, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  hi: () => b,
  kH: () => p,
  rz: () => d
}), require("./997841.js"), require("./388685.js"), require("./539854.js");
var Chunk95015 = require("./95015.js");
require("./524437.js");
var Chunk549817 = require("./549817.js");
require("./581883.js");
var Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk9156 = require("./9156.js"),
  Chunk152376 = require("./152376.js"),
  Chunk398758 = require("./398758.js"),
  Chunk372897 = require("./372897.js");

function b(e) {
  var t, n;
  let i = (0, u.r1)(e),
    l = null != (n = null == (t = o.ZP.getSelfMember(e)) ? true : t.flags) ? n : 0,
    c = (0, r.yE)(l, s.q.COMPLETED_ONBOARDING),
    b = a.ZP.getOptedInChannels(e).size > 0;
  return !i && !c && !b
}

function p(e) {
  if (b(e)) return void d(e);
  {
    let t = (0, u.r1)(e);
    (0, c.QG)(e, !t)
  }
}

function d(e) {
  let {
    include: t = new Set,
    exclude: n = new Set
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, r = l.ZP.getChannels(e), o = [...r[l.sH], ...r[l.Zb]].filter(e => {
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
  t.forEach(e => o.push(e)), i.Z.onboardExistingMember(e, new Set(o))
}