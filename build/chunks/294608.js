/** Chunk was on 52272 **/
n.d(t, {
  $B: () => s,
  GF: () => a,
  XL: () => l,
  pE: () => c
}), n(411104);
var r = n(200651),
  i = n(192379);
let o = i.createContext(void 0);

function a() {
  let e = i.useContext(o);
  if (null == e) throw Error("No PollContextProvider found");
  return e
}

function l(e) {
  let {
    children: t,
    message: n,
    poll: a
  } = e, l = i.useMemo(() => ({
    message: n,
    poll: a
  }), [n, a]);
  return (0, r.jsx)(o.Provider, {
    value: l,
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
  } = a(), t = e.getChannelId();
  return i.useMemo(() => ({
    channelId: t,
    messageId: e.id
  }), [e.id, t])
}