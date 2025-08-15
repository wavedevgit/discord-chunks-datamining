/** Chunk was on 66866 **/
/** chunk id: 498179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk283595 = require("./283595.js"),
  Chunk55563 = require("./55563.js"),
  Chunk780570 = require("./780570.js"),
  Chunk701560 = require("./701560.jsx"),
  Chunk785547 = require("./785547.jsx");

function d(e) {
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
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    application: t,
    fullWidth: n = false,
    size: m = l.zx.Sizes.LARGE,
    color: f,
    customDisabledColor: _,
    hideNotLaunchable: g,
    tooltipPosition: h,
    onClick: b,
    className: E,
    source: C,
    hover: v,
    innerClassName: O
  } = e, y = {
    fullWidth: n,
    size: m,
    color: f,
    customDisabledColor: _,
    tooltipPosition: h,
    onClick: b,
    className: E,
    hover: v,
    innerClassName: O
  }, x = (0, i.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)), j = null != x ? x.sku.id : null, I = null != j ? j : t.primarySkuId, S = (0, i.e7)([o.Z], () => null != I && !o.Z.didFetchingSkuFail(I));
  return null != x && (0, s.Je)(x) ? (0, r.jsx)(u.Z, p(d({}, y), {
    libraryApplication: x,
    source: C
  })) : S ? (0, r.jsx)("div", {
    children: "deprecated!"
  }) : (0, r.jsx)(c.Z, p(d({}, y), {
    hideNotLaunchable: g,
    applicationId: t.id
  }))
}