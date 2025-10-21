/** Chunk was on 67376 **/
/** chunk id: 207252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk246295 = require("./246295.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk119902 = require("./119902.js");

function d(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: d,
    onConfirm: h
  } = e, {
    rules: _,
    rulesAccepted: b
  } = (0, a.V)(t), k = r.useCallback(() => {
    d(), h()
  }, [d, h]);
  return (0, i.jsx)(c.u_l, {
    title: s.intl.string(s.t["Q8OFN+"]),
    subtitle: s.intl.string(s.t["WT+829"]),
    actions: [{
      disabled: !b,
      text: s.intl.string(s.t["qjtt/p"]),
      onClick: k
    }],
    transitionState: n,
    onClose: d,
    children: (0, i.jsx)("div", {
      className: u.checkboxContainer,
      children: _.map(e => (0, i.jsxs)(l.$q, {
        className: u.checkbox,
        reverse: true,
        value: e.checked,
        align: l.wb.CENTER,
        onChange: e.onCheck,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: e.title
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: e.body
        })]
      }, e.key))
    })
  })
}