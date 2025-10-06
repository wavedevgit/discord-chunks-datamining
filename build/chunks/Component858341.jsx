/** Chunk was on 50383 **/
/** chunk id: 858341, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => Z
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

function Z(n) {
  var e;
  let t, Z, _, {
      channel: f,
      message: x,
      target: S,
      attachment: m,
      onSelect: j
    } = n,
    v = S;
  if (null != m) Z = t = m.url;
  else
    for (;
      (0, s.kK)(v);)(0, s.kK)(v, HTMLImageElement) && null != v.src && (Z = v.src), (0, s.kK)(v, HTMLAnchorElement) && null != v.href && (t = v.href, _ = v.textContent), v = v.parentNode;
  let b = null == (e = document.getSelection()) ? true : e.toString(),
    C = (0, a.Z)(b),
    Q = (0, d.Z)(b),
    w = (0, g.Z)(x, f),
    T = (0, p.Z)(x, f),
    B = (0, u.Z)(x, f),
    H = (0, h.Z)(x, f),
    I = (0, o.Z)(null != t ? t : Z, _),
    K = (0, r.Z)({
      id: x.id,
      label: k.intl.string(k.t.zBoHlZ),
      shiftId: "".concat(x.channel_id, "-").concat(x.id)
    }),
    M = (0, r.Z)({
      id: x.author.id,
      label: k.intl.string(k.t.Muw4ws)
    });
  return (0, l.jsxs)(i.v2r, {
    navId: "message",
    onClose: c.Zy,
    "aria-label": k.intl.string(k.t.ChPNkJ),
    onSelect: j,
    children: [(0, l.jsx)(i.kSQ, {
      children: C
    }), (0, l.jsx)(i.kSQ, {
      children: Q
    }), (0, l.jsxs)(i.kSQ, {
      children: [w, T, B, H]
    }), (0, l.jsx)(i.kSQ, {
      children: I
    }), (0, l.jsxs)(i.kSQ, {
      children: [K, M]
    })]
  })
}