/** Chunk was on 7654 **/
/** chunk id: 948851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk533800 = require("./533800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk630388 = require("./630388.js"),
  Chunk971130 = require("./971130.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk337709 = require("./337709.js");
let d = Chunk971130.ZP.getMaxAgeOptions,
  c = Chunk971130.ZP.getMaxUsesOptions;

function h(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAge: a,
    maxUses: h,
    temporary: g,
    onGenerateNewLink: m,
    onToggleTemporary: p,
    onSelectMaxAge: v,
    onSelectMaxUses: I,
    isGuestInviteCreationToggleEnabled: x,
    inviteFlags: f,
    onSetInviteFlags: N
  } = e, j = d.find(e => e.value === a), _ = c.find(e => e.value === h);
  return (0, l.jsx)("div", {
    className: u.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: m,
      className: u.settingsForm,
      children: [(0, l.jsx)(r.xJW, {
        title: o.intl.string(o.t["60qw29"]),
        children: (0, l.jsx)(r.VcW, {
          options: d,
          value: null != (t = null == j ? true : j.value) ? t : d[0].value,
          onChange: v
        })
      }), (0, l.jsx)(r.xJW, {
        title: o.intl.string(o.t.jDqWHR),
        children: (0, l.jsx)(r.VcW, {
          options: c,
          value: null == _ ? true : _.value,
          onChange: I
        })
      }), !n && (0, l.jsx)(r.xJW, {
        children: (0, l.jsx)(r.j7V, {
          className: u.switch,
          value: g,
          onChange: e => p(e),
          note: o.intl.string(o.t.UN5IRU),
          hideBorder: true,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: o.intl.string(o.t["wE+9dn"])
          })
        })
      }), x && (0, l.jsx)(r.xJW, {
        children: (0, l.jsx)(r.j7V, {
          className: u.switch,
          value: (0, s.yE)(f, i.$.IS_GUEST_INVITE),
          onChange: e => N((0, s.mB)(f, i.$.IS_GUEST_INVITE, e)),
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