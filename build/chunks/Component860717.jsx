/** Chunk was on 1267 **/
/** chunk id: 860717, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk86419 = require("./86419.js"),
  Chunk750312 = require("./750312.jsx");

function a(e) {
  let {
    user: t,
    widget: r,
    containerClassName: a,
    disableInteraction: c
  } = e;
  return (0, n.jsxs)(o.Z, {
    userId: t.id,
    widget: r,
    className: a,
    disableInteraction: c,
    children: [(0, n.jsx)(i.Text, {
      variant: "text-md/normal"
    }), (0, n.jsx)(i.P3F, {
      onClick: function() {
        (0, l.y8)(r.type)
      },
      children: (0, n.jsx)(i.XHJ, {
        color: i.TVs.colors.STATUS_DANGER
      })
    })]
  })
}