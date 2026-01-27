/** Chunk was on 77870 **/
/** chunk id: 310420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk397927 = require("./397927.js"),
  Chunk145331 = require("./145331.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk508134 = require("./508134.js");

function d(e) {
  let {
    rating: t,
    onClick: n
  } = e, a = t === o.P0.BAD ? i.ThumbsDownIcon : i.ThumbsUpIcon, c = l.useCallback(() => {
    n(t)
  }, [n, t]);
  return (0, r.jsx)(s.DUT, {
    onClick: c,
    className: u.zc,
    children: (0, r.jsx)(a, {
      size: "md",
      color: "currentColor",
      className: u.Kk
    })
  })
}
let p = function(e) {
  let {
    searchContext: t,
    dismissFeedbackEntrypoint: i
  } = e;
  l.useEffect(() => {
    (0, a.J$)({
      searchContext: t
    })
  }, [t]);
  let p = l.useCallback(e => {
    i(), (0, s.mMO)(async () => {
      let {
        default: l
      } = await n.e("66536").then(n.bind(n, 306088));
      return n => {
        var i, s;
        return (0, r.jsx)(l, (i = function(e) {
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
        }({}, n), s = s = {
          searchContext: t,
          rating: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i))
      }
    })
  }, [i, t]);
  return (0, r.jsxs)("div", {
    className: u.kL,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-strong",
      children: c.intl.string(c.t["I+4OJC"])
    }), (0, r.jsxs)("div", {
      className: u.Pt,
      children: [(0, r.jsx)(d, {
        rating: o.P0.GOOD,
        onClick: p
      }), (0, r.jsx)(d, {
        rating: o.P0.BAD,
        onClick: p
      })]
    })]
  })
}