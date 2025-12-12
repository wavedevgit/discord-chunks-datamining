/** Chunk was on 74194 **/
/** chunk id: 269817, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk411328 = require("./411328.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk892744 = require("./892744.js");

function c(t) {
  let {
    url: n,
    onClose: i,
    transitionState: c
  } = t;
  return (0, e.jsx)(a.Ioy, {
    transitionState: c,
    onClose: i,
    graphic: {
      src: s.Z,
      type: "image"
    },
    gradientColor: "blue",
    title: o.intl.string(o.t["biy1X/"]),
    subtitle: o.intl.format(o.t.J86cyX, {
      url: n
    }),
    actions: [{
      text: o.intl.string(o.t.gQrLtr),
      onClick: () => {
        (0, r.Z)(n, true)
      },
      variant: "secondary"
    }, {
      text: o.intl.string(o.t["xl8R+2"]),
      onClick: i
    }],
    children: (0, e.jsx)(l.W, {
      url: n
    })
  })
}