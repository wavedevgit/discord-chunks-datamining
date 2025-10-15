/** Chunk was on 58627 **/
/** chunk id: 858341, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => _
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

function _(n) {
  var e;
  let t, _, f, {
      channel: Z,
      message: m,
      target: x,
      attachment: S,
      onSelect: j
    } = n,
    v = x;
  if (null != S) _ = t = S.url;
  else
    for (;
      (0, s.kK)(v);)(0, s.kK)(v, HTMLImageElement) && null != v.src && (_ = v.src), (0, s.kK)(v, HTMLAnchorElement) && null != v.href && (t = v.href, f = v.textContent), v = v.parentNode;
  let b = null == (e = document.getSelection()) ? true : e.toString(),
    C = (0, a.Z)(b),
    Q = (0, d.Z)(b),
    w = (0, g.Z)(m, Z),
    T = (0, p.Z)(m, Z),
    B = (0, u.Z)(m, Z),
    H = (0, h.Z)(m, Z),
    I = (0, o.Z)(null != t ? t : _, f),
    K = (0, r.Z)({
      id: m.id,
      label: k.intl.string(k.t.zBoHlf),
      shiftId: "".concat(m.channel_id, "-").concat(m.id)
    }),
    M = (0, r.Z)({
      id: m.author.id,
      label: k.intl.string(k.t.Muw4wm)
    });
  return (0, l.jsxs)(i.v2r, {
    navId: "message",
    onClose: c.Zy,
    "aria-label": k.intl.string(k.t.ChPNkN),
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