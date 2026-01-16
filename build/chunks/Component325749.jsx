/** Chunk was on 27278 **/
/** chunk id: 325749, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => J,
  d: () => Y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
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
let G = Chunk884338.u8.SIZE_24;

function Y(e) {
  let {
    hasActivity: n,
    applicationId: t,
    channelId: r,
    compositeInstanceId: E,
    userIds: z,
    isRichPresenceInvite: Y,
    onConfirmClosePopout: J
  } = e, V = (0, i.e7)([m.Z], () => m.Z.getApplication(t)), q = (0, i.e7)([O.Z], () => O.Z.getChannel(r)), X = C.Sb.useSetting(), $ = (0, i.Wu)([k.ZP], () => null == q || null == z ? [] : Array.from(null != z ? z : []).map(e => k.ZP.getMember(q.guild_id, e)), [q, z]), Q = o.useMemo(() => {
    let e = new Map;
    return $.forEach(n => {
      null != n && true !== n && e.set(n.userId, n)
    }), e
  }, [$]), ee = o.useCallback((e, n) => {
    var t;
    if (null == e || e === L.ag) return null;
    let o = Q.get(e.id),
      r = null != (t = null == o ? true : o.nick) ? t : S.ZP.getName(e);
    return (0, a.jsx)(d.u, {
      asContainer: true,
      text: r,
      position: "bottom",
      children: (0, a.jsx)("img", {
        src: e.getAvatarURL(null == n ? true : n.guild_id, G),
        alt: r,
        className: K.avatar
      }, e.id)
    }, e.id)
  }, [Q]), en = (0, i.Wu)([Z.default], () => Array.from(null != z ? z : []).map(e => Z.default.getUser(e)).filter(e => null != e), [z]), et = o.useCallback(() => {
    let e = (0, B.getPID)();
    b.Z.setInputLocked(!h.Z.isInputLocked(e), e)
  }, []), ea = (0, W.P)(), {
    canStayOnTop: eo,
    popoutWindowAlwaysOnTop: er,
    handleStayOnTop: ec
  } = function() {
    let e = (0, i.e7)([_.Z], () => _.Z.getIsAlwaysOnTop(M.KJ3.ACTIVITY_POPOUT)),
      n = o.useCallback(e => {
        v.setAlwaysOnTop(M.KJ3.ACTIVITY_POPOUT, e)
      }, []);
    return {
      canStayOnTop: N.isPlatformEmbedded && T.ZP.supportsFeature(M.eRX.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: e,
      handleStayOnTop: n
    }
  }(), ei = (0, F.y)(), {
    rootNode: el,
    popoutWindow: ed,
    toggleFullScreen: eu
  } = function() {
    let {
      popoutWindow: e,
      currentDocument: n,
      rootNode: t
    } = (0, U.Z)(), [a, r] = o.useState(false), c = o.useCallback(() => {
      null != t && a && (r(false), (0, A.Pr)(t, n))
    }, [t, n, a]), i = o.useCallback(() => {
      null != t && (a ? c() : (r(true), (0, A.Dj)(t)))
    }, [t, a, c]), l = o.useCallback(() => {
      null != t && !(0, A.rB)(t, n) && a && i()
    }, [t, n, a, i]);
    return o.useEffect(() => (null == n || n.addEventListener(A.NO, l), () => {
      null == n || n.removeEventListener(A.NO, l)
    }), [n, l]), {
      rootNode: t,
      popoutWindow: e,
      toggleFullScreen: i
    }
  }(), es = o.useRef(null);
  if (null == V || !n) return null;
  let eb = (0, a.jsx)(p.Z, {
    application: V,
    size: 24,
    className: K.appIcon
  });
  return X && null != E && (eb = (0, a.jsx)(d.u, {
    asContainer: true,
    text: E,
    position: "bottom",
    children: eb
  })), (0, a.jsx)(s.f6W, {
    theme: M.BRd.DARK,
    children: e => (0, a.jsxs)("div", {
      className: c()(K.container, e),
      children: [(0, a.jsxs)("div", {
        className: c()(K.headerSection, K.headerSectionLeft),
        children: [eb, (0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-strong",
          className: K.applicationName,
          children: (0, a.jsx)(l.Z, {
            children: V.name
          })
        }), en.length > 0 ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            className: K.dotSpacer,
            children: (0, a.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: "."
            })
          }), (0, a.jsx)(L.ZP, {
            renderIcon: false,
            users: en,
            size: G,
            max: 6,
            renderUser: e => ee(e, q)
          })]
        }) : null]
      }), (0, a.jsxs)("div", {
        className: c()(K.headerSection, K.headerSectionRight),
        children: [(0, a.jsx)("div", {
          className: K.fade
        }), (0, a.jsxs)("div", {
          className: K.actionButtonsContainer,
          children: [(0, a.jsx)(P.Z, {
            appContext: M.IlC.POPOUT,
            applicationId: t,
            channel: q,
            shouldPrioritizeGroupPlusIcon: true,
            isRichPresenceInvite: Y,
            iconClassName: K.inviteButtonIcon,
            size: u.zx.Sizes.TINY,
            look: u.zx.Looks.FILLED,
            buttonText: H.intl.string(H.t["6F9ivu"]),
            color: u.zx.Colors.TRANSPARENT
          }), ea ? (0, a.jsx)(y.Z, {
            onClick: et,
            iconComponent: s.epB,
            label: H.intl.string(H.t.mseZsD)
          }) : null, eo ? (0, a.jsx)(j.Z, {
            popoutWindowAlwaysOnTop: er,
            onToggleStayOnTop: ec
          }) : null, ei ? (0, a.jsx)(w.Z, {
            popoutOpen: true,
            onOpenPopout: () => {},
            onClosePopout: () => {
              (0, f.yw)(M.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, R.Z)({
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
                children: (0, a.jsx)(D.Z, {
                  application: V,
                  channelId: r,
                  onClose: n
                })
              })
            },
            children: (e, n) => {
              var t, a;
              let {
                isShown: r
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
                isActive: r
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

function J(e) {
  let {
    applicationId: n,
    channelId: t
  } = e, r = (0, i.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(n)), c = o.useCallback(() => {
    z.Z.popInActivity()
  }, []);
  return (0, a.jsx)(Y, {
    hasActivity: null != r,
    applicationId: n,
    channelId: t,
    compositeInstanceId: null == r ? true : r.compositeInstanceId,
    userIds: null == r ? true : r.userIds,
    isRichPresenceInvite: false,
    onConfirmClosePopout: c
  })
}