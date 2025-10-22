/** Chunk was on 9145 **/
/** chunk id: 105457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk210887 = require("./210887.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk321918 = require("./321918.js"),
  Chunk602009 = require("./602009.js");

function g(e) {
  let {
    onClose: t,
    onConfirm: g,
    onCancel: b,
    channel: C,
    analyticsType: y,
    popoutText: _,
    animation: v
  } = e;
  r.useEffect(() => {
    d.default.track(p.rMx.OPEN_POPOUT, function(e) {
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
      type: y
    }, (0, c.v_)(C)))
  }, [y, C]);
  let x = r.useCallback(() => {
      null == g || g(), t()
    }, [g, t]),
    O = r.useCallback(() => {
      null == b || b(), t()
    }, [b, t]),
    j = r.useRef(null);
  return r.useEffect(() => {
    let e, t = u.Z.theme,
      i = false;
    return null != v && (async () => {
      let [{
        default: r
      }, l] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, a.wj)(t) ? v.dark() : v.light()]);
      i || null == j.current || (e = r.loadAnimation({
        container: j.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: l
      }))
    })(), () => {
      i = true, null != e && (e.destroy(), e = true)
    }
  }, [v]), (0, i.jsx)(s.VqE, {
    "aria-labelledby": "content-warning-popout-label",
    children: (0, i.jsxs)("form", {
      className: f.contentWarningPopout,
      onSubmit: x,
      children: [(0, i.jsxs)("div", {
        className: f.body,
        children: [null != v && (0, i.jsx)("div", {
          className: f.animation,
          ref: j
        }), (0, i.jsxs)("div", {
          className: f.content,
          children: [(0, i.jsx)("div", {
            className: f.header,
            children: h.intl.string(h.t.mY3Y38)
          }), (0, i.jsx)(s.Text, {
            id: "content-warning-popout-label",
            className: m.markup,
            variant: "text-sm/normal",
            children: _.body
          }), (0, i.jsxs)("div", {
            className: f.buttonWrapper,
            children: [(0, i.jsxs)("div", {
              className: f.buttonContainer,
              children: [(0, i.jsx)(o.zx, {
                className: f.button,
                color: o.zx.Colors.PRIMARY,
                onClick: O,
                children: h.intl.string(h.t.fsBWmS)
              }), (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                className: f.buttonHint,
                children: h.intl.format(h.t["0LzVPZ"], {})
              })]
            }), (0, i.jsxs)("div", {
              className: f.buttonContainer,
              children: [(0, i.jsx)(o.zx, {
                className: f.button,
                onClick: x,
                type: "submit",
                autoFocus: true,
                children: h.intl.string(h.t.KJnHq3)
              }), (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                className: f.buttonHint,
                children: h.intl.format(h.t.khjqdH, {})
              })]
            })]
          })]
        })]
      }), null != _.footer && "" !== _.footer ? (0, i.jsxs)("div", {
        className: f.footer,
        children: [(0, i.jsx)(s.d3s, {
          size: "xs",
          color: l.Z.unsafe_rawColors.PRIMARY_400.css,
          className: f.icon
        }), (0, i.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: _.footer
        })]
      }) : null]
    })
  })
}