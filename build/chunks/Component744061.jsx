/** Chunk was on 86357 **/
/** chunk id: 744061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk210887 = require("./210887.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk150599 = require("./150599.js"),
  Chunk430864 = require("./430864.js");

function g(e) {
  let {
    onClose: t,
    onConfirm: g,
    onCancel: b,
    channel: y,
    analyticsType: _,
    popoutText: C,
    animation: x
  } = e;
  i.useEffect(() => {
    d.default.track(p.rMx.OPEN_POPOUT, function(e) {
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
    }, (0, c.v_)(y)))
  }, [_, y]);
  let v = i.useCallback(() => {
      null == g || g(), t()
    }, [g, t]),
    j = i.useCallback(() => {
      null == b || b(), t()
    }, [b, t]),
    O = i.useRef(null);
  return i.useEffect(() => {
    let e, t = u.Z.theme,
      r = false;
    return null != x && (async () => {
      let [{
        default: i
      }, l] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, a.wj)(t) ? x.dark() : x.light()]);
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
  }, [x]), (0, r.jsx)(s.VqE, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, r.jsxs)("form", {
      className: f.contentWarningPopout,
      onSubmit: v,
      children: [(0, r.jsxs)("div", {
        className: f.body,
        children: [null != x && (0, r.jsx)("div", {
          className: f.animation,
          ref: O
        }), (0, r.jsxs)("div", {
          className: f.content,
          children: [(0, r.jsx)("div", {
            className: f.header,
            children: h.intl.string(h.t.mY3Y39)
          }), (0, r.jsx)(s.Text, {
            id: "content-warning-popout-label",
            className: m.markup,
            variant: "text-sm/normal",
            children: C.body
          }), (0, r.jsxs)("div", {
            className: f.buttonWrapper,
            children: [(0, r.jsxs)("div", {
              className: f.buttonContainer,
              children: [(0, r.jsx)(o.zx, {
                className: f.button,
                color: o.zx.Colors.PRIMARY,
                onClick: j,
                children: h.intl.string(h.t.fsBWmZ)
              }), (0, r.jsx)(s.Text, {
                variant: "text-xs/normal",
                className: f.buttonHint,
                children: h.intl.format(h.t["0LzVPT"], {})
              })]
            }), (0, r.jsxs)("div", {
              className: f.buttonContainer,
              children: [(0, r.jsx)(o.zx, {
                className: f.button,
                onClick: v,
                type: "submit",
                autoFocus: true,
                children: h.intl.string(h.t.KJnHq6)
              }), (0, r.jsx)(s.Text, {
                variant: "text-xs/normal",
                className: f.buttonHint,
                children: h.intl.format(h.t.khjqdH, {})
              })]
            })]
          })]
        })]
      }), null != C.footer && "" !== C.footer ? (0, r.jsxs)("div", {
        className: f.footer,
        children: [(0, r.jsx)(s.d3s, {
          size: "xs",
          color: l.Z.unsafe_rawColors.PRIMARY_400.css,
          className: f.icon
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: C.footer
        })]
      }) : null]
    })
  })
}