/** Chunk was on 51529 **/
/** chunk id: 228620, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk37234 = require("./37234.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.js"),
  Chunk703656 = require("./703656.js"),
  Chunk852245 = require("./852245.js"),
  Chunk388032 = require("./388032.js");
let b = (0, Chunk108843.Z)(function(n) {
  let {
    channel: e,
    onSelect: t
  } = n, c = (0, d.Z)(e), s = (0, o.Z)({
    id: e.id,
    label: h.intl.string(h.t.gFHI3t)
  });
  return <r.v2r navId={"channel-context"} onClose={i.Zy} aria-label={h.intl.string(h.t.Xm41aW)} onSelect={t}>{<r.kSQ>{c}{e.isCategory() ? null : <r.sNh id={"jump-to-channel"} label={h.intl.string(h.t["bQIM4+"])} action={() => {
          (0, u.XU)(e.guild_id, e.id), (0, l.xf)()
        }} />}</r.kSQ>}{<r.kSQ>{s}</r.kSQ>}</r.v2r>
}, [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_AUDIT_LOG_MENU])