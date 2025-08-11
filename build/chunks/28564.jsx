/** Chunk was on 59128 **/
/** chunk id: 28564, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js");

function e(t) {
  let {
    onClose: i,
    onConfirmDelete: n,
    transitionState: e
  } = t;
  return <r.Modal transitionState={e} aria-label={l.intl.string(l.t["u/2TkZ"])} onClose={i} title={l.intl.string(l.t["u/2TkZ"])} actions={[{
      text: l.intl.string(l.t["ETE/oK"]),
      variant: "secondary",
      onClick: i
    }, {
      text: l.intl.string(l.t.dO8DLC),
      variant: "critical-primary",
      onClick: n
    }]}><s.Text variant={"text-md/normal"}>{l.intl.string(l.t["9sgGbG"])}</s.Text></r.Modal>
}