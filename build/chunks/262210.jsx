/** Chunk was on web.js **/
/** chunk id: 262210, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk429551 = require("./429551.js"),
  Chunk163646 = require("./163646.js");

function s(e) {
  let {
    start: t,
    end: n
  } = e, {
    elapsed: s,
    duration: l,
    percentage: c
  } = (0, o.Z)({
    start: t,
    end: n
  });
  return <div className={a.container}>{<i.Text variant={"text-xs/normal"} color={"text-default"} className={a.text}>{(0, o.m)(s)}</i.Text>}{<div className={a.bar}><div className={a.progress} style={{
          width: "".concat(100 * c, "%")
        }} /></div>}{<i.Text variant={"text-xs/normal"} color={"text-default"} className={a.text}>{(0, o.m)(l)}</i.Text>}</div>
}