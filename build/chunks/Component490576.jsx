/** Chunk was on 53162 **/
/** chunk id: 490576, original params: t,a,n (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk240864 = require("./240864.js"),
  Chunk598952 = require("./598952.jsx"),
  Chunk596211 = require("./596211.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk819994 = require("./819994.js");

function h(t) {
  let {
    attachment: a,
    guildId: n,
    productId: o
  } = t;
  return (0, e.jsxs)("li", {
    className: m.attachmentRow,
    children: [(0, e.jsx)(d.Z, {
      attachment: a
    }), (0, e.jsx)(u.Z, {
      className: m.attachmentDownloadButton,
      icon: c._8t,
      text: true,
      guildId: n,
      productId: o,
      attachmentId: a.id
    })]
  })
}

function x(t) {
  var a;
  let {
    guildId: n,
    productId: o,
    onClose: c,
    transitionState: d
  } = t, u = (0, l.e7)([r.Z], () => r.Z.getGuildProduct(o));
  i()(null != u, "guildProductListing cannot be null");
  let m = null != (a = u.attachments) ? a : [];
  return (0, e.jsx)(s.Modal, {
    size: "md",
    transitionState: d,
    "aria-label": f.intl.string(f.t["3jaCaW"]),
    title: u.name,
    subtitle: f.intl.format(f.t["6dOuaG"], {
      count: u.attachments_count
    }),
    actions: [],
    onClose: c,
    children: (0, e.jsx)("ul", {
      children: m.map(t => (0, e.jsx)(h, {
        guildId: n,
        productId: u.id,
        attachment: t
      }, t.id))
    })
  })
}