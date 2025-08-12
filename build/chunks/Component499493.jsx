/** Chunk was on 89311 **/
/** chunk id: 499493, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk743842 = require("./743842.js"),
  Chunk110568 = require("./110568.js");
let h = e => {
  let {
    entry: t,
    onClose: r,
    onReaction: i,
    onRequestOpen: h,
    disableActivityProfileLinks: b,
    customCTA: O,
    popoutClassname: y,
    popoutPosition: _ = "right"
  } = e, I = a.useRef(null), w = (0, o.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())), P = (0, o.e7)([u.default], () => u.default.getUser(t.author_id)), {
    nick: E,
    avatar: N
  } = a.useMemo(() => {
    let e = null == P ? true : P.getAvatarURL(null == w ? true : w.guild_id, 48, false);
    return {
      nick: m.ZP.getName(null == w ? true : w.guild_id, null == w ? true : w.id, P),
      avatar: e
    }
  }, [P, w]);
  return null == P ? null : (0, n.jsx)(s.yRy, {
    targetElementRef: I,
    position: _,
    renderPopout: e => {
      let {
        closePopout: a,
        updatePosition: l
      } = e;
      return (0, n.jsx)("div", {
        className: y,
        children: (0, n.jsx)(g.J, {
          entry: t,
          closePopout: a,
          updatePopoutPosition: l,
          onReaction: () => {
            null == i || i(), r(), a()
          },
          onUserPopoutClosed: () => a(),
          disableGameProfileLinks: true,
          disableActivityProfileLinks: b
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == h || h()
    },
    children: e => {
      var r, a;
      return (0, n.jsx)(s.P3F, (r = function(e) {
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
        innerRef: I
      }, e), a = a = {
        className: j.profileEntryCard,
        children: (0, n.jsx)(s.tEY, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              className: j.avatar,
              src: N,
              alt: x.intl.formatToPlainString(x.t.IzVXxc, {
                userName: E
              })
            }), (0, n.jsx)("div", {
              className: j.playerInfo,
              children: (0, n.jsxs)("div", {
                className: l()(v.column, v.gapXs),
                children: [(0, n.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "text-primary",
                  lineClamp: 1,
                  children: E
                }), (0, n.jsx)(f.Gk, {
                  location: f.Gt.APP_LAUNCHER,
                  children: p.W.map((e, r) => (0, n.jsx)(e, {
                    entry: t
                  }, r))
                })]
              })
            }), null != O ? O : (0, n.jsx)("div", {
              className: j.reactions,
              children: (0, n.jsx)(s.n$P, {
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