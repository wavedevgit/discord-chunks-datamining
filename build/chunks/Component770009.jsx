/** Chunk was on 30243 **/
/** chunk id: 770009, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk52396 = require("./52396.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk151200 = require("./151200.jsx"),
  Chunk96513 = require("./96513.js");

function p(e) {
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

function f(e, t) {
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

function b(e) {
  let {
    contentInventoryEntry: t,
    channel: r
  } = e, {
    parsedEntry: l
  } = (0, a.B)();
  return (0, n.jsx)(u.Z, f(p({}, l), {
    entry: t,
    channel: r
  }))
}

function m(e) {
  let t = (0, s.CJ)();
  i()(null != t, "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?");
  let {
    channelId: r
  } = t, l = (0, o.e7)([c.Z], () => c.Z.getChannel(r));
  return i()(null != l, "channel must be defined"), (0, n.jsx)(a.r, {
    location: d._.EMBED,
    entry: e.contentInventoryEntry,
    channel: l,
    errorFallback: null,
    children: (0, n.jsx)(b, f(p({}, e), {
      channel: l
    }))
  })
}