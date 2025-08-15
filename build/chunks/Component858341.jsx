/** Chunk was on 44565 **/
/** chunk id: 858341, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk26737 = require("./26737.jsx"),
  Chunk905041 = require("./905041.jsx"),
  Chunk89013 = require("./89013.jsx"),
  Chunk449751 = require("./449751.jsx"),
  Chunk601184 = require("./601184.jsx"),
  Chunk168405 = require("./168405.jsx"),
  Chunk536639 = require("./536639.jsx"),
  Chunk388032 = require("./388032.jsx");

function x(e) {
  var n;
  let t, x, k, {
      channel: g,
      message: m,
      target: f,
      attachment: v,
      onSelect: Z
    } = e,
    j = f;
  if (null != v) x = t = v.url;
  else
    for (;
      (0, l.k)(j);)(0, l.k)(j, HTMLImageElement) && null != j.src && (x = j.src), (0, l.k)(j, HTMLAnchorElement) && null != j.href && (t = j.href, k = j.textContent), j = j.parentNode;
  let C = null == (n = document.getSelection()) ? true : n.toString(),
    S = (0, a.Z)(C),
    I = (0, d.Z)(C),
    N = (0, _.Z)(m, g),
    T = (0, h.Z)(m, g),
    w = (0, p.Z)(m, g),
    B = (0, u.Z)(m, g),
    L = (0, o.Z)(null != t ? t : x, k),
    Q = (0, c.Z)({
      id: m.id,
      label: b.intl.string(b.t.zBoHlZ),
      shiftId: "".concat(m.channel_id, "-").concat(m.id)
    }),
    y = (0, c.Z)({
      id: m.author.id,
      label: b.intl.string(b.t.Muw4ws)
    });
  return (0, i.jsxs)(s.v2r, {
    navId: "message",
    onClose: r.Zy,
    "aria-label": b.intl.string(b.t.ChPNkJ),
    onSelect: Z,
    children: [(0, i.jsx)(s.kSQ, {
      children: S
    }), (0, i.jsx)(s.kSQ, {
      children: I
    }), (0, i.jsxs)(s.kSQ, {
      children: [N, T, w, B]
    }), (0, i.jsx)(s.kSQ, {
      children: L
    }), (0, i.jsxs)(s.kSQ, {
      children: [Q, y]
    })]
  })
}