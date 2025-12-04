/** Chunk was on 7654 **/
/** chunk id: 948851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk971130 = require("./971130.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk337709 = require("./337709.js");
let c = Chunk971130.ZP.getMaxUsesOptions;

function g(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAgeOptions: g,
    maxAge: h,
    maxUses: p,
    temporary: v,
    onGenerateNewLink: I,
    onToggleTemporary: m,
    onSelectMaxAge: S,
    onSelectMaxUses: x,
    isGuestInviteCreationToggleEnabled: f,
    inviteFlags: y,
    onSetInviteFlags: E
  } = e, _ = o.ZP.getMaxAgeOptionByValue(h), C = c.find(e => e.value === p);
  return (0, i.jsx)("div", {
    className: d.settingsContent,
    children: (0, i.jsxs)("form", {
      onSubmit: I,
      className: d.settingsForm,
      children: [(0, i.jsx)(r.d, {
        label: u.intl.string(u.t["60qw2x"]),
        options: g,
        value: null != (t = null == _ ? true : _.value) ? t : g[0].value,
        onChange: S
      }), (0, i.jsx)(r.d, {
        label: u.intl.string(u.t.jDqWHW),
        options: c,
        value: null == C ? true : C.value,
        onChange: x
      }), !n && (0, i.jsx)(a.rsf, {
        checked: v,
        onChange: e => m(e),
        description: u.intl.string(u.t.UN5IRX),
        label: u.intl.string(u.t["wE+9dr"])
      }), f && (0, i.jsx)(a.rsf, {
        checked: (0, s.yE)(y, l.$.IS_GUEST_INVITE),
        onChange: e => E((0, s.mB)(y, l.$.IS_GUEST_INVITE, e)),
        description: u.intl.string(u.t["/FeTK6"]),
        label: u.intl.string(u.t.siexRS)
      })]
    })
  })
}