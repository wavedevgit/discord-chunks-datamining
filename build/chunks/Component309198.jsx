/** Chunk was on web.js **/
/** chunk id: 309198, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk98207 = require("./98207.js"),
  Chunk557722 = require("./557722.js"),
  Chunk662758 = require("./662758.jsx"),
  Chunk615715 = require("./615715.jsx"),
  Chunk87707 = require("./87707.js"),
  Chunk652215 = require("./652215.js"),
  Chunk53516 = require("./53516.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk139674 = require("./139674.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let t, n, {
      currentUser: h,
      togglingSMS: g
    } = e,
    [b, y] = i.useState(false),
    O = i.useCallback(e => {
      e.preventDefault(), y(!b)
    }, [b]),
    A = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      (0, a.qfG)(t => (0, r.jsx)(c.default, m({
        reason: o.d.USER_SETTINGS_UPDATE
      }, t, e)), {
        modalKey: f.V
      })
    }, []),
    v = i.useCallback(() => {
      A()
    }, [A]),
    S = i.useCallback(() => {
      null == h.phone ? A({
        onAddedPhone: s.A.enableSMS
      }) : s.A.enableSMS()
    }, [h, A]),
    I = i.useCallback(() => {
      (0, a.qfG)(e => (0, r.jsx)(l.default, E(m({}, e), {
        handleSubmit: s.A.disableSMS,
        title: p.intl.string(p.t.KLWnit),
        children: p.intl.string(p.t["W0/Duf"])
      })))
    }, []),
    T = i.useCallback(e => null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(false)), []),
    C = null != h.phone,
    N = h.hasFlag(d.nhx.MFA_SMS);
  if (C || N) {
    let e = b ? h.phone : T(h.phone);
    n = (0, r.jsxs)(a.Text, {
      variant: "text-sm/normal",
      children: [p.intl.format(p.t.PXVoEO, {
        phoneNumber: e
      }), (0, r.jsx)(a.MzZ, {
        onClick: O,
        className: _.vN,
        children: b ? p.intl.string(p.t.FfltIN) : p.intl.string(p.t.llArAg)
      })]
    })
  }
  if (N) t = (0, r.jsx)(a.Button, {
    variant: "critical-secondary",
    size: "sm",
    text: p.intl.string(p.t.KLWnit),
    loading: g,
    onClick: I
  });
  else {
    let e = (0, u.B)(h);
    t = (0, r.jsxs)(a.ButtonGroup, {
      size: "sm",
      children: [(0, r.jsx)(a.Button, {
        variant: "primary",
        size: "sm",
        text: null != e ? e : p.intl.string(p.t.DZQe23),
        onClick: S,
        loading: g,
        disabled: null != e
      }), C ? (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: p.intl.string(p.t.Ulqq6K),
        onClick: v
      }) : null]
    })
  }
  return (0, r.jsxs)(a.D0$, {
    label: p.intl.string(p.t.uHAJ5v),
    description: p.intl.string(p.t.fspJ4H),
    children: [n, t]
  })
}