/** Chunk was on 52272 **/
n.d(t, {
  Z: () => y
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  l = n(904245),
  s = n(541716),
  c = n(419922),
  u = n(665906),
  d = n(271383),
  p = n(496675),
  m = n(594174),
  f = n(626135),
  h = n(709054),
  g = n(838440),
  _ = n(981631),
  b = n(970548);

function v(e) {
  let {
    assets: t,
    currentUser: n,
    message: r
  } = e, i = (h.default.extractTimestamp(n.id) + h.default.extractTimestamp(r.id)) % t.length;
  return t[i]
}

function x(e) {
  let {
    currentUser: t,
    channel: n,
    message: o,
    buttonLabels: u,
    stickers: d,
    event: p,
    eventProperties: m
  } = e, [h, _] = i.useState(!1), x = i.useMemo(() => v({
    assets: d,
    currentUser: t,
    message: o
  }), [d, t, o]), y = i.useMemo(() => v({
    assets: u,
    currentUser: t,
    message: o
  }), [u, t, o]), E = i.useCallback(async () => {
    let {
      valid: e
    } = await (0, g.v)({
      type: s.Ie.FORM,
      content: "",
      channel: n
    });
    e && (! function(e) {
      let {
        channel: t,
        message: n,
        sticker: r
      } = e;
      l.Z.sendGreetMessage(t.id, r.id, l.Z.getSendMessageOptionsForReply({
        channel: t,
        message: n,
        shouldMention: !0,
        showMentionToggle: !0
      }))
    }({
      channel: n,
      message: o,
      sticker: x
    }), function(e) {
      let {
        sticker: t,
        event: n,
        eventProperties: r
      } = e;
      if (null != n) {
        var i, o;
        f.default.track(n, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, r), o = o = {
          sticker_id: t.id
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    }({
      sticker: x,
      event: p,
      eventProperties: m
    }))
  }, [n, o, x, p, m]);
  return (0, r.jsxs)(a.zxk, {
    className: b.CTAMessageButtonOuter,
    innerClassName: b.CTAMessageButton,
    color: a.Ttl.PRIMARY,
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    onClick: E,
    children: [(0, r.jsx)(c.Z, {
      className: b.CTAMessageSticker,
      isInteracting: h,
      sticker: x,
      size: 28
    }), y]
  })
}

function y(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: i,
    stickers: a,
    event: l,
    eventProperties: s
  } = e, c = m.default.getCurrentUser(), f = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: r
    } = e;
    return (0, o.e7)([p.Z, d.ZP], () => {
      var e;
      let i = t.guild_id;
      if (null == r || null == i) return !1;
      let o = (0, u.xl)(t),
        a = p.Z.can(_.Plq.SEND_MESSAGES, t),
        l = null === (e = d.ZP.getMember(i, r.id)) || void 0 === e ? void 0 : e.isPending,
        s = n.author.bot;
      return a && !o && !l && !s
    })
  }({
    channel: t,
    message: n,
    currentUser: c
  });
  return null != c && f ? (0, r.jsx)("div", {
    className: b.CTAMessage,
    children: (0, r.jsx)(x, {
      currentUser: c,
      channel: t,
      message: n,
      buttonLabels: i,
      stickers: a,
      event: l,
      eventProperties: s
    })
  }) : null
}