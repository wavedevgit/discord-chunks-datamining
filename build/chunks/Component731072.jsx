/** Chunk was on 9414 **/
/** chunk id: 731072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk726542 = require("./726542.js"),
  Chunk434404 = require("./434404.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk13051 = require("./13051.jsx"),
  Chunk456928 = require("./456928.js");

function m(e) {
  let {
    integrations: t,
    editedIntegration: n,
    guild: m,
    platformType: b,
    labelText: p,
    descriptionText: g,
    helpText: f,
    errors: h,
    canNavigate: x
  } = e, j = o.Z.get(b), v = r.useCallback(async e => {
    x() && (await s.Z.enableIntegration(m.id, e.type, e.id), a.Z.startEditingIntegration(e.id))
  }, [x, m.id]), O = r.useCallback(e => {
    x() && (e.id === (null == n ? true : n.id) && a.Z.stopEditingIntegration(), s.Z.disableIntegration(m.id, e.id))
  }, [x, n, m.id]), y = r.useCallback(e => {
    x() && (e === (null == n ? true : n.id) ? a.Z.stopEditingIntegration() : a.Z.startEditingIntegration(e))
  }, [x, n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Z, {
      name: p,
      icon: null == j ? true : j.icon.whiteSVG,
      iconBackgroundColor: null == j ? true : j.color,
      iconClassName: u.platformIcon,
      description: g,
      isHeader: true
    }), (0, i.jsx)(l.izJ, {
      className: u.headerDivider
    }), "message" in h && (0, i.jsx)(l.Text, {
      className: u.errorText,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: h.message
    }), t.map(e => (0, i.jsx)(d.Z, {
      integration: e,
      editedIntegration: n,
      guild: m,
      isExpanded: (null == n ? true : n.id) === e.id,
      onEnable: v,
      onDisable: O,
      onToggleExpand: () => y(e.id)
    }, e.id)), (0, i.jsx)(l.Text, {
      className: u.helpText,
      color: "text-muted",
      variant: "text-sm/normal",
      children: f
    })]
  })
}