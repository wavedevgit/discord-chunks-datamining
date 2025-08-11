/** Chunk was on web.js **/
/** chunk id: 182906, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk558522 = require("./558522.js"),
  Chunk484112 = require("./484112.js");

function s(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: s,
    imageNotFoundClassName: l
  } = e, [c, u] = i.useState(false);
  return "not-found" === t.state || c ? <div className={l}><o.Z className={a.brokenImageIcon} /></div> : "loading" === t.state ? null : <img alt={n} className={s} src={t.url} onError={() => u(true)} />
}