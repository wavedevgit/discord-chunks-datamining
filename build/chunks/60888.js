/** Chunk was on 98597 **/
/** chunk id: 60888, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  L: () => r,
  u: () => s
}), require("./747238.js"), require("./812715.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk155078 = require("./155078.js");

function r(t) {
  let {
    protocol: e,
    hostname: n
  } = a.useMemo(() => ({
    protocol: (0, l.J)(t),
    hostname: (0, l.E)(t)
  }), [t]), r = "//" === t.substr(e.length, 2) ? "//" : "", s = "".concat(e).concat(r).concat(n);
  return {
    protocol: e,
    authorityPrefix: r,
    hostname: n,
    theRestOfTheUrl: t.replace(s, "")
  }
}

function s(t) {
  let {
    url: e,
    trustUrl: n,
    onConfirm: l,
    onCancel: s,
    onClose: i
  } = t, [c, o] = a.useState(false), {
    protocol: u,
    authorityPrefix: d,
    hostname: x,
    theRestOfTheUrl: h
  } = r(e), p = a.useCallback(() => {
    c && n(e), null == i || i(), l()
  }, [e, c, n, l, i]);
  return {
    protocol: u,
    authorityPrefix: d,
    hostname: x,
    theRestOfTheUrl: h,
    shouldTrustUrl: c,
    setShouldTrustUrl: o,
    handleConfirm: p,
    handleCancel: a.useCallback(() => {
      null == i || i(), s()
    }, [s, i])
  }
}