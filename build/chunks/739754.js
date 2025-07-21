/** Chunk was on 53071 **/
t.d(n, {
  ZP: () => x,
  c4: () => I,
  st: () => h
});
var o = t(255367),
  i = t(73800),
  r = t(120356),
  a = t.n(r),
  c = t(710251),
  l = t(442837),
  _ = t(481060),
  s = t(292419),
  d = t(282397),
  u = t(188597),
  m = t(981631),
  f = t(388032),
  p = t(964732);

function b(e) {
  return {
    text: e,
    icon: (0, o.jsx)(_.bbz, {
      className: p.icon,
      dotRadius: 3.5,
      themed: !0
    })
  }
}

function I(e) {
  return {
    text: null != e ? e : f.intl.string(f.t.VCsUJi),
    color: "text-danger",
    icon: (0, o.jsx)(_.P4T, {
      size: "xs",
      color: "currentColor",
      className: a()(p.icon, p.errorIcon)
    })
  }
}

function h(e) {
  let {
    className: n,
    icon: t,
    text: i,
    color: r
  } = e;
  return (0, o.jsxs)("div", {
    className: a()(p.wrapper, n),
    children: [t, (0, o.jsx)(_.Text, {
      variant: "text-md/normal",
      color: r,
      scaleFontToUserSetting: !0,
      children: i
    })]
  })
}
let x = i.memo(function(e) {
  let {
    message: n,
    className: t,
    component: r
  } = e, a = (0, c.Z)(), _ = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(n), [n]);
  i.useEffect(() => {
    let e = null;
    if (n.hasFlag(m.iLy.LOADING) && null != _) {
      let t = (0, u.ow)(n.id) - Date.now();
      t > 0 && (e = setTimeout(() => a(), 1e3 + t))
    }
    return () => {
      clearTimeout(e)
    }
  }, [a, _, n]);
  let p = null;
  if (null == r) p = function(e, n) {
    switch ((0, u.t$)(n, e)) {
      case u.rQ.SENDING:
        return b(f.intl.string(f.t.RiLfBQ));
      case u.rQ.CREATED:
        return b(f.intl.formatToPlainString(f.t["7ePV4u"], {
          applicationName: n.author.username
        }));
      case u.rQ.TIMED_OUT:
        return I(f.intl.string(f.t.h8hzPT));
      case u.rQ.FAILED:
        return I(n.interactionError)
    }
  }(_, n);
  else {
    let e = (0, s.SD)(_, n, r);
    null != e && (p = I(e))
  }
  if (null == p) return null;
  let {
    text: x,
    icon: g,
    color: C
  } = p;
  return (0, o.jsx)(h, {
    icon: g,
    text: x,
    className: t,
    color: C
  })
})