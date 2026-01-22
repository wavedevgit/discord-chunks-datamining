/** Chunk was on web.js **/
/** chunk id: 652896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Iy: () => a,
  _z: () => s,
  wL: () => i
}), require("./747238.js"), require("./896048.js"), require("./65821.js");
var Chunk502075 = require("./502075.js");

function i(e) {
  return null != e && (e.startsWith(r.U4.GUILD) || e.startsWith(r.U4.CALL))
}

function a(e) {
  let t = e.split(":"),
    n = t[0];
  switch (n) {
    case r.U4.GUILD: {
      let [e, n, r, i] = t;
      return {
        streamType: e,
        guildId: n,
        channelId: r,
        ownerId: i
      }
    }
    case r.U4.CALL: {
      let [e, n, r] = t;
      return {
        streamType: e,
        channelId: n,
        ownerId: r
      }
    }
    default:
      throw Error("Unknown stream type ".concat(n))
  }
}

function s(e) {
  let {
    streamType: t,
    guildId: n,
    channelId: i,
    ownerId: a
  } = e;
  switch (t) {
    case r.U4.GUILD:
      return [t, n, i, a].join(":");
    case r.U4.CALL:
      return [t, i, a].join(":");
    default:
      throw Error("Unknown stream type ".concat(t))
  }
}