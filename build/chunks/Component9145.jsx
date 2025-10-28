/** Chunk was on 91053 **/
/** chunk id: 9145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y
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
  Chunk389147 = require("./389147.js"),
  Chunk619915 = require("./619915.js"),
  Chunk988980 = require("./988980.js"),
  Chunk16609 = require("./16609.js"),
  Chunk60902 = require("./60902.js"),
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

function V(e) {
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
}
let z = Chunk884338.u8.SIZE_32,
  W = {
    [Chunk918559.MI.NO_CHAT]: Chunk33985.noChat,
    [Chunk918559.MI.RESIZABLE]: Chunk33985.resizable
  };

function Y(e) {
  var t, l, Y;
  let {
    maxHeight: q,
    connectedLocation: K,
    renderExternalHeader: Q
  } = e, X = (0, w.Z)(), J = (0, s.Wu)([E.ZP], () => E.ZP.getEmbeddedActivitiesForLocation(K), [K]), $ = (0, N.p)(K), ee = (0, s.e7)([v.Z], () => v.Z.getChannel($)), et = (0, P.gb)(J), en = (0, P.uF)(et), er = i.useCallback(() => {
    (0, S.tg)(G.Ez.PIP)
  }, []), ei = i.useRef(null), el = (0, s.e7)([E.ZP], () => E.ZP.getFocusedLayout()), ea = el !== G.MI.NO_CHAT, [es, eo] = i.useState(null != (l = null != (t = m.ZP.activityPanelHeight) ? t : q) ? l : null), ec = i.useCallback(e => {
    u.ZP.updatedUnsyncedSettings({
      activityPanelHeight: e
    })
  }, []), ed = i.useRef(null), [eu, ep] = i.useState({
    width: 0,
    height: 0
  });
  i.useLayoutEffect(() => {
    if (null == ed.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      ep({
        width: null != (n = null == (e = ed.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = ed.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(ed.current), () => e.disconnect()
  }, []);
  let eh = eu.width / Math.max(eu.height, 1) < G.I0,
    ef = 0,
    eg = 0,
    em = (0, T.Z)(null == X ? true : X.id);
  if (!em) {
    let e = eu.width,
      t = eu.height;
    eh ? ((t = eu.width / G.I0) > eu.height && (e = (t = eu.height) * G.I0), eg = (eu.height - t) / 2) : ((e = Math.min(eu.height * G.I0)) > eu.width && (t = (e = eu.width) / G.I0), ef = (eu.width - e) / 2)
  }
  let eb = en.get(null != (Y = null == X ? true : X.id) ? Y : ""),
    e_ = (0, s.e7)([x.Z], () => x.Z.getChannelId()),
    ey = (0, s.Wu)([j.ZP], () => {
      var e;
      return null == ee ? [] : Array.from(null != (e = null == eb ? true : eb.embeddedActivity.userIds) ? e : []).map(e => j.ZP.getMember(ee.guild_id, e))
    }, [eb, ee]),
    ev = i.useMemo(() => {
      let e = new Map;
      return ey.forEach(t => {
        null != t && true !== t && e.set(t.userId, t)
      }), e
    }, [ey]),
    ej = function(e, t, n) {
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
        return e && null != t && null != n ? (r = V({}, l), i = i = {
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
    }(ea, es, q),
    ex = (0, k.y)(),
    {
      data: eO
    } = (0, R.K)(Z.B);
  if (null == X) return null;
  let eC = null == eO ? true : eO.isFortniteActivity(X.id),
    eI = [];
  null != eb && (eI = Array.from(eb.embeddedActivity.userIds).map(e => O.default.getUser(e)).filter(e => null != e && true !== e));
  let eS = e => {
    var t;
    if (null == e || true === e || e === D.ag) return null;
    let n = ev.get(e.id),
      i = null != (t = null == n ? true : n.nick) ? t : I.ZP.getName(e);
    return (0, r.jsx)(c.u, {
      asContainer: true,
      text: i,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(null == ee ? true : ee.guild_id, z),
        alt: i,
        className: B.avatar
      }, e.id)
    }, e.id)
  };
  return (0, r.jsx)(d.f6W, {
    theme: H.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(B.wrapper, W[el], e),
      ref: ei,
      style: ej,
      children: [null == Q ? true : Q(), (0, r.jsxs)("div", {
        className: B.activityPanelContainer,
        children: [ea ? null : (0, r.jsx)("div", {
          className: B.header,
          children: (0, r.jsx)(o.x, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: B.headerTitle,
            children: null == X ? true : X.name
          })
        }), (0, r.jsx)("div", {
          className: a()(B.activityContainer, {
            [B.activityContainerNoMargin]: em
          }),
          style: {
            paddingLeft: ef,
            paddingRight: ef,
            paddingTop: eg,
            paddingBottom: eg
          },
          ref: ed,
          children: (0, r.jsx)(A.Z, {
            className: B.iframe,
            embedId: (0, M.Z)(K.id, X.id)
          })
        }), null != e_ ? (0, r.jsxs)("div", {
          className: B.footer,
          children: [(0, r.jsx)(D.ZP, {
            renderIcon: false,
            users: eI,
            size: z,
            max: 6,
            renderUser: eS
          }), (0, r.jsxs)("div", {
            className: B.footerButtons,
            children: [(0, r.jsxs)("div", {
              className: B.buttonSection,
              children: [(0, r.jsx)(U.Z, {
                channelId: e_
              }), (0, r.jsx)(b.d, {
                isTrayButton: true,
                label: F.intl.string(F.t.brPQ5U),
                onClick: er,
                iconComponent: d.dOc,
                themeable: true
              })]
            }), (0, r.jsx)("div", {
              className: B.leaveButtonContainer,
              children: (0, r.jsx)(_.Z, {
                applicationId: X.id,
                location: K,
                centerButton: true,
                color: "disconnect"
              })
            })]
          }), eC && (0, r.jsx)("div", {
            className: B.fortniteUpsellModalButton,
            children: (0, r.jsx)(d.Button, {
              onClick: () => {
                (0, d.ZDy)(async () => {
                  let {
                    FortniteUpsellModal: e
                  } = await n.e("64152").then(n.bind(n, 690804));
                  return t => (0, r.jsx)(e, V({}, t))
                }, {
                  modalKey: "activity-upsell-modal"
                })
              },
              text: F.intl.string(F.t["36gY4e"]),
              variant: "color-mix"
            })
          }), ex ? (0, r.jsx)(y.Z, {
            popoutOpen: false,
            onOpenPopout: () => {
              (0, f.yw)(H.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, L.Z)({
                onConfirm: async () => {
                  (null == X ? true : X.id) != null && null != $ && await (0, S.nJ)(X.id, $), (0, S.Gj)()
                }
              })
            },
            onClosePopout: () => {}
          }) : null]
        }) : null]
      }), ea && null != q ? (0, r.jsx)(g.Z, {
        minHeight: 480,
        maxHeight: q,
        resizableNode: ei,
        onResize: e => {
          C.S.dispatch(H.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: true
          }), eo(e)
        },
        onResizeEnd: e => {
          C.S.dispatch(H.CkL.MANUAL_IFRAME_RESIZING, {
            resizing: false
          }), ec(e)
        }
      }) : null]
    })
  })
}