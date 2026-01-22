/** Chunk was on 8939 **/
/** chunk id: 181094, original params: a,t,e (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk189213 = require("./189213.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk46054 = require("./46054.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk620944 = require("./620944.js"),
  Chunk206314 = require("./206314.js");

function m(a) {
  var t, e;
  let {
    channel: m,
    guild: b,
    onClose: v,
    transitionState: f
  } = a, N = null != (t = (0, c.gU)(m, b)) ? t : true, j = (0, d.Ay)(m, false), k = (0, s.h)(null == (e = m.linkedLobby) ? true : e.application_id);
  return (0, l.jsxs)(i.Modal, {
    title: h.intl.string(h.t.X8jMDh),
    subtitle: null != j ? {
      text: j,
      leadingIcon: N
    } : true,
    actions: true,
    transitionState: f,
    onClose: v,
    children: [(0, l.jsx)(n.Text, {
      selectable: true,
      variant: "text-md/normal",
      className: x.PT,
      children: o.A.parseTopic(m.topic, true, {
        channelId: m.id
      })
    }), null != k ? (0, l.jsxs)("div", {
      className: u.a6,
      children: [(0, l.jsx)(n.fNY, {
        className: u.NB
      }), (0, l.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: h.intl.format(h.t.Ud5ryv, {
          applicationName: k.name,
          helpdeskArticle: r.A.getArticleURL(p.MVz.LINKED_LOBBIES),
          separatorHook: (a, t) => (0, l.jsx)("span", {
            className: u.fY,
            children: a
          }, t)
        })
      })]
    }) : null]
  })
}