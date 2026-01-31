/** Chunk was on 17534 **/
/** chunk id: 439156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
    iconSize: _,
    size: j,
    grow: x,
    className: v,
    onError: E
  } = e, {
    onActivate: C,
    isLoading: S,
    error: I
  } = (0, p.A)(i, y), {
    isLoading: N,
    error: T
  } = (0, d.A)(i, y), P = (0, g.A)(i, y), w = (0, h.Ay)(i, y), R = w.type !== f.b_.INACTIVE, {
    disabled: D,
    reason: L
  } = (0, u.A)(i, y, R), M = null != L ? {
    title: null,
    body: L
  } : function(e, t) {
    if (e.type === f.b_.LEVEL_ACTIVATED) {
      var n, r;
      return {
        title: b.intl.string(m.default["9oYuvb"]),
        body: b.intl.formatToPlainString(m.default.WRRYUT, {
          perkName: null != (n = null == (r = e.sourcePowerup) ? true : r.title) ? n : b.intl.string(b.t.BfF6ED)
        })
      }
    }
    return e.type === f.b_.POWERUP_ACTIVATED ? {
      title: b.intl.string(m.default.TZsu1U),
      body: b.intl.formatToPlainString(m.default["5HQUzD"], {
        boostCount: t.cost
      })
    } : null
  }(w, y);
  return l.useEffect(() => {
    null == E || E(null != I ? I : T)
  }, [I, T, E]), (0, r.jsx)(a.un, {
    body: null != (t = null == M ? true : M.body) ? t : "",
    title: null != (n = null == M ? true : M.title) ? n : true,
    shouldShow: null != M,
    delay: 100,
    "aria-label": null != L ? L : R ? b.intl.string(m.default.TZsu1U) : true,
    children: (0, r.jsx)("div", {
      className: s()(A.zr, {
        [A._o]: x,
        [A.nB]: !x
      }, v),
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
          } = e, s = null != i ? i : "sm", a = n ? c.x8N : c._Jp;
          return l ? {
            text: t.toString(),
            icon: a
          } : {
            text: b.intl.format(n ? m.default.uzQpQd : m.default.ad2Mfj, {
              boostCount: t,
              dotHook: () => (0, r.jsx)("span", {
                className: A.Om,
                children: "•"
              }),
              boostIconHook: () => (0, r.jsx)(a, {
                size: s,
                color: "currentColor",
                className: A.$J
              })
            })
          }
        }({
          cost: y.cost,
          isActive: R,
          compact: O,
          iconSize: _
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
          "aria-label": b.intl.string(R ? m.default.TZsu1U : m.default.gSxlHf),
          disabled: D,
          onClick: e => {
            e.stopPropagation(), R ? P() : C()
          },
          loading: S || N,
          fullWidth: x,
          size: null != j ? j : O ? "md" : true,
          text: e,
          minWidth: 0
        }, O ? {
          icon: t
        } : {}))
      })()
    })
  })
}