/** Chunk was on 75708 **/
/** chunk id: 657825, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk546791 = require("./546791.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk772998 = require("./772998.js");
let u = e => {
  let {
    userId: t,
    timestamp: n,
    timestampFormatter: u
  } = e, m = (0, r.e7)([a.default], () => a.default.getUser(t));
  return true === m ? null : <div className={d.container}>{<c.r user={m} avatarSize={s.EFr.SIZE_40} />}{<div><div className={d.descriptors}>{<s.Text variant={"text-md/semibold"}>{l.ZP.getName(m)}</s.Text>}{<s.Text variant={"text-xs/medium"} color={"text-muted"}>{(0, o.LI)(new Date(n).getTime(), u)}</s.Text>}</div></div>}</div>
}