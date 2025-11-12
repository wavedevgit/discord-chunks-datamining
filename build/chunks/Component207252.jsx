/** Chunk was on 67376 **/
/** chunk id: 207252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk246295 = require("./246295.js"),
  Chunk905693 = require("./905693.js"),
  Chunk981631 = require("./981631.js"),
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
  } = (0, r.V)(), k = c.useCallback(() => {
    d(), h()
  }, [d, h]);
  return (0, i.jsx)(l.u_l, {
    title: a.intl.string(a.t["Q8OFN+"]),
    subtitle: a.intl.format(a.t.JLUVfo, {
      onCommunityGuidelinesClick: () => (0, o.lW)({
        articleId: s.BhN.PUBLIC_GUILD_GUILDLINES,
        guildId: t,
        modalStep: o.tK.AGREE_TO_RULES
      }),
      onDiscoveryGuidelinesClick: () => (0, o.lW)({
        articleId: s.BhN.SERVER_DISCOVERY_GUIDELINES,
        guildId: t,
        modalStep: o.tK.AGREE_TO_RULES
      })
    }),
    actions: [{
      disabled: !b,
      text: a.intl.string(a.t["qjtt/p"]),
      onClick: k
    }],
    transitionState: n,
    onClose: d,
    children: (0, i.jsx)("div", {
      className: u.checkboxContainer,
      children: _.map(e => (0, i.jsx)("div", {
        className: u.checkbox,
        children: (0, i.jsx)(l.XZJ, {
          checked: e.checked,
          onChange: e.onCheck,
          label: e.title,
          description: e.body
        })
      }, e.key))
    })
  })
}