/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(540059),
  c = n(328908),
  u = n(992970),
  d = n(443603),
  f = n(957825),
  _ = n(388032),
  p = n(342203);

function h(e, t) {
  let {
    disabled: n,
    channel: o
  } = e, h = (0, l.Q3)("ChannelMessageConfettiButton"), g = (0, c.LN)(o.id), m = i.useCallback(() => {
    (0, c.Rg)(o.id, u.MG.MessageComposerButtons)
  }, [o.id]);
  return n ? null : (0, r.jsx)("div", {
    className: a()(f.CT, p.buttonContainer),
    ref: t,
    children: (0, r.jsx)(d.Z, {
      innerClassName: a()(p.button, p.messageConfettiButton),
      childClassName: a()(p.messageConfettiIcon, {
        [p.active]: g
      }),
      onClick: m,
      isActive: g,
      "aria-label": _.NW.string(_.t.yvN8bG),
      "aria-haspopup": "false",
      children: (0, r.jsx)(s.l22, {
        size: h ? "refresh_sm" : void 0,
        color: "currentColor"
      })
    })
  })
}
let g = i.memo(i.forwardRef(h))