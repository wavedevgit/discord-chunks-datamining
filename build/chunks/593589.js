/** Chunk was on 59645 **/
t.d(n, {
  Z: () => b
});
var i = t(200651),
  o = t(192379),
  r = t(481060),
  a = t(372900),
  c = t(238246),
  l = t(788983),
  u = t(207035),
  d = t(823748),
  _ = t(981631),
  s = t(540098);

function p(e) {
  let {
    windowKey: n,
    channel: t
  } = e;
  return (0, i.jsx)(c.Z, {
    withTitleBar: !0,
    windowKey: n,
    title: t.name,
    channelId: t.id,
    contentClassName: s.popoutContent,
    children: (0, i.jsx)(a.Z.Provider, {
      value: t.guild_id,
      children: (0, i.jsx)(d.Z, {
        providedChannel: t
      })
    })
  })
}

function b(e, n) {
  let t = (0, u.P)(n),
    a = o.useCallback(() => {
      l.bA("".concat(_.KJ3.CHANNEL_POPOUT, "-").concat(e.id), n => (0, i.jsx)(p, {
        windowKey: n,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return t ? (0, i.jsx)(r.sNh, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => a()
  }) : null
}