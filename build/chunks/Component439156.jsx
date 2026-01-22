/** Chunk was on 97492 **/
/** chunk id: 439156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk435371 = require("./435371.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk470934 = require("./470934.js"),
  Chunk898190 = require("./898190.js"),
  Chunk998418 = require("./998418.js"),
  Chunk220628 = require("./220628.js"),
  Chunk933337 = require("./933337.jsx"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk294590 = require("./294590.js");

function y(e) {
  var t, n;
  let {
    guildId: i,
    powerup: y,
    compact: O,
    iconSize: j,
    size: v,
    grow: x,
    className: E,
    onError: _
  } = e, {
    onActivate: C,
    isLoading: S,
    error: I
  } = (0, p.A)(i, y), {
    isLoading: N,
    error: T
  } = (0, d.A)(i, y), P = (0, h.A)(i, y), w = (0, f.Ay)(i, y), R = w.type !== b.b_.INACTIVE, {
    disabled: D,
    reason: M
  } = (0, u.A)(i, y, R), L = null != M ? {
    title: null,
    body: M
  } : function(e, t) {
    if (e.type === b.b_.LEVEL_ACTIVATED) {
      var n, r;
      return {
        title: m.intl.string(g.default["9oYuvb"]),
        body: m.intl.formatToPlainString(g.default.WRRYUT, {
          perkName: null != (n = null == (r = e.sourcePowerup) ? true : r.title) ? n : m.intl.string(m.t.BfF6ED)
        })
      }
    }
    return e.type === b.b_.POWERUP_ACTIVATED ? {
      title: m.intl.string(g.default.TZsu1U),
      body: m.intl.formatToPlainString(g.default["5HQUzD"], {
        boostCount: t.cost
      })
    } : null
  }(w, y);
  return l.useEffect(() => {
    null == _ || _(null != I ? I : T)
  }, [I, T, _]), (0, r.jsx)(s.un, {
    body: null != (t = null == L ? true : L.body) ? t : "",
    title: null != (n = null == L ? true : L.title) ? n : true,
    shouldShow: null != L,
    delay: 100,
    "aria-label": null != M ? M : R ? m.intl.string(g.default.TZsu1U) : true,
    children: (0, r.jsx)("div", {
      className: a()(A.zr, {
        [A._o]: x,
        [A.nB]: !x
      }, E),
      children: (() => {
        let {
          text: e,
          icon: t
        } = function(e) {
          let {
            cost: t,
            isActive: n,
            compact: l,
            iconSize: i
          } = e, a = null != i ? i : "sm", s = n ? c.x8N : c._Jp;
          return l ? {
            text: t.toString(),
            icon: s
          } : {
            text: m.intl.format(n ? g.default.uzQpQd : g.default.ad2Mfj, {
              boostCount: t,
              dotHook: () => (0, r.jsx)("span", {
                className: A.Om,
                children: "•"
              }),
              boostIconHook: () => (0, r.jsx)(s, {
                size: a,
                color: "currentColor",
                className: A.$J
              })
            })
          }
        }({
          cost: y.cost,
          isActive: R,
          compact: O,
          iconSize: j
        });
        return (0, r.jsx)(o.$nd, function(e) {
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
          variant: R ? "secondary" : "primary",
          "aria-label": m.intl.string(R ? g.default.TZsu1U : g.default.gSxlHf),
          disabled: D,
          onClick: e => {
            e.stopPropagation(), R ? P() : C()
          },
          loading: S || N,
          fullWidth: x,
          size: null != v ? v : O ? "md" : true,
          text: e,
          minWidth: 0
        }, O ? {
          icon: t
        } : {}))
      })()
    })
  })
}