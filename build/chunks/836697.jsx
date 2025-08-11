/** Chunk was on 34779 **/
/** chunk id: 836697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk315268 = require("./315268.js");

function _(e) {
  let {
    onActivate: t,
    children: n
  } = e, a = i.useRef(null), d = (0, l.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()), h = i.useCallback(() => {
    c.ZP.clearCoachmark()
  }, []), p = (0, s.Z)(d), f = i.useRef(null);
  return i.useEffect(() => {
    if (d && d !== p) {
      var e, n, r, i, l;
      t(), null == (l = f.current) || null == (i = l.ref) || null == (r = i.current) || null == (n = r.layerRef) || null == (e = n.current) || e.updatePosition()
    }
  }, [f, d, p, t]), <div className={O.container}>{<o.yRy ref={f} targetElementRef={a} shouldShow={d} renderPopout={() => (0, r.jsxs)("div", {
        className: O.popoutContainer,
        children: [(0, r.jsxs)("div", {
          className: O.popoutContent,
          children: [(0, r.jsxs)("div", {
            className: O.coachmarkTextContainer,
            children: [(0, r.jsx)(o.X6q, {
              variant: "heading-md/medium",
              children: b.intl.string(b.t["0YV0YG"])
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: b.intl.string(b.t["0UQVDA"])
            })]
          }), (0, r.jsx)(o.zxk, {
            variant: "primary",
            size: "sm",
            text: b.intl.string(b.t["4r+amZ"]),
            fullWidth: true,
            onClick: h
          })]
        }), (0, r.jsx)("div", {
          className: O.popoutCaretLeft
        })]
      })} position={"right"} animationPosition={"right"} align={"top"} spacing={16}>{e => {
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
          className: O.popoutAnchor,
          ref: a
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
      }}</o.yRy>}{n}</div>
}

function y(e) {
  let {
    onActivate: t
  } = e, [n, y] = i.useState(false), C = (0, l.e7)([d.Z], () => d.Z.getGuildId()), v = (0, l.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds), j = (0, f.Z)(), E = (0, s.Z)(C), S = i.useMemo(() => {
    let e = (0, p.qQ)({
      folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
      folderName: b.intl.string(b.t["scsU+v"]),
      expanded: n,
      guildIds: []
    });
    for (let t of j) e.children.push((0, p.Mg)(t, e.id));
    return e
  }, [j, n]);
  i.useEffect(() => {
    n && !v && a.Z.fetchRequestToJoinGuilds()
  }, [n, v]);
  let x = null != C && j.includes(C);
  return (i.useEffect(() => {
    !n && x && E !== C && y(true)
  }, [n, x, E, C]), 0 === j.length) ? null : <_ onActivate={t}><g.Z folderNode={S} expanded={n} selected={x} draggable={false} sorting={false} onExpandCollapse={() => {
        y(!n), c.ZP.clearCoachmark()
      }} folderButtonSize={"icon"} folderButtonContent={(0, r.jsx)("div", {
        className: O.pendingFolderButtonIcon,
        children: (0, r.jsx)(o.wGF, {
          size: "sm",
          color: "currentColor"
        })
      })} renderChildNode={function(e, t, n) {
        return e.type !== p.eD.GUILD ? null : (0, r.jsx)(m.Z, {
          guildNode: e,
          "aria-setsize": n,
          "aria-posinset": t
        }, e.id)
      }} /></_>
}