/** Chunk was on 53809 **/
/** chunk id: 858341, original params: n,e,l (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk26737 = require("./26737.jsx"),
  Chunk905041 = require("./905041.js"),
  Chunk89013 = require("./89013.jsx"),
  Chunk449751 = require("./449751.jsx"),
  Chunk601184 = require("./601184.jsx"),
  Chunk168405 = require("./168405.jsx"),
  Chunk536639 = require("./536639.jsx"),
  Chunk388032 = require("./388032.jsx");

function p(n) {
  var e;
  let l, p, S, {
      channel: g,
      message: x,
      target: j,
      attachment: v,
      onSelect: b
    } = n,
    m = j;
  if (null != v) p = l = v.url;
  else
    for (;
      (0, i.k)(m);)(0, i.k)(m, HTMLImageElement) && null != m.src && (p = m.src), (0, i.k)(m, HTMLAnchorElement) && null != m.href && (l = m.href, S = m.textContent), m = m.parentNode;
  let C = null == (e = document.getSelection()) ? true : e.toString(),
    Q = (0, d.Z)(C),
    w = (0, o.Z)(C),
    H = (0, Z.Z)(x, g),
    I = (0, k.Z)(x, g),
    M = (0, h.Z)(x, g),
    _ = (0, u.Z)(x, g),
    E = (0, a.Z)(null != l ? l : p, S),
    L = (0, c.Z)({
      id: x.id,
      label: f.intl.string(f.t.zBoHlZ),
      shiftId: "".concat(x.channel_id, "-").concat(x.id)
    }),
    N = (0, c.Z)({
      id: x.author.id,
      label: f.intl.string(f.t.Muw4ws)
    });
  return <r.v2r navId={"message"} onClose={s.Zy} aria-label={f.intl.string(f.t.ChPNkJ)} onSelect={b}>{<r.kSQ>{Q}</r.kSQ>}{<r.kSQ>{w}</r.kSQ>}{<r.kSQ>{H}{I}{M}{_}</r.kSQ>}{<r.kSQ>{E}</r.kSQ>}{<r.kSQ>{L}{N}</r.kSQ>}</r.v2r>
}