/** Chunk was on web.js **/
/** chunk id: 323443, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CH: () => E,
  av: () => b,
  cy: () => y,
  jA: () => O
});
var Chunk686956 = require("./686956.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk389234 = require("./389234.js"),
  Chunk854492 = require("./854492.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk993838 = require("./993838.jsx"),
  Chunk943525 = require("./943525.js"),
  Chunk233993 = require("./233993.js"),
  Chunk766219 = require("./766219.js");

function g(e, t) {
  return !!d.A.can(h.Gk, e) && (!p.j6(e.id) || t === e.id || (p.W0(e, () => b(e, true)), false))
}

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return new Promise(async i => {
    let a = c.A.getChannel(t);
    if (null != a) return y(a, n), i(a);
    await (0, o.A)([e]), await r.A.joinGuild(e, {
      lurker: true
    }), u.A.addConditionalChangeListener(() => {
      let e = c.A.getChannel(t);
      return null == e || (y(e), m.A.initialize(), i(e), false)
    })
  })
}

function y(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = f.A.getVoiceChannelId();
  if (!t && !g(e, n) || (_.A.initialize(), i.default.selectVoiceChannel(e.id), (n = f.A.getVoiceChannelId()) !== e.id)) returnfalse;
  let r = l.A.getAllApplicationStreamsForChannel(e.id);
  return r.length > 0 && (0, a.A9)(r[0], {
    noFocus: false
  }), true
}

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = f.A.getVoiceChannelId();
  !r && i !== e.id && (0, s.H)(e) && p.E9(e, () => b(e, t, n, true)) || y(e, t) && O(e, i)
}

function O(e, t) {
  p.jA(e, t)
}