/** Chunk was on 66866 **/
/** chunk id: 294608, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $B: () => s,
  GF: () => a,
  XL: () => o,
  pE: () => c
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");
let l = Chunk73800.createContext(true);

function a() {
  let e = Chunk73800.useContext(l);
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
  return Chunk73800.useMemo(() => ({
    channelId: exports,
    messageId: module.id
  }), [module.id, exports])
}