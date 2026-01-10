/** Chunk was on 81985 **/
/** chunk id: 9145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk996726 = require("./996726.jsx"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk257536 = require("./257536.js");
let F = Chunk884338.u8.SIZE_32,
  H = {
    [Chunk918559.MI.NO_CHAT]: Chunk257536.noChat,
    [Chunk918559.MI.RESIZABLE]: Chunk257536.resizable
  };

function V(e) {
  var t, n, l;
  let {
    maxHeight: V,
    connectedLocation: z,
    renderExternalHeader: W
  } = e, K = (0, T.Z)(), Y = (0, o.Wu)([I.ZP], () => I.ZP.getEmbeddedActivitiesForLocation(z), [z]), q = (0, N.p)(z), X = (0, o.e7)([O.Z], () => O.Z.getChannel(q)), Q = (0, P.gb)(Y), J = (0, P.uF)(Q), $ = i.useCallback(() => {
    (0, _.tg)(L.Ez.PIP)
  }, []), ee = i.useRef(null), et = (0, o.e7)([I.ZP], () => I.ZP.getFocusedLayout()), en = et !== L.MI.NO_CHAT, [er, ei] = i.useState(null != (n = null != (t = m.ZP.activityPanelHeight) ? t : V) ? n : null), el = i.useCallback(e => {
    d.ZP.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), ea = i.useRef(null), [eo, es] = i.useState({
    width: 0,
    height: 0
  });
  i.useLayoutEffect(() => {
    if (null == ea.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      es({
        width: null != (n = null == (e = ea.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = ea.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(ea.current), () => e.disconnect()
  }, []);
  let ec = eo.width / Math.max(eo.height, 1) < L.I0,
    eu = 0,
    ed = 0,
    ep = (0, Z.Z)(null == K ? true : K.id);
  if (!ep) {
    let e = eo.width,
      t = eo.height;
    ec ? ((t = eo.width / L.I0) > eo.height && (e = (t = eo.height) * L.I0), ed = (eo.height - t) / 2) : ((e = Math.min(eo.height * L.I0)) > eo.width && (t = (e = eo.width) / L.I0), eu = (eo.width - e) / 2)
  }
  let ef = J.get(null != (l = null == K ? true : K.id) ? l : ""),
    eh = (0, o.e7)([x.Z], () => x.Z.getChannelId()),
    eg = (0, o.Wu)([j.ZP], () => {
      var e;
      return null == X ? [] : Array.from(null != (e = null == ef ? true : ef.embeddedActivity.userIds) ? e : []).map(e => j.ZP.getMember(X.guild_id, e))
    }, [ef, X]),
    em = i.useMemo(() => {
      let e = new Map;
      return eg.forEach(t => {
        null != t && true !== t && e.set(t.userId, t)
      }), e
    }, [eg]),
    eb = function(e, t, n) {
      let r = (0, p.Z)(e),
        l = e !== r,
        [a, o] = i.useState(false);
      i.useEffect(() => {
        o(true);
        let e = setTimeout(() => o(false), 50);
        return () => clearTimeout(e)
      }, [e]);
      let s = !f.Z.useReducedMotion && (l || a);
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
    }(en, er, V),
    ey = (0, M.y)();
  if (null == K) return null;
  let ev = [];
  null != ef && (ev = Array.from(ef.embeddedActivity.userIds).map(e => C.default.getUser(e)).filter(e => null != e && true !== e));
  let eO = e => {
    var t;
    if (null == e || true === e || e === w.ag) return null;
    let n = em.get(e.id),
      i = null != (t = null == n ? true : n.nick) ? t : S.ZP.getName(e);
    return (0, r.jsx)(c.u, {
      asContainer: true,
      text: i,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(null == X ? true : X.guild_id, F),
        alt: i,
        className: B.avatar
      }, e.id)
    }, e.id)
  };
  return (0, r.jsx)(u.f6W, {
    theme: U.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(B.wrapper, H[et], e),
      ref: ee,
      style: eb,
      children: [null == W ? true : W(), (0, r.jsxs)("div", {
        className: B.activityPanelContainer,
        children: [en ? null : (0, r.jsx)("div", {
          className: B.header,
          children: (0, r.jsx)(s.x, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: B.headerTitle,
            children: null == K ? true : K.name
          })
        }), (0, r.jsx)("div", {
          className: a()(B.activityContainer, {
            [B.activityContainerNoMargin]: ep
          }),
          style: {
            paddingLeft: eu,
            paddingRight: eu,
            paddingTop: ed,
            paddingBottom: ed
          },
          ref: ea,
          children: (0, r.jsx)(A.Z, {
            className: B.iframe,
            embedId: (0, D.Z)(z.id, K.id)
          })
        }), null != eh ? (0, r.jsxs)("div", {
          className: B.footer,
          children: [(0, r.jsx)(w.ZP, {
            renderIcon: false,
            users: ev,
            size: F,
            max: 6,
            renderUser: eO
          }), (0, r.jsxs)("div", {
            className: B.footerButtons,
            children: [(0, r.jsxs)("div", {
              className: B.buttonSection,
              children: [(0, r.jsx)(k.Z, {
                channelId: eh
              }), (0, r.jsx)(b.d, {
                isTrayButton: true,
                label: G.intl.string(G.t.brPQ5U),
                onClick: $,
                iconComponent: u.dOc,
                themeable: true
              })]
            }), (0, r.jsx)("div", {
              className: B.leaveButtonContainer,
              children: (0, r.jsx)(y.Z, {
                applicationId: K.id,
                location: z,
                centerButton: true,
                color: "disconnect"
              })
            })]
          }), ey ? (0, r.jsx)(v.Z, {
            popoutOpen: false,
            onOpenPopout: () => {
              (0, h.yw)(U.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, R.Z)({
                onConfirm: async () => {
                  (null == K ? true : K.id) != null && null != q && await (0, _.nJ)(K.id, q), (0, _.Gj)()
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
          E.S.dispatch(U.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: true
          }), ei(e)
        },
        onResizeEnd: e => {
          E.S.dispatch(U.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: false
          }), el(e)
        }
      }) : null]
    })
  })
}