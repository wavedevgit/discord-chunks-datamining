/** Chunk was on 70045 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var l = n(481060),
  i = n(395361),
  o = n(829820),
  a = n(550750);

function s(e) {
  let {
    activity: t,
    user: n,
    source: s,
    className: c,
    size: u,
    look: d,
    color: f,
    fullWidth: p,
    onAction: m
  } = e, {
    label: g,
    tooltip: y,
    loading: b,
    disabled: O,
    onClick: h
  } = (0, o.Ih)(t, n, s), v = () => {
    null == m || m(), h()
  };
  return (0, r.jsx)(l.ua7, {
    text: y,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, r.jsxs)(l.zxk, {
        className: c,
        innerClassName: a.playButtonInner,
        size: u,
        look: d,
        color: f,
        fullWidth: p,
        onClick: v,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: O,
        submitting: b,
        children: [(0, r.jsx)(i.Z, {
          width: 16,
          height: 16
        }), g]
      })
    }
  })
}