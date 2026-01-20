/** Chunk was on 7654 **/
/** chunk id: 948851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk481060 = require("./481060.js"),
  Chunk971130 = require("./971130.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk527540 = require("./527540.js");
let g = Chunk971130.ZP.getMaxUsesOptions;

function h(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAgeOptions: h,
    maxAge: p,
    maxUses: v,
    temporary: I,
    onToggleTemporary: m,
    onSelectMaxAge: x,
    onSelectMaxUses: S,
    isGuestInviteCreationToggleEnabled: f,
    inviteFlags: y,
    onSetInviteFlags: E,
    isRoleAssignmentEnabled: _,
    assignableRoles: b,
    selectedRoleIds: C,
    onToggleRole: T
  } = e, A = o.ZP.getMaxAgeOptionByValue(p), N = g.find(e => e.value === v), M = i.useMemo(() => b.map(e => ({
    id: e.id,
    value: e.id,
    label: e.name,
    leading: () => {
      var t;
      return (0, l.jsx)(a.FhE, {
        color: null != (t = e.colorString) ? t : u.Pbq,
        colors: e.colorStrings,
        background: false,
        tooltip: false
      })
    }
  })), [b]), P = i.useCallback(e => {
    let t = Array.from(C),
      n = null != e ? e : [],
      l = n.find(e => !t.includes(e)),
      i = t.find(e => !n.includes(e));
    null != l ? T(l) : null != i && T(i)
  }, [C, T]);
  return (0, l.jsxs)("div", {
    className: c.settingsContent,
    children: [(0, l.jsx)(a.VcW, {
      label: d.intl.string(d.t["60qw2x"]),
      options: h,
      formatOption: e => {
        let {
          value: t,
          label: n
        } = e;
        return {
          id: t.toString(),
          value: t,
          label: n
        }
      },
      value: null != (t = null == A ? true : A.value) ? t : h[0].value,
      onSelectionChange: x,
      selectionMode: "single"
    }), (0, l.jsx)(a.VcW, {
      label: d.intl.string(d.t.jDqWHW),
      options: g,
      formatOption: e => {
        let {
          value: t,
          label: n
        } = e;
        return {
          id: t.toString(),
          value: t,
          label: n
        }
      },
      value: null == N ? true : N.value,
      onSelectionChange: S,
      selectionMode: "single"
    }), _ && b.length > 0 && (0, l.jsx)(a.VcW, {
      label: d.intl.string(d.t.rPYJxL),
      placeholder: d.intl.string(d.t["/djIh7"]),
      options: M,
      value: Array.from(C),
      onSelectionChange: P,
      selectionMode: "multiple",
      closeOnSelect: false
    }), !n && (0, l.jsx)(a.rsf, {
      checked: I,
      onChange: e => m(e),
      description: d.intl.string(d.t.UN5IRX),
      label: d.intl.string(d.t["wE+9dr"])
    }), f && (0, l.jsx)(a.rsf, {
      checked: (0, r.yE)(y, s.$.IS_GUEST_INVITE),
      onChange: e => E((0, r.mB)(y, s.$.IS_GUEST_INVITE, e)),
      description: d.intl.string(d.t["/FeTK6"]),
      label: d.intl.string(d.t.siexRS)
    })]
  })
}