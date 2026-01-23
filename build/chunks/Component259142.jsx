/** Chunk was on 2347 **/
/** chunk id: 259142, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk871109 = require("./871109.js"),
  Chunk59375 = require("./59375.jsx"),
  Chunk94733 = require("./94733.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk14036 = require("./14036.js");

function b(t) {
  let {
    attachment: e,
    guildId: r,
    productId: o
  } = t;
  return (0, n.jsxs)("li", {
    className: p.k,
    children: [(0, n.jsx)(u.A, {
      attachment: e
    }), (0, n.jsx)(d.A, {
      className: p.i,
      icon: i.s3U,
      text: true,
      guildId: r,
      productId: o,
      attachmentId: e.id
    })]
  })
}

function m(t) {
  var e;
  let {
    guildId: r,
    productId: o,
    onClose: i,
    transitionState: u
  } = t, d = (0, c.bG)([s.A], () => s.A.getGuildProduct(o));
  a()(null != d, "guildProductListing cannot be null");
  let p = null != (e = d.attachments) ? e : [];
  return (0, n.jsx)(l.Modal, {
    size: "md",
    transitionState: u,
    "aria-label": f.intl.string(f.t["3jaCac"]),
    title: d.name,
    subtitle: f.intl.format(f.t["6dOuaP"], {
      count: d.attachments_count
    }),
    actions: [],
    onClose: i,
    children: (0, n.jsx)("ul", {
      children: p.map(t => (0, n.jsx)(b, {
        guildId: r,
        productId: d.id,
        attachment: t
      }, t.id))
    })
  })
}