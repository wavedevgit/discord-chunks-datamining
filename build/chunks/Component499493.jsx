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
    disableActivityProfileLinks: b,
    customCTA: _,
    popoutClassname: I,
    popoutPosition: O = "right"
  } = e, y = i.useRef(null), P = (0, o.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())), w = (0, o.e7)([u.default], () => u.default.getUser(t.author_id)), {
    nick: E,
    avatar: C
  } = i.useMemo(() => {
    let e = null == w ? true : w.getAvatarURL(null == P ? true : P.guild_id, 48, false);
    return {
      nick: m.ZP.getName(null == P ? true : P.guild_id, null == P ? true : P.id, w),
      avatar: e
    }
  }, [w, P]);
  return null == w ? null : (0, a.jsx)(s.yRy, {
    targetElementRef: y,
    position: O,
    renderPopout: e => {
      let {
        closePopout: i,
        updatePosition: l
      } = e;
      return (0, a.jsx)("div", {
        className: I,
        children: (0, a.jsx)(g.J, {
          entry: t,
          closePopout: i,
          updatePopoutPosition: l,
          onReaction: () => {
            null == r || r(), n(), i()
          },
          onUserPopoutClosed: () => i(),
          disableGameProfileLinks: true,
          disableActivityProfileLinks: b
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == j || j()
    },
    children: e => {
      var n, i;
      return (0, a.jsx)(s.P3F, (n = function(e) {
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
        className: v.profileEntryCard,
        children: (0, a.jsx)(s.tEY, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("img", {
              className: v.avatar,
              src: C,
              alt: x.intl.formatToPlainString(x.t.IzVXxY, {
                userName: E
              })
            }), (0, a.jsx)("div", {
              className: v.playerInfo,
              children: (0, a.jsxs)("div", {
                className: l()(h.column, h.gapXs),
                children: [(0, a.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "text-strong",
                  lineClamp: 1,
                  children: E
                }), (0, a.jsx)(p.Gk, {
                  location: p.Gt.APP_LAUNCHER,
                  children: f.W.map((e, n) => (0, a.jsx)(e, {
                    entry: t
                  }, n))
                })]
              })
            }), null != _ ? _ : (0, a.jsx)("div", {
              className: v.reactions,
              children: (0, a.jsx)(s.n$P, {
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