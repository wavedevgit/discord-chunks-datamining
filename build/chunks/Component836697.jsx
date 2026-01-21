/** Chunk was on 82124 **/
/** chunk id: 836697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function v(e) {
  let {
    onActivate: t,
    children: n
  } = e, s = i.useRef(null), d = (0, l.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()), p = i.useCallback(() => {
    c.ZP.clearCoachmark()
  }, []), f = (0, o.Z)(d), h = i.useRef(null);
  return i.useEffect(() => {
    if (d && d !== f) {
      var e, n, r, i, l;
      t(), null == (l = h.current) || null == (i = l.ref) || null == (r = i.current) || null == (n = r.layerRef) || null == (e = n.current) || e.updatePosition()
    }
  }, [h, d, f, t]), (0, r.jsxs)("div", {
    className: y.container,
    children: [(0, r.jsx)(a.yRy, {
      ref: h,
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
              children: b.intl.string(b.t["0YV0YE"])
            }), (0, r.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: b.intl.string(b.t["0UQVDL"])
            })]
          }), (0, r.jsx)(a.Button, {
            variant: "primary",
            size: "sm",
            text: b.intl.string(b.t["4r+amb"]),
            fullWidth: true,
            onClick: p
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

function O(e) {
  let {
    onActivate: t
  } = e, [n, O] = i.useState(false), j = (0, l.e7)([d.Z], () => d.Z.getGuildId()), x = (0, l.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds), C = (0, h.Z)(), E = (0, o.Z)(j), S = i.useMemo(() => {
    let e = (0, f.qQ)({
      folderId: p.S.PENDING_JOIN_REQUESTS_FOLDER,
      folderName: b.intl.string(b.t["scsU+l"]),
      expanded: n,
      guildIds: []
    });
    for (let t of C) e.children.push((0, f.Mg)(t, e.id));
    return e
  }, [C, n]);
  i.useEffect(() => {
    n && !x && s.Z.fetchRequestToJoinGuilds()
  }, [n, x]);
  let _ = null != j && C.includes(j);
  return (i.useEffect(() => {
    !n && _ && E !== j && O(true)
  }, [n, _, E, j]), 0 === C.length) ? null : (0, r.jsx)(v, {
    onActivate: t,
    children: (0, r.jsx)(g.Z, {
      folderNode: S,
      expanded: n,
      selected: _,
      draggable: false,
      sorting: false,
      onExpandCollapse: () => {
        O(!n), c.ZP.clearCoachmark()
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
        return e.type !== f.eD.GUILD ? null : (0, r.jsx)(m.Z, {
          guildNode: e,
          "aria-setsize": n,
          "aria-posinset": t
        }, e.id)
      }
    })
  })
}