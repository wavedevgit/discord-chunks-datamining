/** Chunk was on 27069 **/
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
    onNoneSelect: l,
    onClose: a
  } = e;
  return (0, n.jsx)(i.v2r, {
    navId: "widget-game-tags",
    "aria-label": s.intl.string(s.t.r6EJOj),
    onClose: a,
    onSelect: () => {},
    children: Object.entries(c.aE).map(e => {
      let [a, o] = e, u = ((e, a) => {
        let o = [];
        return a.type === c.kd.RADIO && o.push((0, n.jsx)(i.k5B, {
          id: "".concat(e, "-none"),
          group: e,
          label: s.intl.string(s.t.PoWNfX),
          checked: !a.tags.some(e => t.includes(e)),
          action: () => l(a.tags)
        }, "none")), a.tags.forEach(l => {
          let s = c.XV[l];
          null != s && (a.type === c.kd.RADIO ? o.push((0, n.jsx)(i.k5B, {
            id: l,
            group: e,
            label: s.getText(),
            checked: t.includes(l),
            action: () => r(l, true)
          }, l)) : o.push((0, n.jsx)(i.S89, {
            id: l,
            label: s.getText(),
            checked: t.includes(l),
            action: () => r(l, false)
          }, l)))
        }), o
      })(a, o);
      return (0, n.jsx)(i.kSQ, {
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
    applicationId: f
  } = e, g = (0, l.useRef)(null), {
    trackUserProfileAction: b
  } = (0, a.KZ)(), p = (0, l.useMemo)(() => null != t ? t : [], [t]), O = (0, l.useCallback)(function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = new Set(p);
    if (t) {
      let t = Object.values(c.aE).find(t => t.tags.includes(e));
      null != t && (t.tags.forEach(e => {
        n.delete(e)
      }), n.add(e), b({
        action: "ADD_GAME_TAGS"
      }))
    } else n.has(e) ? (n.delete(e), b({
      action: "REMOVE_GAME_TAGS"
    })) : (n.add(e), b({
      action: "ADD_GAME_TAGS"
    }));
    (0, o.n$)(r, f, Array.from(n))
  }, [p, b, r, f]), m = (0, l.useCallback)(e => {
    let t = new Set(p);
    e.forEach(e => {
      t.delete(e)
    }), b({
      action: "REMOVE_GAME_TAGS"
    }), (0, o.n$)(r, f, Array.from(t))
  }, [p, b, r, f]);
  return (0, n.jsx)(i.yRy, {
    targetElementRef: g,
    position: "right",
    align: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(d, {
        currentTags: p,
        onTagSelect: O,
        onNoneSelect: m,
        onClose: t
      })
    },
    children: e => {
      var t, r;
      return (0, n.jsx)("div", {
        ref: g,
        children: (0, n.jsx)(i.P3F, (t = function(e) {
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
          children: (0, n.jsx)(i.Text, {
            variant: "text-xxs/medium",
            color: "text-secondary",
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