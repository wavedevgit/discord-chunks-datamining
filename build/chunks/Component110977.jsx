/** Chunk was on 27 **/
/** chunk id: 110977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk593214 = require("./593214.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk448213 = require("./448213.js"),
  Chunk132789 = require("./132789.js"),
  Chunk78480 = require("./78480.js");

function f() {
  return (0, Chunk951288.jsx)("div", {
    className: o()(Chunk132789.row, Chunk132789.rowGuildName),
    children: (0, Chunk951288.jsx)("span", {
      className: o()(Chunk132789.guildNameText, Chunk132789.guildNameTextLimitedSize, Chunk448213.tooltipText),
      children: Chunk388032.intl.string(Chunk388032.t["4tSWQg"])
    })
  })
}
let g = Chunk647438.memo(function(e) {
  let {
    "aria-label": t = false,
    children: n
  } = e, l = function() {
    let {
      favoriteAdded: e,
      clearFavoriteAdded: t
    } = (0, s.up)();
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
  return (0, r.jsx)(a.aML, {
    forceOpen: l,
    color: a.r6K.GREEN,
    hideOnClick: true,
    spacing: 12,
    position: "right",
    align: "center",
    text: (0, r.jsx)(f, {}),
    "aria-label": t,
    tooltipClassName: h.listItemTooltip,
    children: e => {
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
    }
  })
})