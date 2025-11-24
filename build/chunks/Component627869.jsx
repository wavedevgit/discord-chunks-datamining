/** Chunk was on web.js **/
/** chunk id: 627869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  j: () => h
}), require("./388685.js"), require("./781311.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk356659 = require("./356659.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h() {
  let e = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().autoClipPhrases),
    [t, n] = Chunk473749.useState(""),
    c = Chunk473749.useMemo(() => module.map(e => ({
      id: e,
      label: e
    })), [module]),
    d = Chunk473749.useCallback(e => {
      n(e)
    }, []),
    f = Chunk473749.useCallback(r => {
      if ("Enter" === r.key || "," === r.key) {
        r.preventDefault();
        let i = t.trim().toLowerCase();
        i.length > 0 && !e.includes(i) && (l.a2([...e, i]), n(""))
      } else if ("Backspace" === r.key && "" === t && e.length > 0) {
        let t = e.slice(0, false);
        l.a2(t)
      }
    }, [exports, module]),
    _ = Chunk473749.useCallback(t => {
      let n = Array.from(t)[0],
        r = e.filter(e => e !== n);
      l.a2(r)
    }, [module]);
  return (0, Chunk54381.jsx)(Chunk481060.oil, {
    value: exports,
    onChange: d,
    onKeyDown: f,
    placeholder: Chunk388032.intl.string(Chunk388032.t.zYUZpt),
    leading: Chunk356659.length > 0 ? {
      type: "tags",
      items: Chunk356659,
      onRemove: _
    } : true
  })
}

function m() {
  let {
    maxAutoClips: e,
    clipSignals: t
  } = (0, Chunk442837.cj)([Chunk435064.Z], () => Chunk435064.Z.getSettings()), n = Chunk473749.useCallback(e => {
    l.Rr(p(f({}, t), {
      enableGameSignals: e
    }))
  }, [exports]), d = Chunk473749.useCallback(e => {
    l.Rr(p(f({}, t), {
      enablePhraseSignals: e
    }))
  }, [exports]), _ = Chunk473749.useCallback(e => {
    l.W6(Math.floor(e))
  }, []), m = Chunk473749.useMemo(() => {
    let e = [Chunk356659.qb];
    for (let t = 10; exports <= Chunk356659.b0; t += 10) module.push(exports);
    return module[module.length - 1] !== Chunk356659.b0 && module.push(Chunk356659.b0), module
  }, []);
  return (0, Chunk54381.jsxs)(Chunk481060.l09, {
    children: [(0, Chunk54381.jsx)(Chunk481060.iRW, {
      label: Chunk388032.intl.string(Chunk388032.t.yfsrDI),
      description: Chunk388032.intl.string(Chunk388032.t.vlDHdC),
      initialValue: module,
      layout: "vertical",
      onValueRender: e => "".concat(Math.floor(e)),
      minValue: Chunk356659.qb,
      maxValue: Chunk356659.b0,
      onValueChange: _,
      markers: m,
      onMarkerRender: e => "".concat(Math.floor(e))
    }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.iV6KcI),
      description: Chunk388032.intl.string(Chunk388032.t["dJ2tX+"]),
      checked: exports.enableGameSignals,
      onChange: require
    }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.nHsilt),
      description: Chunk388032.intl.string(Chunk388032.t["s6wq+m"]),
      checked: exports.enablePhraseSignals,
      onChange: d
    }), exports.enablePhraseSignals && (0, Chunk54381.jsx)(h, {})]
  })
}