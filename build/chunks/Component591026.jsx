/** Chunk was on 9536 **/
/** chunk id: 591026, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk467319 = require("./467319.js"),
  Chunk456677 = require("./456677.jsx"),
  Chunk55889 = require("./55889.jsx"),
  Chunk300453 = require("./300453.jsx"),
  Chunk620436 = require("./620436.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186180 = require("./186180.js");

function f(e) {
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
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  var t, n;
  let {
    rule: p,
    onChangeRule: h
  } = e, [x, j] = i.useState(null == (t = p.triggerMetadata) ? true : t.mentionTotalLimit), v = (0, a.a)(p.guildId, false);
  return (0, r.jsxs)("div", {
    className: m.cardContentsContainer,
    children: [(0, r.jsxs)(c.Z, {
      step: 1,
      header: g.intl.string(g.t.IGfuTa),
      children: [(0, r.jsxs)("div", {
        className: m.mentionLimitContainer,
        children: [(0, r.jsx)("div", {
          className: m.mentionLimitIconContainer,
          children: (0, r.jsx)(l.lOy, {
            size: "md",
            color: "currentColor",
            className: m.mentionLimitIcon
          })
        }), (0, r.jsxs)("div", {
          className: m.mentionLimitTextContainer,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-sm/semibold",
            children: g.intl.string(g.t["s/26oQ"])
          }), (0, r.jsx)(l.Text, {
            color: "interactive-text-default",
            variant: "text-xs/medium",
            className: m.descriptionHint,
            children: g.intl.string(g.t["8uW4/N"])
          })]
        }), (0, r.jsx)("div", {
          className: m.stepperContainer,
          children: (0, r.jsx)(l.FiK, {
            value: x,
            onChange: e => {
              j(e), h(b(f({}, p), {
                triggerMetadata: b(f({}, p.triggerMetadata), {
                  mentionTotalLimit: e
                })
              }))
            },
            minValue: u.Vg,
            maxValue: u.Lg,
            className: m.stepper
          })
        })]
      }), v ? (0, r.jsxs)("div", {
        className: m.mentionLimitContainer,
        children: [(0, r.jsx)("div", {
          className: m.mentionLimitIconContainer,
          children: (0, r.jsx)(l.S4f, {
            size: "md",
            color: "currentColor",
            className: m.mentionLimitIcon
          })
        }), (0, r.jsxs)("div", {
          className: m.mentionLimitTextContainer,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-sm/semibold",
            children: g.intl.string(g.t.XnuC9g)
          }), (0, r.jsx)(l.Text, {
            color: "interactive-text-default",
            variant: "text-xs/medium",
            className: m.descriptionHint,
            children: g.intl.string(g.t.EDBe5m)
          })]
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(l.P3F, {
            onClick: v ? () => {
              var e, t;
              return t = !(null == (e = p.triggerMetadata) ? true : e.mentionRaidProtectionEnabled), void h(b(f({}, p), {
                triggerMetadata: b(f({}, p.triggerMetadata), {
                  mentionRaidProtectionEnabled: t
                })
              }))
            } : true,
            children: (0, r.jsx)(l.FZ5, {
              checked: null == (n = p.triggerMetadata) ? true : n.mentionRaidProtectionEnabled,
              disabled: !v
            })
          })
        })]
      }) : null]
    }), (0, r.jsx)(d.Z, {
      type: d.Z.Type.ARROW_DOWN
    }), (0, r.jsx)(c.Z, {
      step: 2,
      header: g.intl.string(g.t["18TOiQ"]),
      children: (0, r.jsx)(s.Z, {
        rule: p,
        onChangeRule: h
      })
    }), (0, r.jsx)(d.Z, {
      type: d.Z.Type.CROSS
    }), (0, r.jsx)(c.Z, {
      step: 3,
      header: g.intl.string(g.t.eq3gjh),
      children: (0, r.jsx)(o.Z, {
        rule: p,
        onChangeRule: h
      })
    })]
  })
}