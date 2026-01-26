/** Chunk was on 39048 **/
/** chunk id: 122247, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928108 = require("./928108.js"),
  Chunk99787 = require("./99787.jsx"),
  Chunk255354 = require("./255354.jsx"),
  Chunk957300 = require("./957300.jsx"),
  Chunk378427 = require("./378427.jsx"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk406947 = require("./406947.js");

function p(e) {
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

function f(e, t) {
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

function h(e) {
  var t, n;
  let {
    rule: h,
    onChangeRule: b
  } = e, [x, j] = i.useState(null == (t = h.triggerMetadata) ? true : t.mentionTotalLimit), _ = (0, s._)(h.guildId, false);
  return (0, r.jsxs)("div", {
    className: m.sp,
    children: [(0, r.jsxs)(c.A, {
      step: 1,
      header: g.intl.string(g.t.IGfuTa),
      children: [(0, r.jsxs)("div", {
        className: m.$I,
        children: [(0, r.jsx)("div", {
          className: m.U$,
          children: (0, r.jsx)(l.XxR, {
            size: "md",
            color: "currentColor",
            className: m.B_
          })
        }), (0, r.jsxs)("div", {
          className: m.ej,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-sm/semibold",
            children: g.intl.string(g.t["s/26oQ"])
          }), (0, r.jsx)(l.Text, {
            color: "interactive-text-default",
            variant: "text-xs/medium",
            className: m.mu,
            children: g.intl.string(g.t["8uW4/N"])
          })]
        }), (0, r.jsx)("div", {
          className: m.Ld,
          children: (0, r.jsx)(l.lw3, {
            value: x,
            onChange: e => {
              j(e), b(f(p({}, h), {
                triggerMetadata: f(p({}, h.triggerMetadata), {
                  mentionTotalLimit: e
                })
              }))
            },
            minValue: u.Us,
            maxValue: u.M3,
            className: m.Im
          })
        })]
      }), _ ? (0, r.jsxs)("div", {
        className: m.$I,
        children: [(0, r.jsx)("div", {
          className: m.U$,
          children: (0, r.jsx)(l.ERh, {
            size: "md",
            color: "currentColor",
            className: m.B_
          })
        }), (0, r.jsxs)("div", {
          className: m.ej,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-sm/semibold",
            children: g.intl.string(g.t.XnuC9g)
          }), (0, r.jsx)(l.Text, {
            color: "interactive-text-default",
            variant: "text-xs/medium",
            className: m.mu,
            children: g.intl.string(g.t.EDBe5m)
          })]
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(l.DUT, {
            onClick: _ ? () => {
              var e, t;
              return t = !(null == (e = h.triggerMetadata) ? true : e.mentionRaidProtectionEnabled), void b(f(p({}, h), {
                triggerMetadata: f(p({}, h.triggerMetadata), {
                  mentionRaidProtectionEnabled: t
                })
              }))
            } : true,
            children: (0, r.jsx)(l.P7L, {
              checked: null == (n = h.triggerMetadata) ? true : n.mentionRaidProtectionEnabled,
              disabled: !_
            })
          })
        })]
      }) : null]
    }), (0, r.jsx)(d.A, {
      type: d.A.Type.ARROW_DOWN
    }), (0, r.jsx)(c.A, {
      step: 2,
      header: g.intl.string(g.t["18TOiQ"]),
      children: (0, r.jsx)(a.A, {
        rule: h,
        onChangeRule: b
      })
    }), (0, r.jsx)(d.A, {
      type: d.A.Type.CROSS
    }), (0, r.jsx)(c.A, {
      step: 3,
      header: g.intl.string(g.t.eq3gjh),
      children: (0, r.jsx)(o.A, {
        rule: h,
        onChangeRule: b
      })
    })]
  })
}