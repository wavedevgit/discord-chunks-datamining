/** Chunk was on web.js **/
/** chunk id: 789662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AR: () => r,
  XR: () => i,
  nf: () => a
});
var r = function(e) {
    return e[e.KeepAsIs = 0] = "KeepAsIs", e[e.UseGreyDot = 1] = "UseGreyDot", e
  }({}),
  i = function(e) {
    return e[e.Low = 0] = "Low", e[e.Medium = 1] = "Medium", e[e.High = 2] = "High", e
  }({});
let a = {
  careALot: {
    monthOpenPerc: .01,
    yearOpenPerc: .01,
    sentMessages: 1e3
  },
  careALittle: {
    monthOpenPerc: .001,
    yearOpenPerc: .001,
    sentMessages: 5,
    minOpens: 2
  },
  smallServerSize: 50,
  mediumServerSize: 200,
  frecency: {
    yearMinOpensSmallServer: 10,
    yearMinOpensLargeServer: 50,
    monthMinOpens: 2,
    totalOpensPercent: .1
  }
}