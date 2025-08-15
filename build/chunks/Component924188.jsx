/** Chunk was on 57539 **/
/** chunk id: 924188, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk468706 = require("./468706.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  let {
    channelId: e,
    messageId: n,
    onClose: s,
    transitionState: c
  } = t;
  return (0, i.jsx)(a.Modal, {
    transitionState: c,
    onClose: s,
    title: r.intl.string(r.t.B3vFdX),
    subtitle: r.intl.string(r.t.i4AbAQ),
    actions: [{
      text: r.intl.string(r.t.WAI6xs),
      onClick: s
    }],
    children: (0, i.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: r.intl.format(r.t.Ge0HUl, {
        handleFalsePositiveHook: () => {
          s(), (0, l.e)(e, n)
        }
      })
    })
  })
}