/** Chunk was on web.js **/
/** chunk id: 203982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i.H,
  _: () => c
}), require("./896048.js");
var Chunk423034 = require("./423034.js"),
  Chunk769991 = require("./769991.js"),
  Chunk626584 = require("./626584.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
  var i;
  let a = null != (i = Object.values(s.zOV).find(t => e.startsWith(t))) ? i : e;
  r.HF({
    type: "ComponentDispatch",
    description: a,
    data: {
      actionData: t,
      fullActionName: e
    },
    durationMs: n
  })
}
let l = new Chunk626584.A("ComponentDispatchUtils"),
  c = new Chunk769991.H({
    maxListeners: 100,
    enableDevtools: false,
    logger: {
      warn: function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return l.warn(e, ...n)
      }
    },
    devtoolsReporter: o
  })