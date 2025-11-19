/** Chunk was on 85668 **/
/** chunk id: 988158, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  X: () => i,
  h: () => l
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk902676 = require("./902676.js");

function l(t) {
  let {
    protocol: e,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, r.E)(t),
    hostname: (0, r.F)(t)
  }), [t]), l = "//" === t.substr(e.length, 2) ? "//" : "", i = "".concat(e).concat(l).concat(n);
  return {
    protocol: e,
    authorityPrefix: l,
    hostname: n,
    theRestOfTheUrl: t.replace(i, "")
  }
}

function i(t) {
  let {
    url: e,
    trustUrl: n,
    onConfirm: r,
    onCancel: i,
    onClose: s
  } = t, [c, o] = a.useState(false), {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: x
  } = l(e), _ = a.useCallback(() => {
    c && n(e), null == s || s(), r()
  }, [e, c, n, r, s]);
  return {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: x,
    shouldTrustUrl: c,
    setShouldTrustUrl: o,
    handleConfirm: _,
    handleCancel: a.useCallback(() => {
      null == s || s(), i()
    }, [i, s])
  }
}