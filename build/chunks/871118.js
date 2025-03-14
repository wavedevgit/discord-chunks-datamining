/** Chunk was on 86546 **/
n.d(t, {
  Z: () => y
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
  m = n(638742);

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

function y(e) {
  let {
    stream: t,
    className: n,
    noText: i = !1,
    noImage: o = !1
  } = e, s = (0, a.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)), y = (0, a.e7)([u.Z], () => null != s && u.Z.canBasicChannel(f.S7T.CONNECT, s)), {
    previewUrl: O,
    isLoading: b
  } = (0, d.Z)(t.guildId, t.channelId, t.ownerId), h = l.useRef(b ? null : O);
  l.useEffect(() => {
    b || (h.current = O)
  }, [O, b]);
  let v = null == O || b ? h.current : O;
  return null == v ? (0, r.jsx)(g, {
    className: n,
    isLoading: b,
    noText: i,
    noImage: o,
    previewText: y ? void 0 : p.NW.string(p.t.pgUTZG)
  }) : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)("img", {
      src: v,
      alt: "",
      className: m.image
    })
  })
}