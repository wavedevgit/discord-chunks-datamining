/** Chunk was on 53494 **/
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(481060),
  s = n(377171),
  c = n(413335),
  u = n(434479),
  d = n(713081),
  p = n(326660),
  h = n(730164),
  f = n(441536),
  g = n(730621),
  m = n(388032),
  b = n(796004);

function v(e) {
  let {
    guild: t,
    selected: n
  } = e, o = (0, h.Z)(t), v = i.useCallback(() => {
    null != o && (0, d.jd)(t.id, o), (0, f.Z)(t.id)
  }, [t.id, o]), y = (null == o ? void 0 : o.type) === p.o.UNREAD;
  return (0, r.jsx)(u.m, {
    id: "skill-trees-".concat(t.id),
    renderIcon: e => (0, r.jsx)(c.Z, {
      size: "md",
      className: e
    }),
    text: (0, r.jsx)("span", {
      className: l()({
        [b.textImportant]: y
      }),
      children: m.NW.string(g.Z.yv3DJC)
    }),
    selected: n,
    onClick: v,
    showUnread: y,
    trailing: (() => {
      switch (null == o ? void 0 : o.type) {
        case p.o.UNREAD:
          return (0, r.jsx)(a.mAB, {
            count: o.count,
            color: s.Z.BACKGROUND_MODIFIER_ACCENT
          });
        case p.o.WARNING:
          return (0, r.jsx)(a.P4T, {
            color: a.TVs.colors.TEXT_WARNING,
            size: "sm"
          });
        default:
          return
      }
    })()
  })
}