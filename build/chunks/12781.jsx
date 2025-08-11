/** Chunk was on 85831 **/
/** chunk id: 12781, original params: e,n,t (module,exports,require) **/
require.a(module, async function(e, r) {
  try {
    t.d(n, {
      d: () => f
    });
    var l = t(255367);
    t(73800);
    var c = t(926302),
      i = t(442837),
      o = t(339085),
      a = t(633302),
      s = t(590956),
      u = t(488968),
      d = t(176354),
      h = e([c]);

    function f(e) {
      let {
        value: n,
        type: t
      } = e, r = (0, c.Kq)(), i = 1 === r.length && "paragraph" === r[0].type && 1 === r[0].value.length && "emoji" === r[0].value[0].type;
      switch (t) {
        case "unicode":
          return <j value={n} jumboable={i} />;
        case "custom":
          return <m value={n} jumboable={i} />
      }
    }

    function j(e) {
      let {
        value: n,
        jumboable: t
      } = e, r = d.ZP.getURL(n), c = a.ZP.convertSurrogateToName(n), i = (0, u.d)();
      return <s.c node={{
          name: c,
          src: r,
          jumboable: t
        }} channelId={null == i ? true : i.channelId} messageId={null == i ? true : i.messageId} />
    }

    function m(e) {
      var n;
      let {
        value: t,
        jumboable: r
      } = e, c = (0, u.d)(), a = null == c ? true : c.guildId, d = (0, i.e7)([o.ZP], () => o.ZP.getDisambiguatedEmojiContext(a).getById(t.id), [a, t.id]), h = null != (n = null == d ? true : d.name) ? n : t.name;
      return null != d && d.require_colons && (h = ":".concat(d.name, ":")), <s.Y node={{
          name: h,
          animated: t.animated,
          emojiId: t.id,
          jumboable: r
        }} channelId={null == c ? true : c.channelId} messageId={null == c ? true : c.messageId} />
    }
    c = (h.then ? (await h)() : h)[0], r()
  } catch (e) {
    r(e)
  }
})