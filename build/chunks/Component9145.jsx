/** Chunk was on 49152 **/
/** chunk id: 9145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk199570 = require("./199570.js");
let H = Chunk884338.u8.SIZE_32,
  G = {
    [Chunk918559.MI.NO_CHAT]: Chunk199570.noChat,
    [Chunk918559.MI.RESIZABLE]: Chunk199570.resizable
  };

function B(e) {
  var t, n, l;
  let {
    maxHeight: B,
    connectedLocation: W,
    renderExternalHeader: V
  } = e, z = (0, T.Z)(), Y = (0, s.Wu)([S.ZP], () => S.ZP.getEmbeddedActivitiesForLocation(W), [W]), q = (0, P.p)(W), K = (0, s.e7)([x.Z], () => x.Z.getChannel(q)), Q = (0, I.gb)(Y), X = (0, I.uF)(Q), J = i.useCallback(() => {
    (0, E.tg)(L.Ez.PIP)
  }, []), $ = i.useRef(null), ee = (0, s.e7)([S.ZP], () => S.ZP.getFocusedLayout()), et = ee !== L.MI.NO_CHAT, [en, er] = i.useState(null != (n = null != (t = g.ZP.activityPanelHeight) ? t : B) ? n : null), ei = i.useCallback(e => {
    u.ZP.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), el = i.useRef(null), [ea, es] = i.useState({
    width: 0,
    height: 0
  });
  i.useLayoutEffect(() => {
    if (null == el.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      es({
        width: null != (n = null == (e = el.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = el.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(el.current), () => e.disconnect()
  }, []);
  let eo = ea.width / Math.max(ea.height, 1) < L.I0,
    ec = 0,
    eu = 0,
    ed = (0, Z.Z)(null == z ? true : z.id);
  if (!ed) {
    let e = ea.width,
      t = ea.height;
    eo ? ((t = ea.width / L.I0) > ea.height && (e = (t = ea.height) * L.I0), eu = (ea.height - t) / 2) : ((e = Math.min(ea.height * L.I0)) > ea.width && (t = (e = ea.width) / L.I0), ec = (ea.width - e) / 2)
  }
  let eh = X.get(null != (l = null == z ? true : z.id) ? l : ""),
    ep = (0, s.e7)([j.Z], () => j.Z.getChannelId()),
    ef = (0, s.Wu)([_.ZP], () => {
      var e;
      return null == K ? [] : Array.from(null != (e = null == eh ? true : eh.embeddedActivity.userIds) ? e : []).map(e => _.ZP.getMember(K.guild_id, e))
    }, [eh, K]),
    eg = i.useMemo(() => {
      let e = new Map;
      return ef.forEach(t => {
        null != t && true !== t && e.set(t.userId, t)
      }), e
    }, [ef]),
    em = function(e, t, n) {
      let r = (0, d.Z)(e),
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
    }(et, en, B),
    eb = (0, D.y)({
      location: "Activity Panel"
    });
  if (null == z) return null;
  let ey = [];
  null != eh && (ey = Array.from(eh.embeddedActivity.userIds).map(e => O.default.getUser(e)).filter(e => null != e && true !== e));
  let ex = e => {
    var t;
    if (null == e || true === e || e === R.ag) return null;
    let n = eg.get(e.id),
      i = null != (t = null == n ? true : n.nick) ? t : C.ZP.getName(e);
    return (0, r.jsx)(c.DY3, {
      text: i,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(null == K ? true : K.guild_id, H),
        alt: i,
        className: F.avatar
      }, e.id)
    }, e.id)
  };
  return (0, r.jsx)(c.f6W, {
    theme: M.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(F.wrapper, G[ee], e),
      ref: $,
      style: em,
      children: [null == V ? true : V(), (0, r.jsxs)("div", {
        className: F.activityPanelContainer,
        children: [et ? null : (0, r.jsx)("div", {
          className: F.header,
          children: (0, r.jsx)(o.x, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: F.headerTitle,
            children: null == z ? true : z.name
          })
        }), (0, r.jsx)("div", {
          className: a()(F.activityContainer, {
            [F.activityContainerNoMargin]: ed
          }),
          style: {
            paddingLeft: ec,
            paddingRight: ec,
            paddingTop: eu,
            paddingBottom: eu
          },
          ref: el,
          children: (0, r.jsx)(N.Z, {
            className: F.iframe,
            embedId: (0, A.Z)(W.id, z.id)
          })
        }), null != ep ? (0, r.jsxs)("div", {
          className: F.footer,
          children: [(0, r.jsx)(R.ZP, {
            renderIcon: false,
            users: ey,
            size: H,
            max: 6,
            renderUser: ex
          }), (0, r.jsxs)("div", {
            className: F.footerButtons,
            children: [(0, r.jsxs)("div", {
              className: F.buttonSection,
              children: [(0, r.jsx)(k.Z, {
                channelId: ep
              }), (0, r.jsx)(m.d, {
                isTrayButton: true,
                label: U.intl.string(U.t.brPQ5e),
                onClick: J,
                iconComponent: c.dOc,
                themeable: true
              })]
            }), (0, r.jsx)("div", {
              className: F.leaveButtonContainer,
              children: (0, r.jsx)(b.Z, {
                applicationId: z.id,
                location: W,
                centerButton: true,
                color: "disconnect"
              })
            })]
          }), eb ? (0, r.jsx)(y.Z, {
            popoutOpen: false,
            onOpenPopout: () => {
              (0, p.yw)(M.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, w.Z)({
                onConfirm: E.Gj
              })
            },
            onClosePopout: () => {}
          }) : null]
        }) : null]
      }), et && null != B ? (0, r.jsx)(f.Z, {
        minHeight: 480,
        maxHeight: B,
        resizableNode: $,
        onResize: e => {
          v.S.dispatch(M.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: true
          }), er(e)
        },
        onResizeEnd: e => {
          v.S.dispatch(M.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: false
          }), ei(e)
        }
      }) : null]
    })
  })
}