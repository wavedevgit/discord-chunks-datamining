/** Chunk was on 36073 **/
/** chunk id: 978369, original params: e,t,n (module,exports,require) **/
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
    onTagSelect: n,
    onNoneSelect: i,
    onClose: o
  } = e;
  return (0, r.jsx)(a.v2r, {
    navId: "widget-game-tags",
    "aria-label": s.intl.string(s.t.r6EJOj),
    onClose: o,
    onSelect: () => {},
    className: u.gameTagsMenu,
    children: Object.entries(c.aE).map(e => {
      let [o, l] = e, u = ((e, o) => {
        let l = [];
        return o.type === c.kd.RADIO && l.push((0, r.jsx)(a.k5B, {
          id: "".concat(e, "-none"),
          group: e,
          label: s.intl.string(s.t.PoWNfX),
          checked: !o.tags.some(e => t.includes(e)),
          action: () => i(o.tags)
        }, "none")), o.tags.forEach(i => {
          let s = c.XV[i];
          null != s && (o.type === c.kd.RADIO ? l.push((0, r.jsx)(a.k5B, {
            id: i,
            group: e,
            label: s.getText(),
            checked: t.includes(i),
            action: () => n(i, true)
          }, i)) : l.push((0, r.jsx)(a.S89, {
            id: i,
            label: s.getText(),
            checked: t.includes(i),
            action: () => n(i, false)
          }, i)))
        }), l
      })(o, l);
      return (0, r.jsx)(a.kSQ, {
        label: l.getLabel(),
        children: u
      }, o)
    })
  })
});

function f(e) {
  let {
    tags: t,
    widgetType: n,
    applicationId: f,
    ref: g
  } = e, p = (0, i.useRef)(null), {
    trackUserProfileEditAction: b
  } = (0, o.KZ)(), m = (0, i.useMemo)(() => null != t ? t : [], [t]), O = (0, i.useCallback)(function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      r = new Set(m);
    if (t) {
      let t = Object.values(c.aE).find(t => t.tags.includes(e));
      null != t && (t.tags.forEach(e => {
        r.delete(e)
      }), r.add(e), b({
        action: "TAG_ADDED",
        widgetEdited: n,
        gameId: f
      }))
    } else r.has(e) ? (r.delete(e), b({
      action: "TAG_REMOVED",
      widgetEdited: n,
      gameId: f
    })) : (r.add(e), b({
      action: "TAG_ADDED",
      widgetEdited: n,
      gameId: f
    }));
    (0, l.n$)(n, f, Array.from(r))
  }, [m, b, n, f]), y = (0, i.useCallback)(e => {
    let t = new Set(m);
    e.forEach(e => {
      t.delete(e)
    }), b({
      action: "TAG_REMOVED",
      widgetEdited: n,
      gameId: f
    }), (0, l.n$)(n, f, Array.from(t))
  }, [m, b, n, f]);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: p,
    position: "right",
    align: "top",
    onRequestOpen: () => {
      b({
        action: "PRESS_ADD_TAG",
        widgetEdited: n
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(d, {
        currentTags: m,
        onTagSelect: O,
        onNoneSelect: y,
        onClose: t
      })
    },
    children: e => {
      var t, n;
      return (0, r.jsx)("div", {
        ref: e => (null != e && (p.current = e, g.current = e), () => {
          p.current = null, g.current = null
        }),
        children: (0, r.jsx)(a.P3F, (t = function(e) {
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
        }({}, e), n = n = {
          className: u.addButton,
          "aria-label": s.intl.string(s.t.r6EJOj),
          children: (0, r.jsx)(a.Text, {
            variant: "text-xxs/medium",
            color: "none",
            children: s.intl.string(s.t.fZSej4)
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    }
  })
}