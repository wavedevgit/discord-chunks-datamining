/** Chunk was on 39596 **/
n.d(t, {
  ZP: () => T,
  c4: () => S,
  st: () => C
});
var i = n(255367),
  o = n(73800),
  r = n(120356),
  a = n.n(r),
  c = n(710251),
  l = n(442837),
  s = n(481060),
  _ = n(292419),
  d = n(282397),
  u = n(188597),
  p = n(981631),
  I = n(388032),
  f = n(964732);

function m(e) {
  return {
    text: e,
    icon: (0, i.jsx)(s.bbz, {
      className: f.icon,
      dotRadius: 3.5,
      themed: !0
    })
  }
}

function S(e) {
  return {
    text: null != e ? e : I.intl.string(I.t.VCsUJi),
    color: "text-danger",
    icon: (0, i.jsx)(s.P4T, {
      size: "xs",
      color: "currentColor",
      className: a()(f.icon, f.errorIcon)
    })
  }
}

function C(e) {
  let {
    className: t,
    icon: n,
    text: o,
    color: r
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(f.wrapper, t),
    children: [n, (0, i.jsx)(s.Text, {
      variant: "text-md/normal",
      color: r,
      scaleFontToUserSetting: !0,
      children: o
    })]
  })
}
let T = o.memo(function(e) {
  let {
    message: t,
    className: n,
    component: r
  } = e, a = (0, c.Z)(), s = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
  o.useEffect(() => {
    let e = null;
    if (t.hasFlag(p.iLy.LOADING) && null != s) {
      let n = (0, u.ow)(t.id) - Date.now();
      n > 0 && (e = setTimeout(() => a(), 1e3 + n))
    }
    return () => {
      clearTimeout(e)
    }
  }, [a, s, t]);
  let f = null;
  if (null == r) f = function(e, t) {
    switch ((0, u.t$)(t, e)) {
      case u.rQ.SENDING:
        return m(I.intl.string(I.t.RiLfBQ));
      case u.rQ.CREATED:
        return m(I.intl.formatToPlainString(I.t["7ePV4u"], {
          applicationName: t.author.username
        }));
      case u.rQ.TIMED_OUT:
        return S(I.intl.string(I.t.h8hzPT));
      case u.rQ.FAILED:
        return S(t.interactionError)
    }
  }(s, t);
  else {
    let e = (0, _.SD)(s, t, r);
    null != e && (f = S(e))
  }
  if (null == f) return null;
  let {
    text: T,
    icon: b,
    color: h
  } = f;
  return (0, i.jsx)(C, {
    icon: b,
    text: T,
    className: n,
    color: h
  })
})