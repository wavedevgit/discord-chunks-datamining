/** Chunk was on 39522 **/
/** chunk id: 252345, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk231003 = require("./231003.js"),
  Chunk929488 = require("./929488.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk996629 = require("./996629.js"),
  Chunk894101 = require("./894101.js");
let v = new Set([Chunk397927.ip4.ENTERING, Chunk397927.ip4.ENTERED]);

function m(e) {
  let {
    onClose: t,
    onCaptchaVerify: r,
    onReject: i,
    transitionState: m,
    headerText: O,
    bodyText: g,
    rqtoken: C,
    serveInvisible: E
  } = e, w = function(e, t) {
    if (null == e) return {};
    var r, n, a, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
      }(e, t), Object.getOwnPropertySymbols)
      for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["onClose", "onCaptchaVerify", "onReject", "transitionState", "headerText", "bodyText", "rqtoken", "serveInvisible"]), A = (0, d.A)({
    onReject: i
  });
  if (a.useEffect(() => {
      l._.subscribe(h.jej.LAYER_POP_ESCAPE_KEY, t)
    }, [t]), a.useEffect(() => {
      p.default.track(h.HAw.OPEN_MODAL, {
        type: "Captcha Modal"
      })
    }, []), null == m || !v.has(m)) return null;
  let R = (0, n.jsxs)("div", {
    className: o()(y.GC, y.P),
    children: [E && (0, n.jsx)(s.y$y, {
      type: s.y$y.Type.SPINNING_CIRCLE
    }), (0, n.jsx)(u.A, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      size: E ? "invisible" : true,
      onVerify: e => {
        A(), r(e, C), t()
      },
      onClose: E ? t : true
    }, w))]
  });
  return (0, n.jsx)(c.ExpressiveModal, {
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
    children: R
  })
}