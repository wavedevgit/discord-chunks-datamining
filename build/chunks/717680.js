/** Chunk was on 52272 **/
n.d(t, {
  Z: () => l
}), n(47120);
var r = n(192379);
let i = !1,
  o = new Set;

function a(e) {
  e !== i && (i = e, o.forEach(e => e(i)))
}

function l() {
  let [e, t] = r.useState(i);
  return r.useEffect(() => {
    let e = e => {
      t(e)
    };
    return o.add(e), () => {
      o.delete(e)
    }
  }, []), e
}
window.addEventListener("keydown", e => {
  a(e.shiftKey)
}), window.addEventListener("keyup", e => {
  a(e.shiftKey)
}), window.addEventListener("mousemove", e => {
  a(e.shiftKey)
}), window.addEventListener("blur", () => {
  a(!1)
})