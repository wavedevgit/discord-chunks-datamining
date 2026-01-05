/** Chunk was on 40184 **/
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
  Chunk868691 = require("./868691.js"),
  Chunk960324 = require("./960324.js");

function m(e) {
  let {
    onClose: t,
    onConfirm: m,
    onCancel: g,
    channel: b,
    analyticsType: C,
    popoutText: y,
    animation: v
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
  let x = r.useCallback(() => {
      null == m || m(), t()
    }, [m, t]),
    O = r.useCallback(() => {
      null == g || g(), t()
    }, [g, t]),
    E = r.useRef(null);
  return r.useEffect(() => {
    let e, t = c.Z.theme,
      i = false;
    return null != v && (async () => {
      let [{
        default: r
      }, l] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, a.wj)(t) ? v.dark() : v.light()]);
      i || null == E.current || (e = r.loadAnimation({
        container: E.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: l
      }))
    })(), () => {
      i = true, null != e && (e.destroy(), e = true)
    }
  }, [v]), (0, i.jsx)(o.VqE, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, i.jsxs)("form", {
      className: f.contentWarningPopout,
      onSubmit: x,
      children: [(0, i.jsxs)("div", {
        className: f.body,
        children: [null != v && (0, i.jsx)("div", {
          className: f.animation,
          ref: E
        }), (0, i.jsxs)("div", {
          className: f.content,
          children: [(0, i.jsx)("div", {
            className: f.header,
            children: p.intl.string(p.t.mY3Y38)
          }), (0, i.jsx)(o.Text, {
            id: "content-warning-popout-label",
            className: h.markup,
            variant: "text-sm/normal",
            children: y.body
          }), (0, i.jsxs)("div", {
            className: f.buttonWrapper,
            children: [(0, i.jsxs)("div", {
              className: f.buttonContainer,
              children: [(0, i.jsx)("div", {
                className: f.button,
                children: (0, i.jsx)(o.Button, {
                  variant: "secondary",
                  onClick: O,
                  text: p.intl.string(p.t.fsBWmS)
                })
              }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: f.buttonHint,
                children: p.intl.format(p.t["0LzVPZ"], {})
              })]
            }), (0, i.jsxs)("div", {
              className: f.buttonContainer,
              children: [(0, i.jsx)("div", {
                className: f.button,
                children: (0, i.jsx)(o.Button, {
                  variant: "primary",
                  onClick: x,
                  text: p.intl.string(p.t.KJnHq3),
                  autoFocus: true
                })
              }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                className: f.buttonHint,
                children: p.intl.format(p.t.khjqdH, {})
              })]
            })]
          })]
        })]
      }), null != y.footer && "" !== y.footer ? (0, i.jsxs)("div", {
        className: f.footer,
        children: [(0, i.jsx)(o.d3s, {
          size: "xs",
          color: l.Z.unsafe_rawColors.PRIMARY_400.css,
          className: f.icon
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: y.footer
        })]
      }) : null]
    })
  })
}