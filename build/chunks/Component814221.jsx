/** Chunk was on 38663 **/
/** chunk id: 814221, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk352705 = require("./352705.js");

function c() {
  let {
    trackUserProfileEditAction: e
  } = (0, a.NJ)(), t = l.useCallback(() => {
    e({
      action: "PRESS_ADD_WIDGET"
    }), (0, i.mMO)(async () => {
      let {
        default: t
      } = await n.e("87591").then(n.bind(n, 333114));
      return n => {
        var l, i;
        return (0, r.jsx)(t, (l = function(e) {
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
        }({}, n), i = i = {
          trackUserProfileEditAction: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    }, {
      stackingBehavior: "stack"
    })
  }, [e]);
  return (0, r.jsxs)(i.DUT, {
    className: o.E,
    onClick: t,
    children: [(0, r.jsx)(i.j96, {
      size: "sm",
      color: "currentColor"
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: s.intl.string(s.t["lBG2s/"])
    })]
  })
}