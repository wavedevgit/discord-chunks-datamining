/** Chunk was on 12192 **/
/** chunk id: 718742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk724723 = require("./724723.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk637538 = require("./637538.js"),
  Chunk747387 = require("./747387.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk518840 = require("./518840.js"),
  Chunk140238 = require("./140238.js");
let m = new Set([Chunk481060.Dvm.ENTERING, Chunk481060.Dvm.ENTERED]);

function g(e) {
  var {
    onClose: t,
    onCaptchaVerify: n,
    onReject: i,
    transitionState: g,
    headerText: C,
    bodyText: O,
    rqtoken: E,
    serveInvisible: w
  } = e, j = function(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["onClose", "onCaptchaVerify", "onReject", "transitionState", "headerText", "bodyText", "rqtoken", "serveInvisible"]);
  let x = l.Z.getCurrentConfig({
      location: "CaptchaModal"
    }, {
      autoTrackExposure: true
    }).enabled,
    R = (0, u.Z)({
      onReject: i
    });
  if (a.useEffect(() => {
      d.S.subscribe(f.CkL.LAYER_POP_ESCAPE_KEY, t)
    }, [t]), a.useEffect(() => {
      p.default.track(f.rMx.OPEN_MODAL, {
        type: "Captcha Modal"
      })
    }, []), null == g || !m.has(g)) return null;
  let _ = (0, r.jsxs)("div", {
    className: o()(b.captchaContainer, {
      [b.manaDesktopModal]: x
    }),
    children: [w && (0, r.jsx)(s.$jN, {
      type: s.$jN.Type.SPINNING_CIRCLE
    }), (0, r.jsx)(h.Z, function(e) {
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
      size: w ? "invisible" : true,
      onVerify: e => {
        R(), n(e, E), t()
      },
      onClose: w ? t : true
    }, j))]
  });
  return x ? (0, r.jsx)(c.I, {
    transitionState: g,
    onClose: t,
    size: "sm",
    gradientColor: "blue",
    graphic: {
      type: "image",
      src: v
    },
    title: null != C ? C : y.intl.string(y.t.FpoiHR),
    subtitle: null != O ? O : y.intl.string(y.t["/CidxM"]),
    children: _
  }) : (0, r.jsx)(s.Y0X, {
    transitionState: g,
    "aria-label": "CAPTCHA",
    className: o()(b.modal, b.gradientBorder),
    parentComponent: "CaptchaModal",
    "data-migration-pending": true,
    children: (0, r.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: b.container,
      children: [(0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        className: b.close,
        onClick: t
      }), (0, r.jsx)("div", {
        className: b.content,
        children: g !== s.Dvm.ENTERED ? (0, r.jsx)(s.$jN, {
          type: s.$jN.Type.SPINNING_CIRCLE
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            children: (0, r.jsx)("img", {
              src: v,
              alt: ""
            })
          }), (0, r.jsx)("div", {
            className: b.title,
            "aria-hidden": true,
            children: null != C ? C : y.intl.string(y.t.FpoiHR)
          }), (0, r.jsx)("div", {
            children: null != O ? O : y.intl.string(y.t["/CidxM"])
          }), _]
        })
      })]
    })
  })
}