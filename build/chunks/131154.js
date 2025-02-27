/** Chunk was on 98806 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var a = n(120356),
  i = n.n(a),
  l = n(481060),
  o = n(388032),
  c = n(783641);

function s(e) {
  let {
    guild: t,
    speakers: n,
    speakerCount: a,
    className: s
  } = e, d = n.slice(0, 5), u = d.map(e => {
    var n, a;
    return (0, r.jsxs)("div", {
      className: c.speakerContainer,
      children: [(0, r.jsx)(l.qEK, {
        src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
        size: l.EFr.SIZE_20,
        className: c.avatar,
        "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
      }), (0, r.jsx)("div", {
        className: c.textInGridContainer,
        children: (0, r.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          className: c.textInGrid,
          children: null == e ? void 0 : e.userNick
        })
      })]
    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
  }), _ = a - d.length;
  return (0, r.jsxs)("div", {
    className: i()(c.grid, s),
    children: [u, _ > 0 && (0, r.jsxs)("div", {
      className: c.speakerContainer,
      children: [(0, r.jsx)("div", {
        className: c.iconMicrophone,
        children: (0, r.jsx)(l.S6n, {
          size: "custom",
          color: "currentColor",
          height: 12
        })
      }), (0, r.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: c.textInGrid,
        children: o.NW.format(o.t["185ggI"], {
          count: _
        })
      })]
    })]
  })
}