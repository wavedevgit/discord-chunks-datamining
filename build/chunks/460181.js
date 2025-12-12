/** Chunk was on web.js **/
/** chunk id: 460181, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  GN: () => f,
  tu: () => d,
  uk: () => u
});
var Chunk710845 = require("./710845.js"),
  Chunk474873 = require("./474873.js"),
  Chunk135906 = require("./135906.js"),
  Chunk246946 = require("./246946.js"),
  Chunk509571 = require("./509571.js");
r = require("./146779.js").WebAudioSound;
let c = new Chunk710845.Z("SoundUtils");

function u(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1,
    i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : l.w.DEFAULT;
  return d(null != (n = (0, o.Z)(t)[e]) ? n : e, e, r, i)
}

function d(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1,
    i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : l.w.DEFAULT;
  return new r(e, t, n, i)
}

function f(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    r = arguments.length > 2 ? arguments[2] : true,
    i = arguments.length > 3 ? arguments[3] : true,
    u = arguments.length > 4 && true !== arguments[4] ? arguments[4] : l.w.DEFAULT;
  if (s.Z.disableSounds) return;
  let f = (0, o.Z)(null != i ? i : a.Z.getSoundpack());
  null == f && c.log("Unable to find sound for pack name: ".concat(i));
  let p = d(null != (t = f[e]) ? t : e, e, n, u);
  return null != r ? p.playWithListener().then(e => {
    e && r()
  }) : p.play(), p
}