/** Chunk was on 2928 **/
n.d(t, {
  Z: () => C
}), n(47120), n(230036), n(978209);
var r = n(200651),
  i = n(192379),
  l = n(392711),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  c = n(99690),
  u = n(359110),
  d = n(601070),
  p = n(91159),
  h = n(488131),
  f = n(496675),
  g = n(306680),
  m = n(594174),
  b = n(768581),
  y = n(709054),
  v = n(981631),
  O = n(124368),
  j = n(388032),
  _ = n(286608);

function C(e) {
  let {
    channel: t
  } = e, l = (0, a.Wu)([d.Z, g.ZP, f.Z], () => {
    let e = d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
    return o()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(o().values(d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && f.Z.can(v.Plq.VIEW_CHANNEL, t)).sort((e, t) => {
      let n = g.ZP.lastMessageId(e.id),
        r = g.ZP.lastMessageId(t.id);
      return y.default.compare(n, r)
    }).reverse().value()
  }), c = t.isForumLikeChannel() ? 5 : 3;
  return i.useEffect(() => {
    (0, p.q)()
  }, []), (0, r.jsxs)("div", {
    className: _.popout,
    children: [(0, r.jsx)(s.Text, {
      className: _.title,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: t.isForumLikeChannel() ? j.NW.string(j.t.ioVdOz) : j.NW.string(j.t.VNYs2t)
    }), l.slice(0, t.isForumLikeChannel() ? l.length : c).map(e => (0, r.jsx)(x, {
      thread: e
    }, e.id)).filter(e => i.isValidElement(e)).slice(0, c), (0, r.jsx)(s.P3F, {
      className: _.more,
      onClick: () => {
        t.isForumLikeChannel() ? (0, u.Kh)(t.id) : (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("36970").then(n.bind(n, 223901));
          return n => (0, r.jsx)(e, function(e) {
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
          }({
            channel: t
          }, n))
        })
      },
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: j.NW.string(j.t["4qdZ9/"])
      })
    })]
  })
}

function x(e) {
  let {
    thread: t
  } = e, n = (0, a.e7)([m.default], () => m.default.getUser(t.ownerId)), i = (0, p.Ok)(t);
  return (0, r.jsxs)(s.P3F, {
    className: _.row,
    onClick: e => {
      (0, h.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, O.on.POPOUT)
    },
    children: [null == n ? (0, r.jsx)("img", {
      className: _.avatar,
      src: b.ZP.getDefaultAvatarURL(void 0, void 0),
      alt: ""
    }) : (0, r.jsx)(c.Z, {
      className: _.avatar,
      user: n,
      size: s.EFr.SIZE_16
    }), (0, r.jsx)(s.Text, {
      className: _.name,
      variant: "text-sm/normal",
      color: "none",
      children: t.name
    }), (0, r.jsxs)(s.Text, {
      className: _.timestamp,
      variant: "text-sm/normal",
      color: "none",
      children: [(0, r.jsx)("span", {
        className: _.bullet,
        children: "•"
      }), (0, p.Ye)(i)]
    })]
  })
}