/** Chunk was on 79120 **/
n.d(t, {
  Z: () => b
});
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
  a = n(442837),
  s = n(481060),
  c = n(592125),
  u = n(496675),
  d = n(449605),
  f = n(981631),
  p = n(388032),
  m = n(98378);

function g(e) {
  let {
    isLoading: t,
    noText: n,
    noImage: l,
    previewText: i,
    className: a
  } = e;
  return (0, r.jsx)("div", {
    className: o()(m.emptyPreviewContainer, a),
    children: t ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: o()(m.emptyPreviewImage, {
          [m.noImage]: l
        })
      }), n ? null : (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: m.emptyPreviewText,
        children: null != i ? i : p.NW.string(p.t.uQZTBQ)
      })]
    })
  })
}

function b(e) {
  let {
    stream: t,
    className: n,
    noText: i = !1,
    noImage: o = !1
  } = e, s = (0, a.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)), b = (0, a.e7)([u.Z], () => null != s && u.Z.canBasicChannel(f.S7T.CONNECT, s)), {
    previewUrl: y,
    isLoading: O
  } = (0, d.Z)(t.guildId, t.channelId, t.ownerId), h = l.useRef(O ? null : y);
  l.useEffect(() => {
    O || (h.current = y)
  }, [y, O]);
  let v = null == y || O ? h.current : y;
  return null == v ? (0, r.jsx)(g, {
    className: n,
    isLoading: O,
    noText: i,
    noImage: o,
    previewText: b ? void 0 : p.NW.string(p.t.pgUTZG)
  }) : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)("img", {
      src: v,
      alt: "",
      className: m.image
    })
  })
}