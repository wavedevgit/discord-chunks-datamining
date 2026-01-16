/** Chunk was on 27278 **/
/** chunk id: 325749, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => V,
  d: () => J
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk367907 = require("./367907.js"),
  Chunk753972 = require("./753972.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk322155 = require("./322155.js"),
  Chunk522474 = require("./522474.js"),
  Chunk788983 = require("./788983.js"),
  Chunk695346 = require("./695346.js"),
  Chunk390322 = require("./390322.js"),
  Chunk961048 = require("./961048.jsx"),
  Chunk871499 = require("./871499.jsx"),
  Chunk268353 = require("./268353.jsx"),
  Chunk786915 = require("./786915.jsx"),
  Chunk800965 = require("./800965.jsx"),
  Chunk107169 = require("./107169.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk358085 = require("./358085.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk228488 = require("./228488.js"),
  Chunk145597 = require("./145597.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk426419 = require("./426419.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk884338 = require("./884338.jsx"),
  Chunk617552 = require("./617552.jsx"),
  Chunk473179 = require("./473179.jsx"),
  Chunk932174 = require("./932174.js"),
  Chunk225639 = require("./225639.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk153438 = require("./153438.js");
let Y = Chunk884338.u8.SIZE_24;

function J(e) {
  let {
    hasActivity: n,
    applicationId: t,
    channelId: i,
    compositeInstanceId: E,
    userIds: W,
    isRichPresenceInvite: L,
    onConfirmClosePopout: J
  } = e, V = (0, c.e7)([m.Z], () => m.Z.getApplication(t)), q = (0, c.e7)([k.Z], () => k.Z.getChannel(i)), X = C.Sb.useSetting(), $ = (0, c.Wu)([j.ZP], () => null == q || null == W ? [] : Array.from(null != W ? W : []).map(e => j.ZP.getMember(q.guild_id, e)), [q, W]), Q = o.useMemo(() => {
    let e = new Map;
    return $.forEach(n => {
      null != n && true !== n && e.set(n.userId, n)
    }), e
  }, [$]), ee = o.useCallback((e, n) => {
    var t;
    if (null == e || e === R.ag) return null;
    let o = Q.get(e.id),
      i = null != (t = null == o ? true : o.nick) ? t : S.ZP.getName(e);
    return (0, a.jsx)(d.u, {
      asContainer: true,
      text: i,
      position: "bottom",
      children: (0, a.jsx)("img", {
        src: e.getAvatarURL(null == n ? true : n.guild_id, Y),
        alt: i,
        className: G.avatar
      }, e.id)
    }, e.id)
  }, [Q]), en = (0, c.Wu)([O.default], () => Array.from(null != W ? W : []).map(e => O.default.getUser(e)).filter(e => null != e), [W]), et = o.useCallback(() => {
    let e = (0, B.getPID)();
    b.Z.setInputLocked(!h.Z.isInputLocked(e), e)
  }, []), ea = (0, z.P)(), {
    canStayOnTop: eo,
    popoutWindowAlwaysOnTop: ei,
    handleStayOnTop: er
  } = function() {
    let e = (0, c.e7)([_.Z], () => _.Z.getIsAlwaysOnTop(H.KJ3.ACTIVITY_POPOUT)),
      n = o.useCallback(e => {
        v.setAlwaysOnTop(H.KJ3.ACTIVITY_POPOUT, e)
      }, []);
    return {
      canStayOnTop: N.isPlatformEmbedded && T.ZP.supportsFeature(H.eRX.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: e,
      handleStayOnTop: n
    }
  }(), ec = (0, M.y)(), {
    rootNode: el,
    popoutWindow: ed,
    toggleFullScreen: eu
  } = function() {
    let {
      popoutWindow: e,
      currentDocument: n,
      rootNode: t
    } = (0, F.Z)(), [a, i] = o.useState(false), r = o.useCallback(() => {
      null != t && a && (i(false), (0, A.Pr)(t, n))
    }, [t, n, a]), c = o.useCallback(() => {
      null != t && (a ? r() : (i(true), (0, A.Dj)(t)))
    }, [t, a, r]), l = o.useCallback(() => {
      null != t && !(0, A.rB)(t, n) && a && c()
    }, [t, n, a, c]);
    return o.useEffect(() => (null == n || n.addEventListener(A.NO, l), () => {
      null == n || n.removeEventListener(A.NO, l)
    }), [n, l]), {
      rootNode: t,
      popoutWindow: e,
      toggleFullScreen: c
    }
  }(), es = o.useRef(null);
  if (null == V || !n) return null;
  let eb = (0, a.jsx)(p.Z, {
    application: V,
    size: 24,
    className: G.appIcon
  });
  return X && null != E && (eb = (0, a.jsx)(d.u, {
    asContainer: true,
    text: E,
    position: "bottom",
    children: eb
  })), (0, a.jsx)(s.f6W, {
    theme: H.BRd.DARK,
    children: e => (0, a.jsxs)("div", {
      className: r()(G.container, e),
      children: [(0, a.jsxs)("div", {
        className: r()(G.headerSection, G.headerSectionLeft),
        children: [eb, (0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-strong",
          className: G.applicationName,
          children: (0, a.jsx)(l.Z, {
            children: V.name
          })
        }), en.length > 0 ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            className: G.dotSpacer,
            children: (0, a.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: "."
            })
          }), (0, a.jsx)(R.ZP, {
            renderIcon: false,
            users: en,
            size: Y,
            max: 6,
            renderUser: e => ee(e, q)
          })]
        }) : null]
      }), (0, a.jsxs)("div", {
        className: r()(G.headerSection, G.headerSectionRight),
        children: [(0, a.jsx)("div", {
          className: G.fade
        }), (0, a.jsxs)("div", {
          className: G.actionButtonsContainer,
          children: [(0, a.jsx)(P.Z, {
            appContext: H.IlC.POPOUT,
            applicationId: t,
            channel: q,
            shouldPrioritizeGroupPlusIcon: true,
            isRichPresenceInvite: L,
            iconClassName: G.inviteButtonIcon,
            size: u.zx.Sizes.TINY,
            look: u.zx.Looks.FILLED,
            buttonText: K.intl.string(K.t["6F9ivu"]),
            color: u.zx.Colors.TRANSPARENT
          }), ea ? (0, a.jsx)(y.Z, {
            onClick: et,
            iconComponent: s.epB,
            label: K.intl.string(K.t.mseZsD)
          }) : null, eo ? (0, a.jsx)(Z.Z, {
            popoutWindowAlwaysOnTop: ei,
            onToggleStayOnTop: er
          }) : null, ec ? (0, a.jsx)(w.Z, {
            popoutOpen: true,
            onOpenPopout: () => {},
            onClosePopout: () => {
              (0, f.yw)(H.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, D.Z)({
                onConfirm: J
              })
            }
          }) : null, (0, a.jsx)(I.Z, {
            node: el,
            guestWindow: ed,
            onClick: eu
          }), (0, a.jsx)(s.yRy, {
            targetElementRef: es,
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: n
              } = e;
              return (0, a.jsx)(g.Z, {
                children: (0, a.jsx)(U.Z, {
                  application: V,
                  channelId: i,
                  onClose: n
                })
              })
            },
            children: (e, n) => {
              var t, a;
              let {
                isShown: i
              } = n;
              return (0, o.createElement)(x.Z, (t = function(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    a = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), a.forEach(function(n) {
                    var a;
                    a = t[n], n in e ? Object.defineProperty(e, n, {
                      value: a,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[n] = a
                  })
                }
                return e
              }({}, e), a = a = {
                buttonRef: es,
                key: "more-options",
                isActive: i
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, a)
                }
                return t
              })(Object(a)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
              }), t))
            }
          }, "more-options-popout")]
        })]
      })]
    })
  })
}

function V(e) {
  let {
    applicationId: n,
    channelId: t
  } = e, i = (0, c.e7)([W.ZP], () => W.ZP.getSelfEmbeddedActivities().get(n)), r = o.useCallback(async () => {
    await (0, E.nJ)(n, null != t ? t : null), L.Z.popInActivity()
  }, [n, t]);
  return (0, a.jsx)(J, {
    hasActivity: null != i,
    applicationId: n,
    channelId: t,
    compositeInstanceId: null == i ? true : i.compositeInstanceId,
    userIds: null == i ? true : i.userIds,
    isRichPresenceInvite: false,
    onConfirmClosePopout: r
  })
}