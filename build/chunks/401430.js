/** Chunk was on 74329 **/
n.d(t, {
  Wt: () => _,
  mc: () => p,
  q$: () => E
}), n(411104), n(789020), n(301563);
var r = n(570140),
  i = n(566620),
  o = n(728345),
  l = n(812206),
  a = n(973616),
  s = n(630388),
  c = n(591759),
  u = n(978085),
  d = n(981631);
async function _(e, t) {
  r.Z.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    if (!await (0, i.W5)(e)) throw Error("Do not have access!");
    let n = l.Z.getApplication(e);
    null == n && (n = a.ZP.createFromServer(await o.ZP.fetchApplication(e)));
    let _ = (0, s.yE)(n.flags, d.udG.EMBEDDED);
    if (_ && (null == t || !c.Z.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return _ || u.GR(n), r.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: _ ? t : null
    }), n
  } catch (t) {
    return r.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function p() {
  r.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function E() {
  r.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}