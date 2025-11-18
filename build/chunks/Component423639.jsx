/** Chunk was on 43866 **/
/** chunk id: 423639, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk992050 = require("./992050.js");

function b(e) {
  var t, r, {
      createReminder: i
    } = e,
    b = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["createReminder"]);
  let [p, f] = o.useState(() => c()()), [O, y] = o.useState(() => c()()), d = o.useCallback(() => {
    i(p.toDate())
  }, [i, p]), j = e => {
    e.isValid() && f(e)
  };
  return (0, n.jsx)(u.ConfirmModal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    header: a.intl.string(a.t.VKsXpY),
    confirmText: a.intl.string(a.t["R3BPH+"]),
    cancelText: a.intl.string(a.t["ETE/oC"]),
    confirmButtonColor: l.zx.Colors.BRAND,
    onConfirm: d
  }, b), r = r = {
    children: (0, n.jsxs)("div", {
      className: s.doubleInput,
      children: [(0, n.jsx)(u.Wrb, {
        label: a.intl.string(a.t.pSZKvM),
        required: true,
        value: p,
        onSelect: j,
        minDate: O
      }), (0, n.jsx)(u.MGJ, {
        label: a.intl.string(a.t.GOmEb8),
        required: true,
        value: p,
        onChange: j
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}