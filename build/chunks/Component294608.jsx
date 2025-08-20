/** Chunk was on web.js **/
/** chunk id: 294608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $B: () => c,
  GF: () => o,
  XL: () => s,
  pE: () => u
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let a = Chunk647438.createContext(true);

function o() {
  let e = Chunk647438.useContext(a);
  if (null == module) throw Error("No PollContextProvider found");
  return module
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
  return module.resources
}

function c(e) {
  return l().styles[e]
}

function u() {
  let {
    message: e
  } = o(), t = module.getChannelId();
  return Chunk647438.useMemo(() => ({
    channelId: exports,
    messageId: module.id
  }), [module.id, exports])
}