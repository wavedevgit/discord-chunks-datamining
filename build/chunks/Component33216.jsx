/** Chunk was on 66009 **/
/** chunk id: 33216, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk974875 = require("./974875.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    channelId: i,
    messageId: n,
    onClose: o,
    transitionState: d
  } = t;
  return (0, e.jsx)(a.Modal, {
    transitionState: d,
    onClose: o,
    title: r.intl.string(r.t.B3vFdU),
    subtitle: r.intl.string(r.t.i4AbAS),
    actions: [{
      text: r.intl.string(r.t.WAI6xu),
      onClick: o
    }],
    children: (0, e.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: r.intl.format(r.t.Ge0HUi, {
        handleFalsePositiveHook: () => {
          o(), (0, s.Q)(i, n)
        }
      })
    })
  })
}