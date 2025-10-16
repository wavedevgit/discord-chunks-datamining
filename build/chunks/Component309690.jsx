/** Chunk was on 63757 **/
/** chunk id: 309690, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk458725 = require("./458725.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  var i;
  let {
    onClose: n,
    transitionState: d
  } = t, o = null == (i = (0, l.hp)(l.u.STREAM_FULL)) ? true : i.errorCode, c = s.intl.formatToPlainString(s.t["ejOT9/"], {
    errorCode: o
  });
  return (0, e.jsx)(r.u_l, {
    transitionState: d,
    title: s.intl.string(s.t.GzjdOz),
    subtitle: s.intl.string(s.t.VVZDBA),
    onClose: n,
    actions: [{
      text: s.intl.string(s.t.BddRzc),
      variant: "primary",
      onClick: n
    }],
    children: (0, e.jsx)(a.Text, {
      variant: "text-md/medium",
      selectable: true,
      color: "text-muted",
      children: c
    })
  })
}