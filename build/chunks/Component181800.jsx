/** Chunk was on 67564 **/
/** chunk id: 181800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk624458 = require("./624458.js"),
  Chunk408213 = require("./408213.js"),
  Chunk212455 = require("./212455.js"),
  Chunk967198 = require("./967198.js"),
  Chunk636449 = require("./636449.js"),
  Chunk263715 = require("./263715.js"),
  Chunk928568 = require("./928568.js"),
  Chunk842452 = require("./842452.jsx"),
  Chunk357064 = require("./357064.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk971090 = require("./971090.js");

function y(e) {
  let {
    onActivate: t,
    children: n
  } = e, o = l.useRef(null), d = (0, i.bG)([u.A], () => u.A.hasJoinRequestCoackmark()), p = l.useCallback(() => {
    c.Ay.clearCoachmark()
  }, []), h = (0, a.A)(d), f = l.useRef(null);
  return l.useEffect(() => {
    if (d && d !== h) {
      var e, n, r, l, i;
      t(), null == (i = f.current) || null == (l = i.ref) || null == (r = l.current) || null == (n = r.layerRef) || null == (e = n.current) || e.updatePosition()
    }
  }, [f, d, h, t]), (0, r.jsxs)("div", {
    className: A.kL,
    children: [(0, r.jsx)(s.YNO, {
      ref: f,
      targetElementRef: o,
      shouldShow: d,
      renderPopout: () => (0, r.jsxs)("div", {
        className: A.jC,
        children: [(0, r.jsxs)("div", {
          className: A.Bm,
          children: [(0, r.jsxs)("div", {
            className: A.q3,
            children: [(0, r.jsx)(s.Heading, {
              variant: "heading-md/medium",
              children: b.intl.string(b.t["0YV0YE"])
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: b.intl.string(b.t["0UQVDL"])
            })]
          }), (0, r.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: b.intl.string(b.t["4r+amb"]),
            fullWidth: true,
            onClick: p
          })]
        }), (0, r.jsx)("div", {
          className: A.ed
        })]
      }),
      position: "right",
      animationPosition: "right",
      align: "top",
      spacing: 16,
      children: e => {
        var t, n;
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
        }({}, e), n = n = {
          className: A.Ne,
          ref: o
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    }), n]
  })
}

function _(e) {
  let {
    onActivate: t
  } = e, [n, _] = l.useState(false), O = (0, i.bG)([d.A], () => d.A.getGuildId()), j = (0, i.bG)([u.A], () => u.A.hasFetchedRequestToJoinGuilds), v = (0, f.A)(), x = (0, a.A)(O), E = l.useMemo(() => {
    let e = (0, h.xW)({
      folderId: p.U.PENDING_JOIN_REQUESTS_FOLDER,
      folderName: b.intl.string(b.t["scsU+l"]),
      expanded: n,
      guildIds: []
    });
    for (let t of v) e.children.push((0, h.EL)(t, e.id));
    return e
  }, [v, n]);
  l.useEffect(() => {
    n && !j && o.A.fetchRequestToJoinGuilds()
  }, [n, j]);
  let C = null != O && v.includes(O);
  return (l.useEffect(() => {
    !n && C && x !== O && _(true)
  }, [n, C, x, O]), 0 === v.length) ? null : (0, r.jsx)(y, {
    onActivate: t,
    children: (0, r.jsx)(g.A, {
      folderNode: E,
      expanded: n,
      selected: C,
      draggable: false,
      sorting: false,
      onExpandCollapse: () => {
        _(!n), c.Ay.clearCoachmark()
      },
      folderButtonSize: "icon",
      folderButtonContent: (0, r.jsx)("div", {
        className: A.rH,
        children: (0, r.jsx)(s.Qfk, {
          size: "sm",
          color: "currentColor"
        })
      }),
      renderChildNode: function(e, t, n) {
        return e.type !== h.PJ.GUILD ? null : (0, r.jsx)(m.A, {
          guildNode: e,
          "aria-setsize": n,
          "aria-posinset": t
        }, e.id)
      }
    })
  })
}