/** Chunk was on 79477 **/
n.d(t, {
  Z: () => f
}), n(47120);
var l = n(200651),
  r = n(192379),
  s = n(512722),
  i = n.n(s),
  a = n(392711),
  o = n.n(a),
  c = n(856901),
  u = n(481060),
  d = n(687058),
  m = n(537135),
  g = n(176940),
  h = n(388032),
  x = n(414803),
  p = n(382840),
  v = n(455812);

function f(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: n,
    onChangeAudioDevice: s
  } = e;
  i()(null != t, "Camera capture device cannot be null");
  let a = (0, g.Z)(),
    f = (0, d.Z)(),
    [j, S] = r.useState(function(e, t, n) {
      if (null != t && null != n) {
        let l = t.find(t => t.id === e);
        if (null == l) return;
        let r = o().reduce(n, (e, t) => (0, c.stringSimilarity)(l.name, t.name) > (0, c.stringSimilarity)(l.name, e.name) ? t : e);
        if (null != r) return r.id
      }
    }(t.id, a, f));
  return null != j && s(j), (0, l.jsxs)(u.xJW, {
    title: "Capture Device",
    className: p.modalContent,
    children: [(0, l.jsx)(u.xJW, {
      className: v.marginTop8,
      children: (0, l.jsxs)(m.Z, {
        children: [(0, l.jsx)("span", {
          className: x.ellipsisText,
          children: t.name
        }), (0, l.jsx)(u.zxk, {
          className: x.changeButton,
          color: u.zxk.Colors.PRIMARY,
          size: u.zxk.Sizes.SMALL,
          onClick: n,
          children: h.NW.string(h.t.GEgsAw)
        })]
      })
    }), (0, l.jsx)(u.xJW, {
      className: v.marginTop8,
      title: h.NW.string(h.t.y4ooen),
      children: (0, l.jsx)(u.q4e, {
        value: j,
        className: v.__invalid_marginaTop8,
        onChange: e => {
          S(e), s(e)
        },
        options: o().map(f, e => {
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