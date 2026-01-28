/** Chunk was on 5606 **/
/** chunk id: 965563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk711014 = require("./711014.js"),
  Chunk403362 = require("./403362.js"),
  Chunk612025 = require("./612025.js"),
  Chunk303351 = require("./303351.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk208227 = require("./208227.js");
let g = {
  label: () => _.intl.string(_.t["32u1Dx"]),
  value: Chunk612025.YG
};

function f() {
  let {
    selectedGuildId: e,
    setSelectedGuildId: t
  } = (0, u.xk)(), n = (0, l.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()), _ = (0, l.bG)([o.A], () => o.A.getGuilds()), {
    hideGuildOptions: f,
    hideGlobalOption: b
  } = (0, p.Z)(), h = n[0];
  i.useEffect(() => {
    b && f || (e === u.YG && e !== h && b && t(h), e !== u.YG && f && t(u.YG))
  }, [e, t, b, f, h]);
  let A = i.useMemo(() => {
    var e, t;
    let i = f ? [] : n.map(e => {
      let t = _[e];
      return null == t ? null : {
        id: t.id,
        label: t.name,
        value: t.id,
        leading: (0, r.jsx)(a.A, {
          className: m.cl,
          guild: t,
          size: a.A.Sizes.SMALLER,
          active: true
        })
      }
    }).filter(d.Vq);
    return b || i.unshift((e = function(e) {
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
    }({}, g), t = t = {
      id: g.value,
      label: g.label(),
      leading: (0, r.jsx)("div", {
        className: m.KP,
        children: (0, r.jsx)(s.pVd, {
          size: "sm",
          color: "white",
          "aria-hidden": true,
          className: m.cl
        })
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e)), i
  }, [f, n, b, _]);
  return (0, r.jsx)(s.ZiE, {
    selectionMode: "single",
    onSelectionChange: e => {
      t(e)
    },
    value: e,
    options: A
  })
}