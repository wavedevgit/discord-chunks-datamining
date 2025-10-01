/** Chunk was on 98039 **/
/** chunk id: 731072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk726542 = require("./726542.js"),
  Chunk434404 = require("./434404.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk13051 = require("./13051.jsx"),
  Chunk721257 = require("./721257.js");

function p(e) {
  let {
    integrations: t,
    editedIntegration: n,
    guild: p,
    platformType: m,
    labelText: b,
    descriptionText: g,
    helpText: f,
    canNavigate: h
  } = e, x = o.Z.get(m), j = r.useCallback(async e => {
    h() && (await s.Z.enableIntegration(p.id, e.type, e.id), a.Z.startEditingIntegration(e.id))
  }, [h, p.id]), v = r.useCallback(e => {
    h() && (e.id === (null == n ? true : n.id) && a.Z.stopEditingIntegration(), s.Z.disableIntegration(p.id, e.id))
  }, [h, n, p.id]), y = r.useCallback(e => {
    h() && (e === (null == n ? true : n.id) ? a.Z.stopEditingIntegration() : a.Z.startEditingIntegration(e))
  }, [h, n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Z, {
      name: b,
      icon: null == x ? true : x.icon.whiteSVG,
      iconBackgroundColor: null == x ? true : x.color,
      iconClassName: u.platformIcon,
      description: g,
      isHeader: true
    }), (0, i.jsx)(l.izJ, {
      className: u.headerDivider
    }), t.map(e => (0, i.jsx)(d.Z, {
      integration: e,
      editedIntegration: n,
      guild: p,
      isExpanded: (null == n ? true : n.id) === e.id,
      onEnable: j,
      onDisable: v,
      onToggleExpand: () => y(e.id)
    }, e.id)), (0, i.jsx)(l.Text, {
      className: u.helpText,
      color: "text-muted",
      variant: "text-sm/normal",
      children: f
    })]
  })
}