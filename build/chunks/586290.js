/** Chunk was on 79477 **/
n.d(t, {
  Z: () => v
}), n(47120);
var r = n(200651),
  l = n(192379),
  s = n(512722),
  i = n.n(s),
  a = n(392711),
  o = n.n(a),
  c = n(856901),
  u = n(481060),
  d = n(687058),
  m = n(537135),
  p = n(176940),
  h = n(388032),
  g = n(414803),
  x = n(382840),
  f = n(455812);

function v(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: n,
    onChangeAudioDevice: s
  } = e;
  i()(null != t, "Camera capture device cannot be null");
  let a = (0, p.Z)(),
    v = (0, d.Z)(),
    [j, S] = l.useState(function(e, t, n) {
      if (null != t && null != n) {
        let r = t.find(t => t.id === e);
        if (null == r) return;
        let l = o().reduce(n, (e, t) => (0, c.stringSimilarity)(r.name, t.name) > (0, c.stringSimilarity)(r.name, e.name) ? t : e);
        if (null != l) return l.id
      }
    }(t.id, a, v));
  return null != j && s(j), (0, r.jsxs)(u.xJW, {
    title: "Capture Device",
    className: x.modalContent,
    children: [(0, r.jsx)(u.xJW, {
      className: f.marginTop8,
      children: (0, r.jsxs)(m.Z, {
        children: [(0, r.jsx)("span", {
          className: g.ellipsisText,
          children: t.name
        }), (0, r.jsx)(u.zxk, {
          className: g.changeButton,
          color: u.zxk.Colors.PRIMARY,
          size: u.zxk.Sizes.SMALL,
          onClick: n,
          children: h.NW.string(h.t.GEgsAw)
        })]
      })
    }), (0, r.jsx)(u.xJW, {
      className: f.marginTop8,
      title: h.NW.string(h.t.y4ooen),
      children: (0, r.jsx)(u.q4e, {
        value: j,
        className: f.__invalid_marginaTop8,
        onChange: e => {
          S(e), s(e)
        },
        options: o().map(v, e => {
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