/** Chunk was on 43600 **/
/** chunk id: 167596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk821418 = require("./821418.js"),
  Chunk665260 = require("./665260.js"),
  Chunk397927 = require("./397927.js"),
  Chunk735547 = require("./735547.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk901462 = require("./901462.js");
let g = Chunk735547.Ay.getMaxUsesOptions;

function h(e) {
  var t;
  let {
    shouldHideTemporaryInviteToggle: n,
    maxAgeOptions: h,
    maxAge: p,
    maxUses: v,
    temporary: A,
    onToggleTemporary: I,
    onSelectMaxAge: m,
    onSelectMaxUses: S,
    isGuestInviteCreationToggleEnabled: x,
    inviteFlags: y,
    onSetInviteFlags: f,
    isRoleAssignmentEnabled: E,
    assignableRoles: _,
    selectedRoleIds: b,
    onToggleRole: C
  } = e, T = o.Ay.getMaxAgeOptionByValue(p), N = g.find(e => e.value === v), M = i.useMemo(() => _.map(e => ({
    id: e.id,
    value: e.id,
    label: e.name,
    leading: () => {
      var t;
      return (0, l.jsx)(a.WYI, {
        color: null != (t = e.colorString) ? t : u.TpD,
        colors: e.colorStrings,
        background: false,
        tooltip: false
      })
    }
  })), [_]), O = i.useCallback(e => {
    let t = Array.from(b),
      n = null != e ? e : [],
      l = n.find(e => !t.includes(e)),
      i = t.find(e => !n.includes(e));
    null != l ? C(l) : null != i && C(i)
  }, [b, C]);
  return (0, l.jsxs)("div", {
    className: c.z1,
    children: [(0, l.jsx)(a.ZiE, {
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
      value: null != (t = null == T ? true : T.value) ? t : h[0].value,
      onSelectionChange: m,
      selectionMode: "single"
    }), (0, l.jsx)(a.ZiE, {
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
    }), E && _.length > 0 && (0, l.jsx)(a.ZiE, {
      label: d.intl.string(d.t.rPYJxL),
      placeholder: d.intl.string(d.t["/djIh7"]),
      options: M,
      value: Array.from(b),
      onSelectionChange: O,
      selectionMode: "multiple",
      closeOnSelect: false
    }), !n && (0, l.jsx)(a.dOG, {
      checked: A,
      onChange: e => I(e),
      description: d.intl.string(d.t.UN5IRX),
      label: d.intl.string(d.t["wE+9dr"])
    }), x && (0, l.jsx)(a.dOG, {
      checked: (0, r.Lt)(y, s.Q.IS_GUEST_INVITE),
      onChange: e => f((0, r.lA)(y, s.Q.IS_GUEST_INVITE, e)),
      description: d.intl.string(d.t["/FeTK6"]),
      label: d.intl.string(d.t.siexRS)
    })]
  })
}