/** Chunk was on 53162 **/
/** chunk id: 490576, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240864 = require("./240864.js"),
  Chunk598952 = require("./598952.jsx"),
  Chunk596211 = require("./596211.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk914721 = require("./914721.js");

function b(t) {
  let {
    attachment: e,
    guildId: n,
    productId: a
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
      productId: a,
      attachmentId: e.id
    })]
  })
}

function p(t) {
  var e;
  let {
    guildId: n,
    productId: a,
    onClose: l,
    transitionState: u
  } = t, f = (0, i.e7)([s.Z], () => s.Z.getGuildProduct(a));
  o()(null != f, "guildProductListing cannot be null");
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
      children: m.map(t => (0, r.jsx)(b, {
        guildId: n,
        productId: f.id,
        attachment: t
      }, t.id))
    })
  })
}