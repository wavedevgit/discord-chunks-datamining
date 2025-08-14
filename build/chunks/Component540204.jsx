/** Chunk was on 7384 **/
/** chunk id: 540204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let h = {
  label: () => Chunk388032.intl.string(Chunk388032.t["32u1Dw"]),
  value: Chunk997950.Th
};

function f() {
  let {
    selectedGuildId: e,
    setSelectedGuildId: t
  } = (0, Chunk997950.xu)(), n = (0, Chunk442837.e7)([Chunk771845.ZP], () => Chunk771845.ZP.getFlattenedGuildIds()), p = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuilds()), {
    hideGuildOptions: f,
    hideGlobalOption: b
  } = (0, Chunk816108.b)(), x = require[0];
  Chunk73800.useEffect(() => {
    b && f || (module === Chunk997950.Th && module !== x && b && exports(x), module !== Chunk997950.Th && f && exports(Chunk997950.Th))
  }, [module, exports, b, f, x]);
  let _ = Chunk73800.useMemo(() => {
      var e, t;
      let i = f ? [] : require.map(e => {
        let t = p[e];
        return null == t ? null : {
          label: t.name,
          value: t.id
        }
      }).filter(Chunk823379.lm);
      return b || Chunk255367.unshift((e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, h), t = t = {
        label: h.label()
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(exports)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), module)), Chunk255367
    }, [f, require, b, Chunk388032]),
    j = Chunk73800.useCallback(e => {
      let t = (null == e ? true : e.label) === h.label() && (null == e ? true : e.value) === h.value;
      return null == e || "" === e.value || t ? (0, i.jsx)("div", {
        className: g.clydeIconContainer,
        children: (0, i.jsx)(a.gw7, {
          size: "sm",
          color: "white",
          "aria-hidden": true,
          className: g.guildSelectOptionIcon
        })
      }) : (0, i.jsx)(l.Z, {
        className: g.guildSelectOptionIcon,
        guild: p[e.value],
        size: l.Z.Sizes.SMALLER,
        active: true
      })
    }, [Chunk388032]);
  return (0, Chunk255367.jsx)(Chunk481060.VcW, {
    wrapperClassName: Chunk790604.searchableSelect,
    onChange: e => {
      t(e)
    },
    value: module,
    options: _,
    renderOptionPrefix: j
  })
}