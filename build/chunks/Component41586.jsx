/** Chunk was on 6850 **/
/** chunk id: 41586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk954955 = require("./954955.js"),
  i = require.n(Chunk954955),
  Chunk498607 = require("./498607.js"),
  s = require.n(Chunk498607),
  Chunk149765 = require("./149765.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk102560 = require("./102560.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk910693 = require("./910693.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk855935 = require("./855935.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk756151 = require("./756151.js");

function v(e) {
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
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = Chunk647438.forwardRef(function(e, t) {
  let {
    guild: n
  } = e, o = l.useRef(null), a = (0, u.e7)([p.Z], () => p.Z.hasDefaultSearchStateByGuildId(n.id), [n.id]), O = (0, u.e7)([m.Z], () => m.Z.can(c.$e(j.Pl.MANAGE_GUILD, j.Pl.KICK_MEMBERS), n)), _ = l.useCallback(() => {
    null != n && O && (0, d.ZDy)(async () => e => (0, r.jsx)(C.Z, y(v({}, e), {
      guild: n
    })))
  }, [n, O]), H = (0, u.e7)([p.Z], () => p.Z.getSearchStateByGuildId(n.id), [n.id], s()), w = (0, b.gm)(n.id), [N, S] = l.useState(H.query), D = l.useCallback(e => {
    let t = e.trim();
    t.length > 0 && w(), (0, f.Dr)(n.id, {
      query: t
    })
  }, [n.id, w]), Z = l.useMemo(() => i()(D, 300), [D]), R = l.useCallback(e => {
    S(e), Z(e)
  }, [Z]), L = l.useCallback(() => {
    S(""), D("")
  }, [D]);
  return l.useImperativeHandle(t, () => ({
    resetSearchText() {
      S("")
    }
  })), (0, r.jsxs)("div", {
    className: x.searchHeaderContainer,
    children: [(0, r.jsx)("div", {
      className: x.searchHeader,
      children: a ? (0, r.jsx)(d.X6q, {
        variant: "heading-md/medium",
        children: g.intl.string(g.t.y12ALC)
      }) : (0, r.jsx)(d.X6q, {
        variant: "heading-md/medium",
        children: g.intl.string(g.t.BUqwKy)
      })
    }), (0, r.jsx)("div", {
      className: x.searchInput,
      children: (0, r.jsx)("div", {
        className: x.searchHeader,
        children: (0, r.jsx)(d.E1j, {
          size: "sm",
          className: x.searchBar,
          query: N,
          placeholder: g.intl.string(g.t.NVoAMz),
          onChange: R,
          onClear: L,
          autoComplete: "off",
          inputProps: {
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: "false"
          }
        })
      })
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(d.yRy, {
        targetElementRef: o,
        animation: d.yRy.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, r.jsx)(h.Z, {
          guildId: n.id,
          onClose: true
        }),
        children: e => {
          var {
            onClick: t
          } = e, n = function(e, t) {
            if (null == e) return {};
            var n, r, l = function(e, t) {
              if (null == e) return {};
              var n, r, l = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
              return l
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
            }
            return l
          }(e, ["onClick"]);
          return (0, r.jsx)(d.zxk, y(v({}, n), {
            buttonRef: o,
            text: g.intl.string(g.t.XvNMNj),
            onClick: t,
            size: "sm",
            variant: "secondary",
            icon: d.uVW
          }))
        }
      })
    }), (0, r.jsx)("div", {
      className: x.tableOptions,
      children: O && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: x.__invalid_pruneButton,
        children: (0, r.jsx)(d.zxk, {
          variant: "critical-secondary",
          size: "sm",
          text: g.intl.string(g.t["2mIlKS"]),
          onClick: _,
          "aria-label": g.intl.string(g.t.zbyz7u)
        })
      })
    })]
  })
})