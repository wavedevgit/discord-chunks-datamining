/** Chunk was on 46746 **/
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(512722),
  s = n.n(i),
  o = n(392711),
  a = n.n(o),
  c = n(856901),
  d = n(481060),
  u = n(687058),
  f = n(537135),
  h = n(176940),
  m = n(388032),
  p = n(731133),
  x = n(711597),
  g = n(802138);

function _(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: n,
    onChangeAudioDevice: i
  } = e;
  s()(null != t, "Camera capture device cannot be null");
  let o = (0, h.Z)(),
    _ = (0, u.Z)(),
    [v, j] = l.useState(function(e, t, n) {
      if (null != t && null != n) {
        let r = t.find(t => t.id === e);
        if (null == r) return;
        let l = a().reduce(n, (e, t) => (0, c.stringSimilarity)(r.name, t.name) > (0, c.stringSimilarity)(r.name, e.name) ? t : e);
        if (null != l) return l.id
      }
    }(t.id, o, _));
  return null != v && i(v), (0, r.jsxs)(d.xJW, {
    title: "Capture Device",
    className: x.modalContent,
    children: [(0, r.jsx)(d.xJW, {
      className: g.marginTop8,
      children: (0, r.jsxs)(f.Z, {
        children: [(0, r.jsx)("span", {
          className: p.ellipsisText,
          children: t.name
        }), (0, r.jsx)(d.zxk, {
          className: p.changeButton,
          color: d.zxk.Colors.PRIMARY,
          size: d.zxk.Sizes.SMALL,
          onClick: n,
          children: m.NW.string(m.t.GEgsAw)
        })]
      })
    }), (0, r.jsx)(d.xJW, {
      className: g.marginTop8,
      title: m.NW.string(m.t.y4ooen),
      children: (0, r.jsx)(d.q4e, {
        value: v,
        className: g.__invalid_marginaTop8,
        onChange: e => {
          j(e), i(e)
        },
        options: a().map(_, e => {
          let {
            id: t,
            name: n
          } = e;
          return {
            value: t,
            label: n
          }
        })
      })
    })]
  })
}