/** Chunk was on 9536 **/
/** chunk id: 314224, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk536982 = require("./536982.jsx"),
  Chunk456677 = require("./456677.jsx"),
  Chunk951665 = require("./951665.jsx"),
  Chunk428760 = require("./428760.jsx"),
  Chunk55889 = require("./55889.jsx"),
  Chunk300453 = require("./300453.jsx"),
  Chunk620436 = require("./620436.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk365604 = require("./365604.js");

function b(e) {
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

function h(e) {
  var t, n, h, x, j, v;
  let {
    rule: O,
    onChangeRule: C
  } = e, y = i.useCallback(e => {
    C(p(b({}, O), {
      triggerMetadata: p(b({}, O.triggerMetadata), {
        keywordFilter: e
      })
    }))
  }, [C, O]), N = i.useCallback(e => {
    C(p(b({}, O), {
      triggerMetadata: p(b({}, O.triggerMetadata), {
        allowList: e
      })
    }))
  }, [C, O]);
  return (0, r.jsxs)("div", {
    className: m.cardContentsContainer,
    children: [(0, r.jsxs)(d.Z, {
      step: 1,
      header: f.intl.string(f.t["ue+tnb"]),
      children: [(0, r.jsx)(o.Z, {
        onChangeText: y,
        maxWordCount: g.RH,
        initialValue: null == (t = O.triggerMetadata) ? true : t.keywordFilter
      }), (0, r.jsx)(s.Z, {
        rule: O,
        onChangeRule: C,
        collapsed: (null == O || null == (n = O.triggerMetadata) ? true : n.regexPatterns) == null || (null == O || null == (h = O.triggerMetadata) ? true : h.regexPatterns.length) === 0
      }), (0, r.jsx)(l.Z, {
        onChange: N,
        initialValue: null == (x = O.triggerMetadata) ? true : x.allowList,
        maxWordCount: g.n4,
        collapsed: (null == (j = O.triggerMetadata) ? true : j.allowList) == null || (null == (v = O.triggerMetadata) ? true : v.allowList.length) === 0
      })]
    }), (0, r.jsx)(u.Z, {
      type: u.Z.Type.ARROW_DOWN
    }), (0, r.jsx)(d.Z, {
      step: 2,
      header: f.intl.string(f.t["18TOiQ"]),
      children: (0, r.jsx)(a.Z, {
        rule: O,
        onChangeRule: C
      })
    }), (0, r.jsx)(u.Z, {
      type: u.Z.Type.CROSS
    }), (0, r.jsx)(d.Z, {
      step: 3,
      header: f.intl.string(f.t.eq3gjh),
      children: (0, r.jsx)(c.Z, {
        rule: O,
        onChangeRule: C
      })
    })]
  })
}