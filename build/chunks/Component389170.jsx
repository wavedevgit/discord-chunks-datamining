/** Chunk was on 25894 **/
/** chunk id: 389170, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk487329 = require("./487329.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  var i;
  let {
    onClose: e,
    transitionState: d
  } = t, o = null == (i = (0, l.B1)(l.iy.STREAM_FULL)) ? true : i.errorCode, c = s.intl.formatToPlainString(s.t.ejOT95, {
    errorCode: o
  });
  return (0, n.jsx)(r.aFV, {
    transitionState: d,
    title: s.intl.string(s.t.GzjdO5),
    subtitle: s.intl.string(s.t.VVZDBL),
    onClose: e,
    actions: [{
      text: s.intl.string(s.t.BddRzS),
      variant: "primary",
      onClick: e
    }],
    children: (0, n.jsx)(a.Text, {
      variant: "text-md/medium",
      selectable: true,
      color: "text-muted",
      children: c
    })
  })
}