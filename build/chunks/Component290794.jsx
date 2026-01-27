/** Chunk was on 92917 **/
/** chunk id: 290794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Tu: () => c,
  hd: () => o,
  y0: () => a,
  y5: () => s
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let l = Chunk64700.createContext(true);

function a() {
  let e = i.useContext(l);
  if (null == e) throw Error("No PollContextProvider found");
  return e
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
  return (0, r.jsx)(l.Provider, {
    value: s,
    children: t
  })
}

function o(e) {
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
  } = a(), t = e.getChannelId();
  return i.useMemo(() => ({
    channelId: t,
    messageId: e.id
  }), [e.id, t])
}