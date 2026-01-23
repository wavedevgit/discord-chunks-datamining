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
  return (0, a.jsx)(l.kpP, {
    transitionState: o,
    onClose: n,
    graphic: {
      src: c.A,
      type: "image"
    },
    gradientColor: "blue",
    title: i.intl.string(i.t["biy1X/"]),
    subtitle: i.intl.format(i.t.J86cyX, {
      url: e
    }),
    actions: [{
      text: i.intl.string(i.t.gQrLtr),
      onClick: () => {
        (0, r.A)(e, true)
      },
      variant: "secondary"
    }, {
      text: i.intl.string(i.t["xl8R+2"]),
      onClick: n
    }],
    children: (0, a.jsx)(s.w, {
      url: e
    })
  })
}