/** Chunk was on 70887 **/
/** chunk id: 37668, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk86419 = require("./86419.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680148 = require("./680148.js");

function p(t) {
  let {
    widget: e,
    user: i
  } = t;
  return (0, n.jsx)(u.Z, {
    widget: e,
    user: i,
    isGameFetching: () => false,
    disableInteraction: true
  })
}

function g(t) {
  let {
    transitionState: e,
    widget: i,
    userId: u,
    onClose: g
  } = t, w = r.useCallback(() => {
    (0, o.y8)(i.type), g()
  }, [i.type, g]), v = (0, s.e7)([c.default], () => c.default.getUser(u));
  return null == v ? null : (0, n.jsxs)(a.Modal, {
    transitionState: e,
    onClose: g,
    title: x.intl.string(x.t.Mm07YW),
    subtitle: x.intl.format(x.t["x+djIy"], {
      helpUrl: d.w
    }),
    actionBarInput: (0, n.jsx)("div", {}),
    actions: [{
      variant: "secondary",
      text: x.intl.string(x.t["ETE/oK"]),
      onClick: g
    }, {
      variant: "critical-primary",
      text: x.intl.string(x.t.Mm07YW),
      onClick: w
    }],
    children: [(0, n.jsx)("div", {
      className: h.widgetPreview,
      children: (0, n.jsx)(p, {
        widget: i,
        user: v
      })
    }), (0, n.jsx)("div", {
      className: h.hintText,
      children: (0, n.jsx)(l.Text, {
        color: "text-secondary",
        variant: "text-sm/normal",
        children: x.intl.string(x.t.bQNGeX)
      })
    })]
  })
}