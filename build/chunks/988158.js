/** Chunk was on 85668 **/
/** chunk id: 988158, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  X: () => r,
  h: () => i
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk902676 = require("./902676.js");

function i(t) {
  let {
    protocol: e,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, l.E)(t),
    hostname: (0, l.F)(t)
  }), [t]), i = "//" === t.substr(e.length, 2) ? "//" : "", r = "".concat(e).concat(i).concat(n);
  return {
    protocol: e,
    authorityPrefix: i,
    hostname: n,
    theRestOfTheUrl: t.replace(r, "")
  }
}

function r(t) {
  let {
    url: e,
    trustUrl: n,
    onConfirm: l,
    onCancel: r,
    onClose: s
  } = t, [o, c] = a.useState(false), {
    protocol: d,
    authorityPrefix: x,
    hostname: m,
    theRestOfTheUrl: h
  } = i(e), u = a.useCallback(() => {
    o && n(e), null == s || s(), l()
  }, [e, o, n, l, s]);
  return {
    protocol: d,
    authorityPrefix: x,
    hostname: m,
    theRestOfTheUrl: h,
    shouldTrustUrl: o,
    setShouldTrustUrl: c,
    handleConfirm: u,
    handleCancel: a.useCallback(() => {
      null == s || s(), r()
    }, [r, s])
  }
}