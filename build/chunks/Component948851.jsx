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
  Chunk633297 = require("./633297.js");
let u = Chunk971130.ZP.getMaxUsesOptions;

function c(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAgeOptions: c,
    maxAge: g,
    maxUses: h,
    temporary: m,
    onGenerateNewLink: v,
    onToggleTemporary: p,
    onSelectMaxAge: x,
    onSelectMaxUses: I,
    isGuestInviteCreationToggleEnabled: S,
    inviteFlags: f,
    onSetInviteFlags: E
  } = e, y = r.ZP.getMaxAgeOptionByValue(g), C = u.find(e => e.value === h);
  return (0, i.jsx)("div", {
    className: d.settingsContent,
    children: (0, i.jsxs)("form", {
      onSubmit: v,
      className: d.settingsForm,
      children: [(0, i.jsx)(s.VcW, {
        label: o.intl.string(o.t["60qw29"]),
        options: c,
        value: null != (t = null == y ? true : y.value) ? t : c[0].value,
        onChange: x
      }), (0, i.jsx)(s.VcW, {
        label: o.intl.string(o.t.jDqWHR),
        options: u,
        value: null == C ? true : C.value,
        onChange: I
      }), !n && (0, i.jsx)(s.rsf, {
        checked: m,
        onChange: e => p(e),
        description: o.intl.string(o.t.UN5IRU),
        label: o.intl.string(o.t["wE+9dn"])
      }), S && (0, i.jsx)(s.rsf, {
        checked: (0, a.yE)(f, l.$.IS_GUEST_INVITE),
        onChange: e => E((0, a.mB)(f, l.$.IS_GUEST_INVITE, e)),
        description: o.intl.string(o.t["/FeTKy"]),
        label: o.intl.string(o.t.siexRU)
      })]
    })
  })
}