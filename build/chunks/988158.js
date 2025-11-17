/** Chunk was on 85668 **/
/** chunk id: 988158, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  X: () => c,
  h: () => r
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk902676 = require("./902676.js");

function r(t) {
  let {
    protocol: e,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, l.E)(t),
    hostname: (0, l.F)(t)
  }), [t]), r = "//" === t.substr(e.length, 2) ? "//" : "", c = "".concat(e).concat(r).concat(n);
  return {
    protocol: e,
    authorityPrefix: r,
    hostname: n,
    theRestOfTheUrl: t.replace(c, "")
  }
}

function c(t) {
  let {
    url: e,
    trustUrl: n,
    onConfirm: l,
    onCancel: c,
    onClose: i
  } = t, [o, s] = a.useState(false), {
    protocol: d,
    authorityPrefix: u,
    hostname: x,
    theRestOfTheUrl: m
  } = r(e), h = a.useCallback(() => {
    o && n(e), null == i || i(), l()
  }, [e, o, n, l, i]);
  return {
    protocol: d,
    authorityPrefix: u,
    hostname: x,
    theRestOfTheUrl: m,
    shouldTrustUrl: o,
    setShouldTrustUrl: s,
    handleConfirm: h,
    handleCancel: a.useCallback(() => {
      null == i || i(), c()
    }, [c, i])
  }
}