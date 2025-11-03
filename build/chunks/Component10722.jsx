/** Chunk was on 65631 **/
/** chunk id: 10722, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk775086 = require("./775086.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk454585 = require("./454585.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk648468 = require("./648468.js"),
  Chunk430864 = require("./430864.js");

function h(e) {
  var i, t;
  let {
    channel: h,
    guild: L,
    onClose: N,
    transitionState: m
  } = e, x = null != (t = (0, r.KS)(h, L)) ? t : true, y = (0, c.ZP)(h, false), v = (0, l.q)(null == (i = h.linkedLobby) ? true : i.application_id);
  return (0, n.jsxs)(a.u, {
    title: b.intl.string(b.t.X8jMDh),
    subtitle: null != y ? {
      text: y,
      leadingIcon: x
    } : true,
    actions: true,
    transitionState: m,
    onClose: N,
    children: [(0, n.jsx)(o.Text, {
      selectable: true,
      variant: "text-md/normal",
      className: k.markup,
      children: s.Z.parseTopic(h.topic, true, {
        channelId: h.id
      })
    }), null != v ? (0, n.jsxs)("div", {
      className: u.linkedLobbyNotice,
      children: [(0, n.jsx)(o.DuK, {
        className: u.linkedLobbyApplicationIcon
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: b.intl.format(b.t.Ud5ryv, {
          applicationName: v.name,
          helpdeskArticle: d.Z.getArticleURL(p.BhN.LINKED_LOBBIES),
          separatorHook: (e, i) => (0, n.jsx)("span", {
            className: u.linkedLobbyNoticeSeparator,
            children: e
          }, i)
        })
      })]
    }) : null]
  })
}