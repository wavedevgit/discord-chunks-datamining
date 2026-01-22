/** Chunk was on 47841 **/
/** chunk id: 122247, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
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

function b(e) {
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

function m(e, t) {
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
    onChangeRule: x
  } = e, [h, j] = i.useState(null == (t = p.triggerMetadata) ? true : t.mentionTotalLimit), O = (0, s._)(p.guildId, false);
  return (0, r.jsxs)("div", {
    className: g.sp,
    children: [(0, r.jsxs)(o.A, {
      step: 1,
      header: f.intl.string(f.t.IGfuTa),
      children: [(0, r.jsxs)("div", {
        className: g.$I,
        children: [(0, r.jsx)("div", {
          className: g.U$,
          children: (0, r.jsx)(l.XxR, {
            size: "md",
            color: "currentColor",
            className: g.B_
          })
        }), (0, r.jsxs)("div", {
          className: g.ej,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-sm/semibold",
            children: f.intl.string(f.t["s/26oQ"])
          }), (0, r.jsx)(l.Text, {
            color: "interactive-text-default",
            variant: "text-xs/medium",
            className: g.mu,
            children: f.intl.string(f.t["8uW4/N"])
          })]
        }), (0, r.jsx)("div", {
          className: g.Ld,
          children: (0, r.jsx)(l.lw3, {
            value: h,
            onChange: e => {
              j(e), x(m(b({}, p), {
                triggerMetadata: m(b({}, p.triggerMetadata), {
                  mentionTotalLimit: e
                })
              }))
            },
            minValue: u.Us,
            maxValue: u.M3,
            className: g.Im
          })
        })]
      }), O ? (0, r.jsxs)("div", {
        className: g.$I,
        children: [(0, r.jsx)("div", {
          className: g.U$,
          children: (0, r.jsx)(l.ERh, {
            size: "md",
            color: "currentColor",
            className: g.B_
          })
        }), (0, r.jsxs)("div", {
          className: g.ej,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-sm/semibold",
            children: f.intl.string(f.t.XnuC9g)
          }), (0, r.jsx)(l.Text, {
            color: "interactive-text-default",
            variant: "text-xs/medium",
            className: g.mu,
            children: f.intl.string(f.t.EDBe5m)
          })]
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(l.DUT, {
            onClick: O ? () => {
              var e, t;
              return t = !(null == (e = p.triggerMetadata) ? true : e.mentionRaidProtectionEnabled), void x(m(b({}, p), {
                triggerMetadata: m(b({}, p.triggerMetadata), {
                  mentionRaidProtectionEnabled: t
                })
              }))
            } : true,
            children: (0, r.jsx)(l.P7L, {
              checked: null == (n = p.triggerMetadata) ? true : n.mentionRaidProtectionEnabled,
              disabled: !O
            })
          })
        })]
      }) : null]
    }), (0, r.jsx)(d.A, {
      type: d.A.Type.ARROW_DOWN
    }), (0, r.jsx)(o.A, {
      step: 2,
      header: f.intl.string(f.t["18TOiQ"]),
      children: (0, r.jsx)(a.A, {
        rule: p,
        onChangeRule: x
      })
    }), (0, r.jsx)(d.A, {
      type: d.A.Type.CROSS
    }), (0, r.jsx)(o.A, {
      step: 3,
      header: f.intl.string(f.t.eq3gjh),
      children: (0, r.jsx)(c.A, {
        rule: p,
        onChangeRule: x
      })
    })]
  })
}