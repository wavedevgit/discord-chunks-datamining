/** Chunk was on 68774 **/
/** chunk id: 701820, original params: t,i,a (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk86419 = require("./86419.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk501406 = require("./501406.js");

function m(t) {
  let {
    game: i,
    widgetType: a,
    userId: m,
    onClose: x,
    transitionState: p
  } = t, u = n.useCallback(() => {
    (0, c.$b)(a, i.applicationId), x()
  }, [x, a, i.applicationId]);
  return (0, e.jsxs)(s.Modal, {
    transitionState: p,
    onClose: x,
    title: o.intl.string(o.t["G83l5+"]),
    subtitle: o.intl.string(o.t.ILbCi4),
    actionBarInput: (0, e.jsx)("div", {}),
    actions: [{
      variant: "secondary",
      text: o.intl.string(o.t["ETE/oK"]),
      onClick: x
    }, {
      variant: "critical-primary",
      text: o.intl.string(o.t["zyWY9/"]),
      onClick: u
    }],
    children: [(0, e.jsxs)("div", {
      className: d.gameInfo,
      children: [(0, e.jsx)(l.Z, {
        applicationId: i.applicationId,
        userId: m,
        imageSrc: i.imageSrc,
        gameName: i.gameName,
        disableInteraction: true
      }), (0, e.jsx)(r.Text, {
        color: "text-default",
        variant: "text-md/medium",
        children: i.gameName
      })]
    }), (0, e.jsx)("div", {
      className: d.hintText,
      children: (0, e.jsx)(r.Text, {
        color: "text-secondary",
        variant: "text-sm/normal",
        children: o.intl.string(o.t.bQNGeX)
      })
    })]
  })
}