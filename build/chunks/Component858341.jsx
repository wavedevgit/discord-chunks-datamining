/** Chunk was on 72804 **/
/** chunk id: 858341, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => k
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
      channel: b,
      message: m,
      target: x,
      attachment: S,
      onSelect: j
    } = e,
    v = x;
  if (null != S) k = t = S.url;
  else
    for (;
      (0, i.kK)(v);)(0, i.kK)(v, HTMLImageElement) && null != v.src && (k = v.src), (0, i.kK)(v, HTMLAnchorElement) && null != v.href && (t = v.href, Z = v.textContent), v = v.parentNode;
  let C = null == (n = document.getSelection()) ? true : n.toString(),
    Q = (0, c.Z)(C),
    w = (0, o.Z)(C),
    T = (0, f.Z)(m, b),
    H = (0, p.Z)(m, b),
    I = (0, h.Z)(m, b),
    K = (0, u.Z)(m, b),
    M = (0, d.Z)(null != t ? t : k, Z),
    N = (0, r.Z)({
      id: m.id,
      label: g.intl.string(g.t.zBoHlf),
      shiftId: "".concat(m.channel_id, "-").concat(m.id)
    }),
    _ = (0, r.Z)({
      id: m.author.id,
      label: g.intl.string(g.t.Muw4wm)
    });
  return (0, l.jsxs)(s.v2r, {
    navId: "message",
    onClose: a.Zy,
    "aria-label": g.intl.string(g.t.ChPNkN),
    onSelect: j,
    children: [(0, l.jsx)(s.kSQ, {
      children: Q
    }), (0, l.jsx)(s.kSQ, {
      children: w
    }), (0, l.jsxs)(s.kSQ, {
      children: [T, H, I, K]
    }), (0, l.jsx)(s.kSQ, {
      children: M
    }), (0, l.jsxs)(s.kSQ, {
      children: [N, _]
    })]
  })
}