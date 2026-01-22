/** Chunk was on 64676 **/
/** chunk id: 466472, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  JN: () => i,
  SA: () => n,
  UQ: () => h,
  a8: () => r
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk962052 = require("./962052.js");

function n(t) {
  a.A.queryDirectory(t, (e, s) => {
    null == e && null != s && l.h.dispatch({
      type: "INSTALLATION_LOCATION_ADD",
      path: t,
      metadata: s
    })
  })
}

function i(t) {
  l.h.dispatch({
    type: "INSTALLATION_LOCATION_REMOVE",
    path: t
  })
}

function r(t, e) {
  let {
    label: s,
    isDefault: a
  } = e;
  l.h.dispatch({
    type: "INSTALLATION_LOCATION_UPDATE",
    path: t,
    label: s,
    isDefault: a
  })
}

function h(t) {
  let e = {},
    s = 0;
  for (let n of t) null != n && "string" == typeof n && a.A.queryDirectory(n, (a, i) => {
    ++s, null == a && null != i && (e[n] = i), s === t.length && l.h.dispatch({
      type: "INSTALLATION_LOCATION_FETCH_METADATA",
      metadataPayload: e
    })
  })
}