/** Chunk was on 63757 **/
/** chunk id: 309690, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk458725 = require("./458725.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  var i;
  let {
    onClose: n,
    transitionState: d
  } = t, o = null == (i = (0, l.hp)(l.u.STREAM_FULL)) ? true : i.errorCode, u = s.intl.formatToPlainString(s.t.ejOT95, {
    errorCode: o
  });
  return (0, e.jsx)(r.u_l, {
    transitionState: d,
    title: s.intl.string(s.t.GzjdO5),
    subtitle: s.intl.string(s.t.VVZDBL),
    onClose: n,
    actions: [{
      text: s.intl.string(s.t.BddRzS),
      variant: "primary",
      onClick: n
    }],
    children: (0, e.jsx)(a.Text, {
      variant: "text-md/medium",
      selectable: true,
      color: "text-muted",
      children: u
    })
  })
}