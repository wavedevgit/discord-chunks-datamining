/** Chunk was on web.js **/
/** chunk id: 878678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ConfirmModal: () => _,
  s: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk709692 = require("./709692.js"),
  Chunk476100 = require("./476100.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e) {
  let t, n, {
      header: a,
      children: d,
      confirmText: f,
      cancelText: _,
      className: p,
      onConfirm: h,
      onCancel: m,
      onClose: g,
      onCloseCallback: E,
      bodyClassName: b,
      transitionState: y,
      loading: O = false,
      confirmButtonColor: v = s.Button.Colors.RED,
      focusCancel: I = false,
      impression: T
    } = e,
    S = i.useRef(null);
  return i.useEffect(() => {
    I || setTimeout(() => {
      var e;
      return null == (e = S.current) ? true : e.focus()
    }, 0)
  }, [I]), i.useLayoutEffect(() => () => null == E ? true : E()), null != _ && (t = (0, r.jsx)(s.Button, {
    "data-migration-pending": true,
    type: "button",
    look: s.Button.Looks.FILLED,
    color: s.Button.Colors.PRIMARY,
    className: u.cancelButton,
    size: s.Button.Sizes.MEDIUM,
    disabled: O,
    onClick: () => {
      null == m || m(), g()
    },
    autoFocus: I,
    children: _
  })), null != f && (n = (0, r.jsx)(s.Button, {
    "data-migration-pending": true,
    buttonRef: S,
    type: "submit",
    size: s.Button.Sizes.MEDIUM,
    color: v,
    submitting: O,
    onClick: async () => {
      try {
        await (null == h ? true : h()), g()
      } catch (e) {
        throw e
      }
    },
    autoFocus: !I,
    children: f
  })), (0, r.jsxs)(c.Y0, {
    className: p,
    transitionState: y,
    impression: T,
    parentComponent: "ConfirmModal",
    children: [null != a ? (0, r.jsx)(c.xB, {
      "data-migration-pending": true,
      separator: false,
      children: (0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: a
      })
    }) : null, (0, r.jsx)(c.hz, {
      "data-migration-pending": true,
      className: o()(u.content, b),
      children: d
    }), (0, r.jsxs)(c.mz, {
      "data-migration-pending": true,
      children: [n, t]
    })]
  })
}

function p(e) {
  return (0, r.jsx)(c.u_, {
    onCloseRequest: e.dismissable ? e.onCancel : null,
    renderModal: t => (0, r.jsx)(_, f({}, t, e))
  })
}