/** Chunk was on 60118 **/
/** chunk id: 236599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk940319 = require("./940319.js");

function p(e) {
  let {
    className: t
  } = e, i = ["en-US", "en-GB"].includes((0, o.bG)([c.default], () => c.default.locale)) ? d.intl.string(d.t.OYlggR) : d.intl.string(d.t.Y55Tua), {
    trackUserProfileEditAction: p
  } = (0, u.NJ)(), g = l.useCallback(() => {
    p({
      action: "PRESS_ADD_WIDGET"
    }), (0, s.mMO)(async () => {
      let {
        default: e
      } = await n.e("87591").then(n.bind(n, 333114));
      return t => {
        var n, l;
        return (0, r.jsx)(e, (n = function(e) {
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
        }({}, t), l = l = {
          trackUserProfileEditAction: p
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    }, {
      stackingBehavior: "stack"
    })
  }, [p]);
  return (0, r.jsxs)("div", {
    className: a()(f.w, t),
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      color: "text-subtle",
      children: i
    }), (0, r.jsx)(s.Button, {
      icon: s.j96,
      text: d.intl.string(d.t["lBG2s/"]),
      size: "sm",
      variant: "secondary",
      onClick: g
    })]
  })
}