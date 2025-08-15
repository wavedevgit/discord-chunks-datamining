/** Chunk was on 86357 **/
/** chunk id: 9145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk993365 = require("./993365.js"),
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
  H = {
    [Chunk918559.MI.NO_CHAT]: Chunk33985.noChat,
    [Chunk918559.MI.RESIZABLE]: Chunk33985.resizable
  };

function G(e) {
  var t, n, l;
  let {
    maxHeight: G,
    connectedLocation: V,
    renderExternalHeader: z
  } = e, W = (0, T.Z)(), q = (0, o.Wu)([S.ZP], () => S.ZP.getEmbeddedActivitiesForLocation(V), [V]), Y = (0, Z.p)(V), K = (0, o.e7)([_.Z], () => _.Z.getChannel(Y)), X = (0, P.gb)(q), Q = (0, P.uF)(X), J = i.useCallback(() => {
    (0, E.tg)(D.Ez.PIP)
  }, []), $ = i.useRef(null), ee = (0, o.e7)([S.ZP], () => S.ZP.getFocusedLayout()), et = ee !== D.MI.NO_CHAT, [en, er] = i.useState(null != (n = null != (t = m.ZP.activityPanelHeight) ? t : G) ? n : null), ei = i.useCallback(e => {
    u.ZP.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), el = i.useRef(null), [ea, eo] = i.useState({
    width: 0,
    height: 0
  });
  i.useLayoutEffect(() => {
    if (null == el.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      eo({
        width: null != (n = null == (e = el.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = el.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(el.current), () => e.disconnect()
  }, []);
  let es = ea.width / Math.max(ea.height, 1) < D.I0,
    ec = 0,
    eu = 0,
    ed = (0, I.Z)(null == W ? true : W.id);
  if (!ed) {
    let e = ea.width,
      t = ea.height;
    es ? ((t = ea.width / D.I0) > ea.height && (e = (t = ea.height) * D.I0), eu = (ea.height - t) / 2) : ((e = Math.min(ea.height * D.I0)) > ea.width && (t = (e = ea.width) / D.I0), ec = (ea.width - e) / 2)
  }
  let ep = Q.get(null != (l = null == W ? true : W.id) ? l : ""),
    eh = (0, o.e7)([x.Z], () => x.Z.getChannelId()),
    ef = (0, o.Wu)([C.ZP], () => {
      var e;
      return null == K ? [] : Array.from(null != (e = null == ep ? true : ep.embeddedActivity.userIds) ? e : []).map(e => C.ZP.getMember(K.guild_id, e))
    }, [ep, K]),
    em = i.useMemo(() => {
      let e = new Map;
      return ef.forEach(t => {
        null != t && true !== t && e.set(t.userId, t)
      }), e
    }, [ef]),
    eg = function(e, t, n) {
      let r = (0, d.Z)(e),
        l = e !== r,
        [a, o] = i.useState(false);
      i.useEffect(() => {
        o(true);
        let e = setTimeout(() => o(false), 50);
        return () => clearTimeout(e)
      }, [e]);
      let s = !p.Z.useReducedMotion && (l || a);
      return i.useMemo(() => {
        var r, i;
        let l = s ? {
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
      }, [s, e, n, t])
    }(et, en, G),
    eb = (0, M.y)({
      location: "Activity Panel"
    });
  if (null == W) return null;
  let ey = [];
  null != ep && (ey = Array.from(ep.embeddedActivity.userIds).map(e => v.default.getUser(e)).filter(e => null != e && true !== e));
  let e_ = e => {
    var t;
    if (null == e || true === e || e === A.ag) return null;
    let n = em.get(e.id),
      i = null != (t = null == n ? true : n.nick) ? t : O.ZP.getName(e);
    return (0, r.jsx)(c.DY3, {
      text: i,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(null == K ? true : K.guild_id, F),
        alt: i,
        className: B.avatar
      }, e.id)
    }, e.id)
  };
  return (0, r.jsx)(c.f6W, {
    theme: L.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(B.wrapper, H[ee], e),
      ref: $,
      style: eg,
      children: [null == z ? true : z(), (0, r.jsxs)("div", {
        className: B.activityPanelContainer,
        children: [et ? null : (0, r.jsx)("div", {
          className: B.header,
          children: (0, r.jsx)(s.x, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: B.headerTitle,
            children: null == W ? true : W.name
          })
        }), (0, r.jsx)("div", {
          className: a()(B.activityContainer, {
            [B.activityContainerNoMargin]: ed
          }),
          style: {
            paddingLeft: ec,
            paddingRight: ec,
            paddingTop: eu,
            paddingBottom: eu
          },
          ref: el,
          children: (0, r.jsx)(N.Z, {
            className: B.iframe,
            embedId: (0, R.Z)(V.id, W.id)
          })
        }), null != eh ? (0, r.jsxs)("div", {
          className: B.footer,
          children: [(0, r.jsx)(A.ZP, {
            renderIcon: false,
            users: ey,
            size: F,
            max: 6,
            renderUser: e_
          }), (0, r.jsxs)("div", {
            className: B.footerButtons,
            children: [(0, r.jsxs)("div", {
              className: B.buttonSection,
              children: [(0, r.jsx)(k.Z, {
                channelId: eh
              }), (0, r.jsx)(g.d, {
                isTrayButton: true,
                label: U.intl.string(U.t.brPQ5e),
                onClick: J,
                iconComponent: c.dOc,
                themeable: true
              })]
            }), (0, r.jsx)("div", {
              className: B.leaveButtonContainer,
              children: (0, r.jsx)(b.Z, {
                applicationId: W.id,
                location: V,
                centerButton: true,
                color: "disconnect"
              })
            })]
          }), eb ? (0, r.jsx)(y.Z, {
            popoutOpen: false,
            onOpenPopout: () => {
              (0, h.yw)(L.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, w.Z)({
                onConfirm: E.Gj
              })
            },
            onClosePopout: () => {}
          }) : null]
        }) : null]
      }), et && null != G ? (0, r.jsx)(f.Z, {
        minHeight: 480,
        maxHeight: G,
        resizableNode: $,
        onResize: e => {
          j.S.dispatch(L.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: true
          }), er(e)
        },
        onResizeEnd: e => {
          j.S.dispatch(L.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: false
          }), ei(e)
        }
      }) : null]
    })
  })
}