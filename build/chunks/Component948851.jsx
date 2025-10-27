/** Chunk was on 7654 **/
/** chunk id: 948851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk533800 = require("./533800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk630388 = require("./630388.js"),
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
    temporary: v,
    onGenerateNewLink: p,
    onToggleTemporary: I,
    onSelectMaxAge: m,
    onSelectMaxUses: x,
    isGuestInviteCreationToggleEnabled: S,
    inviteFlags: f,
    onSetInviteFlags: E
  } = e, y = a.ZP.getMaxAgeOptionByValue(g), C = d.find(e => e.value === h);
  return (0, i.jsx)("div", {
    className: u.settingsContent,
    children: (0, i.jsxs)("form", {
      onSubmit: p,
      className: u.settingsForm,
      children: [(0, i.jsx)(s.VcW, {
        label: o.intl.string(o.t["60qw2x"]),
        options: c,
        value: null != (t = null == y ? true : y.value) ? t : c[0].value,
        onChange: m
      }), (0, i.jsx)(s.VcW, {
        label: o.intl.string(o.t.jDqWHW),
        options: d,
        value: null == C ? true : C.value,
        onChange: x
      }), !n && (0, i.jsx)(s.rsf, {
        checked: v,
        onChange: e => I(e),
        description: o.intl.string(o.t.UN5IRX),
        label: o.intl.string(o.t["wE+9dr"])
      }), S && (0, i.jsx)(s.rsf, {
        checked: (0, r.yE)(f, l.$.IS_GUEST_INVITE),
        onChange: e => E((0, r.mB)(f, l.$.IS_GUEST_INVITE, e)),
        description: o.intl.string(o.t["/FeTK6"]),
        label: o.intl.string(o.t.siexRS)
      })]
    })
  })
}