/** Chunk was on 54052 **/
/** chunk id: 769998, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk556012 = require("./556012.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk75765 = require("./75765.js");

function f(e) {
  var t;
  let {
    action: n,
    triggerType: f,
    guildId: h,
    toggled: b,
    onToggleAction: x
  } = e, j = e => () => x(e), _ = (0, c.c)(n.type, n, f), v = null == (t = n.metadata) ? true : t.durationSeconds, O = null != v ? (0, m.L9)(v) : null, y = (0, i.e7)([o.Z, s.Z], () => o.Z.can(u.Plq.MODERATE_MEMBERS, s.Z.getGuild(h)), [h]);
  if (null == _) return null;
  let {
    headerText: C,
    descriptionText: N,
    icon: E
  } = _;
  return (0, r.jsxs)("div", {
    className: p.actionContainer,
    children: [(0, r.jsx)("div", {
      className: p.actionIconContainer,
      children: (0, r.jsx)(E, {
        size: "md",
        color: "currentColor",
        className: p.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: p.actionTextContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-sm/semibold",
        children: C
      }), (0, r.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: N
      }), b && (0, r.jsxs)(a.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: [null === O ? null : f === d.fX.MENTION_SPAM ? g.intl.format(g.t.i3lsKC, {
          friendlyDurationString: O
        }) : g.intl.format(g.t.mvHxzc, {
          friendlyDurationString: O
        }), y && (0, r.jsx)(a.P3F, {
          onClick: j(true),
          className: p.editChannel,
          tag: "span",
          role: "link",
          children: g.intl.string(g.t["0B95RE"])
        })]
      })]
    }), (0, r.jsx)(a.ua7, {
      text: g.intl.format(g.t.wx6Vb2, {}),
      "aria-label": g.intl.formatToMarkdownString(g.t.wx6Vb2, {}),
      shouldShow: !y,
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
          children: (0, r.jsx)(l.$q, {
            type: l.M0.INVERTED,
            value: b,
            onChange: j(false),
            disabled: !y,
            className: p.__invalid_actionCheckbox
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