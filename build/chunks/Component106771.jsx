/** Chunk was on 35755 **/
/** chunk id: 106771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk973616 = require("./973616.js"),
  Chunk783097 = require("./783097.js"),
  Chunk176412 = require("./176412.js"),
  Chunk570949 = require("./570949.jsx"),
  Chunk753972 = require("./753972.jsx"),
  Chunk532309 = require("./532309.js"),
  Chunk934347 = require("./934347.js"),
  Chunk413097 = require("./413097.js");

function h(e) {
  var t;
  let {
    command: n,
    application: h,
    onClick: v,
    query: y,
    searchResultsPosition: g
  } = e, x = l.useCallback(e => {
    if ((0, s.BQ)(h)) {
      let t = h instanceof o.ZP ? h : o.ZP.createFromServer(h);
      (0, a.vq)(e, e => (0, i.jsx)(u.Z, function(e) {
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
      }({
        application: t
      }, e)))
    }
  }, [h]), {
    iconURL: b,
    name: N,
    description: j
  } = l.useMemo(() => (0, s.sl)(h, {
    fakeAppIconURL: f
  }), [h]), C = l.useMemo(() => {
    var e;
    let t = null != (e = null == n ? true : n.displayDescription) ? e : j;
    return null == t ? null : (0, c.ae)(t, true)
  }, [j, null == n ? true : n.displayDescription]), {
    trackSearchResultsItemImpressionRef: E
  } = (0, p.Z)({
    applicationId: h.id,
    commandId: null == n ? true : n.id,
    query: y,
    searchResultsPosition: g
  });
  return (0, i.jsx)(r.P3F, {
    className: m.clickable,
    innerRef: e => {
      E.current = e
    },
    onClick: v,
    onContextMenu: x,
    children: (0, i.jsxs)(r.Rny, {
      className: m.focusBlock,
      children: [(0, i.jsx)(d.Z, {
        src: b,
        className: m.icon,
        "aria-hidden": true,
        rendersPlaceholder: true
      }), (0, i.jsxs)("div", {
        className: m.cmdDetails,
        children: [(0, i.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: null != (t = null == n ? true : n.displayName) ? t : N
        }), (0, i.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: C
        })]
      }), null != n ? (0, i.jsx)(r.Text, {
        className: m.cmdAppName,
        variant: "text-sm/normal",
        color: "text-secondary",
        children: N
      }) : null, (0, i.jsx)("div", {
        className: m.underline
      })]
    })
  })
}