/** Chunk was on 21738 **/
/** chunk id: 791295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk342494 = require("./342494.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk279688 = require("./279688.js");

function u(e) {
  let {
    guild: t,
    markAsDismissed: n,
    targetElementRef: u
  } = e;
  return (0, r.jsx)(i.AM, {
    targetElementRef: u,
    title: o.intl.string(o.t.Hgd22r),
    body: o.intl.string(o.t.SorTPA),
    graphic: {
      type: "image",
      src: c
    },
    actions: [{
      text: o.intl.string(o.t["9l+df7"]),
      variant: "primary",
      onClick: e => {
        l.A.open(t.id, a.BEX.DISCOVERY_LANDING_PAGE)
      }
    }],
    onRequestClose: () => n(s.i.USER_DISMISS),
    position: "bottom",
    caretConfig: {
      align: "center"
    }
  })
}