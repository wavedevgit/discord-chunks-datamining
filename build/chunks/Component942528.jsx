/** Chunk was on 13530 **/
/** chunk id: 942528, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk420706 = require("./420706.jsx"),
  Chunk322789 = require("./322789.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk505502 = require("./505502.js"),
  Chunk851822 = require("./851822.js");
let v = e => {
  let {
    entry: t,
    onClose: n,
    onReaction: i,
    onRequestOpen: v,
    disableActivityProfileLinks: b,
    customCTA: y,
    popoutClassname: O,
    popoutPosition: A = "right"
  } = e, _ = r.useRef(null), I = (0, s.bG)([u.A, c.A], () => c.A.getChannel(u.A.getChannelId())), w = (0, s.bG)([d.default], () => d.default.getUser(t.author_id)), {
    nick: N,
    avatar: S
  } = r.useMemo(() => {
    let e = null == w ? true : w.getAvatarURL(null == I ? true : I.guild_id, 48, false);
    return {
      nick: m.Ay.getName(null == I ? true : I.guild_id, null == I ? true : I.id, w),
      avatar: e
    }
  }, [w, I]);
  return null == w ? null : (0, l.jsx)(o.YNO, {
    targetElementRef: _,
    position: A,
    renderPopout: e => {
      let {
        closePopout: r,
        updatePosition: a
      } = e;
      return (0, l.jsx)("div", {
        className: O,
        children: (0, l.jsx)(f.Oo, {
          entry: t,
          closePopout: r,
          updatePopoutPosition: a,
          onReaction: () => {
            null == i || i(), n(), r()
          },
          onUserPopoutClosed: () => r(),
          disableGameProfileLinks: true,
          disableActivityProfileLinks: b
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == v || v()
    },
    children: e => {
      var n, r;
      return (0, l.jsx)(o.DUT, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({
        innerRef: _
      }, e), r = r = {
        className: j.GA,
        children: (0, l.jsx)(o.vN3, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("img", {
              className: j.my,
              src: S,
              alt: p.intl.formatToPlainString(p.t.IzVXxY, {
                userName: N
              })
            }), (0, l.jsx)("div", {
              className: j.Su,
              children: (0, l.jsxs)("div", {
                className: a()(h.fi, h.Kt),
                children: [(0, l.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-strong",
                  lineClamp: 1,
                  children: N
                }), (0, l.jsx)(x.mG, {
                  location: x.N5.APP_LAUNCHER,
                  children: g.n.map((e, n) => (0, l.jsx)(e, {
                    entry: t
                  }, n))
                })]
              })
            }), null != y ? y : (0, l.jsx)("div", {
              className: j.Br,
              children: (0, l.jsx)(o.W4J, {
                size: "sm"
              })
            })]
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  })
}