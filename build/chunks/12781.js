/** Chunk was on 85831 **/
t.d(n, {
  d: () => d
});
var r = t(200651);
t(192379);
var l = t(442837),
  i = t(339085),
  o = t(633302),
  u = t(590956),
  c = t(488968),
  a = t(176354);

function d(e) {
  let {
    value: n,
    type: t
  } = e;
  switch (t) {
    case "unicode":
      return (0, r.jsx)(s, {
        value: n
      });
    case "custom":
      return (0, r.jsx)(f, {
        value: n
      })
  }
}

function s(e) {
  let {
    value: n
  } = e, t = a.ZP.getURL(n), l = o.ZP.convertSurrogateToName(n), i = (0, c.d)();
  return (0, r.jsx)(u.c, {
    node: {
      name: l,
      src: t
    },
    channelId: null == i ? void 0 : i.channelId,
    messageId: null == i ? void 0 : i.messageId
  })
}

function f(e) {
  var n;
  let {
    value: t
  } = e, o = (0, c.d)(), a = null == o ? void 0 : o.guildId, d = (0, l.e7)([i.ZP], () => i.ZP.getDisambiguatedEmojiContext(a).getById(t.id), [a, t.id]), s = null != (n = null == d ? void 0 : d.name) ? n : t.name;
  return null != d && d.require_colons && (s = ":".concat(d.name, ":")), (0, r.jsx)(u.Y, {
    node: {
      name: s,
      animated: t.animated,
      emojiId: t.id
    },
    channelId: null == o ? void 0 : o.channelId,
    messageId: null == o ? void 0 : o.messageId
  })
}