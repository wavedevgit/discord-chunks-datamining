/** Chunk was on 53162 **/
/** chunk id: 598952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk170086 = require("./170086.js");

function o(e) {
  var t;
  let {
    attachment: n
  } = e, o = Math.round((null != (t = n.size) ? t : 0) / 1024 / 1024 * 100) / 100;
  return <div className={l.container}>{<r.ZKT size={"xs"} color={"currentColor"} className={l.fileIcon} />}{<r.LZC size={8} horizontal={true} />}{<r.Text variant={"text-sm/normal"} color={"text-default"} className={l.fileName}>{n.filename}</r.Text>}{<r.LZC size={8} horizontal={true} />}{<div className={l.dot} />}{<r.LZC size={8} horizontal={true} />}{<r.Text variant={"text-sm/normal"} color={"text-muted"}>{o}{"MB"}</r.Text>}</div>
}