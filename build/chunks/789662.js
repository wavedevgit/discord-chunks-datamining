/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  AR: () => r,
  XR: () => i,
  nf: () => o
});
var r = function(e) {
    return e[e.KeepAsIs = 0] = "KeepAsIs", e[e.UseGreyDot = 1] = "UseGreyDot", e
  }({}),
  i = function(e) {
    return e[e.Low = 0] = "Low", e[e.Medium = 1] = "Medium", e[e.High = 2] = "High", e
  }({});
let o = {
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