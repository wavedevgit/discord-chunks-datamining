/** Chunk was on web.js **/
/** chunk id: 754376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk835473 = require("./835473.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk618158 = require("./618158.jsx"),
  Chunk922745 = require("./922745.js"),
  Chunk611500 = require("./611500.jsx"),
  Chunk816083 = require("./816083.js"),
  Chunk992955 = require("./992955.js");

function d(e) {
  var t;
  let {
    applicationId: n,
    onMouseDown: d,
    onMouseMove: f,
    onMouseLeave: _,
    onFocus: p,
    idle: h
  } = e, m = (0, i.q)(n);
  return <div className={u.videoControls} onMouseMove={f} onMouseDown={d} onMouseLeave={_}>{<div className={u.topControls}><s.r idle={h} title={null != (t = null == m ? true : m.name) ? t : ""} onJumpToChannel={p} preventIdleComponent={a.Z} /></div>}{<div className={u.bottomControls}><o.Z grow={1} shrink={1} justify={o.Z.Justify.END} align={o.Z.Align.CENTER}><l.Z applicationId={n} className={c.rightPipIcon} /></o.Z></div>}</div>
}