/** Chunk was on 69363 **/
/** chunk id: 858341, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => k
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function k(e) {
  var n;
  let t, k, Z, {
      channel: f,
      message: E,
      target: S,
      attachment: j,
      onSelect: v
    } = e,
    x = S;
  if (null != j) k = t = j.url;
  else
    for (;
      (0, r.k)(x);)(0, r.k)(x, HTMLImageElement) && null != x.src && (k = x.src), (0, r.k)(x, HTMLAnchorElement) && null != x.href && (t = x.href, Z = x.textContent), x = x.parentNode;
  let M = null == (n = document.getSelection()) ? true : n.toString(),
    O = (0, c.Z)(M),
    R = (0, d.Z)(M),
    T = (0, _.Z)(E, f),
    m = (0, p.Z)(E, f),
    b = (0, u.Z)(E, f),
    C = (0, h.Z)(E, f),
    N = (0, a.Z)(null != t ? t : k, Z),
    Q = (0, o.Z)({
      id: E.id,
      label: g.intl.string(g.t.zBoHlZ),
      shiftId: "".concat(E.channel_id, "-").concat(E.id)
    }),
    w = (0, o.Z)({
      id: E.author.id,
      label: g.intl.string(g.t.Muw4ws)
    });
  return (0, l.jsxs)(s.v2r, {
    navId: "message",
    onClose: i.Zy,
    "aria-label": g.intl.string(g.t.ChPNkJ),
    onSelect: v,
    children: [(0, l.jsx)(s.kSQ, {
      children: O
    }), (0, l.jsx)(s.kSQ, {
      children: R
    }), (0, l.jsxs)(s.kSQ, {
      children: [T, m, b, C]
    }), (0, l.jsx)(s.kSQ, {
      children: N
    }), (0, l.jsxs)(s.kSQ, {
      children: [Q, w]
    })]
  })
}