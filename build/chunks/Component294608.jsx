/** Chunk was on 66866 **/
/** chunk id: 294608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $B: () => s,
  GF: () => a,
  XL: () => o,
  pE: () => c
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let l = Chunk647438.createContext(true);

function a() {
  let e = Chunk647438.useContext(l);
  if (null == module) throw Error("No PollContextProvider found");
  return module
}

function o(e) {
  let {
    children: t,
    message: n,
    poll: a
  } = e, o = i.useMemo(() => ({
    message: n,
    poll: a
  }), [n, a]);
  return (0, r.jsx)(l.Provider, {
    value: o,
    children: t
  })
}

function s(e) {
  return function() {
    let {
      poll: e
    } = a();
    return e.resources
  }().styles[e]
}

function c() {
  let {
    message: e
  } = a(), t = module.getChannelId();
  return Chunk647438.useMemo(() => ({
    channelId: exports,
    messageId: module.id
  }), [module.id, exports])
}