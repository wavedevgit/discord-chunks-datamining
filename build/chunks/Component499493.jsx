/** Chunk was on 89311 **/
/** chunk id: 499493, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
let h = e => {
  let {
    entry: t,
    onClose: r,
    onReaction: l,
    onRequestOpen: h,
    disableActivityProfileLinks: v,
    customCTA: b,
    popoutClassname: y,
    popoutPosition: P = "right"
  } = e, w = i.useRef(null), I = (0, s.e7)([u.Z, c.Z], () => c.Z.getChannel(u.Z.getChannelId())), E = (0, s.e7)([d.default], () => d.default.getUser(t.author_id)), {
    nick: N,
    avatar: S
  } = i.useMemo(() => {
    let e = null == E ? true : E.getAvatarURL(null == I ? true : I.guild_id, 48, false);
    return {
      nick: m.ZP.getName(null == I ? true : I.guild_id, null == I ? true : I.id, E),
      avatar: e
    }
  }, [E, I]);
  return null == E ? null : (0, n.jsx)(o.yRy, {
    targetElementRef: w,
    position: P,
    renderPopout: e => {
      let {
        closePopout: i,
        updatePosition: a
      } = e;
      return (0, n.jsx)("div", {
        className: y,
        children: (0, n.jsx)(p.J, {
          entry: t,
          closePopout: i,
          updatePopoutPosition: a,
          onReaction: () => {
            null == l || l(), r(), i()
          },
          onUserPopoutClosed: () => i(),
          disableGameProfileLinks: true,
          disableActivityProfileLinks: v
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == h || h()
    },
    children: e => {
      var r, i;
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
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        innerRef: w
      }, e), i = i = {
        className: x.profileEntryCard,
        children: (0, n.jsx)(o.tEY, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              className: x.avatar,
              src: S,
              alt: j.intl.formatToPlainString(j.t.IzVXxc, {
                userName: N
              })
            }), (0, n.jsx)("div", {
              className: x.playerInfo,
              children: (0, n.jsxs)("div", {
                className: a()(O.column, O.gapXs),
                children: [(0, n.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-primary",
                  lineClamp: 1,
                  children: N
                }), (0, n.jsx)(g.Gk, {
                  location: g.Gt.APP_LAUNCHER,
                  children: f.W.map((e, r) => (0, n.jsx)(e, {
                    entry: t
                  }, r))
                })]
              })
            }), null != b ? b : (0, n.jsx)("div", {
              className: x.reactions,
              children: (0, n.jsx)(o.n$P, {
                size: "sm"
              })
            })]
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r))
    }
  })
}