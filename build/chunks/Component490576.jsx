/** Chunk was on 53162 **/
/** chunk id: 490576, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240864 = require("./240864.js"),
  Chunk598952 = require("./598952.jsx"),
  Chunk596211 = require("./596211.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk819994 = require("./819994.js");

function p(t) {
  let {
    attachment: e,
    guildId: n,
    productId: o
  } = t;
  return (0, r.jsxs)("li", {
    className: m.attachmentRow,
    children: [(0, r.jsx)(u.Z, {
      attachment: e
    }), (0, r.jsx)(f.Z, {
      className: m.attachmentDownloadButton,
      icon: l._8t,
      text: true,
      guildId: n,
      productId: o,
      attachmentId: e.id
    })]
  })
}

function b(t) {
  var e;
  let {
    guildId: n,
    productId: o,
    onClose: l,
    transitionState: u
  } = t, f = (0, i.e7)([s.Z], () => s.Z.getGuildProduct(o));
  a()(null != f, "guildProductListing cannot be null");
  let m = null != (e = f.attachments) ? e : [];
  return (0, r.jsx)(c.Modal, {
    size: "md",
    transitionState: u,
    "aria-label": d.intl.string(d.t["3jaCac"]),
    title: f.name,
    subtitle: d.intl.format(d.t["6dOuaP"], {
      count: f.attachments_count
    }),
    actions: [],
    onClose: l,
    children: (0, r.jsx)("ul", {
      children: m.map(t => (0, r.jsx)(p, {
        guildId: n,
        productId: f.id,
        attachment: t
      }, t.id))
    })
  })
}