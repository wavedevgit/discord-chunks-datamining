/** Chunk was on 27978 **/
n.d(t, {
  H: () => s,
  c: () => i
});
var r = n(570140);

function i(e) {
  r.Z.wait(() => r.Z.dispatch({
    type: "NUF_NEW_USER",
    newUserType: e
  }))
}

function s() {
  r.Z.wait(() => r.Z.dispatch({
    type: "NUF_COMPLETE"
  }))
}