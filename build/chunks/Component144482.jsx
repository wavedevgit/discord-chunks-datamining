/** Chunk was on 18687 **/
/** chunk id: 144482, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk319060 = require("./319060.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398866 = require("./398866.jsx"),
  Chunk709066 = require("./709066.jsx"),
  Chunk681827 = require("./681827.jsx"),
  Chunk203736 = require("./203736.js"),
  Chunk240248 = require("./240248.js"),
  Chunk969508 = require("./969508.js"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk505712 = require("./505712.js");
let _ = (0, Chunk240248.xI)(Chunk319060.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
  y = (0, Chunk240248.xI)(Chunk319060.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
  E = (0, Chunk240248.xI)(Chunk319060.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
  h = (0, Chunk240248.xI)(Chunk319060.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function v(e) {
  var t, n, i;
  let {
    title: p,
    onClose: v
  } = e, {
    applicationIconURL: f,
    applicationName: b,
    queryParams: g,
    iframeUrl: C
  } = (0, I.aV)(e), {
    width: T,
    height: N
  } = (0, d.A)(), M = a.useMemo(() => {
    let e = Math.min((N - h - 2 * E) * 16 / 9, y);
    return Math.max(_, Math.min(T - 2 * E, e))
  }, [T, N]);
  return (0, l.jsx)(r.EOs, (n = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({}, e), i = i = {
    size: r.rIJ.DYNAMIC,
    className: O.zr,
    parentComponent: "InteractionIframeModal",
    "data-migration-pending": true,
    children: (0, l.jsxs)("div", {
      style: {
        width: M
      },
      children: [(0, l.jsxs)(r.rQ0, {
        separator: false,
        className: O.Hc,
        "data-migration-pending": true,
        children: [(0, l.jsx)(r.euF, {
          src: f,
          size: r._3J.SIZE_32,
          "aria-label": b,
          className: O.In
        }), (0, l.jsxs)("div", {
          className: O.Wh,
          children: [(0, l.jsxs)("div", {
            children: [(0, l.jsx)(r.Heading, {
              variant: "heading-sm/bold",
              children: b
            }), (0, l.jsx)(r.Text, {
              variant: "text-xs/medium",
              color: "interactive-text-default",
              children: p
            })]
          }), (0, l.jsx)(u.A, {
            type: m.nu.BOT,
            className: O.AO,
            verified: null == (t = e.application.bot) ? true : t.verified
          })]
        }), (0, l.jsx)(o.$n, {
          onClick: v,
          innerClassName: O.b,
          className: O.cG,
          look: o.$n.Looks.BLANK,
          size: o.$n.Sizes.NONE,
          "aria-label": A.intl.string(A.t.WAI6xu),
          "data-migration-pending": true,
          children: (0, l.jsx)(r.PGe, {
            size: "md",
            color: "currentColor",
            className: O.ut
          })
        })]
      }), (0, l.jsx)(s.A, {
        aspectRatio: 16 / 9,
        children: (0, l.jsx)(c.o, {
          url: C,
          shouldRefocus: true,
          className: O.pU,
          queryParams: g
        })
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
  }), n))
}