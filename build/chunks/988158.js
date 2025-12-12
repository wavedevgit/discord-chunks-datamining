/** Chunk was on 85668 **/
/** chunk id: 988158, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  X: () => l,
  h: () => i
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk902676 = require("./902676.js");

function i(t) {
  let {
    protocol: e,
    hostname: a
  } = n.useMemo(() => ({
    protocol: (0, r.E)(t),
    hostname: (0, r.F)(t)
  }), [t]), i = "//" === t.substr(e.length, 2) ? "//" : "", l = "".concat(e).concat(i).concat(a);
  return {
    protocol: e,
    authorityPrefix: i,
    hostname: a,
    theRestOfTheUrl: t.replace(l, "")
  }
}

function l(t) {
  let {
    url: e,
    trustUrl: a,
    onConfirm: r,
    onCancel: l,
    onClose: s
  } = t, [c, o] = n.useState(false), {
    protocol: d,
    authorityPrefix: u,
    hostname: _,
    theRestOfTheUrl: m
  } = i(e), x = n.useCallback(() => {
    c && a(e), null == s || s(), r()
  }, [e, c, a, r, s]);
  return {
    protocol: d,
    authorityPrefix: u,
    hostname: _,
    theRestOfTheUrl: m,
    shouldTrustUrl: c,
    setShouldTrustUrl: o,
    handleConfirm: x,
    handleCancel: n.useCallback(() => {
      null == s || s(), l()
    }, [l, s])
  }
}