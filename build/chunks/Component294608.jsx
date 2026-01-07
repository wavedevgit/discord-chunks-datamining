/** Chunk was on web.js **/
/** chunk id: 294608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $B: () => c,
  GF: () => o,
  XL: () => s,
  pE: () => u
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let a = Chunk473749.createContext(true);

function o() {
  let e = i.useContext(a);
  if (null == e) throw Error("No PollContextProvider found");
  return e
}

function s(e) {
  let {
    children: t,
    message: n,
    poll: o
  } = e, s = i.useMemo(() => ({
    message: n,
    poll: o
  }), [n, o]);
  return (0, r.jsx)(a.Provider, {
    value: s,
    children: t
  })
}

function l() {
  let {
    poll: e
  } = o();
  return e.resources
}

function c(e) {
  return l().styles[e]
}

function u() {
  let {
    message: e
  } = o(), t = e.getChannelId();
  return i.useMemo(() => ({
    channelId: t,
    messageId: e.id
  }), [e.id, t])
}