/** Chunk was on 71611 (6f02c158d7813e32.js) **/
n.d(t, {
  Z: () => i
}), n(47120);
var r = n(192379);

function i() {
  let [e, t] = r.useState(window.innerWidth < 1132);
  return r.useEffect(() => {
    function e() {
      t(window.innerWidth < 1132)
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [t]), e
}