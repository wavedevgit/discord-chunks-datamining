/** Chunk was on 93626 **/
l.d(t, {
  Z: () => c
});
var n = l(255367),
  i = l(73800),
  s = l(120356),
  r = l.n(s),
  a = l(755721),
  o = l(53281),
  u = l(121746);

function c(e) {
  let {
    filename: t,
    className: l,
    filters: s,
    buttonText: c,
    placeholder: d,
    onFileSelect: m
  } = e, f = i.useRef(null);
  return (0, n.jsxs)("div", {
    className: r()(l, u.fileUpload),
    children: [(0, n.jsx)("input", {
      className: u.fileUploadInput,
      tabIndex: -1,
      readOnly: !0,
      placeholder: d,
      type: "text",
      value: t
    }), (0, n.jsxs)(a.zx, {
      size: a.zx.Sizes.MIN,
      className: u.fileUploadButton,
      children: [c, (0, n.jsx)(o.Z, {
        ref: f,
        tabIndex: -1,
        onChange: e => {
          var t;
          m(null == (t = e.currentTarget.files) ? void 0 : t[0])
        },
        multiple: !1,
        filters: s
      })]
    })]
  })
}