/** Chunk was on web.js **/
/** chunk id: 540204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk823379 = require("./823379.js"),
  Chunk997950 = require("./997950.js"),
  Chunk816108 = require("./816108.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk913498 = require("./913498.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
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

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = {
  label: () => _.intl.string(_.t["32u1Dx"]),
  value: Chunk997950.Th
};

function O() {
  let {
    selectedGuildId: e,
    setSelectedGuildId: t
  } = (0, f.xu)(), n = (0, a.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()), _ = (0, a.e7)([c.Z], () => c.Z.getGuilds()), {
    hideGuildOptions: m,
    hideGlobalOption: E
  } = (0, p.b)(), O = n[0];
  i.useEffect(() => {
    E && m || (e === f.Th && e !== O && E && t(O), e !== f.Th && m && t(f.Th))
  }, [e, t, E, m, O]);
  let v = e => {
      t(e)
    },
    S = i.useMemo(() => {
      let e = m ? [] : n.map(e => {
        let t = _[e];
        return null == t ? null : {
          label: t.name,
          value: t.id
        }
      }).filter(d.lm);
      return E || e.unshift(b(g({}, y), {
        label: y.label()
      })), e
    }, [m, n, E, _]),
    I = i.useCallback(e => {
      let t = (null == e ? true : e.label) === y.label() && (null == e ? true : e.value) === y.value;
      return null == e || "" === e.value || t ? (0, r.jsx)("div", {
        className: h.clydeIconContainer,
        children: (0, r.jsx)(s.gw7, {
          size: "sm",
          color: "white",
          "aria-hidden": true,
          className: h.guildSelectOptionIcon
        })
      }) : (0, r.jsx)(l.Z, {
        className: h.guildSelectOptionIcon,
        guild: _[e.value],
        size: l.Z.Sizes.SMALLER,
        active: true
      })
    }, [_]);
  return (0, r.jsx)(o.d, {
    wrapperClassName: h.searchableSelect,
    onChange: v,
    value: e,
    options: S,
    renderOptionPrefix: I
  })
}