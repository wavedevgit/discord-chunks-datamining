/** Chunk was on 57539 **/
/** chunk id: 924188, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk468706 = require("./468706.jsx"),
  Chunk388032 = require("./388032.jsx");

function r(t) {
  let {
    channelId: i,
    messageId: n,
    onClose: r,
    transitionState: d
  } = t;
  return (0, e.jsx)(a.Modal, {
    transitionState: d,
    onClose: r,
    title: o.intl.string(o.t.B3vFdU),
    subtitle: o.intl.string(o.t.i4AbAS),
    actions: [{
      text: o.intl.string(o.t.WAI6xu),
      onClick: r
    }],
    children: (0, e.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: o.intl.format(o.t.Ge0HUi, {
        handleFalsePositiveHook: () => {
          r(), (0, s.e)(i, n)
        }
      })
    })
  })
}