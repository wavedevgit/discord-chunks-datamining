/** Chunk was on web.js **/
/** chunk id: 294608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $B: () => c,
  GF: () => a,
  XL: () => s,
  pE: () => u
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");
let o = Chunk73800.createContext(true);

function a() {
  let e = Chunk73800.useContext(o);
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
  return <o.Provider value={s}>{t}</o.Provider>
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
  return Chunk73800.useMemo(() => ({
    channelId: exports,
    messageId: module.id
  }), [module.id, exports])
}