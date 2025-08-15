/** Chunk was on 98466 **/
/** chunk id: 151578, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk198620 = require("./198620.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx");

function h(t) {
  let {
    attachmentUrl: n,
    attachmentName: a,
    onSelect: h
  } = t;
  return (0, i.jsx)(l.v2r, {
    navId: "attachment-link-context",
    onClose: c.Zy,
    onSelect: h,
    "aria-label": r.intl.string(r.t["5oIOLS"]),
    children: (0, i.jsxs)(l.kSQ, {
      children: [(0, i.jsx)(l.sNh, {
        id: "attachment-link-copy-link",
        label: r.intl.string(r.t.WqhZsr),
        action: async () => {
          let t = await (0, e.B_)(n);
          (0, s.JG)(null != t ? t : "")
        }
      }), (0, i.jsx)(l.sNh, {
        id: "attachment-link-copy-name",
        label: r.intl.string(r.t.JrGD7O),
        action: () => {
          (0, s.JG)(null != a ? a : "")
        }
      })]
    }, "attachment-link-actions")
  })
}