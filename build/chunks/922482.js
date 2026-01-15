/** Chunk was on web.js **/
/** chunk id: 922482, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AC: () => E,
  Cq: () => y,
  R5: () => O,
  TM: () => b
});
var Chunk749210 = require("./749210.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk366297 = require("./366297.js"),
  Chunk280837 = require("./280837.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk881824 = require("./881824.jsx"),
  Chunk107511 = require("./107511.js"),
  Chunk146085 = require("./146085.js"),
  Chunk96150 = require("./96150.js");

function g(e, t) {
  return !!d.Z.can(h.gl, e) && (!p.Zl(e.id) || t === e.id || (p.vu(e, () => y(e, true)), false))
}

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return new Promise(async i => {
    let a = c.Z.getChannel(t);
    if (null != a) return b(a, n), i(a);
    await (0, s.O)([e]), await r.Z.joinGuild(e, {
      lurker: true
    }), u.Z.addConditionalChangeListener(() => {
      let e = c.Z.getChannel(t);
      return null == e || (b(e), m.Z.initialize(), i(e), false)
    })
  })
}

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = f.Z.getVoiceChannelId();
  if (!t && !g(e, n) || (_.Z.initialize(), i.default.selectVoiceChannel(e.id), (n = f.Z.getVoiceChannelId()) !== e.id)) returnfalse;
  let r = l.Z.getAllApplicationStreamsForChannel(e.id);
  return r.length > 0 && (0, a.rn)(r[0], {
    noFocus: false
  }), true
}

function y(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = f.Z.getVoiceChannelId();
  !(!r && i !== e.id && (0, o._)(e) && p.Gy(e, () => y(e, t, n, true))) && b(e, t) && O(e, i)
}

function O(e, t) {
  p.R5(e, t)
}