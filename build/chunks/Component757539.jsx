/** Chunk was on 9414 **/
/** chunk id: 757539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk765337 = require("./765337.js");

function u(e) {
  let {
    hasInvites: t,
    setHeight: n,
    onShowDisableInvites: u,
    onShowInviteModal: m,
    hasInviteDisabledPermission: b,
    invitesDisabled: p,
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
        variant: p ? "primary" : "critical-secondary",
        text: p ? c.intl.string(c.t["/dbw3H"]) : c.intl.string(c.t.Uwsjn6),
        onClick: u,
        disabled: !b
      }), true === g ? (0, i.jsx)(o.Button, {
        variant: "primary",
        text: c.intl.string(c.t.KmK3q4),
        onClick: m
      }) : null]
    })]
  })
}