/** Chunk was on 47841 **/
/** chunk id: 559603, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk858229 = require("./858229.jsx"),
  Chunk99787 = require("./99787.jsx"),
  Chunk491032 = require("./491032.jsx"),
  Chunk391958 = require("./391958.jsx"),
  Chunk255354 = require("./255354.jsx"),
  Chunk957300 = require("./957300.jsx"),
  Chunk378427 = require("./378427.jsx"),
  Chunk411335 = require("./411335.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk578551 = require("./578551.js");

function m(e) {
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

function x(e) {
  var t, n, x, h, j, O;
  let {
    rule: y,
    onChangeRule: v
  } = e, A = i.useCallback(e => {
    v(p(m({}, y), {
      triggerMetadata: p(m({}, y.triggerMetadata), {
        keywordFilter: e
      })
    }))
  }, [v, y]), E = i.useCallback(e => {
    v(p(m({}, y), {
      triggerMetadata: p(m({}, y.triggerMetadata), {
        allowList: e
      })
    }))
  }, [v, y]);
  return (0, r.jsxs)("div", {
    className: b.sp,
    children: [(0, r.jsxs)(d.A, {
      step: 1,
      header: g.intl.string(g.t["ue+tnb"]),
      children: [(0, r.jsx)(c.A, {
        onChangeText: A,
        maxWordCount: f.bV,
        initialValue: null == (t = y.triggerMetadata) ? true : t.keywordFilter
      }), (0, r.jsx)(a.A, {
        rule: y,
        onChangeRule: v,
        collapsed: (null == y || null == (n = y.triggerMetadata) ? true : n.regexPatterns) == null || (null == y || null == (x = y.triggerMetadata) ? true : x.regexPatterns.length) === 0
      }), (0, r.jsx)(l.A, {
        onChange: E,
        initialValue: null == (h = y.triggerMetadata) ? true : h.allowList,
        maxWordCount: f.UW,
        collapsed: (null == (j = y.triggerMetadata) ? true : j.allowList) == null || (null == (O = y.triggerMetadata) ? true : O.allowList.length) === 0
      })]
    }), (0, r.jsx)(u.A, {
      type: u.A.Type.ARROW_DOWN
    }), (0, r.jsx)(d.A, {
      step: 2,
      header: g.intl.string(g.t["18TOiQ"]),
      children: (0, r.jsx)(s.A, {
        rule: y,
        onChangeRule: v
      })
    }), (0, r.jsx)(u.A, {
      type: u.A.Type.CROSS
    }), (0, r.jsx)(d.A, {
      step: 3,
      header: g.intl.string(g.t.eq3gjh),
      children: (0, r.jsx)(o.A, {
        rule: y,
        onChangeRule: v
      })
    })]
  })
}