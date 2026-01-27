/** Chunk was on web.js **/
/** chunk id: 956522, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk726293 = require("./726293.jsx"),
  Chunk60809 = require("./60809.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let t, {
      sortOrder: n,
      onSortOptionClick: c
    } = e,
    d = i.useRef(null);
  switch (n) {
    case s.Ug.POPULAR:
      t = l.intl.string(l.t.SzxiqK);
      break;
    case s.Ug.ALPHABETICAL:
      t = l.intl.string(l.t.m8xsti)
  }
  return (0, r.jsx)(a.YNO, {
    targetElementRef: d,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.A, {
        sortOrder: n,
        onSortOptionClick: c,
        closePopout: t
      })
    },
    position: "bottom",
    align: "left",
    children: e => (0, r.jsx)(a.Button, f(u({}, e), {
      buttonRef: d,
      size: "sm",
      variant: "secondary",
      "aria-label": l.intl.string(l.t.yeYaHf),
      icon: a.JNJ,
      text: t
    }))
  })
}