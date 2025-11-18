/** Chunk was on 12192 **/
/** chunk id: 718742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk637538 = require("./637538.js"),
  Chunk747387 = require("./747387.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk285758 = require("./285758.js"),
  Chunk140238 = require("./140238.js");
let v = new Set([Chunk481060.Dvm.ENTERING, Chunk481060.Dvm.ENTERED]);

function m(e) {
  var {
    onClose: t,
    onCaptchaVerify: n,
    onReject: i,
    transitionState: m,
    headerText: O,
    bodyText: g,
    rqtoken: C,
    serveInvisible: E
  } = e, w = function(e, t) {
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
  let R = (0, d.Z)({
    onReject: i
  });
  if (a.useEffect(() => {
      l.S.subscribe(h.CkL.LAYER_POP_ESCAPE_KEY, t)
    }, [t]), a.useEffect(() => {
      p.default.track(h.rMx.OPEN_MODAL, {
        type: "Captcha Modal"
      })
    }, []), null == m || !v.has(m)) return null;
  let j = (0, r.jsxs)("div", {
    className: o()(y.captchaContainer, y.manaDesktopModal),
    children: [E && (0, r.jsx)(s.$jN, {
      type: s.$jN.Type.SPINNING_CIRCLE
    }), (0, r.jsx)(u.Z, function(e) {
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
      size: E ? "invisible" : true,
      onVerify: e => {
        R(), n(e, C), t()
      },
      onClose: E ? t : true
    }, w))]
  });
  return (0, r.jsx)(c.ExpressiveModal, {
    transitionState: m,
    onClose: t,
    size: "sm",
    gradientColor: "blue",
    graphic: {
      type: "image",
      src: b
    },
    title: null != O ? O : f.intl.string(f.t.FpoiHe),
    subtitle: null != g ? g : f.intl.string(f.t["/CidxO"]),
    children: j
  })
}