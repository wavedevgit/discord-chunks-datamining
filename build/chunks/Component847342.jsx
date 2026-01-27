/** Chunk was on 95336 **/
/** chunk id: 847342, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk621466 = require("./621466.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk373963 = require("./373963.jsx"),
  Chunk777933 = require("./777933.jsx"),
  Chunk826308 = require("./826308.jsx"),
  Chunk345254 = require("./345254.jsx"),
  Chunk483768 = require("./483768.jsx"),
  Chunk20883 = require("./20883.jsx"),
  Chunk979766 = require("./979766.jsx"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  var n;
  let t, m, A, {
      channel: b,
      message: g,
      target: x,
      attachment: v,
      onSelect: j
    } = e,
    k = x;
  if (null != v) m = t = v.url;
  else
    for (;
      (0, i.vq)(k);)(0, i.vq)(k, HTMLImageElement) && null != k.src && (m = k.src), (0, i.vq)(k, HTMLAnchorElement) && null != k.href && (t = k.href, A = k.textContent), k = k.parentNode;
  let V = null == (n = document.getSelection()) ? true : n.toString(),
    C = (0, d.A)(V),
    X = (0, o.A)(V),
    w = (0, _.A)(g, b),
    N = (0, p.A)(g, b),
    q = (0, h.A)(g, b),
    H = (0, u.A)(g, b),
    I = (0, a.A)(null != t ? t : m, A),
    M = (0, c.A)({
      id: g.id,
      label: f.intl.string(f.t.zBoHlf),
      shiftId: "".concat(g.channel_id, "-").concat(g.id)
    }),
    S = (0, c.A)({
      id: g.author.id,
      label: f.intl.string(f.t.Muw4wm)
    });
  return (0, l.jsxs)(r.W1t, {
    "data-menu-mixed": true,
    navId: "message",
    onClose: s.Z_,
    "aria-label": f.intl.string(f.t.ChPNkN),
    onSelect: j,
    children: [(0, l.jsx)(r.rXV, {
      children: C
    }), (0, l.jsx)(r.rXV, {
      children: X
    }), (0, l.jsxs)(r.rXV, {
      children: [w, N, q, H]
    }), (0, l.jsx)(r.rXV, {
      children: I
    }), (0, l.jsxs)(r.rXV, {
      children: [M, S]
    })]
  })
}