/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(430824),
  l = n(496675),
  o = n(556012),
  c = n(273504),
  A = n(981631),
  d = n(590433),
  u = n(388032),
  g = n(15470);

function f(e) {
  var t, n, f;
  let {
    action: m,
    triggerType: p,
    guildId: h,
    toggled: C,
    onToggleAction: b
  } = e, v = e => () => b(e), x = (0, o.c)(m.type, m, p), N = null === (t = m.metadata) || void 0 === t ? void 0 : t.durationSeconds, j = null != N ? (0, d.L9)(N) : null, E = (0, i.e7)([l.Z, a.Z], () => l.Z.can(A.Plq.MODERATE_MEMBERS, a.Z.getGuild(h)), [h]);
  if (null == x) return null;
  let {
    headerText: I,
    descriptionText: O,
    icon: y
  } = x;
  return (0, r.jsxs)("div", {
    className: g.actionContainer,
    children: [(0, r.jsx)("div", {
      className: g.actionIconContainer,
      children: (0, r.jsx)(y, {
        size: "md",
        color: "currentColor",
        className: g.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: g.actionTextContainer,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-sm/semibold",
        children: I
      }), (0, r.jsx)(s.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: O
      }), C && (0, r.jsxs)(s.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: [(n = p, null === (f = j) ? null : n === c.fX.MENTION_SPAM ? u.NW.format(u.t.i3lsKC, {
          friendlyDurationString: f
        }) : u.NW.format(u.t.mvHxzc, {
          friendlyDurationString: f
        })), E && (0, r.jsx)(s.P3F, {
          onClick: v(!0),
          className: g.editChannel,
          tag: "span",
          role: "link",
          children: u.NW.string(u.t["0B95RE"])
        })]
      })]
    }), (0, r.jsx)(s.ua7, {
      text: u.NW.format(u.t.wx6Vb2, {}),
      "aria-label": u.NW.formatToMarkdownString(u.t.wx6Vb2, {}),
      shouldShow: !E,
      children: e => {
        var t, n;
        return (0, r.jsx)("div", (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, e), n = n = {
          children: (0, r.jsx)(s.XZJ, {
            type: s.XZJ.Types.INVERTED,
            value: C,
            onChange: v(!1),
            disabled: !E,
            className: g.__invalid_actionCheckbox
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })]
  })
}