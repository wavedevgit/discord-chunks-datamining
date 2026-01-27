/** Chunk was on 41727 **/
/** chunk id: 540385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => d,
  bW: () => u
}), require("./65821.js"), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk114212 = require("./114212.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk525853 = require("./525853.js");

function u(e) {
  let {
    compact: t,
    messageGroups: n,
    groupRange: r,
    attachments: l,
    fontSize: i,
    groupSpacing: c
  } = e;
  if (l > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(l));
  let u = i / o.hH7.FONT_SIZE_DEFAULT,
    d = t ? a.BP : a.B5,
    p = t ? a.Uj : a._G,
    h = 0,
    f = Array(n).fill(null).map(() => {
      let e = s().random(1, r);
      return h += c * u, h += d * u, h += (e - 1) * p * u, e
    }),
    g = f.map((e, t) => t),
    m = [];
  for (; m.length < l;) {
    let e = {
      width: s().random(140, 400),
      height: s().random(100, 320)
    };
    m.push([g.splice(s().random(0, g.length - 1), 1)[0], e]), h += e.height + a.VF * u
  }
  return {
    messages: f,
    attachmentSpecs: m,
    totalHeight: h,
    groupSpacing: c
  }
}

function d(e) {
  let {
    compact: t,
    messages: n,
    attachmentSpecs: i,
    totalHeight: s,
    groupSpacing: o
  } = e;
  return l.useMemo(() => {
    let e = Array(n.length).fill(true);
    for (let [t, n] of i) e[t] = n;
    return (0, r.jsx)("div", {
      className: c.i,
      style: {
        height: s
      },
      children: n.map((n, l) => (0, r.jsx)(a.Ay, {
        groupSpacing: o,
        compact: t,
        messages: n,
        attachmentSpecs: e[l]
      }, l))
    })
  }, [t, n, i, s, o])
}