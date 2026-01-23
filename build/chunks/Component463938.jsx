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

function b(e, t) {
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
  } = e, y = (0, s.bG)([c.h], () => c.h.getNewMemberActions(A.id), [A.id]), _ = (0, s.bG)([u.A], () => u.A.getCompletedActions(A.id)), O = l.useMemo(() => {
    if (null == y || null == _) return 0;
    let e = 0;
    return y.forEach(t => {
      null != _[t.channelId] && e++
    }), e
  }, [_, y]), j = null == y ? 0 : y.length, v = (0, i.rm)("progress-bar-".concat(A.id));
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
    }({}, v), n = n = {
      role: "button",
      focusProps: {
        offset: {
          right: 4
        }
      },
      className: m.G9,
      onClick: function() {
        (0, d.pX)(h.BVt.CHANNEL(A.id, f.VV.GUILD_HOME))
      },
      children: [(0, r.jsxs)("div", {
        className: m.A1,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-sm/bold",
          children: g.intl.string(g.t.SnrR3x)
        }), (0, r.jsxs)("div", {
          className: m.Ib,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: m.Cv,
            children: g.intl.format(g.t.eqZ1lW, {
              numberHook: b,
              total: j.toString(),
              completed: O.toString()
            })
          }), (0, r.jsx)(p.A, {
            className: m.UE,
            width: 16,
            height: 16,
            direction: p.A.Directions.RIGHT
          })]
        })]
      }), (0, r.jsx)(o.kej, {
        className: m.hr,
        foregroundGradientColor: [a.A.unsafe_rawColors.GREEN_300.css, a.A.unsafe_rawColors.GREEN_230.css],
        percent: O / j * 100 + 3,
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
      className: m.yF
    })]
  })
})