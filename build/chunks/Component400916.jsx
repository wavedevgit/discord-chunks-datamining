/** Chunk was on 66866 **/
/** chunk id: 400916, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk240864 = require("./240864.js"),
  Chunk613810 = require("./613810.jsx"),
  Chunk596211 = require("./596211.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk914388 = require("./914388.js");

function _(e) {
  var t, n, i, _;
  let {
    guildId: g,
    productId: h
  } = e, b = (0, a.e7)([u.Z], () => u.Z.getGuildProduct(h)), E = (null != (_ = null == b || null == (t = b.attachments) ? true : t.length) ? _ : 0) > 1, C = null == b || null == (i = b.attachments) || null == (n = i[0]) ? true : n.id;
  return E ? (0, r.jsxs)(o.zx, {
    onClick: function() {
      d.Z.open({
        guildId: g,
        productId: h
      })
    },
    innerClassName: f.textWithIcon,
    children: [(0, r.jsx)("div", {
      children: m.intl.string(m.t.UyuiUF)
    }), (0, r.jsx)(s.LZC, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)(c.Z, {
      width: 16,
      height: 16,
      direction: c.Z.Directions.RIGHT
    })]
  }) : (l()(null != C, "No attachment"), (0, r.jsxs)(p.Z, {
    guildId: g,
    productId: h,
    attachmentId: C,
    innerClassName: f.textWithIcon,
    children: [(0, r.jsx)("div", {
      children: m.intl.string(m.t.t9bE9f)
    }), (0, r.jsx)(s.LZC, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)(s._8t, {
      size: "xs",
      color: "currentColor"
    })]
  }))
}