/** Chunk was on 1267 **/
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
    onClose: o
  } = e;
  return (0, n.jsx)(l.v2r, {
    navId: "widget-game-tags",
    "aria-label": s.intl.string(s.t.r6EJOj),
    onClose: o,
    onSelect: () => {},
    className: u.gameTagsMenu,
    children: Object.entries(c.aE).map(e => {
      let [o, a] = e, u = ((e, o) => {
        let a = [];
        return o.type === c.kd.RADIO && a.push((0, n.jsx)(l.k5B, {
          id: "".concat(e, "-none"),
          group: e,
          label: s.intl.string(s.t.PoWNfX),
          checked: !o.tags.some(e => t.includes(e)),
          action: () => i(o.tags)
        }, "none")), o.tags.forEach(i => {
          let s = c.XV[i];
          null != s && (o.type === c.kd.RADIO ? a.push((0, n.jsx)(l.k5B, {
            id: i,
            group: e,
            label: s.getText(),
            checked: t.includes(i),
            action: () => r(i, true)
          }, i)) : a.push((0, n.jsx)(l.S89, {
            id: i,
            label: s.getText(),
            checked: t.includes(i),
            action: () => r(i, false)
          }, i)))
        }), a
      })(o, a);
      return (0, n.jsx)(l.kSQ, {
        label: a.getLabel(),
        children: u
      }, o)
    })
  })
});

function f(e) {
  let {
    tags: t,
    widgetType: r,
    applicationId: f,
    ref: g
  } = e, b = (0, i.useRef)(null), {
    trackUserProfileEditAction: p
  } = (0, o.KZ)(), O = (0, i.useMemo)(() => null != t ? t : [], [t]), y = (0, i.useCallback)(function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = new Set(O);
    if (t) {
      let t = Object.values(c.aE).find(t => t.tags.includes(e));
      null != t && (t.tags.forEach(e => {
        n.delete(e)
      }), n.add(e), p({
        action: "TAG_ADDED",
        widgetEdited: r,
        gameId: f
      }))
    } else n.has(e) ? (n.delete(e), p({
      action: "TAG_REMOVED",
      widgetEdited: r,
      gameId: f
    })) : (n.add(e), p({
      action: "TAG_ADDED",
      widgetEdited: r,
      gameId: f
    }));
    (0, a.n$)(r, f, Array.from(n))
  }, [O, p, r, f]), j = (0, i.useCallback)(e => {
    let t = new Set(O);
    e.forEach(e => {
      t.delete(e)
    }), p({
      action: "TAG_REMOVED",
      widgetEdited: r,
      gameId: f
    }), (0, a.n$)(r, f, Array.from(t))
  }, [O, p, r, f]);
  return (0, n.jsx)(l.yRy, {
    targetElementRef: b,
    position: "right",
    align: "top",
    onRequestOpen: () => {
      p({
        action: "PRESS_ADD_TAG",
        widgetEdited: r
      })
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(d, {
        currentTags: O,
        onTagSelect: y,
        onNoneSelect: j,
        onClose: t
      })
    },
    children: e => {
      var t, r;
      return (0, n.jsx)("div", {
        ref: e => (null != e && (b.current = e, g.current = e), () => {
          b.current = null, g.current = null
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