/** Chunk was on web.js **/
/** chunk id: 706872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk970815 = require("./970815.jsx"),
  Chunk605532 = require("./605532.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = {
  title: "Balance Widget Pill",
  stories: [{
    name: "Balance Widget Pill",
    id: "balance-widget-pill",
    component: e => {
      var {
        loading: t
      } = e, n = f(e, ["loading"]);
      let [l, u] = (0, i.useState)(n.balance);
      return (0, i.useEffect)(() => {
        null == l && null != n.balance && u(n.balance)
      }, [n.balance, l]), (0, r.jsxs)("div", {
        className: s.verticalContainer,
        children: [(0, r.jsx)(o.A4, d(c({}, n), {
          balance: t ? null : l
        })), (0, r.jsx)(a.zxk, {
          onClick: () => u(n.balance),
          text: "Update Balance"
        })]
      })
    },
    controls: {
      loading: {
        label: "Loading",
        type: "boolean",
        defaultValue: false
      },
      balance: {
        label: "Balance",
        type: "number",
        defaultValue: 0
      },
      balanceWidgetMode: {
        label: "Balance Widget Mode",
        type: "select",
        options: [{
          label: "Default",
          value: Chunk970815.b6.DEFAULT
        }, {
          label: "Selected",
          value: Chunk970815.b6.SELECTED
        }],
        defaultValue: Chunk970815.b6.DEFAULT
      },
      showNotificationBadge: {
        label: "Show Notification Badge",
        type: "boolean",
        defaultValue: false
      },
      disabled: {
        label: "Disabled",
        type: "boolean",
        defaultValue: false
      }
    }
  }]
}