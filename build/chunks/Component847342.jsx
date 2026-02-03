/** Chunk was on 43174 **/
/** chunk id: 847342, original params: e,t,n (module,exports,require) **/
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
  var t;
  let n, b, v, {
      channel: _,
      message: f,
      target: g,
      attachment: A,
      onSelect: N
    } = e,
    j = g;
  if (null != A) b = n = A.url;
  else
    for (;
      (0, r.vq)(j);)(0, r.vq)(j, HTMLImageElement) && null != j.src && (b = j.src), (0, r.vq)(j, HTMLAnchorElement) && null != j.href && (n = j.href, v = j.textContent), j = j.parentNode;
  let C = null == (t = document.getSelection()) ? true : t.toString(),
    k = (0, c.A)(C),
    I = (0, o.A)(C),
    T = (0, p.A)(f, _),
    V = (0, m.A)(f, _),
    w = (0, u.A)(f, _),
    L = (0, h.A)(f, _),
    X = (0, d.A)(null != n ? n : b, v),
    q = (0, a.A)({
      id: f.id,
      label: x.intl.string(x.t.zBoHlf),
      shiftId: "".concat(f.channel_id, "-").concat(f.id)
    }),
    y = (0, a.A)({
      id: f.author.id,
      label: x.intl.string(x.t.Muw4wm)
    });
  return (0, l.jsxs)(i.W1t, {
    "data-menu-migrated-auto": true,
    navId: "message",
    onClose: s.Z_,
    "aria-label": x.intl.string(x.t.ChPNkN),
    onSelect: N,
    children: [(0, l.jsx)(i.rXV, {
      children: k
    }), (0, l.jsx)(i.rXV, {
      children: I
    }), (0, l.jsxs)(i.rXV, {
      children: [T, V, w, L]
    }), (0, l.jsx)(i.rXV, {
      children: X
    }), (0, l.jsxs)(i.rXV, {
      children: [q, y]
    })]
  })
}