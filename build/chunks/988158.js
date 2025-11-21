/** Chunk was on 91394 **/
/** chunk id: 988158, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => r,
  h: () => i
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk902676 = require("./902676.js");

function i(e) {
  let {
    protocol: t,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, l.E)(e),
    hostname: (0, l.F)(e)
  }), [e]), i = "//" === e.substr(t.length, 2) ? "//" : "", r = "".concat(t).concat(i).concat(n);
  return {
    protocol: t,
    authorityPrefix: i,
    hostname: n,
    theRestOfTheUrl: e.replace(r, "")
  }
}

function r(e) {
  let {
    url: t,
    trustUrl: n,
    onConfirm: l,
    onCancel: r,
    onClose: s
  } = e, [o, c] = a.useState(false), {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: p
  } = i(t), h = a.useCallback(() => {
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
      null == s || s(), r()
    }, [r, s])
  }
}