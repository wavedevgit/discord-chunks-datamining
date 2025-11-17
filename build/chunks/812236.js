/** Chunk was on web.js **/
/** chunk id: 812236, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fs: () => p,
  Xu: () => _,
  ZP: () => f,
  ms: () => m,
  sV: () => u
}), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk373793 = require("./373793.js"),
  Chunk911969 = require("./911969.js"),
  Chunk592125 = require("./592125.js"),
  Chunk963456 = require("./963456.js"),
  Chunk213459 = require("./213459.js"),
  Chunk367790 = require("./367790.js");
let u = "no primary app command for application",
  d = [Chunk911969.yU.PRIMARY_ENTRY_POINT];
async function f(e, t) {
  let n, r = o.Z.getChannel(e);
  if (null != r && null == (n = _({
      channel: r,
      type: "channel"
    }, t)) && (await (0, l.FN)({
      type: "application",
      applicationId: t
    }), n = _({
      channel: r,
      type: "channel"
    }, t)), null != n) return n;
  throw Error(u)
}

function _(e, t) {
  return l.ZP.query(e, {
    commandTypes: [a.yU.PRIMARY_ENTRY_POINT]
  }, {
    placeholderCount: 1,
    scoreMethod: c.p.COMMAND_ONLY,
    applicationId: t,
    allowFetch: false,
    allowApplicationState: true
  }).commands[0]
}

function p(e, t) {
  let {
    commands: n,
    loading: i
  } = h(e, t), a = n[0], o = null != a;
  return r.useEffect(() => {
    o || i || (0, s.j)({
      type: "application",
      applicationId: t
    })
  }, [t, o, i]), a
}

function h(e, t) {
  return (0, l.v1)(e, {
    commandTypes: d
  }, {
    placeholderCount: 1,
    scoreMethod: c.p.COMMAND_ONLY,
    applicationId: t,
    allowFetch: false,
    allowApplicationState: true
  })
}

function m(e) {
  let {
    context: t,
    applicationId: n,
    botUserId: r
  } = e, i = p(t, n);
  return null != i && null != r && g(i)
}

function g(e) {
  if (null == e) returnfalse;
  let t = null != e.integration_types && e.integration_types.includes(i.Y.USER_INSTALL),
    n = null != e.contexts && e.contexts.includes(a.D.BOT_DM);
  return t && n
}