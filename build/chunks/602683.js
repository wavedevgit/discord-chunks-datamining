/** Chunk was on 48923 (05423627440510f9.js) **/
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(200651),
  o = n(192379),
  s = n(481060);
let a = function(e) {
  let {
    assetKey: t,
    initialValue: n,
    onMessageChange: a,
    title: i
  } = e, [l, c] = o.useState("");
  return o.useEffect(() => {
    c(null != n ? n : "")
  }, [n]), (0, r.jsxs)(s.xJW, {
    children: [(0, r.jsx)(s.vwX, {
      tag: s.RB0.H5,
      children: i
    }), (0, r.jsx)(s.R94, {
      children: (0, r.jsx)(s.oil, {
        value: l,
        onChange: function(e) {
          c(e), a(t, e)
        }
      })
    })]
  })
}