/** Chunk was on 21968 **/
/** chunk id: 12994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk282956 = require("./282956.js"),
  Chunk573648 = require("./573648.js"),
  Chunk997509 = require("./997509.js"),
  Chunk447066 = require("./447066.jsx"),
  Chunk780765 = require("./780765.jsx"),
  Chunk835084 = require("./835084.js");

function p(e) {
  let {
    integrations: t,
    editedIntegration: n,
    guild: p,
    platformType: m,
    labelText: g,
    descriptionText: b,
    helpText: f,
    errors: h,
    canNavigate: x
  } = e, j = s.A.get(m), O = r.useCallback(async e => {
    x() && (await o.A.enableIntegration(p.id, e.type, e.id), a.A.startEditingIntegration(e.id))
  }, [x, p.id]), y = r.useCallback(e => {
    x() && (e.id === (null == n ? true : n.id) && a.A.stopEditingIntegration(), o.A.disableIntegration(p.id, e.id))
  }, [x, n, p.id]), A = r.useCallback(e => {
    x() && (e === (null == n ? true : n.id) ? a.A.stopEditingIntegration() : a.A.startEditingIntegration(e))
  }, [x, n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.A, {
      name: g,
      icon: null == j ? true : j.icon.whiteSVG,
      iconBackgroundColor: null == j ? true : j.color,
      iconClassName: u.tV,
      description: b,
      isHeader: true
    }), (0, i.jsx)(l.cGx, {
      className: u.zN
    }), "message" in h && (0, i.jsx)(l.Text, {
      className: u.kc,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: h.message
    }), t.map(e => (0, i.jsx)(d.A, {
      integration: e,
      editedIntegration: n,
      guild: p,
      isExpanded: (null == n ? true : n.id) === e.id,
      onEnable: O,
      onDisable: y,
      onToggleExpand: () => A(e.id)
    }, e.id)), (0, i.jsx)(l.Text, {
      className: u.BK,
      color: "text-muted",
      variant: "text-sm/normal",
      children: f
    })]
  })
}