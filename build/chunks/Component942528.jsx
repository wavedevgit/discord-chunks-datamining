/** Chunk was on 13530 **/
/** chunk id: 942528, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
    onClose: l,
    onReaction: a,
    onRequestOpen: v,
    disableActivityProfileLinks: b,
    customCTA: y,
    popoutClassname: A,
    popoutPosition: N = "right"
  } = e, O = i.useRef(null), _ = (0, s.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())), I = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)), {
    nick: w,
    avatar: S
  } = i.useMemo(() => {
    let e = null == I ? true : I.getAvatarURL(null == _ ? true : _.guild_id, 48, false);
    return {
      nick: m.Ay.getName(null == _ ? true : _.guild_id, null == _ ? true : _.id, I),
      avatar: e
    }
  }, [I, _]);
  return null == I ? null : (0, n.jsx)(o.YNO, {
    targetElementRef: O,
    position: N,
    renderPopout: e => {
      let {
        closePopout: i,
        updatePosition: r
      } = e;
      return (0, n.jsx)("div", {
        className: A,
        children: (0, n.jsx)(x.Oo, {
          entry: t,
          closePopout: i,
          updatePopoutPosition: r,
          onReaction: () => {
            null == a || a(), l(), i()
          },
          onUserPopoutClosed: () => i(),
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
      var l, i;
      return (0, n.jsx)(o.DUT, (l = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = l[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        innerRef: O
      }, e), i = i = {
        className: p.GA,
        children: (0, n.jsx)(o.vN3, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              className: p.my,
              src: S,
              alt: h.intl.formatToPlainString(h.t.IzVXxY, {
                userName: w
              })
            }), (0, n.jsx)("div", {
              className: p.Su,
              children: (0, n.jsxs)("div", {
                className: r()(j.fi, j.Kt),
                children: [(0, n.jsx)(o.Text, {
                  variant: "text-md/medium",
                  color: "text-strong",
                  lineClamp: 1,
                  children: w
                }), (0, n.jsx)(g.mG, {
                  location: g.N5.APP_LAUNCHER,
                  children: f.n.map((e, l) => (0, n.jsx)(e, {
                    entry: t
                  }, l))
                })]
              })
            }), null != y ? y : (0, n.jsx)("div", {
              className: p.Br,
              children: (0, n.jsx)(o.W4J, {
                size: "sm"
              })
            })]
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          l.push.apply(l, n)
        }
        return l
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
      }), l))
    }
  })
}