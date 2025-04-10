/** Chunk was on 89311 **/
r.d(t, {
  Z: () => j
});
var n = r(200651),
  a = r(192379),
  i = r(120356),
  l = r.n(i),
  s = r(442837),
  o = r(481060),
  c = r(592125),
  u = r(944486),
  d = r(594174),
  m = r(5192),
  g = r(178762),
  f = r(91140),
  p = r(297781),
  O = r(388032),
  E = r(152790),
  N = r(263930);

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let j = e => {
  let {
    entry: t,
    onClose: r,
    onReaction: i,
    onRequestOpen: j,
    disableActivityProfileLinks: v,
    customCTA: b,
    popoutClassname: I,
    popoutPosition: y = "right"
  } = e, _ = a.useRef(null), P = (0, s.e7)([u.Z, c.Z], () => c.Z.getChannel(u.Z.getChannelId())), S = (0, s.e7)([d.default], () => d.default.getUser(t.author_id)), {
    nick: w,
    avatar: A
  } = a.useMemo(() => {
    let e = null == S ? void 0 : S.getAvatarURL(null == P ? void 0 : P.guild_id, 48, !1);
    return {
      nick: m.ZP.getName(null == P ? void 0 : P.guild_id, null == P ? void 0 : P.id, S),
      avatar: e
    }
  }, [S, P]);
  return null == S ? null : (0, n.jsx)(o.yRy, {
    targetElementRef: _,
    position: y,
    renderPopout: e => {
      let {
        closePopout: a,
        updatePosition: l
      } = e;
      return (0, n.jsx)("div", {
        className: I,
        children: (0, n.jsx)(g.J, {
          entry: t,
          closePopout: a,
          updatePopoutPosition: l,
          onReaction: () => {
            null == i || i(), r(), a()
          },
          onUserPopoutClosed: () => a(),
          disableGameProfileLinks: !0,
          disableActivityProfileLinks: v
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == j || j()
    },
    children: e => {
      let r = null != b ? x(h({}, e), {
        onClick: () => {}
      }) : e;
      return (0, n.jsx)(o.P3F, x(h({
        innerRef: _
      }, r), {
        className: E.profileEntryCard,
        children: (0, n.jsx)(o.tEY, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              className: E.avatar,
              src: A,
              alt: O.NW.formatToPlainString(O.t.IzVXxc, {
                userName: w
              })
            }), (0, n.jsx)("div", {
              className: E.playerInfo,
              children: (0, n.jsxs)("div", {
                className: l()(N.column, N.gapXs),
                children: [(0, n.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-primary",
                  lineClamp: 1,
                  children: w
                }), (0, n.jsx)(p.Gk, {
                  location: p.Gt.GAME_PROFILE,
                  children: f.W.map((e, r) => (0, n.jsx)(e, {
                    entry: t
                  }, r))
                })]
              })
            }), null != b ? b : (0, n.jsx)("div", {
              className: E.reactions,
              children: (0, n.jsx)(o.n$P, {
                size: "sm"
              })
            })]
          })
        })
      }))
    }
  })
}