/** Chunk was on 98597 **/
/** chunk id: 696452, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk900549 = require("./900549.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk117816 = require("./117816.js");

function o(t) {
  let {
    url: e,
    onClose: n,
    transitionState: o
  } = t;
  return (0, a.jsx)(r.kpP, {
    transitionState: o,
    onClose: n,
    graphic: {
      src: i.A,
      type: "image"
    },
    gradientColor: "blue",
    title: c.intl.string(c.t["biy1X/"]),
    subtitle: c.intl.format(c.t.J86cyX, {
      url: e
    }),
    actions: [{
      text: c.intl.string(c.t.gQrLtr),
      onClick: () => {
        (0, l.A)(e, true)
      },
      variant: "secondary"
    }, {
      text: c.intl.string(c.t["xl8R+2"]),
      onClick: n
    }],
    children: (0, a.jsx)(s.w, {
      url: e
    })
  })
}