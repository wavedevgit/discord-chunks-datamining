/** Chunk was on 72756 **/
/** chunk id: 4837, original params: e,n,t (module,exports,require) **/
require.a(module, async function(e, r) {
  try {
    t.d(n, {
      z: () => p
    });
    var l = t(627968);
    t(64700);
    var c = t(223535),
      a = t(311907),
      i = t(508675),
      o = t(7584),
      s = t(930101),
      u = t(78377),
      d = t(690521),
      h = e([c]);

    function p(e) {
      let {
        value: n,
        type: t
      } = e, r = (0, c.ER)(), a = 1 === r.length && "paragraph" === r[0].type && 1 === r[0].value.length && "emoji" === r[0].value[0].type;
      switch (t) {
        case "unicode":
          return (0, l.jsx)(j, {
            value: n,
            jumboable: a
          });
        case "custom":
          return (0, l.jsx)(f, {
            value: n,
            jumboable: a
          })
      }
    }

    function j(e) {
      let {
        value: n,
        jumboable: t
      } = e, r = d.Ay.getURL(n), c = o.Ay.convertSurrogateToName(n), a = (0, u.p)();
      return (0, l.jsx)(s.H, {
        node: {
          name: c,
          src: r,
          jumboable: t
        },
        channelId: null == a ? true : a.channelId,
        messageId: null == a ? true : a.messageId
      })
    }

    function f(e) {
      var n;
      let {
        value: t,
        jumboable: r
      } = e, c = (0, u.p)(), o = null == c ? true : c.guildId, d = (0, a.bG)([i.Ay], () => i.Ay.getDisambiguatedEmojiContext(o).getById(t.id), [o, t.id]), h = null != (n = null == d ? true : d.name) ? n : t.name;
      return null != d && d.require_colons && (h = ":".concat(d.name, ":")), (0, l.jsx)(s.X, {
        node: {
          name: h,
          animated: t.animated,
          emojiId: t.id,
          jumboable: r
        },
        channelId: null == c ? true : c.channelId,
        messageId: null == c ? true : c.messageId
      })
    }
    c = (h.then ? (await h)() : h)[0], r()
  } catch (e) {
    r(e)
  }
})