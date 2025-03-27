/** Chunk was on 31649 **/
n.d(t, {
  Z: () => c
}), n(566702);
var r = n(913527),
  i = n.n(r),
  l = n(695346),
  o = n(626135),
  a = n(337953),
  s = n(875425),
  u = n(981631);

function c(e) {
  let {
    text: t,
    emojiInfo: n,
    clearAfter: r,
    analyticsContext: c,
    createdAtMs: d,
    prompt: p
  } = e, m = t.trim();
  if (!(m.length > 0) && null == n) return l.Ok.updateSetting(void 0);
  {
    let e = l.Ok.updateSetting({
      text: m.length > 0 ? m : "",
      expiresAtMs: null != r && r !== s.FO.DONT_CLEAR ? String(i()().add((0, a.Z)(r), "ms").toDate().getTime()) : "0",
      emojiId: null != n && null != n.id ? n.id : "0",
      emojiName: null != n ? n.name : "",
      createdAtMs: String(null != d ? d : i()().toDate().getTime())
    });
    return o.default.track(u.rMx.CUSTOM_STATUS_UPDATED, {
      location: null != c ? c.location : null,
      emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
      text_len: m.length,
      clear_after: null != r ? "".concat(r) : null,
      prompt_type: null == p ? void 0 : p.value
    }), e
  }
}