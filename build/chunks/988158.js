/** Chunk was on 85668 **/
/** chunk id: 988158, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  X: () => o,
  h: () => r
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk902676 = require("./902676.js");

function r(t) {
  let {
    protocol: e,
    hostname: a
  } = n.useMemo(() => ({
    protocol: (0, l.E)(t),
    hostname: (0, l.F)(t)
  }), [t]), r = "//" === t.substr(e.length, 2) ? "//" : "", o = "".concat(e).concat(r).concat(a);
  return {
    protocol: e,
    authorityPrefix: r,
    hostname: a,
    theRestOfTheUrl: t.replace(o, "")
  }
}

function o(t) {
  let {
    url: e,
    trustUrl: a,
    onConfirm: l,
    onCancel: o,
    onClose: s
  } = t, [c, i] = n.useState(false), {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: x
  } = r(e), p = n.useCallback(() => {
    c && a(e), null == s || s(), l()
  }, [e, c, a, l, s]);
  return {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: x,
    shouldTrustUrl: c,
    setShouldTrustUrl: i,
    handleConfirm: p,
    handleCancel: n.useCallback(() => {
      null == s || s(), o()
    }, [o, s])
  }
}