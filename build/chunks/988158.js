/** Chunk was on 88282 **/
/** chunk id: 988158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => i,
  h: () => r
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk902676 = require("./902676.js");

function r(e) {
  let {
    protocol: t,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, l.E)(e),
    hostname: (0, l.F)(e)
  }), [e]), r = "//" === e.substr(t.length, 2) ? "//" : "", i = "".concat(t).concat(r).concat(n);
  return {
    protocol: t,
    authorityPrefix: r,
    hostname: n,
    theRestOfTheUrl: e.replace(i, "")
  }
}

function i(e) {
  let {
    url: t,
    trustUrl: n,
    onConfirm: l,
    onCancel: i,
    onClose: s
  } = e, [o, c] = a.useState(false), {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: p
  } = r(t), h = a.useCallback(() => {
    o && n(t), null == s || s(), l()
  }, [t, o, n, l, s]);
  return {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: p,
    shouldTrustUrl: o,
    setShouldTrustUrl: c,
    handleConfirm: h,
    handleCancel: a.useCallback(() => {
      null == s || s(), i()
    }, [i, s])
  }
}