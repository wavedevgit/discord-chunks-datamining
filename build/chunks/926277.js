/** Chunk was on 21738 **/
/** chunk id: 926277, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => c,
  r: () => o
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk997590 = require("./997590.js"),
  Chunk324580 = require("./324580.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let [t] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [i.A];
  return e === l.Iq ? a.intl.string(a.t.Omu0fS) : t.getCategoryName(e)
}

function o(e) {
  let {
    categoryId: t
  } = e;
  return (0, r.bG)([i.A], () => s(t, [i.A]))
}

function c(e) {
  let {
    categoryIds: t
  } = e;
  return (0, r.cf)([i.A], () => {
    let e = {};
    return t.forEach(t => {
      e[t] = s(t, [i.A])
    }), e
  })
}