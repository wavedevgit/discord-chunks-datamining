/** Chunk was on 34779 **/
/** chunk id: 110977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk593214 = require("./593214.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk761168 = require("./761168.js"),
  Chunk714509 = require("./714509.js"),
  Chunk375613 = require("./375613.js");

function f() {
  return <div className={o()(Chunk714509.row, Chunk714509.rowGuildName)}><span className={o()(Chunk714509.guildNameText, Chunk714509.guildNameTextLimitedSize, Chunk761168.tooltipText)}>{Chunk388032.intl.string(Chunk388032.t["4tSWQk"])}</span></div>
}
let g = Chunk73800.memo(function(e) {
  let {
    "aria-label": t = false,
    children: n
  } = e, l = function() {
    let {
      favoriteAdded: e,
      clearFavoriteAdded: t
    } = (0, a.up)();
    return i.useEffect(() => {
      if (e) {
        let e = setTimeout(() => {
          t()
        }, 1500);
        return () => {
          t(), clearTimeout(e)
        }
      }
    }, [e, t]), e
  }();
  return <s.ua7 forceOpen={l} color={s.FGA.GREEN} hideOnClick={true} spacing={12} position={"right"} align={"center"} text={(0, r.jsx)(f, {})} aria-label={t} tooltipClassName={p.listItemTooltip}>{e => {
      var t, i;
      return (0, r.jsx)("div", (t = function(e) {
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
      }({}, e), i = i = {
        onMouseEnter: c.dG4,
        onMouseLeave: c.dG4,
        children: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }}</s.ua7>
})