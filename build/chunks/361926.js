/** Chunk was on web.js **/
/** chunk id: 361926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  E0: () => _,
  Vr: () => m,
  c5: () => u,
  eI: () => p
}), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk485845 = require("./485845.js"),
  Chunk155718 = require("./155718.js"),
  Chunk734057 = require("./734057.js"),
  Chunk577700 = require("./577700.js"),
  Chunk264322 = require("./264322.js"),
  Chunk210978 = require("./210978.js");
let u = "no primary app command for application",
  d = [Chunk155718.kc.PRIMARY_ENTRY_POINT];
async function f(e, t) {
  let n, r = s.A.getChannel(e);
  if (null != r && null == (n = p({
      channel: r,
      type: "channel"
    }, t)) && (await (0, l.Zn)({
      type: "application",
      applicationId: t
    }), n = p({
      channel: r,
      type: "channel"
    }, t)), null != n) return n;
  throw Error(u)
}

function p(e, t) {
  return l.Ay.query(e, {
    commandTypes: [a.kc.PRIMARY_ENTRY_POINT]
  }, {
    placeholderCount: 1,
    scoreMethod: c.M.COMMAND_ONLY,
    applicationId: t,
    allowFetch: false,
    allowApplicationState: true
  }).commands[0]
}

function _(e, t) {
  let {
    commands: n,
    loading: i
  } = h(e, t), a = n[0], s = null != a;
  return r.useEffect(() => {
    s || i || (0, o.$)({
      type: "application",
      applicationId: t
    })
  }, [t, s, i]), a
}

function h(e, t) {
  return (0, l.ZA)(e, {
    commandTypes: d
  }, {
    placeholderCount: 1,
    scoreMethod: c.M.COMMAND_ONLY,
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
  } = e, i = _(t, n);
  return null != i && null != r && g(i)
}

function g(e) {
  if (null == e) returnfalse;
  let t = null != e.integration_types && e.integration_types.includes(i.b.USER_INSTALL),
    n = null != e.contexts && e.contexts.includes(a.OL.BOT_DM);
  return t && n
}