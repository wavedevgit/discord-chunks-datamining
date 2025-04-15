/** Chunk was on 98466 **/
n.d(e, {
  default: () => d
});
var a = n(200651);
n(192379);
var i = n(852229),
  l = n(481060),
  o = n(239091),
  c = n(198620),
  r = n(388032);

function d(t) {
  let {
    attachmentUrl: e,
    attachmentName: n,
    onSelect: d
  } = t;
  return (0, a.jsx)(l.v2r, {
    navId: "attachment-link-context",
    onClose: o.Zy,
    onSelect: d,
    "aria-label": r.NW.string(r.t["5oIOLS"]),
    children: (0, a.jsxs)(l.kSQ, {
      children: [(0, a.jsx)(l.sNh, {
        id: "attachment-link-copy-link",
        label: r.NW.string(r.t.WqhZsr),
        action: async () => {
          let t = await (0, c.B_)(e);
          (0, i.J)(null != t ? t : "")
        }
      }), (0, a.jsx)(l.sNh, {
        id: "attachment-link-copy-name",
        label: r.NW.string(r.t.JrGD7O),
        action: () => {
          (0, i.J)(null != n ? n : "")
        }
      })]
    }, "attachment-link-actions")
  })
}