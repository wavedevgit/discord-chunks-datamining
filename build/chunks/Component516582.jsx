/** Chunk was on 39048 **/
/** chunk id: 516582, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
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

function f(e) {
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

function h(e, t) {
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

function b(e) {
  var t, n, b, x, j, _;
  let {
    rule: O,
    onChangeRule: v
  } = e, y = i.useCallback(e => {
    v(h(f({}, O), {
      triggerMetadata: h(f({}, O.triggerMetadata), {
        keywordFilter: e
      })
    }))
  }, [v, O]), A = i.useCallback(e => {
    v(h(f({}, O), {
      triggerMetadata: h(f({}, O.triggerMetadata), {
        allowList: e
      })
    }))
  }, [v, O]);
  return (0, r.jsxs)("div", {
    className: p.sp,
    children: [(0, r.jsxs)(d.A, {
      step: 1,
      header: m.intl.string(m.t["ue+tnb"]),
      children: [(0, r.jsx)(o.A, {
        onChangeText: y,
        maxWordCount: g.bV,
        initialValue: null == (t = O.triggerMetadata) ? true : t.keywordFilter
      }), (0, r.jsx)(a.A, {
        rule: O,
        onChangeRule: v,
        collapsed: (null == O || null == (n = O.triggerMetadata) ? true : n.regexPatterns) == null || (null == O || null == (b = O.triggerMetadata) ? true : b.regexPatterns.length) === 0
      }), (0, r.jsx)(l.A, {
        onChange: A,
        initialValue: null == (x = O.triggerMetadata) ? true : x.allowList,
        maxWordCount: g.UW,
        collapsed: (null == (j = O.triggerMetadata) ? true : j.allowList) == null || (null == (_ = O.triggerMetadata) ? true : _.allowList.length) === 0
      })]
    }), (0, r.jsx)(u.A, {
      type: u.A.Type.ARROW_DOWN
    }), (0, r.jsx)(d.A, {
      step: 2,
      header: m.intl.string(m.t["18TOiQ"]),
      children: (0, r.jsx)(s.A, {
        rule: O,
        onChangeRule: v
      })
    }), (0, r.jsx)(u.A, {
      type: u.A.Type.CROSS
    }), (0, r.jsx)(d.A, {
      step: 3,
      header: m.intl.string(m.t.u5xPPW),
      children: (0, r.jsx)(c.A, {
        rule: O,
        onChangeRule: v,
        onlyRoles: true
      })
    })]
  })
}