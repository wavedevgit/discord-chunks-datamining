/** Chunk was on 6850 **/
/** chunk id: 852479, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk740900 = require("./740900.js"),
  Chunk241559 = require("./241559.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk266631 = require("./266631.js"),
  Chunk51237 = require("./51237.js");

function f(e) {
  let {
    guild: t,
    onSubmit: i
  } = e, f = (0, a.e7)([d.Z], () => d.Z.getMembersCountByGuildId(t.id, c.R_.NEW_GUILD_MEMBER), [t.id]), h = (0, a.e7)([d.Z], () => {
    let e = d.Z.getNewMemberTimestamp(t.id);
    return o()(e).format("h:mm A")
  }, [t.id]), g = (0, a.e7)([d.Z], () => d.Z.hasDefaultSearchStateByGuildId(t.id), [t.id]), j = l.useCallback(() => {
    (0, C.YO)(t.id), null == i || i()
  }, [t.id, i]), x = l.useCallback(() => {
    g ? j() : (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("24478").then(n.bind(n, 319481));
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
          onConfirm: j
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
  }, [j, g]), v = new Intl.NumberFormat(m.intl.currentLocale).format(f), y = (0, u.nX)(t.id), O = (0, u.xC)(t.id), H = l.useMemo(() => 1 + +!!y + +!!O, [y, O]);
  return 0 === f ? null : (0, r.jsxs)("tr", {
    className: p.newMembersNotice,
    onClick: x,
    children: [(0, r.jsx)("td", {
      colSpan: 3,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        children: m.intl.format(m.t["/i5uJ1"], {
          count: v,
          date: h
        })
      })
    }), (0, r.jsx)("td", {
      colSpan: H
    }), (0, r.jsx)("td", {
      colSpan: 2,
      children: (0, r.jsx)("div", {
        className: b.actionCell,
        children: (0, r.jsx)(s.P3F, {
          onClick: x,
          className: p.memberNoticeActionButton,
          children: (0, r.jsxs)(s.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: p.memberNoticeAction,
            children: [(0, r.jsx)("div", {
              children: m.intl.string(m.t.rkyOzK)
            }), (0, r.jsx)(s.tBG, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: p.memberNoticeActionIcon
            })]
          })
        })
      })
    })]
  })
}