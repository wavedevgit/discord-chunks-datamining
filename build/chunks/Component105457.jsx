/** Chunk was on 88647 **/
/** chunk id: 105457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk210887 = require("./210887.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960296 = require("./960296.js"),
  Chunk430864 = require("./430864.js");

function m(e) {
  let {
    onClose: t,
    onConfirm: m,
    onCancel: g,
    channel: b,
    analyticsType: _,
    popoutText: y,
    animation: C
  } = e;
  i.useEffect(() => {
    u.default.track(d.rMx.OPEN_POPOUT, function(e) {
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
      type: _
    }, (0, s.v_)(b)))
  }, [_, b]);
  let v = i.useCallback(() => {
      null == m || m(), t()
    }, [m, t]),
    x = i.useCallback(() => {
      null == g || g(), t()
    }, [g, t]),
    O = i.useRef(null);
  return i.useEffect(() => {
    let e, t = c.Z.theme,
      r = false;
    return null != C && (async () => {
      let [{
        default: i
      }, l] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, a.wj)(t) ? C.dark() : C.light()]);
      r || null == O.current || (e = i.loadAnimation({
        container: O.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: l
      }))
    })(), () => {
      r = true, null != e && (e.destroy(), e = true)
    }
  }, [C]), (0, r.jsx)(o.VqE, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, r.jsxs)("form", {
      className: f.contentWarningPopout,
      onSubmit: v,
      children: [(0, r.jsxs)("div", {
        className: f.body,
        children: [null != C && (0, r.jsx)("div", {
          className: f.animation,
          ref: O
        }), (0, r.jsxs)("div", {
          className: f.content,
          children: [(0, r.jsx)("div", {
            className: f.header,
            children: p.intl.string(p.t.mY3Y38)
          }), (0, r.jsx)(o.Text, {
            id: "content-warning-popout-label",
            className: h.markup,
            variant: "text-sm/normal",
            children: y.body
          }), (0, r.jsxs)("div", {
            className: f.buttonWrapper,
            children: [(0, r.jsxs)("div", {
              className: f.buttonContainer,
              children: [(0, r.jsx)("div", {
                className: f.button,
                children: (0, r.jsx)(o.Button, {
                  variant: "secondary",
                  onClick: x,
                  text: p.intl.string(p.t.fsBWmS)
                })
              }), (0, r.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: f.buttonHint,
                children: p.intl.format(p.t["0LzVPZ"], {})
              })]
            }), (0, r.jsxs)("div", {
              className: f.buttonContainer,
              children: [(0, r.jsx)("div", {
                className: f.button,
                children: (0, r.jsx)(o.Button, {
                  variant: "primary",
                  onClick: v,
                  text: p.intl.string(p.t.KJnHq3),
                  autoFocus: true
                })
              }), (0, r.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: f.buttonHint,
                children: p.intl.format(p.t.khjqdH, {})
              })]
            })]
          })]
        })]
      }), null != y.footer && "" !== y.footer ? (0, r.jsxs)("div", {
        className: f.footer,
        children: [(0, r.jsx)(o.d3s, {
          size: "xs",
          color: l.Z.unsafe_rawColors.PRIMARY_400.css,
          className: f.icon
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: y.footer
        })]
      }) : null]
    })
  })
}