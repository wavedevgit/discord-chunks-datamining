/** Chunk was on 17869 **/
/** chunk id: 926262, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk544028 = require("./544028.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk887008 = require("./887008.js"),
  Chunk206314 = require("./206314.js");

function m(e) {
  let {
    onClose: t,
    onConfirm: m,
    onCancel: g,
    channel: A,
    analyticsType: b,
    popoutText: _,
    animation: y
  } = e;
  r.useEffect(() => {
    u.default.track(d.HAw.OPEN_POPOUT, function(e) {
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
    }({
      type: b
    }, (0, o.dI)(A)))
  }, [b, A]);
  let E = r.useCallback(() => {
      null == m || m(), t()
    }, [m, t]),
    v = r.useCallback(() => {
      null == g || g(), t()
    }, [g, t]),
    O = r.useRef(null);
  return r.useEffect(() => {
    let e, t = c.A.theme,
      l = false;
    return null != y && (async () => {
      let [{
        default: r
      }, i] = await Promise.all([Promise.resolve().then(n.t.bind(n, 883885, 23)), (0, a.Mw)(t) ? y.dark() : y.light()]);
      l || null == O.current || (e = r.loadAnimation({
        container: O.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: i
      }))
    })(), () => {
      l = true, null != e && (e.destroy(), e = true)
    }
  }, [y]), (0, l.jsx)(s.lGe, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, l.jsxs)("form", {
      className: p.$,
      onSubmit: E,
      children: [(0, l.jsxs)("div", {
        className: p.rf,
        children: [null != y && (0, l.jsx)("div", {
          className: p.lY,
          ref: O
        }), (0, l.jsxs)("div", {
          className: p.Qs,
          children: [(0, l.jsx)("div", {
            className: p.wx,
            children: h.intl.string(h.t.mY3Y38)
          }), (0, l.jsx)(s.Text, {
            id: "content-warning-popout-label",
            className: f.PT,
            variant: "text-sm/normal",
            children: _.body
          }), (0, l.jsxs)("div", {
            className: p._o,
            children: [(0, l.jsxs)("div", {
              className: p.UD,
              children: [(0, l.jsx)("div", {
                className: p.x6,
                children: (0, l.jsx)(s.Button, {
                  variant: "secondary",
                  onClick: v,
                  text: h.intl.string(h.t.fsBWmS)
                })
              }), (0, l.jsx)(s.Text, {
                variant: "text-xs/normal",
                className: p.uK,
                children: h.intl.format(h.t["0LzVPZ"], {})
              })]
            }), (0, l.jsxs)("div", {
              className: p.UD,
              children: [(0, l.jsx)("div", {
                className: p.x6,
                children: (0, l.jsx)(s.Button, {
                  variant: "primary",
                  onClick: E,
                  text: h.intl.string(h.t.KJnHq3),
                  autoFocus: true
                })
              }), (0, l.jsx)(s.Text, {
                variant: "text-xs/normal",
                className: p.uK,
                children: h.intl.format(h.t.khjqdH, {})
              })]
            })]
          })]
        })]
      }), null != _.footer && "" !== _.footer ? (0, l.jsxs)("div", {
        className: p.qr,
        children: [(0, l.jsx)(s.mir, {
          size: "xs",
          color: i.A.unsafe_rawColors.PRIMARY_400.css,
          className: p.Kk
        }), (0, l.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: _.footer
        })]
      }) : null]
    })
  })
}