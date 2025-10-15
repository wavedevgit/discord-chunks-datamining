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
let u = Chunk971130.ZP.getMaxUsesOptions;

function c(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAgeOptions: c,
    maxAge: h,
    maxUses: g,
    temporary: m,
    onGenerateNewLink: p,
    onToggleTemporary: v,
    onSelectMaxAge: x,
    onSelectMaxUses: I,
    isGuestInviteCreationToggleEnabled: S,
    inviteFlags: y,
    onSetInviteFlags: j
  } = e, C = r.ZP.getMaxAgeOptionByValue(h), N = u.find(e => e.value === g);
  return (0, i.jsx)("div", {
    className: d.settingsContent,
    children: (0, i.jsxs)("form", {
      onSubmit: p,
      className: d.settingsForm,
      children: [(0, i.jsx)(s.VcW, {
        label: o.intl.string(o.t["60qw2x"]),
        options: c,
        value: null != (t = null == C ? true : C.value) ? t : c[0].value,
        onChange: x
      }), (0, i.jsx)(s.VcW, {
        label: o.intl.string(o.t.jDqWHW),
        options: u,
        value: null == N ? true : N.value,
        onChange: I
      }), !n && (0, i.jsx)(s.rsf, {
        checked: m,
        onChange: e => v(e),
        description: o.intl.string(o.t.UN5IRX),
        label: o.intl.string(o.t["wE+9dr"])
      }), S && (0, i.jsx)(s.rsf, {
        checked: (0, a.yE)(y, l.$.IS_GUEST_INVITE),
        onChange: e => j((0, a.mB)(y, l.$.IS_GUEST_INVITE, e)),
        description: o.intl.string(o.t["/FeTK6"]),
        label: o.intl.string(o.t.siexRS)
      })]
    })
  })
}