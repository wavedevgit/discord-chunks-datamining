/** Chunk was on 66009 **/
/** chunk id: 33216, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk974875 = require("./974875.jsx"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  let {
    channelId: e,
    messageId: n,
    onClose: s,
    transitionState: c
  } = t;
  return (0, i.jsx)(l.Modal, {
    transitionState: c,
    onClose: s,
    title: o.intl.string(o.t.B3vFdU),
    subtitle: o.intl.string(o.t.i4AbAS),
    actions: [{
      text: o.intl.string(o.t.WAI6xu),
      onClick: s
    }],
    children: (0, i.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: o.intl.format(o.t.Ge0HUi, {
        handleFalsePositiveHook: () => {
          s(), (0, r.Q)(e, n)
        }
      })
    })
  })
}