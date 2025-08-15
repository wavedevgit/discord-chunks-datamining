/** Chunk was on 60301 **/
/** chunk id: 677012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk477690 = require("./477690.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk208156 = require("./208156.jsx"),
  Chunk385499 = require("./385499.jsx"),
  Chunk264165 = require("./264165.jsx"),
  Chunk885006 = require("./885006.js"),
  Chunk624138 = require("./624138.js"),
  Chunk293979 = require("./293979.js"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk409574 = require("./409574.js");
let h = (0, Chunk624138.Mg)(Chunk477690.Z.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
  g = (0, Chunk624138.Mg)(Chunk477690.Z.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
  v = (0, Chunk624138.Mg)(Chunk477690.Z.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
  j = (0, Chunk624138.Mg)(Chunk477690.Z.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function w(e) {
  var t, n, o;
  let {
    title: f,
    onClose: w
  } = e, {
    applicationIconURL: _,
    applicationName: y,
    queryParams: x,
    iframeUrl: I
  } = (0, p.b8)(e), {
    width: M,
    height: N
  } = (0, d.Z)(), A = a.useMemo(() => {
    let e = Math.min((N - j - 2 * v) * 16 / 9, g);
    return Math.max(h, Math.min(M - 2 * v, e))
  }, [M, N]);
  return (0, r.jsx)(c.Y0X, (n = function(e) {
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
  }({}, e), o = o = {
    size: c.CgR.DYNAMIC,
    className: O.root,
    parentComponent: "InteractionIframeModal",
    "data-migration-pending": true,
    children: (0, r.jsxs)("div", {
      style: {
        width: A
      },
      children: [(0, r.jsxs)(c.xBx, {
        separator: false,
        className: O.modalHeader,
        "data-migration-pending": true,
        children: [(0, r.jsx)(c.qEK, {
          src: _,
          size: c.EFr.SIZE_32,
          "aria-label": y,
          className: O.applicationIcon
        }), (0, r.jsxs)("div", {
          className: O.flexRow,
          children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)(c.X6q, {
              variant: "heading-sm/bold",
              children: y
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "interactive-normal",
              children: f
            })]
          }), (0, r.jsx)(s.Z, {
            type: b.Hb.BOT,
            className: O.botTag,
            verified: null == (t = e.application.bot) ? true : t.verified
          })]
        }), (0, r.jsx)(i.zx, {
          onClick: w,
          innerClassName: O.closeButton,
          className: O.closeButtonContainer,
          look: i.zx.Looks.BLANK,
          size: i.zx.Sizes.NONE,
          "aria-label": m.intl.string(m.t.WAI6xs),
          "data-migration-pending": true,
          children: (0, r.jsx)(c.Dio, {
            size: "md",
            color: "currentColor",
            className: O.closeIcon
          })
        })]
      }), (0, r.jsx)(u.Z, {
        aspectRatio: 16 / 9,
        children: (0, r.jsx)(l.J, {
          url: I,
          shouldRefocus: true,
          className: O.iframe,
          queryParams: x
        })
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
  }), n))
}