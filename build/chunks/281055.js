/** Chunk was on 32249 **/
n.d(t, {
  Yy: () => c,
  xU: () => u,
  zw: () => s
}), n(47120);
var r = n(192379),
  o = n(442837),
  i = n(434650),
  l = n(110924),
  a = n(451478);
let s = 2;

function c() {
  let [e, t] = r.useState(!1), n = e !== (0, l.Z)(e);
  return {
    visible: e,
    visibleChanged: n,
    targetRef: (0, i.O)(e => t(e), .6)
  }
}

function u() {
  let e = (0, o.e7)([a.Z], () => a.Z.isFocused()),
    t = e !== (0, l.Z)(e);
  return {
    focused: e,
    focusedChanged: t
  }
}