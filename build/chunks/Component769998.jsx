/** Chunk was on 6049 **/
/** chunk id: 769998, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk556012 = require("./556012.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk464992 = require("./464992.js");

function p(e) {
  var t;
  let {
    action: n,
    triggerType: p,
    guildId: h,
    toggled: f,
    onToggleAction: b
  } = e, x = e => () => b(e), j = (0, o.c)(n.type, n, p), v = null == (t = n.metadata) ? true : t.durationSeconds, _ = null != v ? (0, u.L9)(v) : null, O = (0, i.e7)([s.Z, a.Z], () => s.Z.can(d.Plq.MODERATE_MEMBERS, a.Z.getGuild(h)), [h]);
  if (null == j) return null;
  let {
    headerText: y,
    descriptionText: C,
    icon: N
  } = j;
  return (0, r.jsxs)("div", {
    className: g.actionContainer,
    children: [(0, r.jsx)("div", {
      className: g.actionIconContainer,
      children: (0, r.jsx)(N, {
        size: "md",
        color: "currentColor",
        className: g.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: g.actionTextContainer,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-sm/semibold",
        children: y
      }), (0, r.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: C
      }), f && (0, r.jsxs)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: [null === _ ? null : p === c.fX.MENTION_SPAM ? m.intl.format(m.t.i3lsKC, {
          friendlyDurationString: _
        }) : m.intl.format(m.t.mvHxzc, {
          friendlyDurationString: _
        }), O && (0, r.jsx)(l.P3F, {
          onClick: x(true),
          className: g.editChannel,
          tag: "span",
          role: "link",
          children: m.intl.string(m.t["0B95RE"])
        })]
      })]
    }), (0, r.jsx)(l.ua7, {
      text: m.intl.format(m.t.wx6Vb2, {}),
      "aria-label": m.intl.formatToMarkdownString(m.t.wx6Vb2, {}),
      shouldShow: !O,
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
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, e), n = n = {
          children: (0, r.jsx)(l.XZJ, {
            type: l.XZJ.Types.INVERTED,
            value: f,
            onChange: x(false),
            disabled: !O,
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