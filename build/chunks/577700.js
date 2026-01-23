/** Chunk was on web.js **/
/** chunk id: 577700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => m,
  E: () => _
}), require("./321073.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js");
let c = 5e3,
  u = 3,
  d = 1e3,
  f = 1001,
  p = 1002;
async function _(e, t) {
  let n, o = performance.now(),
    _ = 0,
    m = [];
  switch (e.type) {
    case "channel":
      n = l.Rsh.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
      break;
    case "guild":
      n = l.Rsh.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
      break;
    case "user":
      n = l.Rsh.APPLICATION_COMMAND_INDEX_USER;
      break;
    case "application":
      n = l.Rsh.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId)
  }
  let g = async t => _ >= u ? (m.push(p), y({
    error: true
  }), i.h.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
    target: e
  })) : (await new Promise(e => setTimeout(e, t)), E()), E = () => r.Bo.get({
    url: n,
    retries: u - _ - 1,
    signal: t.signal,
    onRequestCreated: () => _++,
    rejectWithError: false
  }).then(t => 202 === t.status ? (m.push(202), g(c)) : (y({
    error: false
  }), i.h.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
    target: e,
    index: t.body
  })), n => {
    var r;
    if (t.signal.aborted) {
      m.push(f), y({
        error: true
      });
      return
    }
    return 429 === n.status ? (m.push(429), g(n.body.retry_after * s.A.Millis.SECOND)) : (m.push(null != (r = n.status) ? r : d), y({
      error: true
    }), i.h.dispatch({
      type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
      target: e
    }))
  }), y = r => {
    let {
      error: i
    } = r, s = performance.now() - o;
    a.default.track(l.HAw.APPLICATION_COMMAND_PERFORMANCE, {
      duration_ms: s,
      error: i,
      aborted: t.signal.aborted,
      include_applications: true,
      retries: Math.max(_ - 1, 0),
      kind: null,
      command_type: null,
      url: n,
      target_type: e.type,
      target_id: h(e),
      failure_statuses: m
    })
  };
  await E()
}

function h(e) {
  switch (e.type) {
    case "channel":
      return e.channelId;
    case "guild":
      return e.guildId;
    case "user":
      return null;
    case "application":
      return e.applicationId;
    default:
      (0, o.xb)(e)
  }
}

function m(e) {
  i.h.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
    target: e
  })
}