/** Chunk was on 51235 **/
/** chunk id: 836697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk693546 = require("./693546.js"),
  Chunk863249 = require("./863249.js"),
  Chunk937111 = require("./937111.js"),
  Chunk914010 = require("./914010.js"),
  Chunk289090 = require("./289090.js"),
  Chunk727258 = require("./727258.js"),
  Chunk234383 = require("./234383.js"),
  Chunk179809 = require("./179809.jsx"),
  Chunk588275 = require("./588275.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk284410 = require("./284410.js");

function O(e) {
  let {
    onActivate: t,
    children: n
  } = e, s = i.useRef(null), d = (0, l.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()), f = i.useCallback(() => {
    c.ZP.clearCoachmark()
  }, []), h = (0, o.Z)(d), p = i.useRef(null);
  return i.useEffect(() => {
    if (d && d !== h) {
      var e, n, r, i, l;
      t(), null == (l = p.current) || null == (i = l.ref) || null == (r = i.current) || null == (n = r.layerRef) || null == (e = n.current) || e.updatePosition()
    }
  }, [p, d, h, t]), (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsx)(a.yRy, {
      ref: p,
      targetElementRef: s,
      shouldShow: d,
      renderPopout: () => (0, r.jsxs)("div", {
        className: y.popoutContainer,
        children: [(0, r.jsxs)("div", {
          className: y.popoutContent,
          children: [(0, r.jsxs)("div", {
            className: y.coachmarkTextContainer,
            children: [(0, r.jsx)(a.Heading, {
              variant: "heading-md/medium",
              children: m.intl.string(m.t["0YV0YE"])
            }), (0, r.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: m.intl.string(m.t["0UQVDL"])
            })]
          }), (0, r.jsx)(a.Button, {
            variant: "primary",
            size: "sm",
            text: m.intl.string(m.t["4r+amb"]),
            fullWidth: true,
            onClick: f
          })]
        }), (0, r.jsx)("div", {
          className: y.popoutCaretLeft
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
          className: y.popoutAnchor,
          ref: s
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

function v(e) {
  let {
    onActivate: t
  } = e, [n, v] = i.useState(false), j = (0, l.e7)([d.Z], () => d.Z.getGuildId()), C = (0, l.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds), x = (0, p.Z)(), E = (0, o.Z)(j), S = i.useMemo(() => {
    let e = (0, h.qQ)({
      folderId: f.S.PENDING_JOIN_REQUESTS_FOLDER,
      folderName: m.intl.string(m.t["scsU+l"]),
      expanded: n,
      guildIds: []
    });
    for (let t of x) e.children.push((0, h.Mg)(t, e.id));
    return e
  }, [x, n]);
  i.useEffect(() => {
    n && !C && s.Z.fetchRequestToJoinGuilds()
  }, [n, C]);
  let I = null != j && x.includes(j);
  return (i.useEffect(() => {
    !n && I && E !== j && v(true)
  }, [n, I, E, j]), 0 === x.length) ? null : (0, r.jsx)(O, {
    onActivate: t,
    children: (0, r.jsx)(g.Z, {
      folderNode: S,
      expanded: n,
      selected: I,
      draggable: false,
      sorting: false,
      onExpandCollapse: () => {
        v(!n), c.ZP.clearCoachmark()
      },
      folderButtonSize: "icon",
      folderButtonContent: (0, r.jsx)("div", {
        className: y.pendingFolderButtonIcon,
        children: (0, r.jsx)(a.wGF, {
          size: "sm",
          color: "currentColor"
        })
      }),
      renderChildNode: function(e, t, n) {
        return e.type !== h.eD.GUILD ? null : (0, r.jsx)(b.Z, {
          guildNode: e,
          "aria-setsize": n,
          "aria-posinset": t
        }, e.id)
      }
    })
  })
}