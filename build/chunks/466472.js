/** Chunk was on 64676 **/
/** chunk id: 466472, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  JN: () => i,
  SA: () => a,
  UQ: () => h,
  a8: () => r
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk962052 = require("./962052.js");

function a(t) {
  n.A.queryDirectory(t, (e, s) => {
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
    isDefault: n
  } = e;
  l.h.dispatch({
    type: "INSTALLATION_LOCATION_UPDATE",
    path: t,
    label: s,
    isDefault: n
  })
}

function h(t) {
  let e = {},
    s = 0;
  for (let a of t) null != a && "string" == typeof a && n.A.queryDirectory(a, (n, i) => {
    ++s, null == n && null != i && (e[a] = i), s === t.length && l.h.dispatch({
      type: "INSTALLATION_LOCATION_FETCH_METADATA",
      metadataPayload: e
    })
  })
}