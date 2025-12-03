/** Chunk was on 85668 **/
/** chunk id: 988158, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  X: () => s,
  h: () => i
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk902676 = require("./902676.js");

function i(t) {
  let {
    protocol: e,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, r.E)(t),
    hostname: (0, r.F)(t)
  }), [t]), i = "//" === t.substr(e.length, 2) ? "//" : "", s = "".concat(e).concat(i).concat(n);
  return {
    protocol: e,
    authorityPrefix: i,
    hostname: n,
    theRestOfTheUrl: t.replace(s, "")
  }
}

function s(t) {
  let {
    url: e,
    trustUrl: n,
    onConfirm: r,
    onCancel: s,
    onClose: l
  } = t, [c, o] = a.useState(false), {
    protocol: d,
    authorityPrefix: u,
    hostname: _,
    theRestOfTheUrl: x
  } = i(e), m = a.useCallback(() => {
    c && n(e), null == l || l(), r()
  }, [e, c, n, r, l]);
  return {
    protocol: d,
    authorityPrefix: u,
    hostname: _,
    theRestOfTheUrl: x,
    shouldTrustUrl: c,
    setShouldTrustUrl: o,
    handleConfirm: m,
    handleCancel: a.useCallback(() => {
      null == l || l(), s()
    }, [s, l])
  }
}