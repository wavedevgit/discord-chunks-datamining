/** Chunk was on 61344 **/
/** chunk id: 540385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => d,
  bW: () => u
}), require("./65821.js"), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk114212 = require("./114212.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk525853 = require("./525853.js");

function u(e) {
  let {
    compact: t,
    messageGroups: n,
    groupRange: l,
    attachments: r,
    fontSize: i,
    groupSpacing: c
  } = e;
  if (r > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(r));
  let u = i / o.hH7.FONT_SIZE_DEFAULT,
    d = t ? s.BP : s.B5,
    h = t ? s.Uj : s._G,
    p = 0,
    f = Array(n).fill(null).map(() => {
      let e = a().random(1, l);
      return p += c * u, p += d * u, p += (e - 1) * h * u, e
    }),
    m = f.map((e, t) => t),
    g = [];
  for (; g.length < r;) {
    let e = {
      width: a().random(140, 400),
      height: a().random(100, 320)
    };
    g.push([m.splice(a().random(0, m.length - 1), 1)[0], e]), p += e.height + s.VF * u
  }
  return {
    messages: f,
    attachmentSpecs: g,
    totalHeight: p,
    groupSpacing: c
  }
}

function d(e) {
  let {
    compact: t,
    messages: n,
    attachmentSpecs: i,
    totalHeight: a,
    groupSpacing: o
  } = e;
  return r.useMemo(() => {
    let e = Array(n.length).fill(true);
    for (let [t, n] of i) e[t] = n;
    return (0, l.jsx)("div", {
      className: c.i,
      style: {
        height: a
      },
      children: n.map((n, r) => (0, l.jsx)(s.Ay, {
        groupSpacing: o,
        compact: t,
        messages: n,
        attachmentSpecs: e[r]
      }, r))
    })
  }, [t, n, i, a, o])
}