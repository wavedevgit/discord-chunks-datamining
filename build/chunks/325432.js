/** Chunk was on 48007 **/
s.d(e, {
  RY: () => a,
  Tb: () => r,
  ec: () => h,
  iD: () => i
}), s(388685);
var l = s(570140),
  n = s(830168);

function a(t) {
  n.Z.queryDirectory(t, (e, s) => {
    null == e && null != s && l.Z.dispatch({
      type: "INSTALLATION_LOCATION_ADD",
      path: t,
      metadata: s
    })
  })
}

function i(t) {
  l.Z.dispatch({
    type: "INSTALLATION_LOCATION_REMOVE",
    path: t
  })
}

function r(t, e) {
  let {
    label: s,
    isDefault: n
  } = e;
  l.Z.dispatch({
    type: "INSTALLATION_LOCATION_UPDATE",
    path: t,
    label: s,
    isDefault: n
  })
}

function h(t) {
  let e = {},
    s = 0;
  for (let a of t) null != a && "string" == typeof a && n.Z.queryDirectory(a, (n, i) => {
    ++s, null == n && null != i && (e[a] = i), s === t.length && l.Z.dispatch({
      type: "INSTALLATION_LOCATION_FETCH_METADATA",
      metadataPayload: e
    })
  })
}