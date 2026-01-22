/** Chunk was on 35125 **/
/** chunk id: 60852, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk369162 = require("./369162.js"),
  Chunk427562 = require("./427562.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk390790 = require("./390790.js");

function u(e) {
  let {
    guildId: t,
    transitionState: i,
    onClose: u,
    onConfirm: p
  } = e, {
    rules: h,
    rulesAccepted: _
  } = (0, c.P)(), b = l.useCallback(() => {
    u(), p()
  }, [u, p]);
  return (0, n.jsx)(r.aFV, {
    title: o.intl.string(o.t["Q8OFN+"]),
    subtitle: o.intl.format(o.t.JLUVfo, {
      onCommunityGuidelinesClick: () => (0, s.p3)({
        articleId: a.MVz.PUBLIC_GUILD_GUILDLINES,
        guildId: t,
        modalStep: s.iv.AGREE_TO_RULES
      }),
      onDiscoveryGuidelinesClick: () => (0, s.p3)({
        articleId: a.MVz.SERVER_DISCOVERY_GUIDELINES,
        guildId: t,
        modalStep: s.iv.AGREE_TO_RULES
      })
    }),
    actions: [{
      disabled: !_,
      text: o.intl.string(o.t["qjtt/p"]),
      onClick: b
    }],
    transitionState: i,
    onClose: u,
    children: (0, n.jsx)("div", {
      className: d.H,
      children: h.map(e => (0, n.jsx)("div", {
        className: d.k,
        children: (0, n.jsx)(r.Sc0, {
          checked: e.checked,
          onChange: e.onCheck,
          label: e.title,
          description: e.body
        })
      }, e.key))
    })
  })
}