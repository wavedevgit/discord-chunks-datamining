/** Chunk was on 82124 **/
/** chunk id: 977391, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => d,
  aJ: () => u
}), require("./415506.js"), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk566898 = require("./566898.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk492578 = require("./492578.js");

function u(e) {
  let {
    compact: t,
    messageGroups: n,
    groupRange: r,
    attachments: i,
    fontSize: l,
    groupSpacing: c
  } = e;
  if (i > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(i));
  let u = l / s.yqN.FONT_SIZE_DEFAULT,
    d = t ? o.iv : o.pk,
    p = t ? o.Pb : o.XX,
    f = 0,
    h = Array(n).fill(null).map(() => {
      let e = a().random(1, r);
      return f += c * u, f += d * u, f += (e - 1) * p * u, e
    }),
    g = h.map((e, t) => t),
    m = [];
  for (; m.length < i;) {
    let e = {
      width: a().random(140, 400),
      height: a().random(100, 320)
    };
    m.push([g.splice(a().random(0, g.length - 1), 1)[0], e]), f += e.height + o.M9 * u
  }
  return {
    messages: h,
    attachmentSpecs: m,
    totalHeight: f,
    groupSpacing: c
  }
}

function d(e) {
  let {
    compact: t,
    messages: n,
    attachmentSpecs: l,
    totalHeight: a,
    groupSpacing: s
  } = e;
  return i.useMemo(() => {
    let e = Array(n.length).fill(true);
    for (let [t, n] of l) e[t] = n;
    return (0, r.jsx)("div", {
      className: c.wrapper,
      style: {
        height: a
      },
      children: n.map((n, i) => (0, r.jsx)(o.ZP, {
        groupSpacing: s,
        compact: t,
        messages: n,
        attachmentSpecs: e[i]
      }, i))
    })
  }, [t, n, l, a, s])
}