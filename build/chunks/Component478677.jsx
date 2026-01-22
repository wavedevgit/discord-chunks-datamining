/** Chunk was on 21738 **/
/** chunk id: 478677, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk87664 = require("./87664.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk198525 = require("./198525.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk816751 = require("./816751.js"),
  Chunk140869 = require("./140869.js");
let m = function(e) {
  let {
    quest: t
  } = e, [n, l] = i.useState(false), m = i.useRef(null), b = (0, s.bG)([u.default], () => u.default.getCurrentUser()), _ = d.Ay.useName(b), E = (0, c.A)(null == b ? true : b.id), O = i.useCallback(e => {
    var n, i;
    return (0, r.jsx)(p.A, (n = function(e) {
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
    }({
      name: _,
      quest: t,
      memberListItemRef: m,
      applicationStream: E
    }, e), i = i = {
      closePopout: () => {
        l(false)
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n))
  }, [t, E, _]);
  return (0, r.jsx)("div", {
    className: A.x3,
    children: (0, r.jsxs)("div", {
      className: A.B0,
      children: [(0, r.jsx)(o.Heading, {
        className: g.R_,
        variant: "heading-md/semibold",
        children: h.intl.string(h.t.jY7Zxg)
      }), (0, r.jsx)("div", {
        className: g.$Q,
        children: h.intl.string(h.t.q3hbne)
      }), (0, r.jsx)("div", {
        className: g.k0,
        children: (0, r.jsx)(o.YNO, {
          targetElementRef: m,
          renderPopout: O,
          position: "bottom",
          shouldShow: n,
          onRequestClose: () => l(false),
          nudgeAlignIntoViewport: false,
          useRawTargetDimensions: true,
          animation: o.YNO.Animation.NONE,
          spacing: false,
          fixed: true,
          scrollBehavior: "close",
          children: () => (0, r.jsx)("div", {
            ref: m,
            className: a()(g.Tn, {
              [g.wH]: n
            }),
            children: (0, r.jsx)(o.DUT, {
              onClick: () => l(!n),
              tabIndex: 0,
              children: (0, r.jsxs)("div", {
                className: g.lm,
                children: [(0, r.jsx)(o.euF, {
                  size: o._3J.SIZE_32,
                  src: null == b ? true : b.getAvatarURL(true, 32),
                  status: f.clD.ONLINE,
                  "aria-label": null == b ? true : b.username
                }), (0, r.jsxs)("div", {
                  className: g.Fj,
                  children: [(0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: _
                  }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: h.intl.string(h.t.b9w3bO)
                  })]
                })]
              })
            })
          })
        })
      })]
    })
  })
}