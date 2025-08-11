/** Chunk was on web.js **/
/** chunk id: 342687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk826298 = require("./826298.js"),
  Chunk871237 = require("./871237.js");
let c = e => {
  let {
    showImage: t
  } = e, {
    usageWidth: n,
    descriptionWidth: o,
    sourceWidth: c
  } = i.useMemo(() => ({
    usageWidth: a().random(60, 120),
    descriptionWidth: a().random(200, 600),
    sourceWidth: a().random(45, 90)
  }), []);
  return <div className={l.wrapper}>{t ? <div className={l.image} /> : null}{<div className={l.infoWrapper}>{<div style={{
          maxWidth: (0, s.Q1)(n)
        }} className={l.usageWrapper} />}{<div style={{
          maxWidth: (0, s.Q1)(o)
        }} className={l.description} />}</div>}{<div style={{
        width: (0, s.Q1)(c)
      }} className={l.source} />}</div>
}