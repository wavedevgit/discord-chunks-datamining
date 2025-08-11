/** Chunk was on 98466 **/
/** chunk id: 151578, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk198620 = require("./198620.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.js");

function h(t) {
  let {
    attachmentUrl: n,
    attachmentName: a,
    onSelect: h
  } = t;
  return <l.v2r navId={"attachment-link-context"} onClose={c.Zy} onSelect={h} aria-label={r.intl.string(r.t["5oIOLS"])}><l.kSQ>{<l.sNh id={"attachment-link-copy-link"} label={r.intl.string(r.t.WqhZsr)} action={async () => {
          let t = await (0, e.B_)(n);
          (0, s.JG)(null != t ? t : "")
        }} />}{<l.sNh id={"attachment-link-copy-name"} label={r.intl.string(r.t.JrGD7O)} action={() => {
          (0, s.JG)(null != a ? a : "")
        }} />}</l.kSQ></l.v2r>
}