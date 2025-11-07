/** Chunk was on 14953 **/
/** chunk id: 9145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk993365 = require("./993365.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk367907 = require("./367907.js"),
  Chunk900211 = require("./900211.jsx"),
  Chunk740492 = require("./740492.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk402113 = require("./402113.jsx"),
  Chunk800965 = require("./800965.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk51144 = require("./51144.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk619915 = require("./619915.js"),
  Chunk988980 = require("./988980.js"),
  Chunk16609 = require("./16609.js"),
  Chunk952561 = require("./952561.js"),
  Chunk563218 = require("./563218.jsx"),
  Chunk884338 = require("./884338.jsx"),
  Chunk617552 = require("./617552.jsx"),
  Chunk719296 = require("./719296.js"),
  Chunk225639 = require("./225639.js"),
  Chunk651612 = require("./651612.jsx"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk33985 = require("./33985.js");
let F = Chunk884338.u8.SIZE_32,
  B = {
    [Chunk918559.MI.NO_CHAT]: Chunk33985.noChat,
    [Chunk918559.MI.RESIZABLE]: Chunk33985.resizable
  };

function V(e) {
  var t, n, l;
  let {
    maxHeight: V,
    connectedLocation: z,
    renderExternalHeader: W
  } = e, Y = (0, N.Z)(), q = (0, s.Wu)([E.ZP], () => E.ZP.getEmbeddedActivitiesForLocation(z), [z]), K = (0, T.p)(z), Q = (0, s.e7)([x.Z], () => x.Z.getChannel(K)), X = (0, Z.gb)(q), J = (0, Z.uF)(X), $ = i.useCallback(() => {
    (0, S.tg)(k.Ez.PIP)
  }, []), ee = i.useRef(null), et = (0, s.e7)([E.ZP], () => E.ZP.getFocusedLayout()), en = et !== k.MI.NO_CHAT, [er, ei] = i.useState(null != (n = null != (t = m.ZP.activityPanelHeight) ? t : V) ? n : null), el = i.useCallback(e => {
    u.ZP.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), ea = i.useRef(null), [es, eo] = i.useState({
    width: 0,
    height: 0
  });
  i.useLayoutEffect(() => {
    if (null == ea.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      eo({
        width: null != (n = null == (e = ea.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = ea.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(ea.current), () => e.disconnect()
  }, []);
  let ec = es.width / Math.max(es.height, 1) < k.I0,
    ed = 0,
    eu = 0,
    ep = (0, P.Z)(null == Y ? true : Y.id);
  if (!ep) {
    let e = es.width,
      t = es.height;
    ec ? ((t = es.width / k.I0) > es.height && (e = (t = es.height) * k.I0), eu = (es.height - t) / 2) : ((e = Math.min(es.height * k.I0)) > es.width && (t = (e = es.width) / k.I0), ed = (es.width - e) / 2)
  }
  let eh = J.get(null != (l = null == Y ? true : Y.id) ? l : ""),
    ef = (0, s.e7)([v.Z], () => v.Z.getChannelId()),
    eg = (0, s.Wu)([O.ZP], () => {
      var e;
      return null == Q ? [] : Array.from(null != (e = null == eh ? true : eh.embeddedActivity.userIds) ? e : []).map(e => O.ZP.getMember(Q.guild_id, e))
    }, [eh, Q]),
    em = i.useMemo(() => {
      let e = new Map;
      return eg.forEach(t => {
        null != t && true !== t && e.set(t.userId, t)
      }), e
    }, [eg]),
    eb = function(e, t, n) {
      let r = (0, p.Z)(e),
        l = e !== r,
        [a, s] = i.useState(false);
      i.useEffect(() => {
        s(true);
        let e = setTimeout(() => s(false), 50);
        return () => clearTimeout(e)
      }, [e]);
      let o = !h.Z.useReducedMotion && (l || a);
      return i.useMemo(() => {
        var r, i;
        let l = o ? {
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
        }({}, l), i = i = {
          minHeight: 200,
          maxHeight: n,
          height: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r) : l
      }, [o, e, n, t])
    }(en, er, V),
    e_ = (0, L.y)();
  if (null == Y) return null;
  let ey = [];
  null != eh && (ey = Array.from(eh.embeddedActivity.userIds).map(e => j.default.getUser(e)).filter(e => null != e && true !== e));
  let ex = e => {
    var t;
    if (null == e || true === e || e === w.ag) return null;
    let n = em.get(e.id),
      i = null != (t = null == n ? true : n.nick) ? t : I.ZP.getName(e);
    return (0, r.jsx)(c.u, {
      asContainer: true,
      text: i,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(null == Q ? true : Q.guild_id, F),
        alt: i,
        className: H.avatar
      }, e.id)
    }, e.id)
  };
  return (0, r.jsx)(d.f6W, {
    theme: U.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(H.wrapper, B[et], e),
      ref: ee,
      style: eb,
      children: [null == W ? true : W(), (0, r.jsxs)("div", {
        className: H.activityPanelContainer,
        children: [en ? null : (0, r.jsx)("div", {
          className: H.header,
          children: (0, r.jsx)(o.x, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: H.headerTitle,
            children: null == Y ? true : Y.name
          })
        }), (0, r.jsx)("div", {
          className: a()(H.activityContainer, {
            [H.activityContainerNoMargin]: ep
          }),
          style: {
            paddingLeft: ed,
            paddingRight: ed,
            paddingTop: eu,
            paddingBottom: eu
          },
          ref: ea,
          children: (0, r.jsx)(R.Z, {
            className: H.iframe,
            embedId: (0, D.Z)(z.id, Y.id)
          })
        }), null != ef ? (0, r.jsxs)("div", {
          className: H.footer,
          children: [(0, r.jsx)(w.ZP, {
            renderIcon: false,
            users: ey,
            size: F,
            max: 6,
            renderUser: ex
          }), (0, r.jsxs)("div", {
            className: H.footerButtons,
            children: [(0, r.jsxs)("div", {
              className: H.buttonSection,
              children: [(0, r.jsx)(M.Z, {
                channelId: ef
              }), (0, r.jsx)(b.d, {
                isTrayButton: true,
                label: G.intl.string(G.t.brPQ5U),
                onClick: $,
                iconComponent: d.dOc,
                themeable: true
              })]
            }), (0, r.jsx)("div", {
              className: H.leaveButtonContainer,
              children: (0, r.jsx)(_.Z, {
                applicationId: Y.id,
                location: z,
                centerButton: true,
                color: "disconnect"
              })
            })]
          }), e_ ? (0, r.jsx)(y.Z, {
            popoutOpen: false,
            onOpenPopout: () => {
              (0, f.yw)(U.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, A.Z)({
                onConfirm: async () => {
                  (null == Y ? true : Y.id) != null && null != K && await (0, S.nJ)(Y.id, K), (0, S.Gj)()
                }
              })
            },
            onClosePopout: () => {}
          }) : null]
        }) : null]
      }), en && null != V ? (0, r.jsx)(g.Z, {
        minHeight: 480,
        maxHeight: V,
        resizableNode: ee,
        onResize: e => {
          C.S.dispatch(U.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: true
          }), ei(e)
        },
        onResizeEnd: e => {
          C.S.dispatch(U.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: false
          }), el(e)
        }
      }) : null]
    })
  })
}