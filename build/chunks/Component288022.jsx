/** Chunk was on web.js **/
/** chunk id: 288022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => _,
  VoidConfirmModal: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk693789 = require("./693789.jsx"),
  Chunk709692 = require("./709692.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933434 = require("./933434.js");

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

function p(e) {
  let t, n, {
      header: o,
      children: d,
      confirmText: f,
      cancelText: p,
      className: _,
      onConfirm: m,
      onCancel: h,
      onClose: g,
      onCloseCallback: E,
      bodyClassName: b,
      transitionState: y,
      loading: O = false,
      confirmButtonColor: v = s.zx.Colors.RED,
      focusCancel: S = false,
      impression: I
    } = e,
    T = i.useRef(null);
  return i.useEffect(() => {
    S || setTimeout(() => {
      var e;
      return null == (e = T.current) ? true : e.focus()
    }, 0)
  }, [S]), i.useLayoutEffect(() => () => null == E ? true : E()), null != p && (t = (0, r.jsx)(s.zx, {
    "data-migration-pending": true,
    type: "button",
    look: s.zx.Looks.FILLED,
    color: s.zx.Colors.PRIMARY,
    className: u.cancelButton,
    size: s.zx.Sizes.MEDIUM,
    disabled: O,
    onClick: () => {
      null == h || h(), g()
    },
    autoFocus: S,
    children: p
  })), null != f && (n = (0, r.jsx)(s.zx, {
    "data-migration-pending": true,
    buttonRef: T,
    type: "submit",
    size: s.zx.Sizes.MEDIUM,
    color: v,
    submitting: O,
    onClick: async () => {
      try {
        await (null == m ? true : m()), g()
      } catch (e) {
        throw e
      }
    },
    autoFocus: !S,
    children: f
  })), (0, r.jsxs)(l.Y0, {
    "data-migration-pending": true,
    className: _,
    transitionState: y,
    impression: I,
    parentComponent: "ConfirmModal",
    children: [null != o ? (0, r.jsx)(l.xB, {
      "data-migration-pending": true,
      separator: false,
      children: (0, r.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        children: o
      })
    }) : null, (0, r.jsx)(l.hz, {
      "data-migration-pending": true,
      className: a()(u.content, b),
      children: d
    }), (0, r.jsxs)(l.mz, {
      "data-migration-pending": true,
      children: [n, t]
    })]
  })
}

function _(e) {
  return (0, r.jsx)(l.u_, {
    onCloseRequest: e.dismissable ? e.onCancel : null,
    renderModal: t => (0, r.jsx)(p, f({}, t, e))
  })
}