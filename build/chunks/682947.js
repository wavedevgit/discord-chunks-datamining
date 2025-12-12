/** Chunk was on web.js **/
/** chunk id: 682947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => o
});
var Chunk284363 = require("./284363.js"),
  Chunk854218 = require("./854218.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t) {
  let n = t === i.PZ.PUBLIC ? a.intl.string(a.t.op2cJ6) : t === i.PZ.APPLY_TO_JOIN ? a.intl.string(a.t.YwZfbt) : a.intl.string(a.t.TME4LJ);
  switch (e) {
    case r.Q.STAFF:
      return {
        tooltipTitle: a.intl.string(a.t.lMrv96), tooltipSubtitle: a.intl.string(a.t.lMrv96), tooltipDescription: a.intl.string(a.t.lMrv96)
      };
    case r.Q.VERIFIED:
      return {
        tooltipTitle: a.intl.string(a.t.K7iRig), tooltipSubtitle: a.intl.string(a.t.iCehw9), tooltipDescription: n
      };
    case r.Q.PARTNERED:
      return {
        tooltipTitle: a.intl.string(a.t.K7iRig), tooltipSubtitle: a.intl.string(a.t.hfYfEE), tooltipDescription: n
      };
    case r.Q.VERIFIED_AND_PARTNERED:
      return {
        tooltipTitle: a.intl.string(a.t.K7iRig), tooltipSubtitle: a.intl.string(a.t["TX+iFC"]), tooltipDescription: n
      };
    case r.Q.COMMUNITY:
      return {
        tooltipTitle: a.intl.string(a.t.K7iRig), tooltipDescription: n
      };
    case r.Q.DISCOVERABLE:
      return {
        tooltipTitle: a.intl.string(a.t.K7iRig), tooltipDescription: a.intl.string(a.t.op2cJ6)
      };
    default:
      return {
        tooltipTitle: a.intl.string(a.t["iZRkC/"])
      }
  }
}