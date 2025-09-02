/** Chunk was on 83789 **/
/** chunk id: 978369, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44258 = require("./44258.js");
let d = Chunk647438.memo(function(e) {
  let {
    currentTags: t,
    onTagSelect: r,
    onNoneSelect: i,
    onClose: a
  } = e;
  return (0, n.jsx)(l.v2r, {
    navId: "widget-game-tags",
    "aria-label": s.intl.string(s.t.r6EJOj),
    onClose: a,
    onSelect: () => {},
    className: u.gameTagsMenu,
    children: Object.entries(c.aE).map(e => {
      let [a, o] = e, u = ((e, a) => {
        let o = [];
        return a.type === c.kd.RADIO && o.push((0, n.jsx)(l.k5B, {
          id: "".concat(e, "-none"),
          group: e,
          label: s.intl.string(s.t.PoWNfX),
          checked: !a.tags.some(e => t.includes(e)),
          action: () => i(a.tags)
        }, "none")), a.tags.forEach(i => {
          let s = c.XV[i];
          null != s && (a.type === c.kd.RADIO ? o.push((0, n.jsx)(l.k5B, {
            id: i,
            group: e,
            label: s.getText(),
            checked: t.includes(i),
            action: () => r(i, true)
          }, i)) : o.push((0, n.jsx)(l.S89, {
            id: i,
            label: s.getText(),
            checked: t.includes(i),
            action: () => r(i, false)
          }, i)))
        }), o
      })(a, o);
      return (0, n.jsx)(l.kSQ, {
        label: o.getLabel(),
        children: u
      }, a)
    })
  })
});

function f(e) {
  let {
    tags: t,
    widgetType: r,
    applicationId: f,
    ref: g
  } = e, p = (0, i.useRef)(null), {
    trackUserProfileAction: b
  } = (0, a.KZ)(), m = (0, i.useMemo)(() => null != t ? t : [], [t]), O = (0, i.useCallback)(function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = new Set(m);
    if (t) {
      let t = Object.values(c.aE).find(t => t.tags.includes(e));
      null != t && (t.tags.forEach(e => {
        n.delete(e)
      }), n.add(e), b({
        action: "EDIT_ACTION"
      }))
    } else n.has(e) ? n.delete(e) : n.add(e), b({
      action: "EDIT_ACTION"
    });
    (0, o.n$)(r, f, Array.from(n))
  }, [m, b, r, f]), j = (0, i.useCallback)(e => {
    let t = new Set(m);
    e.forEach(e => {
      t.delete(e)
    }), b({
      action: "EDIT_ACTION"
    }), (0, o.n$)(r, f, Array.from(t))
  }, [m, b, r, f]);
  return (0, n.jsx)(l.yRy, {
    targetElementRef: p,
    position: "right",
    align: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(d, {
        currentTags: m,
        onTagSelect: O,
        onNoneSelect: j,
        onClose: t
      })
    },
    children: e => {
      var t, r;
      return (0, n.jsx)("div", {
        ref: e => (null != e && (p.current = e, g.current = e), () => {
          p.current = null, g.current = null
        }),
        children: (0, n.jsx)(l.P3F, (t = function(e) {
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
        }({}, e), r = r = {
          className: u.addButton,
          "aria-label": s.intl.string(s.t.r6EJOj),
          children: (0, n.jsx)(l.Text, {
            variant: "text-xxs/medium",
            color: "none",
            children: s.intl.string(s.t.fZSej4)
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      })
    }
  })
}