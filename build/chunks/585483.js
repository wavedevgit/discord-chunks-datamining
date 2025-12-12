/** Chunk was on web.js **/
/** chunk id: 585483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => c,
  b: () => Chunk330477.b
}), require("./388685.js");
var Chunk17089 = require("./17089.js"),
  Chunk330477 = require("./330477.js"),
  Chunk710845 = require("./710845.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  var i;
  let a = null != (i = Object.values(o.LPv).find(t => e.startsWith(t))) ? i : e;
  r.LN({
    type: "ComponentDispatch",
    description: a,
    data: {
      actionData: t,
      fullActionName: e
    },
    durationMs: n
  })
}
let l = new Chunk710845.Z("ComponentDispatchUtils"),
  c = new Chunk330477.b({
    maxListeners: 100,
    enableDevtools: false,
    logger: {
      warn: function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return l.warn(e, ...n)
      }
    },
    devtoolsReporter: s
  })