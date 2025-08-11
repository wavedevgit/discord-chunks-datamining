/** Chunk was on 57539 **/
/** chunk id: 924188, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk468706 = require("./468706.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let {
    channelId: i,
    messageId: n,
    onClose: o,
    transitionState: d
  } = t;
  return <s.Modal transitionState={d} onClose={o} title={l.intl.string(l.t.B3vFdX)} subtitle={l.intl.string(l.t.i4AbAQ)} actions={[{
      text: l.intl.string(l.t.WAI6xs),
      onClick: o
    }]}><a.Text variant={"text-md/normal"} color={"header-secondary"}>{l.intl.format(l.t.Ge0HUl, {
        handleFalsePositiveHook: () => {
          o(), (0, r.e)(i, n)
        }
      })}</a.Text></s.Modal>
}