/** Chunk was on 85668 **/
/** chunk id: 988158, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  X: () => i,
  h: () => r
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk902676 = require("./902676.js");

function r(t) {
  let {
    protocol: e,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, l.E)(t),
    hostname: (0, l.F)(t)
  }), [t]), r = "//" === t.substr(e.length, 2) ? "//" : "", i = "".concat(e).concat(r).concat(n);
  return {
    protocol: e,
    authorityPrefix: r,
    hostname: n,
    theRestOfTheUrl: t.replace(i, "")
  }
}

function i(t) {
  let {
    url: e,
    trustUrl: n,
    onConfirm: l,
    onCancel: i,
    onClose: s
  } = t, [o, c] = a.useState(false), {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: x
  } = r(e), p = a.useCallback(() => {
    o && n(e), null == s || s(), l()
  }, [e, o, n, l, s]);
  return {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: x,
    shouldTrustUrl: o,
    setShouldTrustUrl: c,
    handleConfirm: p,
    handleCancel: a.useCallback(() => {
      null == s || s(), i()
    }, [i, s])
  }
}