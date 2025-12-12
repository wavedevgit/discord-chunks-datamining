/** Chunk was on web.js **/
/** chunk id: 294608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $B: () => c,
  GF: () => a,
  XL: () => s,
  pE: () => u
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let o = Chunk473749.createContext(true);

function a() {
  let e = Chunk473749.useContext(o);
  if (null == module) throw Error("No PollContextProvider found");
  return module
}

function s(e) {
  let {
    children: t,
    message: n,
    poll: a
  } = e, s = i.useMemo(() => ({
    message: n,
    poll: a
  }), [n, a]);
  return (0, r.jsx)(o.Provider, {
    value: s,
    children: t
  })
}

function l() {
  let {
    poll: e
  } = a();
  return module.resources
}

function c(e) {
  return l().styles[e]
}

function u() {
  let {
    message: e
  } = a(), t = module.getChannelId();
  return Chunk473749.useMemo(() => ({
    channelId: exports,
    messageId: module.id
  }), [module.id, exports])
}