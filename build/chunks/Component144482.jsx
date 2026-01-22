/** Chunk was on 18687 **/
/** chunk id: 144482, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk319060 = require("./319060.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398866 = require("./398866.jsx"),
  Chunk709066 = require("./709066.jsx"),
  Chunk681827 = require("./681827.jsx"),
  Chunk981355 = require("./981355.js"),
  Chunk240248 = require("./240248.js"),
  Chunk969508 = require("./969508.js"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk505712 = require("./505712.js");
let m = (0, Chunk240248.xI)(Chunk319060.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
  A = (0, Chunk240248.xI)(Chunk319060.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
  j = (0, Chunk240248.xI)(Chunk319060.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
  v = (0, Chunk240248.xI)(Chunk319060.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function g(e) {
  var t, r, a;
  let {
    title: f,
    onClose: g
  } = e, {
    applicationIconURL: w,
    applicationName: y,
    queryParams: _,
    iframeUrl: I
  } = (0, b.aV)(e), {
    width: x,
    height: N
  } = (0, u.A)(), M = i.useMemo(() => {
    let e = Math.min((N - v - 2 * j) * 16 / 9, A);
    return Math.max(m, Math.min(x - 2 * j, e))
  }, [x, N]);
  return (0, n.jsx)(o.EOs, (r = function(e) {
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
  }({}, e), a = a = {
    size: o.rIJ.DYNAMIC,
    className: h.zr,
    parentComponent: "InteractionIframeModal",
    "data-migration-pending": true,
    children: (0, n.jsxs)("div", {
      style: {
        width: M
      },
      children: [(0, n.jsxs)(o.rQ0, {
        separator: false,
        className: h.Hc,
        "data-migration-pending": true,
        children: [(0, n.jsx)(o.euF, {
          src: w,
          size: o._3J.SIZE_32,
          "aria-label": y,
          className: h.In
        }), (0, n.jsxs)("div", {
          className: h.Wh,
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(o.Heading, {
              variant: "heading-sm/bold",
              children: y
            }), (0, n.jsx)(o.Text, {
              variant: "text-xs/medium",
              color: "interactive-text-default",
              children: f
            })]
          }), (0, n.jsx)(l.A, {
            type: p.nu.BOT,
            className: h.AO,
            verified: null == (t = e.application.bot) ? true : t.verified
          })]
        }), (0, n.jsx)(c.$n, {
          onClick: g,
          innerClassName: h.b,
          className: h.cG,
          look: c.$n.Looks.BLANK,
          size: c.$n.Sizes.NONE,
          "aria-label": O.intl.string(O.t.WAI6xu),
          "data-migration-pending": true,
          children: (0, n.jsx)(o.PGe, {
            size: "md",
            color: "currentColor",
            className: h.ut
          })
        })]
      }), (0, n.jsx)(d.A, {
        aspectRatio: 16 / 9,
        children: (0, n.jsx)(s.o, {
          url: I,
          shouldRefocus: true,
          className: h.pU,
          queryParams: _
        })
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(a)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
  }), r))
}