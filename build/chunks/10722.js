/** Chunk was on 65631 **/
n.d(a, {
  default: () => b
});
var o = n(200651),
  c = n(481060),
  l = n(835473),
  i = n(933557),
  t = n(471445),
  r = n(454585),
  s = n(63063),
  d = n(981631),
  p = n(388032),
  h = n(500943);

function b(e) {
  var a;
  let {
    channel: n,
    onClose: b,
    guild: m,
    transitionState: x
  } = e, N = (0, t.KS)(n, m), k = (0, i.ZP)(n, !1), u = (0, l.q)(null === (a = n.linkedLobby) || void 0 === a ? void 0 : a.application_id);
  return (0, o.jsxs)(c.Y0X, {
    transitionState: x,
    "aria-label": p.NW.string(p.t.X8jMDg),
    className: h.modal,
    children: [(0, o.jsxs)(c.xBx, {
      className: h.modalHeader,
      separator: !1,
      children: [(0, o.jsxs)("div", {
        className: h.header,
        children: [null != N && (0, o.jsx)(N, {
          size: "md",
          color: "currentColor",
          className: h.channelIcon
        }), (0, o.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: k
        })]
      }), (0, o.jsx)(c.olH, {
        onClick: b
      })]
    }), (0, o.jsxs)(c.hzk, {
      children: [(0, o.jsx)(c.Text, {
        selectable: !0,
        variant: "text-md/normal",
        className: h.content,
        children: r.Z.parseTopic(n.topic, !0, {
          channelId: n.id
        })
      }), null != u ? (0, o.jsxs)("div", {
        className: h.linkedLobbyNotice,
        children: [(0, o.jsx)(c.DuK, {
          className: h.linkedLobbyApplicationIcon
        }), (0, o.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: p.NW.format(p.t.Ud5rys, {
            applicationName: u.name,
            helpdeskArticle: s.Z.getArticleURL(d.BhN.CHANNEL_LINKED_LOBBIES),
            separatorHook: (e, a) => (0, o.jsx)("span", {
              className: h.linkedLobbyNoticeSeparator,
              children: e
            }, a)
          })
        })]
      }) : null]
    })]
  })
}