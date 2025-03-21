/** Chunk was on 86282 **/
n.d(l, {
  V: () => u,
  Z: () => d
});
var t = n(200651);
n(192379);
var r = n(628028),
  i = n(220427),
  s = n(777207),
  a = n(692547),
  o = n(330711),
  c = n(671711);

function d(e) {
  let {
    type: l
  } = e;
  return (0, t.jsx)(u, {
    icon: "user" === l ? (0, t.jsx)(i.t, {
      size: "xxs",
      color: a.Z.colors.INTERACTIVE_NORMAL
    }) : (0, t.jsx)(r.Q, {
      size: "xxs",
      color: a.Z.colors.INTERACTIVE_NORMAL
    }),
    text: "user" === l ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
  })
}

function u(e) {
  let {
    icon: l,
    text: n
  } = e;
  return (0, t.jsxs)("div", {
    className: c.container,
    children: [l, (0, t.jsx)(s.x, {
      color: "header-primary",
      variant: "text-sm/medium",
      children: n
    })]
  })
}