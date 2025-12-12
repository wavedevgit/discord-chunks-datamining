/** Chunk was on 41413 **/
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
      channel: m,
      message: x,
      target: S,
      attachment: j,
      onSelect: v
    } = e,
    _ = S;
  if (null != j) k = t = j.url;
  else
    for (;
      (0, i.kK)(_);)(0, i.kK)(_, HTMLImageElement) && null != _.src && (k = _.src), (0, i.kK)(_, HTMLAnchorElement) && null != _.href && (t = _.href, Z = _.textContent), _ = _.parentNode;
  let b = null == (n = document.getSelection()) ? true : n.toString(),
    C = (0, a.Z)(b),
    Q = (0, o.Z)(b),
    w = (0, f.Z)(x, m),
    T = (0, p.Z)(x, m),
    H = (0, h.Z)(x, m),
    I = (0, u.Z)(x, m),
    K = (0, d.Z)(null != t ? t : k, Z),
    M = (0, c.Z)({
      id: x.id,
      label: g.intl.string(g.t.zBoHlf),
      shiftId: "".concat(x.channel_id, "-").concat(x.id)
    }),
    N = (0, c.Z)({
      id: x.author.id,
      label: g.intl.string(g.t.Muw4wm)
    });
  return (0, l.jsxs)(s.v2r, {
    navId: "message",
    onClose: r.Zy,
    "aria-label": g.intl.string(g.t.ChPNkN),
    onSelect: v,
    children: [(0, l.jsx)(s.kSQ, {
      children: C
    }), (0, l.jsx)(s.kSQ, {
      children: Q
    }), (0, l.jsxs)(s.kSQ, {
      children: [w, T, H, I]
    }), (0, l.jsx)(s.kSQ, {
      children: K
    }), (0, l.jsxs)(s.kSQ, {
      children: [M, N]
    })]
  })
}