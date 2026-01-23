/** Chunk was on 4948 **/
/** chunk id: 847342, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => A
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

function A(e) {
  var n;
  let l, A, v, {
      channel: x,
      message: m,
      target: _,
      attachment: j,
      onSelect: V
    } = e,
    b = _;
  if (null != j) A = l = j.url;
  else
    for (;
      (0, r.vq)(b);)(0, r.vq)(b, HTMLImageElement) && null != b.src && (A = b.src), (0, r.vq)(b, HTMLAnchorElement) && null != b.href && (l = b.href, v = b.textContent), b = b.parentNode;
  let k = null == (n = document.getSelection()) ? true : n.toString(),
    C = (0, d.A)(k),
    X = (0, o.A)(k),
    w = (0, f.A)(m, x),
    q = (0, p.A)(m, x),
    H = (0, h.A)(m, x),
    I = (0, u.A)(m, x),
    M = (0, a.A)(null != l ? l : A, v),
    N = (0, c.A)({
      id: m.id,
      label: g.intl.string(g.t.zBoHlf),
      shiftId: "".concat(m.channel_id, "-").concat(m.id)
    }),
    S = (0, c.A)({
      id: m.author.id,
      label: g.intl.string(g.t.Muw4wm)
    });
  return (0, t.jsxs)(i.W1t, {
    navId: "message",
    onClose: s.Z_,
    "aria-label": g.intl.string(g.t.ChPNkN),
    onSelect: V,
    children: [(0, t.jsx)(i.rXV, {
      children: C
    }), (0, t.jsx)(i.rXV, {
      children: X
    }), (0, t.jsxs)(i.rXV, {
      children: [w, q, H, I]
    }), (0, t.jsx)(i.rXV, {
      children: M
    }), (0, t.jsxs)(i.rXV, {
      children: [N, S]
    })]
  })
}