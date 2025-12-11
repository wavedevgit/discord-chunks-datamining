/** Chunk was on 65631 **/
/** chunk id: 10722, original params: i,e,t (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk775086 = require("./775086.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk454585 = require("./454585.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587650 = require("./587650.js"),
  Chunk960324 = require("./960324.js");

function h(i) {
  var e, t;
  let {
    channel: h,
    guild: x,
    onClose: L,
    transitionState: N
  } = i, m = null != (t = (0, d.KS)(h, x)) ? t : true, y = (0, c.ZP)(h, false), v = (0, o.q)(null == (e = h.linkedLobby) ? true : e.application_id);
  return (0, a.jsxs)(n.Modal, {
    title: b.intl.string(b.t.X8jMDh),
    subtitle: null != y ? {
      text: y,
      leadingIcon: m
    } : true,
    actions: true,
    transitionState: N,
    onClose: L,
    children: [(0, a.jsx)(l.Text, {
      selectable: true,
      variant: "text-md/normal",
      className: k.markup,
      children: s.Z.parseTopic(h.topic, true, {
        channelId: h.id
      })
    }), null != v ? (0, a.jsxs)("div", {
      className: u.linkedLobbyNotice,
      children: [(0, a.jsx)(l.DuK, {
        className: u.linkedLobbyApplicationIcon
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: b.intl.format(b.t.Ud5ryv, {
          applicationName: v.name,
          helpdeskArticle: r.Z.getArticleURL(p.BhN.LINKED_LOBBIES),
          separatorHook: (i, e) => (0, a.jsx)("span", {
            className: u.linkedLobbyNoticeSeparator,
            children: i
          }, e)
        })
      })]
    }) : null]
  })
}