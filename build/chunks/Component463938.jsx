/** Chunk was on 97492 **/
/** chunk id: 463938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk701785 = require("./701785.js"),
  Chunk65995 = require("./65995.js"),
  Chunk976860 = require("./976860.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk949684 = require("./949684.js");

function m(e, t) {
  return (0, r.jsx)(o.Text, {
    variant: "text-xs/bold",
    color: "text-default",
    children: e
  }, t)
}
let A = Chunk64700.memo(function(e) {
  var t, n;
  let {
    guild: A
  } = e, y = (0, a.bG)([c.h], () => c.h.getNewMemberActions(A.id), [A.id]), O = (0, a.bG)([u.A], () => u.A.getCompletedActions(A.id)), j = l.useMemo(() => {
    if (null == y || null == O) return 0;
    let e = 0;
    return y.forEach(t => {
      null != O[t.channelId] && e++
    }), e
  }, [O, y]), v = null == y ? 0 : y.length, x = (0, i.rm)("progress-bar-".concat(A.id));
  return (0, r.jsxs)("li", {
    children: [(0, r.jsxs)(o.DUT, (t = function(e) {
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
    }({}, x), n = n = {
      role: "button",
      focusProps: {
        offset: {
          right: 4
        }
      },
      className: g.G9,
      onClick: function() {
        (0, d.pX)(p.BVt.CHANNEL(A.id, h.VV.GUILD_HOME))
      },
      children: [(0, r.jsxs)("div", {
        className: g.A1,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-sm/bold",
          children: b.intl.string(b.t.SnrR3x)
        }), (0, r.jsxs)("div", {
          className: g.Ib,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: g.Cv,
            children: b.intl.format(b.t.eqZ1lW, {
              numberHook: m,
              total: v.toString(),
              completed: j.toString()
            })
          }), (0, r.jsx)(f.A, {
            className: g.UE,
            width: 16,
            height: 16,
            direction: f.A.Directions.RIGHT
          })]
        })]
      }), (0, r.jsx)(o.kej, {
        className: g.hr,
        foregroundGradientColor: [s.A.unsafe_rawColors.GREEN_300.css, s.A.unsafe_rawColors.GREEN_230.css],
        percent: j / v * 100 + 3,
        animate: true
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), (0, r.jsx)("div", {
      role: "separator",
      className: g.yF
    })]
  })
})