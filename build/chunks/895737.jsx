/** Chunk was on 78431 **/
/** chunk id: 895737, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk891561 = require("./891561.jsx"),
  Chunk333866 = require("./333866.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk808110 = require("./808110.js");

function u(e) {
  let {
    closePopout: t,
    sortOptionContext: r
  } = e, {
    sortOption: o,
    setSortOption: s,
    onReset: u
  } = r, C = i.useMemo(() => c.kL.map(e => <l.k5B id={"".concat(e)} group={"sort-by"} label={(0, c.eJ)(e)} action={() => s(e)} checked={o === e} />), [s, o]);
  return <div className={d.__invalid_container}><l.v2r navId={"sort-and-view"} aria-label={a.intl.string(a.t["4jfWTE"])} hideScroller={true} onClose={t} onSelect={t}>{<l.kSQ label={a.intl.string(a.t.mBvLen)}>{C}</l.kSQ>}{<l.kSQ><l.sNh id={"reset-all"} className={d.clearText} label={(0, n.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: a.intl.string(a.t["3b//lJ"])
          })} action={u} /></l.kSQ>}</l.v2r></div>
}

function C() {
  let e = (0, Chunk891561.s)(),
    t = (0, Chunk333866.eJ)(module.sortOption),
    r = Chunk73800.useRef(null);
  return <Chunk481060.yRy targetElementRef={require} renderPopout={t => {
      let {
        closePopout: r
      } = t;
      return (0, n.jsx)(u, {
        closePopout: r,
        sortOptionContext: e
      })
    }} position={"bottom"} align={"left"}>{(e, i) => {
      var s, c;
      let {
        isShown: u
      } = i;
      return (0, n.jsxs)(o.zx, (s = function(e) {
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
      }({}, e), c = c = {
        buttonRef: r,
        size: o.zx.Sizes.MIN,
        color: o.zx.Colors.CUSTOM,
        className: d.sortDropdown,
        innerClassName: d.sortDropdownInner,
        children: [(0, n.jsx)(l.uVW, {
          size: "xs",
          color: "currentColor",
          "aria-label": a.intl.string(a.t["5cmFc3"])
        }), (0, n.jsx)(l.LZC, {
          size: 8,
          horizontal: true
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: t
        }), u ? (0, n.jsx)(l.u04, {
          size: "custom",
          color: "currentColor",
          width: 20
        }) : (0, n.jsx)(l.CJ0, {
          size: "custom",
          color: "currentColor",
          width: 20
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(c)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e))
      }), s))
    }}</Chunk481060.yRy>
}