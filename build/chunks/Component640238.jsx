/** Chunk was on web.js **/
/** chunk id: 640238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => _,
  VoidConfirmModal: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk862482 = require("./862482.jsx"),
  Chunk725570 = require("./725570.js"),
  Chunk397927 = require("./397927.js"),
  Chunk818284 = require("./818284.js");

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
      header: a,
      children: d,
      confirmText: f,
      cancelText: p,
      className: _,
      onConfirm: h,
      onCancel: m,
      onClose: g,
      onCloseCallback: E,
      bodyClassName: y,
      transitionState: b,
      loading: O = false,
      confirmButtonColor: v = o.$n.Colors.RED,
      focusCancel: A = false,
      impression: I
    } = e,
    S = i.useRef(null);
  return i.useEffect(() => {
    A || setTimeout(() => {
      var e;
      return null == (e = S.current) ? true : e.focus()
    }, 0)
  }, [A]), i.useLayoutEffect(() => () => null == E ? true : E()), null != p && (t = (0, r.jsx)(o.$n, {
    "data-migration-pending": true,
    type: "button",
    look: o.$n.Looks.FILLED,
    color: o.$n.Colors.PRIMARY,
    className: u.x,
    size: o.$n.Sizes.MEDIUM,
    disabled: O,
    onClick: () => {
      null == m || m(), g()
    },
    autoFocus: A,
    children: p
  })), null != f && (n = (0, r.jsx)(o.$n, {
    "data-migration-pending": true,
    buttonRef: S,
    type: "submit",
    size: o.$n.Sizes.MEDIUM,
    color: v,
    submitting: O,
    onClick: async () => {
      try {
        await (null == h ? true : h()), g()
      } catch (e) {
        throw e
      }
    },
    autoFocus: !A,
    children: f
  })), (0, r.jsxs)(l.EO, {
    "data-migration-pending": true,
    className: _,
    transitionState: b,
    impression: I,
    parentComponent: "ConfirmModal",
    children: [null != a ? (0, r.jsx)(l.rQ, {
      "data-migration-pending": true,
      separator: false,
      children: (0, r.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        children: a
      })
    }) : null, (0, r.jsx)(l.$m, {
      "data-migration-pending": true,
      className: s()(u.Q, y),
      children: d
    }), (0, r.jsxs)(l.jl, {
      "data-migration-pending": true,
      children: [n, t]
    })]
  })
}

function _(e) {
  return (0, r.jsx)(l.aF, {
    onCloseRequest: e.dismissable ? e.onCancel : null,
    renderModal: t => (0, r.jsx)(p, f({}, t, e))
  })
}