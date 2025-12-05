/** Chunk was on 89311 **/
/** chunk id: 499493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
    disableActivityProfileLinks: _,
    customCTA: I,
    popoutClassname: b,
    popoutPosition: O = "right"
  } = e, y = i.useRef(null), E = (0, s.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())), w = (0, s.e7)([u.default], () => u.default.getUser(t.author_id)), {
    nick: N,
    avatar: P
  } = i.useMemo(() => {
    let e = null == w ? true : w.getAvatarURL(null == E ? true : E.guild_id, 48, false);
    return {
      nick: m.ZP.getName(null == E ? true : E.guild_id, null == E ? true : E.id, w),
      avatar: e
    }
  }, [w, E]);
  return null == w ? null : (0, a.jsx)(o.yRy, {
    targetElementRef: y,
    position: O,
    renderPopout: e => {
      let {
        closePopout: i,
        updatePosition: l
      } = e;
      return (0, a.jsx)("div", {
        className: b,
        children: (0, a.jsx)(g.J, {
          entry: t,
          closePopout: i,
          updatePopoutPosition: l,
          onReaction: () => {
            null == r || r(), n(), i()
          },
          onUserPopoutClosed: () => i(),
          disableGameProfileLinks: true,
          disableActivityProfileLinks: _
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == j || j()
    },
    children: e => {
      var n, i;
      return (0, a.jsx)(o.P3F, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        innerRef: y
      }, e), i = i = {
        className: h.profileEntryCard,
        children: (0, a.jsx)(o.tEY, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("img", {
              className: h.avatar,
              src: P,
              alt: x.intl.formatToPlainString(x.t.IzVXxY, {
                userName: N
              })
            }), (0, a.jsx)("div", {
              className: h.playerInfo,
              children: (0, a.jsxs)("div", {
                className: l()(v.column, v.gapXs),
                children: [(0, a.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-strong",
                  lineClamp: 1,
                  children: N
                }), (0, a.jsx)(p.Gk, {
                  location: p.Gt.APP_LAUNCHER,
                  children: f.W.map((e, n) => (0, a.jsx)(e, {
                    entry: t
                  }, n))
                })]
              })
            }), null != I ? I : (0, a.jsx)("div", {
              className: h.reactions,
              children: (0, a.jsx)(o.n$P, {
                size: "sm"
              })
            })]
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}