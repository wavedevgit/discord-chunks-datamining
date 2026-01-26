/** Chunk was on 35894 **/
/** chunk id: 17864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk551816 = require("./551816.js"),
  Chunk134413 = require("./134413.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk918372 = require("./918372.js"),
  Chunk27786 = require("./27786.js");

function b(e) {
  let {
    guild: t,
    onSubmit: i
  } = e, b = (0, a.bG)([d.A], () => d.A.getMembersCountByGuildId(t.id, c.Tu.NEW_GUILD_MEMBER), [t.id]), j = (0, a.bG)([d.A], () => {
    let e = d.A.getNewMemberTimestamp(t.id);
    return o()(e).format("h:mm A")
  }, [t.id]), g = (0, a.bG)([d.A], () => d.A.hasDefaultSearchStateByGuildId(t.id), [t.id]), h = l.useCallback(() => {
    (0, C.UD)(t.id), null == i || i()
  }, [t.id, i]), x = l.useCallback(() => {
    g ? h() : (0, s.mMO)(async () => {
      let {
        default: e
      } = await n.e("56562").then(n.bind(n, 470857));
      return t => {
        var n, l;
        return (0, r.jsx)(e, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, t), l = l = {
          onConfirm: h
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    })
  }, [h, g]), y = new Intl.NumberFormat(m.intl.currentLocale).format(b), O = (0, u.Y0)(t.id), v = (0, u.vA)(t.id), _ = l.useMemo(() => 1 + +!!O + +!!v, [O, v]);
  return 0 === b ? null : (0, r.jsxs)("tr", {
    className: f.iS,
    onClick: x,
    children: [(0, r.jsx)("td", {
      colSpan: 3,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: m.intl.format(m.t["/i5uJ1"], {
          count: y,
          date: j
        })
      })
    }), (0, r.jsx)("td", {
      colSpan: _
    }), (0, r.jsx)("td", {
      colSpan: 2,
      children: (0, r.jsx)("div", {
        className: p.$E,
        children: (0, r.jsx)(s.DUT, {
          onClick: x,
          className: f.Fu,
          children: (0, r.jsxs)(s.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: f.Lb,
            children: [(0, r.jsx)("div", {
              children: m.intl.string(m.t.rkyOzK)
            }), (0, r.jsx)(s.nys, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: f.Ke
            })]
          })
        })
      })
    })]
  })
}