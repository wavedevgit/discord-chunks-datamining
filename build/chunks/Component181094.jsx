/** Chunk was on 8939 **/
/** chunk id: 181094, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  default: () => b
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

function b(t) {
  var a, e;
  let {
    channel: b,
    guild: m,
    onClose: N,
    transitionState: k
  } = t, v = null != (a = (0, c.gU)(b, m)) ? a : true, f = (0, s.Ay)(b, false), j = (0, o.h)(null == (e = b.linkedLobby) ? true : e.application_id);
  return (0, i.jsxs)(l.Modal, {
    title: h.intl.string(h.t.X8jMDh),
    subtitle: null != f ? {
      text: f,
      leadingIcon: v
    } : true,
    actions: true,
    transitionState: k,
    onClose: N,
    children: [(0, i.jsx)(n.Text, {
      selectable: true,
      variant: "text-md/normal",
      className: x.PT,
      children: d.A.parseTopic(b.topic, true, {
        channelId: b.id
      })
    }), null != j ? (0, i.jsxs)("div", {
      className: u.a6,
      children: [(0, i.jsx)(n.fNY, {
        className: u.NB
      }), (0, i.jsx)(n.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: h.intl.format(h.t.Ud5ryv, {
          applicationName: j.name,
          helpdeskArticle: r.A.getArticleURL(p.MVz.LINKED_LOBBIES),
          separatorHook: (t, a) => (0, i.jsx)("span", {
            className: u.fY,
            children: t
          }, a)
        })
      })]
    }) : null]
  })
}