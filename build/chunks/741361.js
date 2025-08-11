/** Chunk was on web.js **/
/** chunk id: 741361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aj: () => s,
  S1: () => c,
  d$: () => l,
  hw: () => u,
  kU: () => d,
  kY: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk156699 = require("./156699.js"),
  Chunk493683 = require("./493683.js");
async function a(e, t, n, o) {
  let a = e.getGuildId();
  if (null != a && t === a && !await (0, i.u)(e, o, n)) returnfalse;
  r.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
    id: t,
    allow: n,
    deny: o
  })
}

function s(e) {
  r.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
    id: e
  })
}

function l(e) {
  r.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
    advancedMode: e
  })
}

function c() {
  Chunk570140.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
  })
}

function u(e, t, n) {
  return d(e, t, [], n)
}

function d(e, t, n, i) {
  return r.Z.dispatch({
    type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
  }), new Promise(r => {
    let i = () => {
      if (0 === t.length && 0 === n.length) return r();
      if (t.length > 0) {
        let n = t.pop();
        if (null == n) return i();
        o.Z.updatePermissionOverwrite(e, n).then(i, i)
      } else {
        let t = n.pop();
        if (null == t) return i();
        o.Z.clearPermissionOverwrite(e, t).then(i, i)
      }
    };
    i()
  }).then(() => {
    r.Z.dispatch({
      type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
      silent: i
    })
  })
}