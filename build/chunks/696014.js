/** Chunk was on 74329 **/
n.d(t, {
  s: () => s
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(386214);

function s() {
  let [e, t] = i.useState(!1);
  return {
    isTruncated: e,
    ExpandableTextContainer: i.memo(function(e) {
      let {
        showAll: n = !1,
        className: i,
        children: o,
        lineClamp: s = 2
      } = e;
      return (0, r.jsx)("div", {
        ref: e => {
          null != e && t(e.scrollHeight - e.clientHeight > 1)
        },
        className: l()(a.lineClamp, i),
        style: n ? void 0 : {
          lineClamp: s,
          WebkitLineClamp: s
        },
        children: o
      })
    })
  }
}