/** Chunk was on 1272 (46194273c01318d9.js) **/
n.d(t, {
  RY: () => l,
  Tb: () => a,
  ec: () => s,
  iD: () => o
}), n(47120);
var r = n(570140),
  i = n(830168);

function l(e) {
  i.Z.queryDirectory(e, (t, n) => {
    null == t && null != n && r.Z.dispatch({
      type: "INSTALLATION_LOCATION_ADD",
      path: e,
      metadata: n
    })
  })
}

function o(e) {
  r.Z.dispatch({
    type: "INSTALLATION_LOCATION_REMOVE",
    path: e
  })
}

function a(e, t) {
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
  for (let l of e) null != l && "string" == typeof l && i.Z.queryDirectory(l, (i, o) => {
    ++n, null == i && null != o && (t[l] = o), n === e.length && r.Z.dispatch({
      type: "INSTALLATION_LOCATION_FETCH_METADATA",
      metadataPayload: t
    })
  })
}