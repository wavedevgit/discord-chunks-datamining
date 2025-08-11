/** Chunk was on web.js **/
/** chunk id: 237375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk965386 = require("./965386.jsx"),
  Chunk987826 = require("./987826.jsx"),
  Chunk826298 = require("./826298.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk893541 = require("./893541.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = 200;

function b(e, t, n) {
  return (0, r.jsx)(c.Z, {
    className: _.option,
    name: e.displayName,
    state: t,
    onClick: n
  }, e.name)
}

function y(e) {
  let {
    command: t,
    optionStates: n,
    onOptionClick: o
  } = e, {
    requiredOptions: a,
    setOptionalOptions: l,
    unsetOptionalOptions: c
  } = i.useMemo(() => {
    var e, r, i, o;
    let a = null != (i = null == (e = t.options) ? true : e.filter(e => e.required)) ? i : [],
      s = null != (o = null == (r = t.options) ? true : r.filter(e => !e.required)) ? o : [];
    return {
      requiredOptions: a,
      setOptionalOptions: s.filter(e => {
        var t;
        return null == n || null == (t = n[e.name]) ? true : t.hasValue
      }),
      unsetOptionalOptions: s.filter(e => {
        var t;
        return !(null == n || null == (t = n[e.name]) ? true : t.hasValue)
      })
    }
  }, [t.options, n]), u = (0, r.jsx)("div", {
    className: _.optionalNames,
    children: c.map(e => (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: e.displayName
    }, e.name))
  }), d = a.map(e => b(e, null == n ? true : n[e.name], o)), p = l.length > 0 ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6q, {
      className: _.optionalHeader,
      variant: "heading-deprecated-12/semibold",
      children: f.intl.string(f.t["5C107O"])
    }), l.map(e => b(e, null == n ? true : n[e.name], o))]
  }) : null, m = c.length > 0 ? (0, r.jsx)(s.ua7, {
    text: u,
    "aria-label": false,
    delay: E,
    children: e => (0, r.jsx)(s.Text, g(h({
      className: _.optionalCount,
      color: "text-muted",
      variant: "text-sm/normal"
    }, e), {
      children: 0 === l.length ? f.intl.formatToPlainString(f.t["0mI72t"], {
        count: c.length
      }) : f.intl.formatToPlainString(f.t.BP8N0N, {
        count: c.length
      })
    }))
  }) : null;
  return (0, r.jsxs)(r.Fragment, {
    children: [d, null != p || null != m ? (0, r.jsxs)("div", {
      className: _.optionals,
      children: [p, m]
    }) : null]
  })
}

function O(e) {
  var t, n, o;
  let s, {
      command: c,
      activeOptionName: f,
      channel: p,
      showOptions: h,
      showImage: m,
      optionStates: g,
      onOptionClick: E,
      section: b,
      isSelectable: O = true
    } = e,
    v = i.useMemo(() => {
      var e;
      return null == c || null == (e = c.options) ? true : e.find(e => e.name === f)
    }, [f, c]),
    I = null != f ? null == g ? true : g[f] : null;
  s = null != I && (null == (t = I.lastValidationResult) ? true : t.success) === false ? null != (n = I.lastValidationResult.error) ? n : "" : null;
  let T = m && null != b ? (0, u.ky)(b) : null;
  return (0, r.jsxs)("div", {
    className: a()(_.wrapper, O ? null : _.disabled),
    children: [null != T ? (0, r.jsx)(T, {
      className: _.image,
      channel: p,
      section: b,
      width: 32,
      height: 32
    }) : null, (0, r.jsxs)("div", {
      className: _.infoWrapper,
      children: [(0, r.jsxs)("div", {
        className: _.usageWrapper,
        children: [(0, r.jsx)(l.BR, {
          className: _.title,
          children: d.GI + c.displayName
        }), h ? (0, r.jsx)(y, {
          command: c,
          optionStates: g,
          onOptionClick: E
        }) : null]
      }), (0, r.jsx)(l.wL, {
        className: a()(_.description, null != s ? _.error : null),
        children: null != (o = null != s ? s : null == v ? true : v.displayDescription) ? o : c.displayDescription
      })]
    }), (0, r.jsx)(l.dY, {
      className: _.source,
      children: null == b ? true : b.name
    })]
  })
}