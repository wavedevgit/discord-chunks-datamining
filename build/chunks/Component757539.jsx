/** Chunk was on 99063 **/
/** chunk id: 757539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk516901 = require("./516901.js");

function u(e) {
  let {
    hasInvites: t,
    setHeight: n,
    onShowDisableInvites: u,
    onShowInviteModal: p,
    hasInviteDisabledPermission: m,
    invitesDisabled: b,
    canCreateInvites: g
  } = e, f = r.useMemo(() => (0, l.debounce)(n, 100), [n]), h = r.useCallback(e => {
    let t = e.contentRect;
    null != t && f(t.height)
  }, [f]), x = (0, s.y)(h);
  return (0, i.jsxs)("div", {
    ref: x,
    className: d.actions,
    children: [(0, i.jsx)(a.X6q, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: d.eyebrow,
      children: t ? c.intl.string(c.t.DjWsya) : c.intl.string(c.t.AmwmLg)
    }), (0, i.jsxs)(a.hE2, {
      children: [(0, i.jsx)(o.Button, {
        variant: b ? "primary" : "critical-secondary",
        text: b ? c.intl.string(c.t["/dbw3H"]) : c.intl.string(c.t.Uwsjn6),
        onClick: u,
        disabled: !m
      }), true === g ? (0, i.jsx)(o.Button, {
        variant: "primary",
        text: c.intl.string(c.t.KmK3q4),
        onClick: p
      }) : null]
    })]
  })
}