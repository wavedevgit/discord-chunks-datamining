/** Chunk was on 85668 **/
/** chunk id: 988158, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  X: () => l,
  h: () => s
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk902676 = require("./902676.js");

function s(t) {
  let {
    protocol: e,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, r.E)(t),
    hostname: (0, r.F)(t)
  }), [t]), s = "//" === t.substr(e.length, 2) ? "//" : "", l = "".concat(e).concat(s).concat(n);
  return {
    protocol: e,
    authorityPrefix: s,
    hostname: n,
    theRestOfTheUrl: t.replace(l, "")
  }
}

function l(t) {
  let {
    url: e,
    trustUrl: n,
    onConfirm: r,
    onCancel: l,
    onClose: i
  } = t, [c, o] = a.useState(false), {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: x
  } = s(e), _ = a.useCallback(() => {
    c && n(e), null == i || i(), r()
  }, [e, c, n, r, i]);
  return {
    protocol: d,
    authorityPrefix: u,
    hostname: m,
    theRestOfTheUrl: x,
    shouldTrustUrl: c,
    setShouldTrustUrl: o,
    handleConfirm: _,
    handleCancel: a.useCallback(() => {
      null == i || i(), l()
    }, [l, i])
  }
}