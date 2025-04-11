/** Chunk was on 89311 **/
r.d(t, {
  Z: () => h
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
let h = e => {
  let {
    entry: t,
    onClose: r,
    onReaction: i,
    onRequestOpen: h,
    disableActivityProfileLinks: x,
    customCTA: j,
    popoutClassname: v,
    popoutPosition: b = "right"
  } = e, I = a.useRef(null), y = (0, s.e7)([u.Z, c.Z], () => c.Z.getChannel(u.Z.getChannelId())), _ = (0, s.e7)([d.default], () => d.default.getUser(t.author_id)), {
    nick: P,
    avatar: S
  } = a.useMemo(() => {
    let e = null == _ ? void 0 : _.getAvatarURL(null == y ? void 0 : y.guild_id, 48, !1);
    return {
      nick: m.ZP.getName(null == y ? void 0 : y.guild_id, null == y ? void 0 : y.id, _),
      avatar: e
    }
  }, [_, y]);
  return null == _ ? null : (0, n.jsx)(o.yRy, {
    targetElementRef: I,
    position: b,
    renderPopout: e => {
      let {
        closePopout: a,
        updatePosition: l
      } = e;
      return (0, n.jsx)("div", {
        className: v,
        children: (0, n.jsx)(g.J, {
          entry: t,
          closePopout: a,
          updatePopoutPosition: l,
          onReaction: () => {
            null == i || i(), r(), a()
          },
          onUserPopoutClosed: () => a(),
          disableGameProfileLinks: !0,
          disableActivityProfileLinks: x
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == h || h()
    },
    children: e => {
      var r, a;
      return (0, n.jsx)(o.P3F, (r = function(e) {
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
      }({
        innerRef: I
      }, e), a = a = {
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
              src: S,
              alt: O.NW.formatToPlainString(O.t.IzVXxc, {
                userName: P
              })
            }), (0, n.jsx)("div", {
              className: E.playerInfo,
              children: (0, n.jsxs)("div", {
                className: l()(N.column, N.gapXs),
                children: [(0, n.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-primary",
                  lineClamp: 1,
                  children: P
                }), (0, n.jsx)(p.Gk, {
                  location: p.Gt.GAME_PROFILE,
                  children: f.W.map((e, r) => (0, n.jsx)(e, {
                    entry: t
                  }, r))
                })]
              })
            }), null != j ? j : (0, n.jsx)("div", {
              className: E.reactions,
              children: (0, n.jsx)(o.n$P, {
                size: "sm"
              })
            })]
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
      }), r))
    }
  })
}