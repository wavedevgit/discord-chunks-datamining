/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(933557),
  l = n(592125),
  o = n(699516),
  A = n(594174),
  c = n(556012),
  d = n(388032),
  u = n(15470);

function g(e) {
  var t;
  let {
    action: n,
    triggerType: g,
    toggled: f,
    onToggleAction: m
  } = e, p = e => () => m(e), h = (0, c.c)(n.type, n, g), C = null === (t = n.metadata) || void 0 === t ? void 0 : t.channelId, b = (0, i.e7)([A.default, o.Z, l.Z], () => {
    let e = l.Z.getChannel(C);
    return null == e ? null : (0, a.F6)(e, A.default, o.Z)
  }, [C]);
  if (null == h) return null;
  let {
    headerText: v,
    descriptionText: x,
    icon: N
  } = h;
  return (0, r.jsxs)("div", {
    className: u.actionContainer,
    children: [(0, r.jsx)("div", {
      className: u.actionIconContainer,
      children: (0, r.jsx)(N, {
        size: "md",
        color: "currentColor",
        className: u.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: u.actionTextContainer,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-sm/semibold",
        children: v
      }), (0, r.jsx)(s.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: x
      }), f && (0, r.jsxs)(s.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [null != b && d.NW.format(d.t["8Sr/am"], {
          channelName: b
        }), (0, r.jsx)(s.P3F, {
          onClick: p(!0),
          className: u.editChannel,
          tag: "span",
          role: "link",
          children: d.NW.string(d.t["3gUsJS"])
        })]
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(s.XZJ, {
        type: s.XZJ.Types.INVERTED,
        value: f,
        onChange: p(!1),
        className: u.__invalid_actionCheckbox
      })
    })]
  })
}