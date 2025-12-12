/** Chunk was on web.js **/
/** chunk id: 415540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function l(e) {
  let {
    active: t,
    options: n,
    renderOption: i
  } = e, a = "function" == typeof n, [l, c] = r.useState({
    options: a ? [] : n,
    query: "",
    debouncedQuery: "",
    loading: false
  }), {
    options: u,
    loading: d,
    query: f,
    debouncedQuery: p
  } = l, _ = r.useCallback(e => c(t => s(o({}, t), {
    loading: a,
    query: e,
    debouncedQuery: e
  })), [a]);
  return r.useEffect(() => {
    t && _("")
  }, [t, _]), r.useEffect(() => {
    let e;
    return a ? (c(e => s(o({}, e), {
      loading: true,
      debouncedQuery: null
    })), e = setTimeout(() => {
      _(f)
    }, 500)) : _(f), () => {
      clearTimeout(e)
    }
  }, [a, f, _]), r.useEffect(() => {
    let e = false;

    function r() {
      return "function" == typeof n ? n(p) : Promise.resolve(n)
    }
    return (t && null !== p && a || !a) && r().then(t => {
      e || (null != i && (t = t.map(i)), c(e => s(o({}, e), {
        options: t,
        loading: false
      })))
    }), () => {
      e = true
    }
  }, [t, n, p, i, a]), {
    options: u,
    loading: d,
    onQueryChange: r.useCallback(e => {
      c(t => s(o({}, t), {
        query: e
      }))
    }, [])
  }
}