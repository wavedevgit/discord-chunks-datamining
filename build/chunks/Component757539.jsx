/** Chunk was on 58511 **/
/** chunk id: 757539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk399553 = require("./399553.js");

function p(e) {
  let {
    hasInvites: t,
    setHeight: n,
    onShowDisableInvites: p,
    onShowInviteModal: m,
    hasInviteDisabledPermission: b,
    invitesDisabled: g,
    canCreateInvites: f
  } = e, h = r.useMemo(() => (0, l.debounce)(n, 100), [n]), x = r.useCallback(e => {
    let t = e.contentRect;
    null != t && h(t.height)
  }, [h]), j = (0, c.y)(x);
  return (0, i.jsxs)("div", {
    ref: j,
    className: u.actions,
    children: [(0, i.jsx)(a.X6, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: u.eyebrow,
      children: t ? d.intl.string(d.t.DjWsyc) : d.intl.string(d.t.AmwmLi)
    }), (0, i.jsxs)("div", {
      className: u.inviteButtons,
      children: [(0, i.jsx)(o.zx, {
        size: o.zx.Sizes.MEDIUM,
        color: g ? o.zx.Colors.BRAND : o.zx.Colors.RED,
        look: o.zx.Looks.OUTLINED,
        disabled: !b,
        onClick: p,
        children: g ? d.intl.string(d.t["/dbw3N"]) : d.intl.string(d.t.Uwsjn5)
      }), true === f ? (0, i.jsx)(s.zxk, {
        variant: "primary",
        text: d.intl.string(d.t.KmK3q6),
        onClick: m
      }) : null]
    })]
  })
}