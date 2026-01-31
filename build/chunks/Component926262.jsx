/** Chunk was on 17534 **/
/** chunk id: 926262, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    onClose: t,
    onConfirm: f,
    onCancel: m,
    channel: b,
    analyticsType: A,
    popoutText: y,
    animation: O
  } = e;
  l.useEffect(() => {
    u.default.track(d.HAw.OPEN_POPOUT, function(e) {
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
      type: A
    }, (0, o.dI)(b)))
  }, [A, b]);
  let _ = l.useCallback(() => {
      null == f || f(), t()
    }, [f, t]),
    j = l.useCallback(() => {
      null == m || m(), t()
    }, [m, t]),
    x = l.useRef(null);
  return l.useEffect(() => {
    let e, t = c.A.theme,
      r = false;
    return null != O && (async () => {
      let [{
        default: l
      }, i] = await Promise.all([Promise.resolve().then(n.t.bind(n, 883885, 23)), (0, s.Mw)(t) ? O.dark() : O.light()]);
      r || null == x.current || (e = l.loadAnimation({
        container: x.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: i
      }))
    })(), () => {
      r = true, null != e && (e.destroy(), e = true)
    }
  }, [O]), (0, r.jsx)(a.lGe, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, r.jsxs)("form", {
      className: p.$,
      onSubmit: _,
      children: [(0, r.jsxs)("div", {
        className: p.rf,
        children: [null != O && (0, r.jsx)("div", {
          className: p.lY,
          ref: x
        }), (0, r.jsxs)("div", {
          className: p.Qs,
          children: [(0, r.jsx)("div", {
            className: p.wx,
            children: h.intl.string(h.t.mY3Y38)
          }), (0, r.jsx)(a.Text, {
            id: "content-warning-popout-label",
            className: g.PT,
            variant: "text-sm/normal",
            children: y.body
          }), (0, r.jsxs)("div", {
            className: p._o,
            children: [(0, r.jsxs)("div", {
              className: p.UD,
              children: [(0, r.jsx)("div", {
                className: p.x6,
                children: (0, r.jsx)(a.Button, {
                  variant: "secondary",
                  onClick: j,
                  text: h.intl.string(h.t.fsBWmS)
                })
              }), (0, r.jsx)(a.Text, {
                variant: "text-xs/normal",
                className: p.uK,
                children: h.intl.format(h.t["0LzVPZ"], {})
              })]
            }), (0, r.jsxs)("div", {
              className: p.UD,
              children: [(0, r.jsx)("div", {
                className: p.x6,
                children: (0, r.jsx)(a.Button, {
                  variant: "primary",
                  onClick: _,
                  text: h.intl.string(h.t.KJnHq3),
                  autoFocus: true
                })
              }), (0, r.jsx)(a.Text, {
                variant: "text-xs/normal",
                className: p.uK,
                children: h.intl.format(h.t.khjqdH, {})
              })]
            })]
          })]
        })]
      }), null != y.footer && "" !== y.footer ? (0, r.jsxs)("div", {
        className: p.qr,
        children: [(0, r.jsx)(a.mir, {
          size: "xs",
          color: i.A.unsafe_rawColors.PRIMARY_400.css,
          className: p.Kk
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: y.footer
        })]
      }) : null]
    })
  })
}