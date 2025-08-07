/** Chunk was on 59256 **/
n.d(t, {
  Z: () => a
}), n(704826), n(35282);
var r = n(255367),
  o = n(263145),
  l = n(203377);

function a(e) {
  let {
    value: t,
    onChange: n,
    error: a,
    disabled: s,
    className: i,
    autoFocus: c = !1
  } = e;
  return (0, r.jsx)(o.Z, {
    prefix: "".concat(l.mf, "/"),
    value: t,
    onChange: e => {
      n(e.replace(/ /g, "-"))
    },
    maxLength: 25,
    error: a,
    disabled: s,
    className: i,
    autoFocus: c
  })
}