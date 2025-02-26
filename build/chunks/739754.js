/** Chunk was on 55186 **/
"use strict";
n.d(t, {
  ZP: () => y,
  c4: () => b,
  st: () => h
});
var r = n(200651),
  o = n(192379),
  a = n(120356),
  i = n.n(a),
  s = n(931609),
  c = n(442837),
  l = n(481060),
  u = n(292419),
  d = n(282397),
  p = n(188597),
  g = n(981631),
  m = n(388032),
  f = n(217802);

function _(e) {
  return {
    text: e,
    icon: (0, r.jsx)(l.bbz, {
      className: f.icon,
      dotRadius: 3.5,
      themed: !0
    })
  }
}

function b(e) {
  return {
    text: null != e ? e : m.NW.string(m.t.VCsUJi),
    color: "text-danger",
    icon: (0, r.jsx)(l.P4T, {
      size: "xs",
      color: "currentColor",
      className: i()(f.icon, f.errorIcon)
    })
  }
}

function h(e) {
  let {
    className: t,
    icon: n,
    text: o,
    color: a
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(f.wrapper, t),
    children: [n, (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: a,
      scaleFontToUserSetting: !0,
      children: o
    })]
  })
}
let y = o.memo(function(e) {
  let {
    message: t,
    className: n,
    component: a
  } = e, i = (0, s.Z)(), l = (0, c.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
  o.useEffect(() => {
    let e = null;
    if (t.hasFlag(g.iLy.LOADING) && null != l) {
      let n = (0, p.ow)(t.id) - Date.now();
      n > 0 && (e = setTimeout(() => i(), 1e3 + n))
    }
    return () => {
      clearTimeout(e)
    }
  }, [i, l, t]);
  let f = null;
  if (null == a) f = function(e, t) {
    switch ((0, p.t$)(t, e)) {
      case p.rQ.SENDING:
        return _(m.NW.string(m.t.RiLfBQ));
      case p.rQ.CREATED:
        return _(m.NW.formatToPlainString(m.t["7ePV4u"], {
          applicationName: t.author.username
        }));
      case p.rQ.TIMED_OUT:
        return b(m.NW.string(m.t.h8hzPT));
      case p.rQ.FAILED:
        return b(t.interactionError)
    }
  }(l, t);
  else {
    let e = (0, u.SD)(l, t, a);
    null != e && (f = b(e))
  }
  if (null == f) return null;
  let {
    text: y,
    icon: v,
    color: O
  } = f;
  return (0, r.jsx)(h, {
    icon: v,
    text: y,
    className: n,
    color: O
  })
})