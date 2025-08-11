/** Chunk was on 1272 **/
/** chunk id: 325432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RY: () => l,
  Tb: () => o,
  ec: () => s,
  iD: () => a
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk830168 = require("./830168.js");

function l(e) {
  i.Z.queryDirectory(e, (t, n) => {
    null == t && null != n && r.Z.dispatch({
      type: "INSTALLATION_LOCATION_ADD",
      path: e,
      metadata: n
    })
  })
}

function a(e) {
  r.Z.dispatch({
    type: "INSTALLATION_LOCATION_REMOVE",
    path: e
  })
}

function o(e, t) {
  let {
    label: n,
    isDefault: i
  } = t;
  r.Z.dispatch({
    type: "INSTALLATION_LOCATION_UPDATE",
    path: e,
    label: n,
    isDefault: i
  })
}

function s(e) {
  let t = {},
    n = 0;
  for (let l of e) null != l && "string" == typeof l && i.Z.queryDirectory(l, (i, a) => {
    ++n, null == i && null != a && (t[l] = a), n === e.length && r.Z.dispatch({
      type: "INSTALLATION_LOCATION_FETCH_METADATA",
      metadataPayload: t
    })
  })
}