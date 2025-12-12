/** Chunk was on 7654 **/
/** chunk id: 948851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk333200 = require("./333200.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk971130 = require("./971130.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk527540 = require("./527540.js");
let p = Chunk971130.ZP.getMaxUsesOptions;

function v(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAgeOptions: v,
    maxAge: I,
    maxUses: m,
    temporary: S,
    onToggleTemporary: f,
    onSelectMaxAge: x,
    onSelectMaxUses: y,
    isGuestInviteCreationToggleEnabled: E,
    inviteFlags: _,
    onSetInviteFlags: b,
    isRoleAssignmentEnabled: C,
    assignableRoles: T,
    selectedRoleIds: A,
    onToggleRole: N
  } = e, M = d.ZP.getMaxAgeOptionByValue(I), P = p.find(e => e.value === m), Z = i.useMemo(() => T.map(e => ({
    id: e.id,
    value: e.id,
    label: e.name,
    leading: () => {
      var t;
      return (0, l.jsx)(u.FhE, {
        color: null != (t = e.colorString) ? t : c.Pbq,
        colors: e.colorStrings,
        background: false,
        tooltip: false
      })
    }
  })), [T]), j = i.useCallback(e => {
    let t = Array.from(A),
      n = null != e ? e : [],
      l = n.find(e => !t.includes(e)),
      i = t.find(e => !n.includes(e));
    null != l ? N(l) : null != i && N(i)
  }, [A, N]);
  return (0, l.jsxs)("div", {
    className: h.settingsContent,
    children: [(0, l.jsx)(a.d, {
      label: g.intl.string(g.t["60qw2x"]),
      options: v,
      value: null != (t = null == M ? true : M.value) ? t : v[0].value,
      onChange: x
    }), (0, l.jsx)(a.d, {
      label: g.intl.string(g.t.jDqWHW),
      options: p,
      value: null == P ? true : P.value,
      onChange: y
    }), C && T.length > 0 && (0, l.jsx)(o.V, {
      label: g.intl.string(g.t.rPYJxL),
      placeholder: g.intl.string(g.t["/djIh7"]),
      options: Z,
      value: Array.from(A),
      onSelectionChange: j,
      selectionMode: "multiple",
      closeOnSelect: false
    }), !n && (0, l.jsx)(u.rsf, {
      checked: S,
      onChange: e => f(e),
      description: g.intl.string(g.t.UN5IRX),
      label: g.intl.string(g.t["wE+9dr"])
    }), E && (0, l.jsx)(u.rsf, {
      checked: (0, r.yE)(_, s.$.IS_GUEST_INVITE),
      onChange: e => b((0, r.mB)(_, s.$.IS_GUEST_INVITE, e)),
      description: g.intl.string(g.t["/FeTK6"]),
      label: g.intl.string(g.t.siexRS)
    })]
  })
}