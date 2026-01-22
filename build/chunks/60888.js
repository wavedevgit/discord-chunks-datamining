/** Chunk was on 98597 **/
/** chunk id: 60888, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  L: () => l,
  u: () => s
}), require("./747238.js"), require("./812715.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk155078 = require("./155078.js");

function l(t) {
  let {
    protocol: e,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, r.J)(t),
    hostname: (0, r.E)(t)
  }), [t]), l = "//" === t.substr(e.length, 2) ? "//" : "", s = "".concat(e).concat(l).concat(n);
  return {
    protocol: e,
    authorityPrefix: l,
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
    onClose: c
  } = t, [i, o] = a.useState(false), {
    protocol: u,
    authorityPrefix: d,
    hostname: x,
    theRestOfTheUrl: h
  } = l(e), p = a.useCallback(() => {
    i && n(e), null == c || c(), r()
  }, [e, i, n, r, c]);
  return {
    protocol: u,
    authorityPrefix: d,
    hostname: x,
    theRestOfTheUrl: h,
    shouldTrustUrl: i,
    setShouldTrustUrl: o,
    handleConfirm: p,
    handleCancel: a.useCallback(() => {
      null == c || c(), s()
    }, [s, c])
  }
}