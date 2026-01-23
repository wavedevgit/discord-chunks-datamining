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
    onConfirm: _
  } = e, {
    rules: h,
    rulesAccepted: p
  } = (0, r.P)(), k = l.useCallback(() => {
    u(), _()
  }, [u, _]);
  return (0, n.jsx)(c.aFV, {
    title: a.intl.string(a.t["Q8OFN+"]),
    subtitle: a.intl.format(a.t.JLUVfo, {
      onCommunityGuidelinesClick: () => (0, o.p3)({
        articleId: s.MVz.PUBLIC_GUILD_GUILDLINES,
        guildId: t,
        modalStep: o.iv.AGREE_TO_RULES
      }),
      onDiscoveryGuidelinesClick: () => (0, o.p3)({
        articleId: s.MVz.SERVER_DISCOVERY_GUIDELINES,
        guildId: t,
        modalStep: o.iv.AGREE_TO_RULES
      })
    }),
    actions: [{
      disabled: !p,
      text: a.intl.string(a.t["qjtt/p"]),
      onClick: k
    }],
    transitionState: i,
    onClose: u,
    children: (0, n.jsx)("div", {
      className: d.H,
      children: h.map(e => (0, n.jsx)("div", {
        className: d.k,
        children: (0, n.jsx)(c.Sc0, {
          checked: e.checked,
          onChange: e.onCheck,
          label: e.title,
          description: e.body
        })
      }, e.key))
    })
  })
}