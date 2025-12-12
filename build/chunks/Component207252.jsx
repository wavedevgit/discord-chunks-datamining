/** Chunk was on 67376 **/
/** chunk id: 207252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk246295 = require("./246295.js"),
  Chunk905693 = require("./905693.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk371875 = require("./371875.js");

function d(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: d,
    onConfirm: b
  } = e, {
    rules: h,
    rulesAccepted: k
  } = (0, r.V)(), _ = c.useCallback(() => {
    d(), b()
  }, [d, b]);
  return (0, i.jsx)(l.u_l, {
    title: s.intl.string(s.t["Q8OFN+"]),
    subtitle: s.intl.format(s.t.JLUVfo, {
      onCommunityGuidelinesClick: () => (0, o.lW)({
        articleId: a.BhN.PUBLIC_GUILD_GUILDLINES,
        guildId: t,
        modalStep: o.tK.AGREE_TO_RULES
      }),
      onDiscoveryGuidelinesClick: () => (0, o.lW)({
        articleId: a.BhN.SERVER_DISCOVERY_GUIDELINES,
        guildId: t,
        modalStep: o.tK.AGREE_TO_RULES
      })
    }),
    actions: [{
      disabled: !k,
      text: s.intl.string(s.t["qjtt/p"]),
      onClick: _
    }],
    transitionState: n,
    onClose: d,
    children: (0, i.jsx)("div", {
      className: u.checkboxContainer,
      children: h.map(e => (0, i.jsx)("div", {
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