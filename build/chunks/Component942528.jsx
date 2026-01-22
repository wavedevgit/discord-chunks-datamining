/** Chunk was on 13530 **/
/** chunk id: 942528, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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
let h = e => {
  let {
    entry: t,
    onClose: n,
    onReaction: i,
    onRequestOpen: h,
    disableActivityProfileLinks: v,
    customCTA: y,
    popoutClassname: O,
    popoutPosition: A = "right"
  } = e, I = r.useRef(null), N = (0, s.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())), w = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
    nick: S,
    avatar: E
  } = r.useMemo(() => {
    let e = null == w ? true : w.getAvatarURL(null == N ? true : N.guild_id, 48, false);
    return {
      nick: m.Ay.getName(null == N ? true : N.guild_id, null == N ? true : N.id, w),
      avatar: e
    }
  }, [w, N]);
  return null == w ? null : (0, l.jsx)(o.YNO, {
    targetElementRef: I,
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
          disableActivityProfileLinks: v
        })
      })
    },
    positionKey: "'content-entry-".concat(t.id),
    onRequestOpen: () => {
      null == h || h()
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
        innerRef: I
      }, e), r = r = {
        className: g.GA,
        children: (0, l.jsx)(o.vN3, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("img", {
              className: g.my,
              src: E,
              alt: p.intl.formatToPlainString(p.t.IzVXxY, {
                userName: S
              })
            }), (0, l.jsx)("div", {
              className: g.Su,
              children: (0, l.jsxs)("div", {
                className: a()(j.fi, j.Kt),
                children: [(0, l.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-strong",
                  lineClamp: 1,
                  children: S
                }), (0, l.jsx)(b.mG, {
                  location: b.N5.APP_LAUNCHER,
                  children: x.n.map((e, n) => (0, l.jsx)(e, {
                    entry: t
                  }, n))
                })]
              })
            }), null != y ? y : (0, l.jsx)("div", {
              className: g.Br,
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