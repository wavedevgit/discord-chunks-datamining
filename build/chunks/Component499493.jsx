/** Chunk was on 89311 **/
/** chunk id: 499493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk178762 = require("./178762.jsx"),
  Chunk91140 = require("./91140.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk192025 = require("./192025.js"),
  Chunk226788 = require("./226788.js");
let j = e => {
  let {
    entry: t,
    onClose: n,
    onReaction: r,
    onRequestOpen: j,
    disableActivityProfileLinks: O,
    customCTA: y,
    popoutClassname: I,
    popoutPosition: b = "right"
  } = e, E = l.useRef(null), N = (0, s.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())), w = (0, s.e7)([u.default], () => u.default.getUser(t.author_id)), {
    nick: P,
    avatar: S
  } = l.useMemo(() => {
    let e = null == w ? true : w.getAvatarURL(null == N ? true : N.guild_id, 48, false);
    return {
      nick: m.ZP.getName(null == N ? true : N.guild_id, null == N ? true : N.id, w),
      avatar: e
    }
  }, [w, N]);
  return null == w ? null : (0, i.jsx)(o.yRy, {
    targetElementRef: E,
    position: b,
    renderPopout: e => {
      let {
        closePopout: l,
        updatePosition: a
      } = e;
      return (0, i.jsx)("div", {
        className: I,
        children: (0, i.jsx)(f.J, {
          entry: t,
          closePopout: l,
          updatePopoutPosition: a,
          onReaction: () => {
            null == r || r(), n(), l()
          },
          onUserPopoutClosed: () => l(),
          disableGameProfileLinks: true,
          disableActivityProfileLinks: O
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == j || j()
    },
    children: e => {
      var n, l;
      return (0, i.jsx)(o.P3F, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        innerRef: E
      }, e), l = l = {
        className: h.profileEntryCard,
        children: (0, i.jsx)(o.tEY, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: h.avatar,
              src: S,
              alt: x.intl.formatToPlainString(x.t.IzVXxY, {
                userName: P
              })
            }), (0, i.jsx)("div", {
              className: h.playerInfo,
              children: (0, i.jsxs)("div", {
                className: a()(v.column, v.gapXs),
                children: [(0, i.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-primary",
                  lineClamp: 1,
                  children: P
                }), (0, i.jsx)(p.Gk, {
                  location: p.Gt.APP_LAUNCHER,
                  children: g.W.map((e, n) => (0, i.jsx)(e, {
                    entry: t
                  }, n))
                })]
              })
            }), null != y ? y : (0, i.jsx)("div", {
              className: h.reactions,
              children: (0, i.jsx)(o.n$P, {
                size: "sm"
              })
            })]
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n))
    }
  })
}