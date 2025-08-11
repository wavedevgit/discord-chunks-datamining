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
  let n = t === i.PZ.PUBLIC ? o.intl.string(o.t.op2cJy) : t === i.PZ.APPLY_TO_JOIN ? o.intl.string(o.t.YwZfbm) : o.intl.string(o.t.TME4LC);
  switch (e) {
    case r.Q.STAFF:
      return {
        tooltipTitle: o.intl.string(o.t["lMrv9/"]), tooltipSubtitle: o.intl.string(o.t["lMrv9/"]), tooltipDescription: o.intl.string(o.t["lMrv9/"])
      };
    case r.Q.VERIFIED:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRio), tooltipSubtitle: o.intl.string(o.t.iCehw8), tooltipDescription: n
      };
    case r.Q.PARTNERED:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRio), tooltipSubtitle: o.intl.string(o.t.hfYfEB), tooltipDescription: n
      };
    case r.Q.VERIFIED_AND_PARTNERED:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRio), tooltipSubtitle: o.intl.string(o.t["TX+iFB"]), tooltipDescription: n
      };
    case r.Q.COMMUNITY:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRio), tooltipDescription: n
      };
    case r.Q.DISCOVERABLE:
      return {
        tooltipTitle: o.intl.string(o.t.K7iRio), tooltipDescription: o.intl.string(o.t.op2cJy)
      };
    default:
      return {
        tooltipTitle: o.intl.string(o.t.iZRkCw)
      }
  }
}