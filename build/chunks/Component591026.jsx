/** Chunk was on 64982 **/
/** chunk id: 591026, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk467319 = require("./467319.js"),
  Chunk456677 = require("./456677.jsx"),
  Chunk55889 = require("./55889.jsx"),
  Chunk300453 = require("./300453.jsx"),
  Chunk620436 = require("./620436.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk290135 = require("./290135.js");

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

function h(e, t) {
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

function b(e) {
  var t, n;
  let {
    rule: b,
    onChangeRule: x
  } = e, [j, v] = i.useState(null == (t = b.triggerMetadata) ? true : t.mentionTotalLimit), _ = (0, s.a)(b.guildId, false);
  return (0, r.jsxs)("div", {
    className: p.cardContentsContainer,
    children: [(0, r.jsxs)(d.Z, {
      step: 1,
      header: m.intl.string(m.t.IGfuTa),
      children: [(0, r.jsxs)("div", {
        className: p.mentionLimitContainer,
        children: [(0, r.jsx)("div", {
          className: p.mentionLimitIconContainer,
          children: (0, r.jsx)(a.lOy, {
            size: "md",
            color: "currentColor",
            className: p.mentionLimitIcon
          })
        }), (0, r.jsxs)("div", {
          className: p.mentionLimitTextContainer,
          children: [(0, r.jsx)(a.Heading, {
            variant: "heading-sm/semibold",
            children: m.intl.string(m.t["s/26oQ"])
          }), (0, r.jsx)(a.Text, {
            color: "interactive-normal",
            variant: "text-xs/medium",
            className: p.descriptionHint,
            children: m.intl.string(m.t["8uW4/N"])
          })]
        }), (0, r.jsx)("div", {
          className: p.stepperContainer,
          children: (0, r.jsx)(a.FiK, {
            value: j,
            onChange: e => {
              v(e), x(h(f({}, b), {
                triggerMetadata: h(f({}, b.triggerMetadata), {
                  mentionTotalLimit: e
                })
              }))
            },
            minValue: g.Vg,
            maxValue: g.Lg,
            className: p.stepper
          })
        })]
      }), _ ? (0, r.jsxs)("div", {
        className: p.mentionLimitContainer,
        children: [(0, r.jsx)("div", {
          className: p.mentionLimitIconContainer,
          children: (0, r.jsx)(a.S4f, {
            size: "md",
            color: "currentColor",
            className: p.mentionLimitIcon
          })
        }), (0, r.jsxs)("div", {
          className: p.mentionLimitTextContainer,
          children: [(0, r.jsx)(a.Heading, {
            variant: "heading-sm/semibold",
            children: m.intl.string(m.t.XnuC9g)
          }), (0, r.jsx)(a.Text, {
            color: "interactive-normal",
            variant: "text-xs/medium",
            className: p.descriptionHint,
            children: m.intl.string(m.t.EDBe5m)
          })]
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(l.$q, {
            value: null == (n = b.triggerMetadata) ? true : n.mentionRaidProtectionEnabled,
            onChange: (e, t) => {
              x(h(f({}, b), {
                triggerMetadata: h(f({}, b.triggerMetadata), {
                  mentionRaidProtectionEnabled: t
                })
              }))
            }
          })
        })]
      }) : null]
    }), (0, r.jsx)(u.Z, {
      type: u.Z.Type.ARROW_DOWN
    }), (0, r.jsx)(d.Z, {
      step: 2,
      header: m.intl.string(m.t["18TOiQ"]),
      children: (0, r.jsx)(o.Z, {
        rule: b,
        onChangeRule: x
      })
    }), (0, r.jsx)(u.Z, {
      type: u.Z.Type.CROSS
    }), (0, r.jsx)(d.Z, {
      step: 3,
      header: m.intl.string(m.t.eq3gjh),
      children: (0, r.jsx)(c.Z, {
        rule: b,
        onChangeRule: x
      })
    })]
  })
}