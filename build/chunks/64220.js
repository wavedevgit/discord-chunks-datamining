/** Chunk was on 10451 **/
n.d(t, {
  Z: () => d
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(921944),
  o = n(388032),
  l = n(591293);

function c(e) {
  let {
    markAsDismissed: t
  } = e;
  return i.useEffect(() => {
    let e = setTimeout(() => {
      t(a.L.AUTO_DISMISS)
    }, 8e3);
    return () => {
      clearTimeout(e)
    }
  }, [t]), (0, r.jsxs)(s.P3F, {
    className: l.container,
    onClick: () => {
      t(a.L.USER_DISMISS)
    },
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "always-white",
      children: o.NW.string(o.t.fJNqJi)
    }), (0, r.jsx)("div", {
      className: l.pointer
    })]
  })
}

function d(e) {
  let {
    children: t,
    markAsDismissed: n
  } = e, [a, o] = i.useState(!1);
  return i.useEffect(() => {
    let e = setTimeout(() => {
      o(!0)
    }, 1e3);
    return () => {
      clearTimeout(e)
    }
  }, [o]), (0, r.jsx)(s.yRy, {
    position: "top",
    align: "left",
    shouldShow: a,
    renderPopout: () => (0, r.jsx)(c, {
      markAsDismissed: n
    }),
    children: t
  })
}