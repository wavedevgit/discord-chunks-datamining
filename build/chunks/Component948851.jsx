/** Chunk was on 7654 **/
/** chunk id: 948851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk533800 = require("./533800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk630388 = require("./630388.js"),
  Chunk971130 = require("./971130.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842515 = require("./842515.js");
let d = Chunk971130.ZP.getMaxAgeOptions,
  c = Chunk971130.ZP.getMaxUsesOptions;

function g(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAge: a,
    maxUses: g,
    temporary: h,
    onGenerateNewLink: m,
    onToggleTemporary: p,
    onSelectMaxAge: v,
    onSelectMaxUses: x,
    isGuestInviteCreationToggleEnabled: I,
    inviteFlags: f,
    onSetInviteFlags: j
  } = e, N = d.find(e => e.value === a), _ = c.find(e => e.value === g);
  return (0, l.jsx)("div", {
    className: u.settingsContent,
    children: (0, l.jsxs)("form", {
      onSubmit: m,
      className: u.settingsForm,
      children: [(0, l.jsx)(r.xJW, {
        title: o.intl.string(o.t["60qw29"]),
        children: (0, l.jsx)(r.VcW, {
          options: d,
          value: null != (t = null == N ? true : N.value) ? t : d[0].value,
          onChange: v
        })
      }), (0, l.jsx)(r.xJW, {
        title: o.intl.string(o.t.jDqWHR),
        children: (0, l.jsx)(r.VcW, {
          options: c,
          value: null == _ ? true : _.value,
          onChange: x
        })
      }), !n && (0, l.jsx)(r.xJW, {
        children: (0, l.jsx)(r.j7V, {
          className: u.switch,
          value: h,
          onChange: e => p(e),
          note: o.intl.string(o.t.UN5IRU),
          hideBorder: true,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: o.intl.string(o.t["wE+9dn"])
          })
        })
      }), I && (0, l.jsx)(r.xJW, {
        children: (0, l.jsx)(r.j7V, {
          className: u.switch,
          value: (0, s.yE)(f, i.$.IS_GUEST_INVITE),
          onChange: e => j((0, s.mB)(f, i.$.IS_GUEST_INVITE, e)),
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