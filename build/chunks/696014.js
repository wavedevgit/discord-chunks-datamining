/** Chunk was on 49750 **/
n.d(t, {
  s: () => a
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(386214);

function a() {
  let [e, t] = i.useState(!1);
  return {
    isTruncated: e,
    ExpandableTextContainer: i.memo(function(e) {
      let {
        showAll: n = !1,
        className: i,
        children: l,
        lineClamp: a = 2
      } = e;
      return (0, r.jsx)("div", {
        ref: e => {
          null != e && t(e.scrollHeight - e.clientHeight > 1)
        },
        className: o()(s.lineClamp, i),
        style: n ? void 0 : {
          lineClamp: a,
          WebkitLineClamp: a
        },
        children: l
      })
    })
  }
}