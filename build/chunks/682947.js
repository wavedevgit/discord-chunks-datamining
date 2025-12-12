/** Chunk was on web.js **/
/** chunk id: 682947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => a
});
var Chunk284363 = require("./284363.js"),
  Chunk854218 = require("./854218.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t) {
  let n = t === i.PZ.PUBLIC ? o.intl.string(o.t.op2cJ6) : t === i.PZ.APPLY_TO_JOIN ? o.intl.string(o.t.YwZfbt) : o.intl.string(o.t.TME4LJ);
  switch (e) {
    case r.Q.STAFF:
      return {
        tooltipTitle: o.intl.string(o.t.lMrv96), tooltipSubtitle: o.intl.string(o.t.lMrv96), tooltipDescription: o.intl.string(o.t.lMrv96)
      };
    case r.Q.VERIFIED:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRig), tooltipSubtitle: o.intl.string(o.t.iCehw9), tooltipDescription: n
      };
    case r.Q.PARTNERED:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRig), tooltipSubtitle: o.intl.string(o.t.hfYfEE), tooltipDescription: n
      };
    case r.Q.VERIFIED_AND_PARTNERED:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRig), tooltipSubtitle: o.intl.string(o.t["TX+iFC"]), tooltipDescription: n
      };
    case r.Q.COMMUNITY:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRig), tooltipDescription: n
      };
    case r.Q.DISCOVERABLE:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRig), tooltipDescription: o.intl.string(o.t.op2cJ6)
      };
    default:
      return {
        tooltipTitle: o.intl.string(o.t["iZRkC/"])
      }
  }
}