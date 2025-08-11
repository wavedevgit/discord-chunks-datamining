/** Chunk was on 8926 **/
/** chunk id: 156673, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk637853 = require("./637853.js"),
  Chunk434404 = require("./434404.js"),
  Chunk837949 = require("./837949.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function c(e) {
  let {
    guild: n,
    onSelect: t
  } = e, c = (0, u.Z)(n.id), h = (0, a.wC)(n.id);
  return <l.v2r onSelect={t} navId={"guild-browse-channels-context-menu"} aria-label={o.intl.string(o.t.ogxXGh)} onClose={r.Zy}><l.kSQ>{h && <l.sNh id={"go-to-settings"} label={o.intl.string(o.t.X70lV1)} action={() => {
          s.Z.open(n.id, d.pNK.ONBOARDING)
        }} />}{c}</l.kSQ></l.v2r>
}