/** Chunk was on 91968 **/
/** chunk id: 721611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk81239 = require("./81239.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk996435 = require("./996435.js"),
  Chunk700425 = require("./700425.js"),
  Chunk183794 = require("./183794.js");

function g(e) {
  let {
    category: t,
    onClick: n,
    active: o
  } = e, {
    useTitle: i,
    useSubnavLabel: l,
    key: s
  } = t, d = null == i ? true : i(), b = null == l ? true : l(), y = null != b ? b : d;
  return c()(null != y, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(u.mh, {
    id: s,
    children: e => {
      var t, i;
      return (0, r.jsx)(f.P3F, (t = function(e) {
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
      }({
        onClick: n,
        className: a()(p.item, {
          [p.active]: o
        })
      }, e), i = i = {
        children: y
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t), s)
    }
  })
}

function m(e) {
  let {
    categories: t
  } = e, n = b.Z.useField("currentCategoryKey");
  (0, d.ZP)(() => {
    t.some(e => e.key === n) || b.Z.setState({
      currentCategoryKey: t[0].key
    })
  });
  let i = o.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]),
    {
      thumbRef: a,
      trackRef: l,
      thumbAnchorRef: c,
      springs: u
    } = function(e) {
      let t = o.useRef(null),
        n = o.useRef(null),
        r = o.useRef(null),
        i = o.useRef(true),
        [a, l] = (0, f.q_F)(() => ({
          y: 0,
          height: 0,
          config: {
            mass: .1,
            friction: 20,
            tension: 300
          }
        }));
      return o.useLayoutEffect(() => {
        if (null == t.current || null == n.current || null == r.current) return;
        let [e, o] = [t.current.getBoundingClientRect(), r.current.getBoundingClientRect()];
        if (i.current) {
          i.current = false, a.y.set(o.y - e.y), a.height.set(o.height);
          return
        }
        l({
          y: o.y - e.y,
          height: o.height
        })
      }, [e, l, a.y, a.height]), {
        thumbRef: n,
        trackRef: t,
        thumbAnchorRef: r,
        springs: a
      }
    }(i);
  return (0, y.l)(), (0, r.jsxs)("div", {
    className: p.subnav,
    role: "list",
    style: {
      "--custom-nav-count": t.length,
      "--custom-nav-index": i
    },
    children: [(0, r.jsx)("div", {
      className: p.track,
      "aria-hidden": "true",
      ref: l,
      children: (0, r.jsx)(s.animated.div, {
        className: p.thumb,
        style: u,
        ref: a
      })
    }), (0, r.jsx)("div", {
      className: p.thumbAnchor,
      "aria-hidden": "true",
      ref: c
    }), t.map(e => (0, r.jsx)(g, {
      onClick: () => {
        var t;
        return t = e.key, void b.Z.setState({
          requestedTargetKey: t,
          showNavigationMobile: false
        })
      },
      active: e.key === n,
      category: e
    }, e.key))]
  })
}