/** Chunk was on 21738 **/
/** chunk id: 871432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk291445 = require("./291445.js"),
  Chunk726079 = require("./726079.jsx"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    className: t
  } = e, n = (0, l.bG)([c.A], () => c.A.getPendingCount() > 0), u = (0, a.rdh)(a.LU0.modules.chat.INPUT_ICON_SIZE);
  return i.useEffect(() => {
    s.h.dispatch({
      type: "FRIENDS_LIST_POPOUT_MOUNTED"
    })
  }, []), (0, r.jsx)(d.l, {
    popoutPosition: "bottom",
    popoutAlign: "left",
    children: (e, i, l, s) => {
      var c, d;
      return (0, r.jsx)(o.In, (c = function(e) {
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
      }({}, l), d = d = {
        ref: s,
        className: t,
        onClick: e,
        icon: a.$yI,
        iconSize: u,
        "aria-label": p.intl.string(p.t.TdEu5X),
        tooltip: i ? null : p.intl.string(p.t.TdEu5X),
        selected: i,
        showBadge: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(d)).forEach(function(e) {
        Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(d, e))
      }), c))
    }
  })
}

function f(e) {
  let {
    className: t
  } = e, {
    hasFriendList: n
  } = (0, u.K)("friends-button");
  return n ? (0, r.jsx)(h, {
    className: t
  }) : null
}