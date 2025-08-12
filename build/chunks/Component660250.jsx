/** Chunk was on 94904 **/
/** chunk id: 660250, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk724723 = require("./724723.js"),
  Chunk959457 = require("./959457.js"),
  Chunk571826 = require("./571826.js"),
  Chunk630759 = require("./630759.js"),
  Chunk301107 = require("./301107.js"),
  Chunk785792 = require("./785792.jsx"),
  Chunk190054 = require("./190054.jsx"),
  Chunk245581 = require("./245581.jsx"),
  Chunk760373 = require("./760373.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk408811 = require("./408811.js");

function O(e) {
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
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let v = function(e) {
  let {
    transitionState: t,
    streamKey: r,
    channelId: v,
    onClose: x
  } = e, _ = a.Z.useExperiment({
    location: "SecureFramesStreamVerificationModal"
  }, {
    autoTrackExposure: true
  }).enabled, P = (0, c.e7)([s.Z], () => {
    var e;
    return null == (e = s.Z.getSecureFramesState(r)) ? true : e.epochAuthenticator
  }), w = (0, f.W)({
    fingerprintBase64: P,
    chunkSize: m.y6,
    desiredLength: m.YP
  }), k = o.useCallback(() => {
    (0, u.ih)({
      channelId: v
    })
  }, [v]), S = {
    transitionState: t,
    title: y.intl.string(y.t.QogHlZ),
    subtitle: y.intl.string(y.t.qODBkZ)
  }, N = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: j.verification,
      children: [(0, n.jsxs)("div", {
        className: j.header,
        children: [(0, n.jsx)(l.X6q, {
          variant: "text-sm/bold",
          color: "header-primary",
          children: y.intl.string(y.t.cgBTyM)
        }), null != w && (0, n.jsx)(b.H, {
          className: j.copyIcon,
          chunks: w,
          color: l.TVs.colors.INTERACTIVE_NORMAL,
          onCopy: k
        })]
      }), (0, n.jsx)(p.b, {
        className: j.code,
        chunks: w,
        columns: m.WK
      })]
    }), (0, n.jsx)(l.Text, {
      className: j.footer,
      variant: "text-sm/normal",
      color: "text-muted",
      children: y.intl.format(y.t["H3+ktr"], {
        helpArticle: (0, d.uV)()
      })
    })]
  });
  return _ ? (0, n.jsx)(i.Modal, g(O({}, S), {
    onClose: x,
    actions: [],
    children: N
  })) : (0, n.jsx)(h.Z, g(O({}, S), {
    children: N
  }))
}