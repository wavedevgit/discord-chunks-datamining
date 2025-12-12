/** Chunk was on web.js **/
/** chunk id: 963456, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => _,
  j: () => h
}), require("./539854.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");
let c = 5e3,
  u = 3,
  d = 1e3,
  f = 1001,
  p = 1002;
async function _(e, t) {
  let n, s = performance.now(),
    _ = 0,
    h = [];
  switch (e.type) {
    case "channel":
      n = l.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
      break;
    case "guild":
      n = l.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
      break;
    case "user":
      n = l.ANM.APPLICATION_COMMAND_INDEX_USER;
      break;
    case "application":
      n = l.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId)
  }
  let g = async t => _ >= u ? (h.push(p), b({
    error: true
  }), i.Z.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
    target: e
  })) : (await new Promise(e => setTimeout(e, t)), E()), E = () => r.tn.get({
    url: n,
    retries: u - _ - 1,
    signal: t.signal,
    onRequestCreated: () => _++,
    rejectWithError: false
  }).then(t => 202 === t.status ? (h.push(202), g(c)) : (b({
    error: false
  }), i.Z.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
    target: e,
    index: t.body
  })), n => {
    var r;
    if (t.signal.aborted) {
      h.push(f), b({
        error: true
      });
      return
    }
    return 429 === n.status ? (h.push(429), g(n.body.retry_after * o.Z.Millis.SECOND)) : (h.push(null != (r = n.status) ? r : d), b({
      error: true
    }), i.Z.dispatch({
      type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
      target: e
    }))
  }), b = r => {
    let {
      error: i
    } = r, o = performance.now() - s;
    a.default.track(l.rMx.APPLICATION_COMMAND_PERFORMANCE, {
      duration_ms: o,
      error: i,
      aborted: t.signal.aborted,
      include_applications: true,
      retries: Math.max(_ - 1, 0),
      kind: null,
      command_type: null,
      url: n,
      target_type: e.type,
      target_id: m(e),
      failure_statuses: h
    })
  };
  await E()
}

function m(e) {
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
      (0, s.vE)(e)
  }
}

function h(e) {
  i.Z.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
    target: e
  })
}