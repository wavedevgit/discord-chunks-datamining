/** Chunk was on 57539 **/
/** chunk id: 924188, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468706 = require("./468706.jsx"),
  Chunk388032 = require("./388032.jsx");

function l(t) {
  let {
    channelId: i,
    messageId: n,
    onClose: l,
    transitionState: d
  } = t;
  return (0, e.jsx)(a.Modal, {
    transitionState: d,
    onClose: l,
    title: o.intl.string(o.t.B3vFdU),
    subtitle: o.intl.string(o.t.i4AbAS),
    actions: [{
      text: o.intl.string(o.t.WAI6xu),
      onClick: l
    }],
    children: (0, e.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: o.intl.format(o.t.Ge0HUi, {
        handleFalsePositiveHook: () => {
          l(), (0, s.e)(i, n)
        }
      })
    })
  })
}