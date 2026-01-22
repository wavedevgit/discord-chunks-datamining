/** Chunk was on 2347 **/
/** chunk id: 259142, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
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

function f(e) {
  let {
    attachment: t,
    guildId: r,
    productId: o
  } = e;
  return (0, n.jsxs)("li", {
    className: b.k,
    children: [(0, n.jsx)(d.A, {
      attachment: t
    }), (0, n.jsx)(u.A, {
      className: b.i,
      icon: i.s3U,
      text: true,
      guildId: r,
      productId: o,
      attachmentId: t.id
    })]
  })
}

function O(e) {
  var t;
  let {
    guildId: r,
    productId: o,
    onClose: i,
    transitionState: d
  } = e, u = (0, l.bG)([s.A], () => s.A.getGuildProduct(o));
  a()(null != u, "guildProductListing cannot be null");
  let b = null != (t = u.attachments) ? t : [];
  return (0, n.jsx)(c.Modal, {
    size: "md",
    transitionState: d,
    "aria-label": p.intl.string(p.t["3jaCac"]),
    title: u.name,
    subtitle: p.intl.format(p.t["6dOuaP"], {
      count: u.attachments_count
    }),
    actions: [],
    onClose: i,
    children: (0, n.jsx)("ul", {
      children: b.map(e => (0, n.jsx)(f, {
        guildId: r,
        productId: u.id,
        attachment: e
      }, e.id))
    })
  })
}