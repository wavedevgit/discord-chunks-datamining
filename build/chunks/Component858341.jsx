/** Chunk was on 46155 **/
/** chunk id: 858341, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => m
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

function m(t) {
  var e;
  let n, m, v, {
      channel: j,
      message: x,
      target: y,
      attachment: b,
      onSelect: C
    } = t,
    E = y;
  if (null != b) m = n = b.url;
  else
    for (;
      (0, r.kK)(E);)(0, r.kK)(E, HTMLImageElement) && null != E.src && (m = E.src), (0, r.kK)(E, HTMLAnchorElement) && null != E.href && (n = E.href, v = E.textContent), E = E.parentNode;
  let S = null == (e = document.getSelection()) ? true : e.toString(),
    O = (0, o.Z)(S),
    M = (0, d.Z)(S),
    P = (0, p.Z)(x, j),
    Z = (0, u.Z)(x, j),
    N = (0, h.Z)(x, j),
    I = (0, g.Z)(x, j),
    k = (0, c.Z)(null != n ? n : m, v),
    T = (0, a.Z)({
      id: x.id,
      label: f.intl.string(f.t.zBoHlf),
      shiftId: "".concat(x.channel_id, "-").concat(x.id)
    }),
    D = (0, a.Z)({
      id: x.author.id,
      label: f.intl.string(f.t.Muw4wm)
    });
  return (0, i.jsxs)(l.v2r, {
    navId: "message",
    onClose: s.Zy,
    "aria-label": f.intl.string(f.t.ChPNkN),
    onSelect: C,
    children: [(0, i.jsx)(l.kSQ, {
      children: O
    }), (0, i.jsx)(l.kSQ, {
      children: M
    }), (0, i.jsxs)(l.kSQ, {
      children: [P, Z, N, I]
    }), (0, i.jsx)(l.kSQ, {
      children: k
    }), (0, i.jsxs)(l.kSQ, {
      children: [T, D]
    })]
  })
}