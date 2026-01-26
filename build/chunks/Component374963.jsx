/** Chunk was on 35894 **/
/** chunk id: 374963, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk111956 = require("./111956.js"),
  o = require.n(Chunk111956),
  Chunk33851 = require("./33851.js"),
  s = require.n(Chunk33851),
  Chunk136722 = require("./136722.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576705 = require("./576705.js"),
  Chunk504049 = require("./504049.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk512068 = require("./512068.jsx"),
  Chunk779662 = require("./779662.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk985911 = require("./985911.js");

function y(e) {
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

function O(e, t) {
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
let v = Chunk64700.forwardRef(function(e, t) {
  let {
    guild: n
  } = e, i = l.useRef(null), a = (0, u.bG)([p.A], () => p.A.hasDefaultSearchStateByGuildId(n.id), [n.id]), v = (0, u.bG)([C.A], () => C.A.can(c.kg(g.xB.MANAGE_GUILD, g.xB.KICK_MEMBERS), n)), _ = l.useCallback(() => {
    null != n && v && (0, d.mMO)(async () => e => (0, r.jsx)(b.A, O(y({}, e), {
      guild: n
    })))
  }, [n, v]), H = (0, u.bG)([p.A], () => p.A.getSearchStateByGuildId(n.id), [n.id], s()), w = (0, m.Ks)(n.id), [A, S] = l.useState(H.query), D = l.useCallback(e => {
    let t = e.trim();
    t.length > 0 && w(), (0, f.Ld)(n.id, {
      query: t
    })
  }, [n.id, w]), N = l.useMemo(() => o()(D, 300), [D]), L = l.useCallback(e => {
    S(e), N(e)
  }, [N]), P = l.useCallback(() => {
    S(""), D("")
  }, [D]);
  return l.useImperativeHandle(t, () => ({
    resetSearchText() {
      S("")
    }
  })), (0, r.jsxs)("div", {
    className: x.db,
    children: [(0, r.jsx)("div", {
      className: x.wL,
      children: a ? (0, r.jsx)(d.Heading, {
        variant: "heading-md/medium",
        children: h.intl.string(h.t.y12ALM)
      }) : (0, r.jsx)(d.Heading, {
        variant: "heading-md/medium",
        children: h.intl.string(h.t.BUqwK8)
      })
    }), (0, r.jsx)("div", {
      className: x.Rt,
      children: (0, r.jsx)("div", {
        className: x.wL,
        children: (0, r.jsx)(d.IWV, {
          size: "sm",
          query: A,
          placeholder: h.intl.string(h.t["NVoAM+"]),
          onChange: L,
          onClear: P,
          autoComplete: "off",
          inputProps: {
            autoCapitalize: "none",
            autoCorrect: "off",
            spellCheck: "false"
          }
        })
      })
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(d.YNO, {
        targetElementRef: i,
        animation: d.YNO.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, r.jsx)(j.default, {
          guildId: n.id,
          onClose: true
        }),
        children: e => {
          let {
            onClick: t
          } = e, n = function(e, t) {
            if (null == e) return {};
            var n, r, l, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
              return i
            }
            if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                  i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
              }(e, t), Object.getOwnPropertySymbols)
              for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }(e, ["onClick"]);
          return (0, r.jsx)(d.Button, O(y({}, n), {
            buttonRef: i,
            text: h.intl.string(h.t.XvNMNk),
            onClick: t,
            size: "sm",
            variant: "secondary",
            icon: d.JNJ
          }))
        }
      })
    }), (0, r.jsx)("div", {
      className: x.nw,
      children: v && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: x.__invalid_pruneButton,
        children: (0, r.jsx)(d.Button, {
          variant: "critical-secondary",
          size: "sm",
          text: h.intl.string(h.t["2mIlKQ"]),
          onClick: _,
          "aria-label": h.intl.string(h.t.zbyz7p)
        })
      })
    })]
  })
})