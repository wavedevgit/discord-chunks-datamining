/** Chunk was on 98466 **/
/** chunk id: 151578, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    onClose: s.Zy,
    onSelect: h,
    "aria-label": r.intl.string(r.t["5oIOLX"]),
    children: (0, i.jsxs)(l.kSQ, {
      children: [(0, i.jsx)(l.sNh, {
        id: "attachment-link-copy-link",
        label: r.intl.string(r.t.WqhZss),
        action: async () => {
          let t = await (0, c.B_)(n);
          (0, e.JG)(null != t ? t : "")
        }
      }), (0, i.jsx)(l.sNh, {
        id: "attachment-link-copy-name",
        label: r.intl.string(r.t.JrGD7E),
        action: () => {
          (0, e.JG)(null != a ? a : "")
        }
      })]
    }, "attachment-link-actions")
  })
}