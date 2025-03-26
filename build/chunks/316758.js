/** Chunk was on 52272 **/
n.d(t, {
  IV: () => s,
  P: () => u,
  fH: () => c,
  sk: () => p,
  xt: () => d
});
var r = n(166459),
  i = n(966390),
  o = n(476326),
  a = n(703558),
  l = n(398805);
async function s(e, t, n) {
  let r = (0, l.Yk)(t, n),
    i = await fetch(n);
  return c(e, t, new File([await i.blob()], r, {
    type: "image/gif"
  })), n
}

function c(e, t, n) {
  let i = {
    id: t,
    channelId: e,
    file: n,
    platform: o.ow.WEB
  };
  r.Z.addFile({
    file: i,
    channelId: e,
    draftType: a.d.Poll
  })
}
async function u(e, t, n) {
  r.Z.remove(e, t, a.d.Poll)
}
async function d(e) {
  r.Z.clearAll(e, a.d.Poll)
}
async function p(e) {
  let {
    channel: t,
    items: n,
    poll: r,
    nonce: o,
    maxSizeCallback: l
  } = e;
  return i.Z.uploadFiles({
    channelId: t.id,
    uploads: n,
    draftType: a.d.Poll,
    parsedMessage: {
      content: "",
      tts: !1,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    },
    options: {
      nonce: o,
      poll: r
    },
    raiseEndpointErrors: !0
  })
}