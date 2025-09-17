/** Chunk was on 62987 **/
/** chunk id: 9145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
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
  Chunk729200 = require("./729200.js"),
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
  V = {
    [Chunk918559.MI.NO_CHAT]: Chunk33985.noChat,
    [Chunk918559.MI.RESIZABLE]: Chunk33985.resizable
  };

function z(e) {
  var t, n, l;
  let {
    maxHeight: z,
    connectedLocation: W,
    renderExternalHeader: q
  } = e, Y = (0, A.Z)(), K = (0, o.Wu)([I.ZP], () => I.ZP.getEmbeddedActivitiesForLocation(W), [W]), X = (0, N.p)(W), Q = (0, o.e7)([C.Z], () => C.Z.getChannel(X)), J = (0, Z.gb)(K), $ = (0, Z.uF)(J), ee = i.useCallback(() => {
    (0, S.tg)(U.Ez.PIP)
  }, []), et = i.useRef(null), en = (0, o.e7)([I.ZP], () => I.ZP.getFocusedLayout()), er = en !== U.MI.NO_CHAT, [ei, el] = i.useState(null != (n = null != (t = g.ZP.activityPanelHeight) ? t : z) ? n : null), ea = i.useCallback(e => {
    d.ZP.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), eo = i.useRef(null), [es, ec] = i.useState({
    width: 0,
    height: 0
  });
  i.useLayoutEffect(() => {
    if (null == eo.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      ec({
        width: null != (n = null == (e = eo.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = eo.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(eo.current), () => e.disconnect()
  }, []);
  let eu = es.width / Math.max(es.height, 1) < U.I0,
    ed = 0,
    ep = 0,
    eh = (0, T.Z)(null == Y ? true : Y.id);
  if (!eh) {
    let e = es.width,
      t = es.height;
    eu ? ((t = es.width / U.I0) > es.height && (e = (t = es.height) * U.I0), ep = (es.height - t) / 2) : ((e = Math.min(es.height * U.I0)) > es.width && (t = (e = es.width) / U.I0), ed = (es.width - e) / 2)
  }
  let ef = $.get(null != (l = null == Y ? true : Y.id) ? l : ""),
    em = (0, o.e7)([x.Z], () => x.Z.getChannelId()),
    eg = (0, o.Wu)([v.ZP], () => {
      var e;
      return null == Q ? [] : Array.from(null != (e = null == ef ? true : ef.embeddedActivity.userIds) ? e : []).map(e => v.ZP.getMember(Q.guild_id, e))
    }, [ef, Q]),
    eb = i.useMemo(() => {
      let e = new Map;
      return eg.forEach(t => {
        null != t && true !== t && e.set(t.userId, t)
      }), e
    }, [eg]),
    ey = function(e, t, n) {
      let r = (0, p.Z)(e),
        l = e !== r,
        [a, o] = i.useState(false);
      i.useEffect(() => {
        o(true);
        let e = setTimeout(() => o(false), 50);
        return () => clearTimeout(e)
      }, [e]);
      let s = !h.Z.useReducedMotion && (l || a);
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
    }(er, ei, z),
    e_ = (0, L.y)();
  if (null == Y) return null;
  let eC = [];
  null != ef && (eC = Array.from(ef.embeddedActivity.userIds).map(e => O.default.getUser(e)).filter(e => null != e && true !== e));
  let ev = e => {
    var t;
    if (null == e || true === e || e === R.ag) return null;
    let n = eb.get(e.id),
      i = null != (t = null == n ? true : n.nick) ? t : E.ZP.getName(e);
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
  return (0, r.jsx)(u.f6W, {
    theme: B.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(H.wrapper, V[en], e),
      ref: et,
      style: ey,
      children: [null == q ? true : q(), (0, r.jsxs)("div", {
        className: H.activityPanelContainer,
        children: [er ? null : (0, r.jsx)("div", {
          className: H.header,
          children: (0, r.jsx)(s.x, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: H.headerTitle,
            children: null == Y ? true : Y.name
          })
        }), (0, r.jsx)("div", {
          className: a()(H.activityContainer, {
            [H.activityContainerNoMargin]: eh
          }),
          style: {
            paddingLeft: ed,
            paddingRight: ed,
            paddingTop: ep,
            paddingBottom: ep
          },
          ref: eo,
          children: (0, r.jsx)(w.Z, {
            className: H.iframe,
            embedId: (0, D.Z)(W.id, Y.id)
          })
        }), null != em ? (0, r.jsxs)("div", {
          className: H.footer,
          children: [(0, r.jsx)(R.ZP, {
            renderIcon: false,
            users: eC,
            size: F,
            max: 6,
            renderUser: ev
          }), (0, r.jsxs)("div", {
            className: H.footerButtons,
            children: [(0, r.jsxs)("div", {
              className: H.buttonSection,
              children: [(0, r.jsx)(k.Z, {
                channelId: em
              }), (0, r.jsx)(b.d, {
                isTrayButton: true,
                label: G.intl.string(G.t.brPQ5e),
                onClick: ee,
                iconComponent: u.dOc,
                themeable: true
              })]
            }), (0, r.jsx)("div", {
              className: H.leaveButtonContainer,
              children: (0, r.jsx)(y.Z, {
                applicationId: Y.id,
                location: W,
                centerButton: true,
                color: "disconnect"
              })
            })]
          }), e_ ? (0, r.jsx)(_.Z, {
            popoutOpen: false,
            onOpenPopout: () => {
              (0, f.yw)(B.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, M.Z)({
                onConfirm: async () => {
                  (null == Y ? true : Y.id) != null && null != X && (0, P.g)() && await (0, S.nJ)(Y.id, X), (0, S.Gj)()
                }
              })
            },
            onClosePopout: () => {}
          }) : null]
        }) : null]
      }), er && null != z ? (0, r.jsx)(m.Z, {
        minHeight: 480,
        maxHeight: z,
        resizableNode: et,
        onResize: e => {
          j.S.dispatch(B.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: true
          }), el(e)
        },
        onResizeEnd: e => {
          j.S.dispatch(B.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: false
          }), ea(e)
        }
      }) : null]
    })
  })
}