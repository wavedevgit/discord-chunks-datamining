/** Chunk was on 40580 (32d7a9293deb2c0d.js) **/
"use strict";
r.d(t, {
  Z: () => d
});
var n = r(200651),
  s = r(192379),
  i = r(442837),
  o = r(461745),
  l = r(663389),
  a = r(5967),
  c = r(996733),
  u = r(388032);

function d(e) {
  let {
    style: t
  } = e, r = (0, c.Z7)(), d = s.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), (0, c.QH)(e)
  }, []), p = s.useCallback(() => {
    (0, c.QH)(!1), (0, c.yN)("")
  }, []), f = s.useRef(null), b = (0, i.e7)([l.Z], () => l.Z.getSection());
  return s.useEffect(() => {
    let e = e => {
      var t;
      let r = f.current;
      (null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement) === document.body && (null == r || r.focus())
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [b]), (0, n.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, n.jsx)(o.ZP, {
      ref: f,
      size: o.ZP.Sizes.MEDIUM,
      query: r,
      onClear: p,
      onQueryChange: c.yN,
      placeholder: u.NW.string(u.t["5h0QOD"]),
      className: t,
      inputProps: {
        "aria-label": u.NW.string(u.t.pk9BWV),
        "aria-expanded": !0,
        onFocus: e => d(!0, e),
        onBlur: e => d(!1, e)
      }
    })
  })
}