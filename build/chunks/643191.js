/** Chunk was on web.js **/
/** chunk id: 643191, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Sv: () => a,
  mb: () => r,
  v0: () => i
}), require("./258558.js");
try {
  null == Date.now && (Date.now = () => new Date().valueOf())
} catch (e) {}
let r = (() => {
    try {
      var e;
      return null != (e = n.g.performance.timing.navigationStart) ? e : n.g.performance.now()
    } catch (e) {}
    return Date.now()
  })(),
  i = (() => {
    try {
      var e;
      return null != (e = n.g.performance.timeOrigin) ? e : r
    } catch (e) {}
    return Date.now()
  })();
if (null == require.g.performance.timing) try {
  require.g.performance.timing = {
    navigationStart: r
  }
} catch (e) {}
if (null == require.g.performance.timeOrigin) try {
  require.g.performance.timeOrigin = i
} catch (e) {}
let a = require.g.performance