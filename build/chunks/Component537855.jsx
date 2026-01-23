/** Chunk was on 21968 **/
/** chunk id: 537855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk155135 = require("./155135.js");

function u(e) {
  let {
    hasInvites: t,
    setHeight: n,
    onShowDisableInvites: u,
    onShowInviteModal: p,
    hasInviteDisabledPermission: m,
    invitesDisabled: g,
    canCreateInvites: b
  } = e, f = r.useMemo(() => (0, l.debounce)(n, 100), [n]), h = r.useCallback(e => {
    let t = e.contentRect;
    null != t && f(t.height)
  }, [f]), x = (0, o.w)(h);
  return (0, i.jsxs)("div", {
    ref: x,
    className: d.o,
    children: [(0, i.jsx)(a.DZT, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: d.U,
      children: t ? c.intl.string(c.t.DjWsya) : c.intl.string(c.t.AmwmLg)
    }), (0, i.jsxs)(a.e2v, {
      children: [(0, i.jsx)(s.Button, {
        variant: g ? "primary" : "critical-secondary",
        text: g ? c.intl.string(c.t["/dbw3H"]) : c.intl.string(c.t.Uwsjn6),
        onClick: u,
        disabled: !m
      }), true === b ? (0, i.jsx)(s.Button, {
        variant: "primary",
        text: c.intl.string(c.t.KmK3q4),
        onClick: p
      }) : null]
    })]
  })
}