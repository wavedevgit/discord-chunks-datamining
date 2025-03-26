/** Chunk was on 52272 **/
n.d(t, {
  Z: () => f,
  v: () => p
});
var r = n(200651),
  i = n(192379),
  o = n(512722),
  a = n.n(o),
  l = n(399606),
  s = n(904245),
  c = n(375954),
  u = n(918088);
let d = i.createContext(void 0);

function p(e) {
  var t;
  let n = null !== (t = i.useContext(d)) && void 0 !== t ? t : e;
  return a()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function m(e) {
  let {
    message: t,
    children: n
  } = e, o = (0, l.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), a = null != o;
  return i.useEffect(() => {
    a || s.Z.focusMessage({
      channelId: t.channel_id,
      messageId: t.id
    })
  }, [a, t.channel_id, t.id]), (0, r.jsx)(d.Provider, {
    value: null != o ? o : t,
    children: n
  })
}

function f(e) {
  let {
    message: t,
    children: n
  } = e;
  return (0, u.r8)(t) ? n : (0, r.jsx)(m, {
    message: t,
    children: n
  })
}