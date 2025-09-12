/** Chunk was on 43866 **/
/** chunk id: 423639, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk74450 = require("./74450.js");

function p(e) {
  var t, r, {
      createReminder: i
    } = e,
    p = function(e, t) {
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
  let [b, f] = o.useState(() => c()()), [O, d] = o.useState(() => c()()), y = o.useCallback(() => {
    i(b.toDate())
  }, [i, b]), j = e => {
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
    header: s.intl.string(s.t.VKsXpa),
    confirmText: s.intl.string(s.t.R3BPHx),
    cancelText: s.intl.string(s.t["ETE/oK"]),
    confirmButtonColor: l.zx.Colors.BRAND,
    onConfirm: y
  }, p), r = r = {
    children: (0, n.jsxs)("div", {
      className: a.doubleInput,
      children: [(0, n.jsx)(u.xJW, {
        title: s.intl.string(s.t.pSZKvL),
        required: true,
        children: (0, n.jsx)(u.Wrb, {
          value: b,
          onSelect: j,
          minDate: O
        })
      }), (0, n.jsx)(u.xJW, {
        title: s.intl.string(s.t.GOmEb2),
        required: true,
        children: (0, n.jsx)(u.MGJ, {
          value: b,
          onChange: j
        })
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