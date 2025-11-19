/** Chunk was on 70887 **/
/** chunk id: 37668, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk931847 = require("./931847.js"),
  Chunk86419 = require("./86419.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107669 = require("./107669.js");

function v(t) {
  let {
    widget: i,
    user: e
  } = t;
  return (0, n.jsx)(p.Z, {
    widget: i,
    user: e,
    disableInteraction: true
  })
}

function b(t) {
  let {
    transitionState: i,
    widget: e,
    userId: p,
    onClose: b,
    trackUserProfileEditAction: f
  } = t, E = a.useCallback(() => {
    (0, u.y8)(e.type), f({
      action: "WIDGET_REMOVED",
      widgetEdited: e.type,
      applicationId: e instanceof o.q ? e.applicationId : true
    }), b(), (0, x.L$)(h.qb.WIDGET_REMOVED)
  }, [e, b, f]), m = (0, l.e7)([c.default], () => c.default.getUser(p));
  return null == m ? null : (0, n.jsxs)(r.Modal, {
    transitionState: i,
    onClose: b,
    title: w.intl.string(w.t.Mm07Yc),
    subtitle: w.intl.format(w.t["x+djI4"], {
      helpUrl: d.w
    }),
    actions: [{
      variant: "secondary",
      text: w.intl.string(w.t["ETE/oC"]),
      onClick: b
    }, {
      variant: "critical-primary",
      text: w.intl.string(w.t.Mm07Yc),
      onClick: E
    }],
    children: [(0, n.jsx)("div", {
      className: g.widgetPreview,
      children: (0, n.jsx)(v, {
        widget: e,
        user: m
      })
    }), (0, n.jsx)("div", {
      className: g.hintText,
      children: (0, n.jsx)(s.Text, {
        color: "text-secondary",
        variant: "text-sm/normal",
        children: w.intl.string(w.t.bQNGeT)
      })
    })]
  })
}