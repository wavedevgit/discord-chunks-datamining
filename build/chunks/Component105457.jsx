/** Chunk was on 73755 **/
/** chunk id: 105457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    analyticsType: C,
    popoutText: y,
    animation: _
  } = e;
  r.useEffect(() => {
    u.default.track(d.rMx.OPEN_POPOUT, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({
      type: C
    }, (0, s.v_)(b)))
  }, [C, b]);
  let v = r.useCallback(() => {
      null == m || m(), t()
    }, [m, t]),
    O = r.useCallback(() => {
      null == g || g(), t()
    }, [g, t]),
    x = r.useRef(null);
  return r.useEffect(() => {
    let e, t = c.Z.theme,
      i = false;
    return null != _ && (async () => {
      let [{
        default: r
      }, l] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, a.wj)(t) ? _.dark() : _.light()]);
      i || null == x.current || (e = r.loadAnimation({
        container: x.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: l
      }))
    })(), () => {
      i = true, null != e && (e.destroy(), e = true)
    }
  }, [_]), (0, i.jsx)(o.VqE, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, i.jsxs)("form", {
      className: h.contentWarningPopout,
      onSubmit: v,
      children: [(0, i.jsxs)("div", {
        className: h.body,
        children: [null != _ && (0, i.jsx)("div", {
          className: h.animation,
          ref: x
        }), (0, i.jsxs)("div", {
          className: h.content,
          children: [(0, i.jsx)("div", {
            className: h.header,
            children: p.intl.string(p.t.mY3Y38)
          }), (0, i.jsx)(o.Text, {
            id: "content-warning-popout-label",
            className: f.markup,
            variant: "text-sm/normal",
            children: y.body
          }), (0, i.jsxs)("div", {
            className: h.buttonWrapper,
            children: [(0, i.jsxs)("div", {
              className: h.buttonContainer,
              children: [(0, i.jsx)("div", {
                className: h.button,
                children: (0, i.jsx)(o.Button, {
                  variant: "secondary",
                  onClick: O,
                  text: p.intl.string(p.t.fsBWmS)
                })
              }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: h.buttonHint,
                children: p.intl.format(p.t["0LzVPZ"], {})
              })]
            }), (0, i.jsxs)("div", {
              className: h.buttonContainer,
              children: [(0, i.jsx)("div", {
                className: h.button,
                children: (0, i.jsx)(o.Button, {
                  variant: "primary",
                  onClick: v,
                  text: p.intl.string(p.t.KJnHq3),
                  autoFocus: true
                })
              }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: h.buttonHint,
                children: p.intl.format(p.t.khjqdH, {})
              })]
            })]
          })]
        })]
      }), null != y.footer && "" !== y.footer ? (0, i.jsxs)("div", {
        className: h.footer,
        children: [(0, i.jsx)(o.d3s, {
          size: "xs",
          color: l.Z.unsafe_rawColors.PRIMARY_400.css,
          className: h.icon
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: y.footer
        })]
      }) : null]
    })
  })
}