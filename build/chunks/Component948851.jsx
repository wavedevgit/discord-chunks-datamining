/** Chunk was on 7654 **/
/** chunk id: 948851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk481060 = require("./481060.js"),
  Chunk971130 = require("./971130.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk337709 = require("./337709.js");
let d = Chunk971130.ZP.getMaxUsesOptions;

function c(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAgeOptions: c,
    maxAge: g,
    maxUses: h,
    temporary: p,
    onGenerateNewLink: v,
    onToggleTemporary: I,
    onSelectMaxAge: m,
    onSelectMaxUses: S,
    isGuestInviteCreationToggleEnabled: x,
    inviteFlags: f,
    onSetInviteFlags: y
  } = e, E = a.ZP.getMaxAgeOptionByValue(g), _ = d.find(e => e.value === h);
  return (0, i.jsx)("div", {
    className: u.settingsContent,
    children: (0, i.jsxs)("form", {
      onSubmit: v,
      className: u.settingsForm,
      children: [(0, i.jsx)(r.VcW, {
        label: o.intl.string(o.t["60qw2x"]),
        options: c,
        value: null != (t = null == E ? true : E.value) ? t : c[0].value,
        onChange: m
      }), (0, i.jsx)(r.VcW, {
        label: o.intl.string(o.t.jDqWHW),
        options: d,
        value: null == _ ? true : _.value,
        onChange: S
      }), !n && (0, i.jsx)(r.rsf, {
        checked: p,
        onChange: e => I(e),
        description: o.intl.string(o.t.UN5IRX),
        label: o.intl.string(o.t["wE+9dr"])
      }), x && (0, i.jsx)(r.rsf, {
        checked: (0, s.yE)(f, l.$.IS_GUEST_INVITE),
        onChange: e => y((0, s.mB)(f, l.$.IS_GUEST_INVITE, e)),
        description: o.intl.string(o.t["/FeTK6"]),
        label: o.intl.string(o.t.siexRS)
      })]
    })
  })
}