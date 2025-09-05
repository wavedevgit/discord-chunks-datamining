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
let d = Chunk971130.ZP.getMaxUsesOptions;

function c(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAgeOptions: c,
    maxAge: g,
    maxUses: h,
    temporary: m,
    onGenerateNewLink: p,
    onToggleTemporary: v,
    onSelectMaxAge: x,
    onSelectMaxUses: I,
    isGuestInviteCreationToggleEnabled: f,
    inviteFlags: j,
    onSetInviteFlags: N
  } = e, _ = a.ZP.getMaxAgeOptionByValue(g), E = d.find(e => e.value === h);
  return (0, l.jsx)("div", {
    className: u.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: p,
      className: u.settingsForm,
      children: [(0, l.jsx)(r.xJW, {
        title: o.intl.string(o.t["60qw29"]),
        children: (0, l.jsx)(r.VcW, {
          options: c,
          value: null != (t = null == _ ? true : _.value) ? t : c[0].value,
          onChange: x
        })
      }), (0, l.jsx)(r.xJW, {
        title: o.intl.string(o.t.jDqWHR),
        children: (0, l.jsx)(r.VcW, {
          options: d,
          value: null == E ? true : E.value,
          onChange: I
        })
      }), !n && (0, l.jsx)(r.xJW, {
        children: (0, l.jsx)(r.j7V, {
          className: u.switch,
          value: m,
          onChange: e => v(e),
          note: o.intl.string(o.t.UN5IRU),
          hideBorder: true,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: o.intl.string(o.t["wE+9dn"])
          })
        })
      }), f && (0, l.jsx)(r.xJW, {
        children: (0, l.jsx)(r.j7V, {
          className: u.switch,
          value: (0, s.yE)(j, i.$.IS_GUEST_INVITE),
          onChange: e => N((0, s.mB)(j, i.$.IS_GUEST_INVITE, e)),
          note: o.intl.string(o.t["/FeTKy"]),
          hideBorder: true,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: o.intl.string(o.t.siexRU)
          })
        })
      })]
    })
  })
}