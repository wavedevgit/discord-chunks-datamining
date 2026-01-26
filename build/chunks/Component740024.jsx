/** Chunk was on 62529 **/
/** chunk id: 740024, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk202803 = require("./202803.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    attachmentUrl: n,
    attachmentName: a,
    onSelect: o
  } = t;
  return (0, i.jsx)(l.W1t, {
    "data-menu-migrated-auto": true,
    navId: "attachment-link-context",
    onClose: e.Z_,
    onSelect: o,
    "aria-label": r.intl.string(r.t["5oIOLX"]),
    children: (0, i.jsxs)(l.rXV, {
      children: [(0, i.jsx)(l.Drp, {
        id: "attachment-link-copy-link",
        label: r.intl.string(r.t.WqhZss),
        action: async () => {
          let t = await (0, c.AN)(n);
          (0, s.C)(null != t ? t : "")
        }
      }), (0, i.jsx)(l.Drp, {
        id: "attachment-link-copy-name",
        label: r.intl.string(r.t.JrGD7E),
        action: () => {
          (0, s.C)(null != a ? a : "")
        }
      })]
    }, "attachment-link-actions")
  })
}