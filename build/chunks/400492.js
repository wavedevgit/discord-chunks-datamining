/** Chunk was on web.js **/
/** chunk id: 400492, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Ak: () => f,
  Qh: () => d,
  aN: () => u
});
var Chunk626584 = require("./626584.js"),
  Chunk312671 = require("./312671.js"),
  Chunk458640 = require("./458640.js"),
  Chunk351906 = require("./351906.js"),
  Chunk257645 = require("./257645.js");
r = require("./946261.js").WebAudioSound;
let c = new Chunk626584.A("SoundUtils");

function u(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1,
    i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : l.a.DEFAULT;
  return d(null != (n = (0, o.A)(t)[e]) ? n : e, e, r, i)
}

function d(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1,
    i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : l.a.DEFAULT;
  return new r(e, t, n, i)
}

function f(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    r = arguments.length > 2 ? arguments[2] : true,
    i = arguments.length > 3 ? arguments[3] : true,
    u = arguments.length > 4 && true !== arguments[4] ? arguments[4] : l.a.DEFAULT;
  if (s.A.disableSounds) return;
  let f = (0, o.A)(null != i ? i : a.A.getSoundpack());
  null == f && c.log("Unable to find sound for pack name: ".concat(i));
  let p = d(null != (t = f[e]) ? t : e, e, n, u);
  return null != r ? p.playWithListener().then(e => {
    e && r()
  }) : p.play(), p
}