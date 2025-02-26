/** Chunk was on 30829 **/
n.d(t, {
  Z: () => O
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(481060),
  s = n(377171),
  c = n(413335),
  u = n(434479),
  d = n(703656),
  p = n(713081),
  h = n(326660),
  f = n(730164),
  g = n(981631),
  m = n(176505),
  b = n(783684),
  y = n(388032),
  v = n(55345);

function O(e) {
  let {
    guild: t,
    selected: n
  } = e, l = i.useCallback(() => {
    (0, p.jd)(t.id), (0, d.uL)(g.Z5c.CHANNEL(t.id, m.oC.GUILD_BOOSTS))
  }, [t.id]), O = (0, f.Z)(t), j = (null == O ? void 0 : O.type) === h.o.UNREAD;
  return (0, r.jsx)(u.m, {
    id: "skill-trees-".concat(t.id),
    renderIcon: e => (0, r.jsx)(c.Z, {
      className: e
    }),
    text: (0, r.jsx)("span", {
      className: o()({
        [v.textImportant]: j
      }),
      children: y.NW.string(b.Z.yv3DJC)
    }),
    selected: n,
    onClick: l,
    showUnread: j,
    trailing: (() => {
      switch (null == O ? void 0 : O.type) {
        case h.o.UNREAD:
          return (0, r.jsx)(a.mAB, {
            count: O.count,
            color: s.Z.BACKGROUND_MODIFIER_ACCENT
          });
        case h.o.WARNING:
          return (0, r.jsx)(a.aNP, {});
        default:
          return
      }
    })()
  })
}