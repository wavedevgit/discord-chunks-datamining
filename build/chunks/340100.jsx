/** Chunk was on web.js **/
/** chunk id: 340100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./784620.js"), require("./973216.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk26650 = require("./26650.jsx"),
  Chunk485662 = require("./485662.js");
let d = function(e) {
  let {
    className: t,
    color: n = a.Z.colors.WHITE,
    quest: i,
    isInventory: d
  } = e, f = (0, l.qb)(e.quest), {
    percentComplete: _,
    completedRatioDisplay: p
  } = (0, l.I)(i);
  return !d && f.length > 0 ? <c.Z>{f.at(0)}</c.Z> : <div className={o()(u.wrapper, t)} style={{
      color: n.css
    }}>{<div className={u.percentCompleteWrapper}>{<s.Text variant={"text-xs/semibold"} className={u.percentCompleteLabel} color={"none"}>{p}</s.Text>}{<div className={u.percentCompleteLabelOffset} style={{
          width: "".concat(100 - _, "%")
        }} />}</div>}{<div className={u.progressBar} role={"progressbar"} aria-valuenow={_}><div className={u.progressBarFill} style={{
          width: "".concat(_, "%")
        }} /></div>}{f.length > 0 && <c.Z isInventory={d}>{f.at(0)}</c.Z>}</div>
}