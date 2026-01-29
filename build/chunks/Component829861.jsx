/** Chunk was on 1113 **/
/** chunk id: 829861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => K
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk571356 = require("./571356.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk475743 = require("./475743.js"),
  Chunk775602 = require("./775602.js"),
  Chunk58149 = require("./58149.js"),
  Chunk587837 = require("./587837.jsx"),
  Chunk964404 = require("./964404.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk383831 = require("./383831.jsx"),
  Chunk128286 = require("./128286.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk203982 = require("./203982.js"),
  Chunk427262 = require("./427262.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk685399 = require("./685399.js"),
  Chunk216418 = require("./216418.js"),
  Chunk969151 = require("./969151.js"),
  Chunk620148 = require("./620148.js"),
  Chunk732637 = require("./732637.jsx"),
  Chunk104171 = require("./104171.jsx"),
  Chunk47294 = require("./47294.jsx"),
  Chunk594007 = require("./594007.js"),
  Chunk16961 = require("./16961.js"),
  Chunk716730 = require("./716730.jsx"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk907585 = require("./907585.js");
let H = Chunk104171.DN.SIZE_32,
  F = {
    [Chunk5867.E8.NO_CHAT]: Chunk907585.Oo,
    [Chunk5867.E8.RESIZABLE]: Chunk907585.Ig
  };

function K(e) {
  var t, n, i;
  let {
    maxHeight: K,
    connectedLocation: Y,
    renderExternalHeader: W
  } = e, z = (0, P.A)(), q = (0, a.yK)([S.Ay], () => S.Ay.getEmbeddedActivitiesForLocation(Y), [Y]), X = (0, T.H)(Y), J = (0, a.bG)([O.A], () => O.A.getChannel(X)), Q = (0, I.IQ)(q), Z = (0, I.Rz)(Q), $ = l.useCallback(() => {
    (0, C.gk)(G.Gd.PIP)
  }, []), ee = l.useRef(null), et = (0, a.bG)([S.Ay], () => S.Ay.getFocusedLayout()), en = et !== G.E8.NO_CHAT, [er, el] = l.useState(null != (t = null != (n = m.Ay.activityPanelHeight) ? n : K) ? t : null), ei = l.useCallback(e => {
    d.Ay.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), es = l.useRef(null), [ea, eo] = l.useState({
    width: 0,
    height: 0
  });
  l.useLayoutEffect(() => {
    if (null == es.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      eo({
        width: null != (e = null == (n = es.current) ? true : n.clientWidth) ? e : 0,
        height: null != (t = null == (r = es.current) ? true : r.clientHeight) ? t : 0
      })
    });
    return e.observe(es.current), () => e.disconnect()
  }, []);
  let ec = ea.width / Math.max(ea.height, 1) < G.B5,
    eu = 0,
    ed = 0,
    eh = (0, N.A)(null == z ? true : z.id);
  if (!eh) {
    let e = ea.width,
      t = ea.height;
    ec ? ((t = ea.width / G.B5) > ea.height && (e = (t = ea.height) * G.B5), ed = (ea.height - t) / 2) : ((e = Math.min(ea.height * G.B5)) > ea.width && (t = (e = ea.width) / G.B5), eu = (ea.width - e) / 2)
  }
  let ep = Z.get(null != (i = null == z ? true : z.id) ? i : ""),
    eg = (0, a.bG)([x.A], () => x.A.getChannelId()),
    ef = (0, a.yK)([_.Ay], () => {
      var e;
      return null == J ? [] : Array.from(null != (e = null == ep ? true : ep.embeddedActivity.userIds) ? e : []).map(e => _.Ay.getMember(J.guild_id, e))
    }, [ep, J]),
    em = l.useMemo(() => {
      let e = new Map;
      return ef.forEach(t => {
        null != t && true !== t && e.set(t.userId, t)
      }), e
    }, [ef]),
    eb = function(e, t, n) {
      let r = (0, h.A)(e),
        i = e !== r,
        [s, a] = l.useState(false);
      l.useEffect(() => {
        a(true);
        let e = setTimeout(() => a(false), 50);
        return () => clearTimeout(e)
      }, [e]);
      let o = !p.A.useReducedMotion && (i || s);
      return l.useMemo(() => {
        var r, l;
        let i = o ? {
          transitionProperty: "height, max-height",
          transitionDuration: "".concat(50, "ms"),
          transitionTimingFunction: "ease-in-out"
        } : true;
        return e && null != t && null != n ? (r = function(e) {
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
        }({}, i), l = l = {
          minHeight: 200,
          maxHeight: n,
          height: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r) : i
      }, [o, e, n, t])
    }(en, er, K),
    eA = (0, M.G)();
  if (null == z) return null;
  let ey = [];
  null != ep && (ey = Array.from(ep.embeddedActivity.userIds).map(e => j.default.getUser(e)).filter(e => null != e && true !== e));
  let eO = e => {
    var t;
    if (null == e || true === e || e === R.mt) return null;
    let n = em.get(e.id),
      l = null != (t = null == n ? true : n.nick) ? t : E.Ay.getName(e);
    return (0, r.jsx)(c.m, {
      asContainer: true,
      text: l,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(null == J ? true : J.guild_id, H),
        alt: l,
        className: B.my
      }, e.id)
    }, e.id)
  };
  return (0, r.jsx)(u.NPJ, {
    theme: U.NJ8.DARK,
    children: e => (0, r.jsxs)("div", {
      className: s()(B.iE, F[et], e),
      ref: ee,
      style: eb,
      children: [null == W ? true : W(), (0, r.jsxs)("div", {
        className: B.lq,
        children: [en ? null : (0, r.jsx)("div", {
          className: B.wx,
          children: (0, r.jsx)(o.E, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: B.qd,
            children: null == z ? true : z.name
          })
        }), (0, r.jsx)("div", {
          className: s()(B.ht, {
            [B.kK]: eh
          }),
          style: {
            paddingLeft: eu,
            paddingRight: eu,
            paddingTop: ed,
            paddingBottom: ed
          },
          ref: es,
          children: (0, r.jsx)(w.A, {
            className: B.pU,
            embedId: (0, L.A)(Y.id, z.id)
          })
        }), null != eg ? (0, r.jsxs)("div", {
          className: B.qr,
          children: [(0, r.jsx)(R.Ay, {
            renderIcon: false,
            users: ey,
            size: H,
            max: 6,
            renderUser: eO
          }), (0, r.jsxs)("div", {
            className: B.Hq,
            children: [(0, r.jsxs)("div", {
              className: B.qi,
              children: [(0, r.jsx)(k.A, {
                channelId: eg
              }), (0, r.jsx)(b.l, {
                isTrayButton: true,
                label: V.intl.string(V.t.brPQ5U),
                onClick: $,
                iconComponent: u.gR,
                themeable: true
              })]
            }), (0, r.jsx)("div", {
              className: B.pt,
              children: (0, r.jsx)(A.A, {
                applicationId: z.id,
                location: Y,
                centerButton: true,
                color: "disconnect"
              })
            })]
          }), eA ? (0, r.jsx)(y.A, {
            popoutOpen: false,
            onOpenPopout: () => {
              (0, g.zV)(U.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, D.A)({
                onConfirm: async () => {
                  (null == z ? true : z.id) != null && null != X && await (0, C.od)(z.id, X), (0, C.jp)()
                }
              })
            },
            onClosePopout: () => {}
          }) : null]
        }) : null]
      }), en && null != K ? (0, r.jsx)(f.A, {
        minHeight: 480,
        maxHeight: K,
        resizableNode: ee,
        onResize: e => {
          v._.dispatch(U.jej.MANUAL_IFRAME_RESIZING, {
            resizing: true
          }), el(e)
        },
        onResizeEnd: e => {
          v._.dispatch(U.jej.MANUAL_IFRAME_RESIZING, {
            resizing: false
          }), ei(e)
        }
      }) : null]
    })
  })
}