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
  Chunk979519 = require("./979519.js");
let j = function(e) {
  var t, r;
  let {
    transitionState: j,
    streamKey: h,
    channelId: g,
    onClose: m
  } = e, v = (0, l.e7)([s.Z], () => {
    var e;
    return null == (e = s.Z.getSecureFramesState(h)) ? true : e.epochAuthenticator
  }), x = (0, d.W)({
    fingerprintBase64: v,
    chunkSize: b.y6,
    desiredLength: b.YP
  }), P = c.useCallback(() => {
    (0, a.ih)({
      channelId: g
    })
  }, [g]), w = {
    transitionState: j,
    title: O.intl.string(O.t.QogHld),
    subtitle: O.intl.string(O.t.qODBkW)
  }, T = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: y.verification,
      children: [(0, n.jsxs)("div", {
        className: y.header,
        children: [(0, n.jsx)(i.Heading, {
          variant: "text-sm/bold",
          color: "text-strong",
          children: O.intl.string(O.t.cgBTyO)
        }), null != x && (0, n.jsx)(p.H, {
          className: y.copyIcon,
          chunks: x,
          color: i.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
          onCopy: P
        })]
      }), (0, n.jsx)(f.b, {
        className: y.code,
        chunks: x,
        columns: b.WK
      })]
    }), (0, n.jsx)(i.Text, {
      className: y.footer,
      variant: "text-sm/normal",
      color: "text-muted",
      children: O.intl.format(O.t["H3+ktv"], {
        helpArticle: (0, u.uV)()
      })
    })]
  });
  return (0, n.jsx)(o.Modal, (t = function(e) {
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
  }({}, w), r = r = {
    onClose: m,
    actions: [],
    children: T
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