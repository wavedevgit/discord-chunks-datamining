/** Chunk was on 89311 **/
/** chunk id: 499493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk702504 = require("./702504.js"),
  Chunk456486 = require("./456486.js");
let v = e => {
  let {
    entry: t,
    onClose: n,
    onReaction: l,
    onRequestOpen: v,
    disableActivityProfileLinks: O,
    customCTA: y,
    popoutClassname: I,
    popoutPosition: b = "right"
  } = e, E = r.useRef(null), N = (0, s.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())), P = (0, s.e7)([u.default], () => u.default.getUser(t.author_id)), {
    nick: w,
    avatar: S
  } = r.useMemo(() => {
    let e = null == P ? true : P.getAvatarURL(null == N ? true : N.guild_id, 48, false);
    return {
      nick: m.ZP.getName(null == N ? true : N.guild_id, null == N ? true : N.id, P),
      avatar: e
    }
  }, [P, N]);
  return null == P ? null : (0, i.jsx)(o.yRy, {
    targetElementRef: E,
    position: b,
    renderPopout: e => {
      let {
        closePopout: r,
        updatePosition: a
      } = e;
      return (0, i.jsx)("div", {
        className: I,
        children: (0, i.jsx)(f.J, {
          entry: t,
          closePopout: r,
          updatePopoutPosition: a,
          onReaction: () => {
            null == l || l(), n(), r()
          },
          onUserPopoutClosed: () => r(),
          disableGameProfileLinks: true,
          disableActivityProfileLinks: O
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == v || v()
    },
    children: e => {
      var n, r;
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
      }, e), r = r = {
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
              alt: x.intl.formatToPlainString(x.t.IzVXxc, {
                userName: w
              })
            }), (0, i.jsx)("div", {
              className: h.playerInfo,
              children: (0, i.jsxs)("div", {
                className: a()(j.column, j.gapXs),
                children: [(0, i.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-primary",
                  lineClamp: 1,
                  children: w
                }), (0, i.jsx)(g.Gk, {
                  location: g.Gt.APP_LAUNCHER,
                  children: p.W.map((e, n) => (0, i.jsx)(e, {
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
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  })
}