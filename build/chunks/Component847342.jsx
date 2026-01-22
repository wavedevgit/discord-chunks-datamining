/** Chunk was on 4948 **/
/** chunk id: 847342, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => b
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

function b(e) {
  var n;
  let l, b, v, {
      channel: x,
      message: g,
      target: j,
      attachment: m,
      onSelect: V
    } = e,
    k = j;
  if (null != m) b = l = m.url;
  else
    for (;
      (0, r.vq)(k);)(0, r.vq)(k, HTMLImageElement) && null != k.src && (b = k.src), (0, r.vq)(k, HTMLAnchorElement) && null != k.href && (l = k.href, v = k.textContent), k = k.parentNode;
  let C = null == (n = document.getSelection()) ? true : n.toString(),
    X = (0, d.A)(C),
    _ = (0, o.A)(C),
    w = (0, A.A)(g, x),
    q = (0, f.A)(g, x),
    H = (0, h.A)(g, x),
    I = (0, u.A)(g, x),
    M = (0, a.A)(null != l ? l : b, v),
    N = (0, s.A)({
      id: g.id,
      label: p.intl.string(p.t.zBoHlf),
      shiftId: "".concat(g.channel_id, "-").concat(g.id)
    }),
    S = (0, s.A)({
      id: g.author.id,
      label: p.intl.string(p.t.Muw4wm)
    });
  return (0, t.jsxs)(i.W1t, {
    navId: "message",
    onClose: c.Z_,
    "aria-label": p.intl.string(p.t.ChPNkN),
    onSelect: V,
    children: [(0, t.jsx)(i.rXV, {
      children: X
    }), (0, t.jsx)(i.rXV, {
      children: _
    }), (0, t.jsxs)(i.rXV, {
      children: [w, q, H, I]
    }), (0, t.jsx)(i.rXV, {
      children: M
    }), (0, t.jsxs)(i.rXV, {
      children: [N, S]
    })]
  })
}