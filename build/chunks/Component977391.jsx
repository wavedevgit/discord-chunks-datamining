/** Chunk was on web.js **/
/** chunk id: 977391, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => f,
  aJ: () => d
}), require("./415506.js"), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk566898 = require("./566898.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk615022 = require("./615022.js");

function u() {
  return {
    width: a().random(140, 400),
    height: a().random(100, 320)
  }
}

function d(e) {
  let {
    compact: t,
    messageGroups: n,
    groupRange: r,
    attachments: i,
    fontSize: o,
    groupSpacing: c
  } = e;
  if (i > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(i));
  let d = o / l.yqN.FONT_SIZE_DEFAULT,
    f = t ? s.iv : s.pk,
    _ = t ? s.Pb : s.XX,
    p = 0,
    h = Array(n).fill(null).map(() => {
      let e = a().random(1, r);
      return p += c * d, p += f * d, p += (e - 1) * _ * d, e
    }),
    m = h.map((e, t) => t),
    g = [];
  for (; g.length < i;) {
    let e = u();
    g.push([m.splice(a().random(0, m.length - 1), 1)[0], e]), p += e.height + s.M9 * d
  }
  return {
    messages: h,
    attachmentSpecs: g,
    totalHeight: p,
    groupSpacing: c
  }
}

function f(e) {
  let {
    compact: t,
    messages: n,
    attachmentSpecs: o,
    totalHeight: a,
    groupSpacing: l
  } = e;
  return i.useMemo(() => {
    let e = Array(n.length).fill(true);
    for (let [t, n] of o) e[t] = n;
    return (0, r.jsx)("div", {
      className: c.wrapper,
      style: {
        height: a
      },
      children: n.map((n, i) => (0, r.jsx)(s.ZP, {
        groupSpacing: l,
        compact: t,
        messages: n,
        attachmentSpecs: e[i]
      }, i))
    })
  }, [t, n, o, a, l])
}