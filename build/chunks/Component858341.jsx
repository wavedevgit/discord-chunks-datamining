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
      channel: b,
      message: j,
      target: y,
      attachment: x,
      onSelect: E
    } = t,
    S = y;
  if (null != x) m = n = x.url;
  else
    for (;
      (0, r.kK)(S);)(0, r.kK)(S, HTMLImageElement) && null != S.src && (m = S.src), (0, r.kK)(S, HTMLAnchorElement) && null != S.href && (n = S.href, v = S.textContent), S = S.parentNode;
  let O = null == (e = document.getSelection()) ? true : e.toString(),
    Z = (0, o.Z)(O),
    C = (0, d.Z)(O),
    M = (0, p.Z)(j, b),
    P = (0, u.Z)(j, b),
    N = (0, g.Z)(j, b),
    I = (0, h.Z)(j, b),
    T = (0, c.Z)(null != n ? n : m, v),
    D = (0, a.Z)({
      id: j.id,
      label: f.intl.string(f.t.zBoHlf),
      shiftId: "".concat(j.channel_id, "-").concat(j.id)
    }),
    k = (0, a.Z)({
      id: j.author.id,
      label: f.intl.string(f.t.Muw4wm)
    });
  return (0, i.jsxs)(l.v2r, {
    navId: "message",
    onClose: s.Zy,
    "aria-label": f.intl.string(f.t.ChPNkN),
    onSelect: E,
    children: [(0, i.jsx)(l.kSQ, {
      children: Z
    }), (0, i.jsx)(l.kSQ, {
      children: C
    }), (0, i.jsxs)(l.kSQ, {
      children: [M, P, N, I]
    }), (0, i.jsx)(l.kSQ, {
      children: T
    }), (0, i.jsxs)(l.kSQ, {
      children: [D, k]
    })]
  })
}