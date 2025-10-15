/** Chunk was on 57539 **/
/** chunk id: 924188, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
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
  return (0, e.jsx)(s.Modal, {
    transitionState: d,
    onClose: o,
    title: l.intl.string(l.t.B3vFdX),
    subtitle: l.intl.string(l.t.i4AbAQ),
    actions: [{
      text: l.intl.string(l.t.WAI6xs),
      onClick: o
    }],
    children: (0, e.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: l.intl.format(l.t.Ge0HUl, {
        handleFalsePositiveHook: () => {
          o(), (0, r.e)(i, n)
        }
      })
    })
  })
}