/** Chunk was on 1272 (d3552a4012cf86c5.js) **/
n.d(t, {
  R: () => u,
  default: () => c
});
var r = n(200651),
  i = n(192379),
  l = n(481060),
  o = n(239091),
  a = n(299206),
  s = n(388032);

function c(e) {
  let {
    guild: t,
    shiftId: n,
    onSelect: c,
    closePopout: u,
    "aria-label": d
  } = e, p = (0, a.Z)({
    id: t.id,
    label: s.NW.string(s.t["94lLDw"]),
    shiftId: n,
    onSuccess: u
  }), h = i.useCallback(e => {
    e.stopPropagation()
  }, []);
  return (0, r.jsx)(l.P3F, {
    onClick: h,
    children: (0, r.jsx)(l.v2r, {
      onSelect: c,
      navId: "guild-discovery-context-menu",
      "aria-label": null != d ? d : s.NW.string(s.t.ogxXGh),
      onClose: o.Zy,
      children: (0, r.jsx)(l.kSQ, {
        children: p
      })
    })
  })
}
let u = e => {
  let {
    guild: t,
    children: n,
    onRequestOpen: i,
    onRequestClose: o
  } = e;
  return (0, r.jsx)(l.yRy, {
    onRequestOpen: i,
    onRequestClose: o,
    animation: l.yRy.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(c, {
        guild: t,
        closePopout: n
      })
    },
    children: n
  })
}