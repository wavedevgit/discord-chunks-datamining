/** Chunk was on 87154 **/
/** chunk id: 724213, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  hi: () => b,
  kH: () => O,
  rz: () => p
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
  var t, r;
  let i = (0, u.r1)(e),
    l = null != (r = null == (t = o.ZP.getSelfMember(e)) ? true : t.flags) ? r : 0,
    a = (0, n.yE)(l, s.q.COMPLETED_ONBOARDING),
    b = c.ZP.getOptedInChannels(e).size > 0;
  return !i && !a && !b
}

function O(e) {
  if (b(e)) return void p(e);
  {
    let t = (0, u.r1)(e);
    (0, a.QG)(e, !t)
  }
}

function p(e) {
  let {
    include: t = new Set,
    exclude: r = new Set
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = l.ZP.getChannels(e), o = [...n[l.sH], ...n[l.Zb]].filter(e => {
    let {
      channel: t
    } = e;
    return !t.isThread() && !r.has(t.id)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t.id
  });
  t.forEach(e => o.push(e)), i.Z.onboardExistingMember(e, new Set(o))
}