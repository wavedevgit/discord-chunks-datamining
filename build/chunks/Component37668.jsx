/** Chunk was on 70887 **/
/** chunk id: 37668, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk86419 = require("./86419.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk817638 = require("./817638.js");

function g(t) {
  let {
    widget: e,
    user: i
  } = t;
  return (0, n.jsx)(u.Z, {
    widget: e,
    user: i,
    disableInteraction: true
  })
}

function b(t) {
  let {
    transitionState: e,
    widget: i,
    userId: u,
    onClose: b,
    trackUserProfileEditAction: v
  } = t, E = r.useCallback(() => {
    (0, o.y8)(i.type), v({
      action: "WIDGET_REMOVED",
      widgetEdited: i.type
    }), b(), (0, x.L$)(h.qb.WIDGET_REMOVED)
  }, [i.type, b, v]), f = (0, l.e7)([c.default], () => c.default.getUser(u));
  return null == f ? null : (0, n.jsxs)(s.Modal, {
    transitionState: e,
    onClose: b,
    title: p.intl.string(p.t.Mm07Yc),
    subtitle: p.intl.format(p.t["x+djI4"], {
      helpUrl: d.w
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: b
    }, {
      variant: "critical-primary",
      text: p.intl.string(p.t.Mm07Yc),
      onClick: E
    }],
    children: [(0, n.jsx)("div", {
      className: w.widgetPreview,
      children: (0, n.jsx)(g, {
        widget: i,
        user: f
      })
    }), (0, n.jsx)("div", {
      className: w.hintText,
      children: (0, n.jsx)(a.Text, {
        color: "text-secondary",
        variant: "text-sm/normal",
        children: p.intl.string(p.t.bQNGeT)
      })
    })]
  })
}