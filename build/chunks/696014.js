/** Chunk was on 84466 (84a0ea6a87a71b71.js) **/
n.d(t, {
  s: () => s
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(145785);

function s() {
  let [e, t] = i.useState(!1);
  return {
    isTruncated: e,
    ExpandableTextContainer: i.memo(function(e) {
      let {
        showAll: n = !1,
        className: i,
        children: l,
        lineClamp: s = 2
      } = e;
      return (0, r.jsx)("div", {
        ref: e => {
          null != e && t(e.scrollHeight - e.clientHeight > 1)
        },
        className: o()(a.lineClamp, i),
        style: n ? void 0 : {
          lineClamp: s,
          WebkitLineClamp: s
        },
        children: l
      })
    })
  }
}