/** Chunk was on 26434 **/
/** chunk id: 294608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $B: () => s,
  GF: () => o,
  XL: () => a,
  pE: () => c
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let l = Chunk647438.createContext(true);

function o() {
  let e = Chunk647438.useContext(l);
  if (null == module) throw Error("No PollContextProvider found");
  return module
}

function a(e) {
  let {
    children: t,
    message: n,
    poll: o
  } = e, a = i.useMemo(() => ({
    message: n,
    poll: o
  }), [n, o]);
  return (0, r.jsx)(l.Provider, {
    value: a,
    children: t
  })
}

function s(e) {
  return function() {
    let {
      poll: e
    } = o();
    return e.resources
  }().styles[e]
}

function c() {
  let {
    message: e
  } = o(), t = module.getChannelId();
  return Chunk647438.useMemo(() => ({
    channelId: exports,
    messageId: module.id
  }), [module.id, exports])
}