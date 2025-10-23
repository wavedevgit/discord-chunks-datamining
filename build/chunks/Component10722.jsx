/** Chunk was on 65631 **/
/** chunk id: 10722, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  default: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
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

function k(e) {
  var a;
  let {
    channel: n,
    onClose: o,
    guild: k,
    transitionState: N
  } = e, u = (0, d.KS)(n, k), j = (0, r.ZP)(n, false), y = (0, t.q)(null == (a = n.linkedLobby) ? true : a.application_id);
  return (0, l.jsxs)(i.Y0X, {
    transitionState: N,
    "aria-label": m.intl.string(m.t.X8jMDh),
    className: b.modal,
    parentComponent: "ChannelTopicModal",
    children: [(0, l.jsxs)(i.xBx, {
      className: b.modalHeader,
      separator: false,
      children: [(0, l.jsxs)("div", {
        className: b.header,
        children: [null != u && (0, l.jsx)(u, {
          size: "md",
          color: "currentColor",
          className: b.channelIcon
        }), (0, l.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: j
        })]
      }), (0, l.jsx)(i.olH, {
        onClick: o
      })]
    }), (0, l.jsxs)(i.hzk, {
      children: [(0, l.jsx)(i.Text, {
        selectable: true,
        variant: "text-md/normal",
        className: c()(b.content, x.markup),
        children: s.Z.parseTopic(n.topic, true, {
          channelId: n.id
        })
      }), null != y ? (0, l.jsxs)("div", {
        className: b.linkedLobbyNotice,
        children: [(0, l.jsx)(i.DuK, {
          className: b.linkedLobbyApplicationIcon
        }), (0, l.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: m.intl.format(m.t.Ud5ryv, {
            applicationName: y.name,
            helpdeskArticle: p.Z.getArticleURL(h.BhN.LINKED_LOBBIES),
            separatorHook: (e, a) => (0, l.jsx)("span", {
              className: b.linkedLobbyNoticeSeparator,
              children: e
            }, a)
          })
        })]
      }) : null]
    })]
  })
}