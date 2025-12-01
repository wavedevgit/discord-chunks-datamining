/** Chunk was on web.js **/
/** chunk id: 540204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk823379 = require("./823379.js"),
  Chunk997950 = require("./997950.js"),
  Chunk816108 = require("./816108.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk790604 = require("./790604.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = {
  label: () => Chunk388032.intl.string(Chunk388032.t["32u1Dx"]),
  value: Chunk997950.Th
};

function y() {
  let {
    selectedGuildId: e,
    setSelectedGuildId: t
  } = (0, Chunk997950.xu)(), n = (0, Chunk442837.e7)([Chunk771845.ZP], () => Chunk771845.ZP.getFlattenedGuildIds()), p = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuilds()), {
    hideGuildOptions: m,
    hideGlobalOption: g
  } = (0, Chunk816108.b)(), y = require[0];
  Chunk473749.useEffect(() => {
    g && m || (module === Chunk997950.Th && module !== y && g && exports(y), module !== Chunk997950.Th && m && exports(Chunk997950.Th))
  }, [module, exports, g, m, y]);
  let O = e => {
      t(e)
    },
    v = Chunk473749.useMemo(() => {
      let e = m ? [] : require.map(e => {
        let t = p[e];
        return null == t ? null : {
          label: t.name,
          value: t.id
        }
      }).filter(Chunk823379.lm);
      return g || module.unshift(E(h({}, b), {
        label: b.label()
      })), module
    }, [m, require, g, Chunk388032]),
    S = Chunk473749.useCallback(e => {
      let t = (null == e ? true : e.label) === b.label() && (null == e ? true : e.value) === b.value;
      return null == e || "" === e.value || t ? (0, r.jsx)("div", {
        className: _.clydeIconContainer,
        children: (0, r.jsx)(o.gw7, {
          size: "sm",
          color: "white",
          "aria-hidden": true,
          className: _.guildSelectOptionIcon
        })
      }) : (0, r.jsx)(s.Z, {
        className: _.guildSelectOptionIcon,
        guild: p[e.value],
        size: s.Z.Sizes.SMALLER,
        active: true
      })
    }, [Chunk388032]);
  return (0, Chunk54381.jsx)(Chunk481060.VcW, {
    wrapperClassName: Chunk790604.searchableSelect,
    onChange: O,
    value: module,
    options: v,
    renderOptionPrefix: S
  })
}