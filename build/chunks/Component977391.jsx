/** Chunk was on 34740 **/
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
  Chunk835025 = require("./835025.js");

function u(e) {
  let {
    compact: t,
    messageGroups: n,
    groupRange: i,
    attachments: r,
    fontSize: l,
    groupSpacing: c
  } = e;
  if (r > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(r));
  let u = l / s.yqN.FONT_SIZE_DEFAULT,
    d = t ? o.iv : o.pk,
    p = t ? o.Pb : o.XX,
    h = 0,
    f = Array(n).fill(null).map(() => {
      let e = a().random(1, i);
      return h += c * u, h += d * u, h += (e - 1) * p * u, e
    }),
    m = f.map((e, t) => t),
    g = [];
  for (; g.length < r;) {
    let e = {
      width: a().random(140, 400),
      height: a().random(100, 320)
    };
    g.push([m.splice(a().random(0, m.length - 1), 1)[0], e]), h += e.height + o.M9 * u
  }
  return {
    messages: f,
    attachmentSpecs: g,
    totalHeight: h,
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
  return r.useMemo(() => {
    let e = Array(n.length).fill(true);
    for (let [t, n] of l) e[t] = n;
    return (0, i.jsx)("div", {
      className: c.wrapper,
      style: {
        height: a
      },
      children: n.map((n, r) => (0, i.jsx)(o.ZP, {
        groupSpacing: s,
        compact: t,
        messages: n,
        attachmentSpecs: e[r]
      }, r))
    })
  }, [t, n, l, a, s])
}