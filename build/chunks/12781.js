/** Chunk was on 85831 **/
t.a(e, async function(e, r) {
  try {
    t.d(n, {
      d: () => h
    });
    var l = t(255367);
    t(73800);
    var o = t(926302),
      i = t(442837),
      c = t(339085),
      a = t(633302),
      u = t(590956),
      s = t(488968),
      d = t(176354),
      f = e([o]);

    function h(e) {
      let {
        value: n,
        type: t
      } = e, r = (0, o.Kq)(), i = 1 === r.length && "paragraph" === r[0].type && 1 === r[0].value.length && "emoji" === r[0].value[0].type;
      switch (t) {
        case "unicode":
          return (0, l.jsx)(b, {
            value: n,
            jumboable: i
          });
        case "custom":
          return (0, l.jsx)(g, {
            value: n,
            jumboable: i
          })
      }
    }

    function b(e) {
      let {
        value: n,
        jumboable: t
      } = e, r = d.ZP.getURL(n), o = a.ZP.convertSurrogateToName(n), i = (0, s.d)();
      return (0, l.jsx)(u.c, {
        node: {
          name: o,
          src: r,
          jumboable: t
        },
        channelId: null == i ? void 0 : i.channelId,
        messageId: null == i ? void 0 : i.messageId
      })
    }

    function g(e) {
      var n;
      let {
        value: t,
        jumboable: r
      } = e, o = (0, s.d)(), a = null == o ? void 0 : o.guildId, d = (0, i.e7)([c.ZP], () => c.ZP.getDisambiguatedEmojiContext(a).getById(t.id), [a, t.id]), f = null != (n = null == d ? void 0 : d.name) ? n : t.name;
      return null != d && d.require_colons && (f = ":".concat(d.name, ":")), (0, l.jsx)(u.Y, {
        node: {
          name: f,
          animated: t.animated,
          emojiId: t.id,
          jumboable: r
        },
        channelId: null == o ? void 0 : o.channelId,
        messageId: null == o ? void 0 : o.messageId
      })
    }
    o = (f.then ? (await f)() : f)[0], r()
  } catch (e) {
    r(e)
  }
})