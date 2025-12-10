/** Chunk was on 94904 **/
/** chunk id: 660250, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk959457 = require("./959457.js"),
  Chunk571826 = require("./571826.js"),
  Chunk630759 = require("./630759.js"),
  Chunk301107 = require("./301107.js"),
  Chunk785792 = require("./785792.jsx"),
  Chunk190054 = require("./190054.jsx"),
  Chunk760373 = require("./760373.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk547990 = require("./547990.js");
let j = function(e) {
  var t, r;
  let {
    transitionState: j,
    streamKey: h,
    channelId: m,
    onClose: g
  } = e, v = (0, i.e7)([s.Z], () => {
    var e;
    return null == (e = s.Z.getSecureFramesState(h)) ? true : e.epochAuthenticator
  }), x = (0, d.W)({
    fingerprintBase64: v,
    chunkSize: b.y6,
    desiredLength: b.YP
  }), P = o.useCallback(() => {
    (0, a.ih)({
      channelId: m
    })
  }, [m]), _ = {
    transitionState: j,
    title: y.intl.string(y.t.QogHld),
    subtitle: y.intl.string(y.t.qODBkW)
  }, w = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: O.verification,
      children: [(0, n.jsxs)("div", {
        className: O.header,
        children: [(0, n.jsx)(l.Heading, {
          variant: "text-sm/bold",
          color: "header-primary",
          children: y.intl.string(y.t.cgBTyO)
        }), null != x && (0, n.jsx)(p.H, {
          className: O.copyIcon,
          chunks: x,
          color: l.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
          onCopy: P
        })]
      }), (0, n.jsx)(f.b, {
        className: O.code,
        chunks: x,
        columns: b.WK
      })]
    }), (0, n.jsx)(l.Text, {
      className: O.footer,
      variant: "text-sm/normal",
      color: "text-muted",
      children: y.intl.format(y.t["H3+ktv"], {
        helpArticle: (0, u.uV)()
      })
    })]
  });
  return (0, n.jsx)(c.Modal, (t = function(e) {
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
  }({}, _), r = r = {
    onClose: g,
    actions: [],
    children: w
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}