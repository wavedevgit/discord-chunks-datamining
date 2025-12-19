/** Chunk was on 27278 **/
/** chunk id: 325749, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Y
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
let K = Chunk884338.u8.SIZE_24;

function Y(e) {
  let {
    applicationId: n,
    channelId: t
  } = e, c = (0, i.e7)([m.Z], () => m.Z.getApplication(n)), Y = (0, i.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(n)), J = (0, i.e7)([N.Z], () => N.Z.getChannel(t)), V = v.Sb.useSetting(), q = (0, i.Wu)([j.ZP], () => {
    var e;
    return null == J || null == Y ? [] : Array.from(null != (e = Y.userIds) ? e : []).map(e => j.ZP.getMember(J.guild_id, e))
  }, [Y, J]), X = o.useMemo(() => {
    let e = new Map;
    return q.forEach(n => {
      null != n && true !== n && e.set(n.userId, n)
    }), e
  }, [q]), $ = o.useCallback((e, n) => {
    var t;
    if (null == e || e === L.ag) return null;
    let o = X.get(e.id),
      c = null != (t = null == o ? true : o.nick) ? t : S.ZP.getName(e);
    return (0, a.jsx)(d.u, {
      asContainer: true,
      text: c,
      position: "bottom",
      children: (0, a.jsx)("img", {
        src: e.getAvatarURL(null == n ? true : n.guild_id, K),
        alt: c,
        className: G.avatar
      }, e.id)
    }, e.id)
  }, [X]), Q = null == Y ? true : Y.userIds, ee = (0, i.Wu)([k.default], () => Array.from(null != Q ? Q : []).map(e => k.default.getUser(e)).filter(e => null != e), [Q]), en = o.useCallback(() => {
    let e = (0, B.getPID)();
    b.Z.setInputLocked(!_.Z.isInputLocked(e), e)
  }, []), et = (0, W.P)(), {
    canStayOnTop: ea,
    popoutWindowAlwaysOnTop: eo,
    handleStayOnTop: ec
  } = function() {
    let e = (0, i.e7)([h.Z], () => h.Z.getIsAlwaysOnTop(F.KJ3.ACTIVITY_POPOUT)),
      n = o.useCallback(e => {
        g.setAlwaysOnTop(F.KJ3.ACTIVITY_POPOUT, e)
      }, []);
    return {
      canStayOnTop: Z.isPlatformEmbedded && T.ZP.supportsFeature(F.eRX.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: e,
      handleStayOnTop: n
    }
  }(), er = (0, M.y)(), {
    rootNode: ei,
    popoutWindow: el,
    toggleFullScreen: ed
  } = function() {
    let {
      popoutWindow: e,
      currentDocument: n,
      rootNode: t
    } = (0, D.Z)(), [a, c] = o.useState(false), r = o.useCallback(() => {
      null != t && a && (c(false), (0, A.Pr)(t, n))
    }, [t, n, a]), i = o.useCallback(() => {
      null != t && (a ? r() : (c(true), (0, A.Dj)(t)))
    }, [t, a, r]), l = o.useCallback(() => {
      null != t && !(0, A.rB)(t, n) && a && i()
    }, [t, n, a, i]);
    return o.useEffect(() => (null == n || n.addEventListener(A.NO, l), () => {
      null == n || n.removeEventListener(A.NO, l)
    }), [n, l]), {
      rootNode: t,
      popoutWindow: e,
      toggleFullScreen: i
    }
  }(), eu = o.useRef(null);
  if (null == c || null == Y) return null;
  let es = (0, a.jsx)(p.Z, {
    application: c,
    size: 24,
    className: G.appIcon
  });
  return V && (es = (0, a.jsx)(d.u, {
    asContainer: true,
    text: Y.compositeInstanceId,
    position: "bottom",
    children: es
  })), (0, a.jsx)(s.f6W, {
    theme: F.BRd.DARK,
    children: e => (0, a.jsxs)("div", {
      className: r()(G.container, e),
      children: [(0, a.jsxs)("div", {
        className: r()(G.headerSection, G.headerSectionLeft),
        children: [es, (0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-strong",
          className: G.applicationName,
          children: (0, a.jsx)(l.Z, {
            children: c.name
          })
        }), (0, a.jsx)("div", {
          className: G.dotSpacer,
          children: (0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: "."
          })
        }), (0, a.jsx)(L.ZP, {
          renderIcon: false,
          users: ee,
          size: K,
          max: 6,
          renderUser: e => $(e, J)
        })]
      }), (0, a.jsxs)("div", {
        className: r()(G.headerSection, G.headerSectionRight),
        children: [(0, a.jsx)("div", {
          className: G.fade
        }), (0, a.jsxs)("div", {
          className: G.actionButtonsContainer,
          children: [(0, a.jsx)(P.Z, {
            appContext: F.IlC.POPOUT,
            applicationId: n,
            channel: J,
            shouldPrioritizeGroupPlusIcon: true,
            iconClassName: G.inviteButtonIcon,
            size: u.zx.Sizes.TINY,
            look: u.zx.Looks.FILLED,
            buttonText: H.intl.string(H.t["6F9ivu"]),
            color: u.zx.Colors.TRANSPARENT
          }), et ? (0, a.jsx)(y.Z, {
            onClick: en,
            iconComponent: s.epB,
            label: H.intl.string(H.t.mseZsD)
          }) : null, ea ? (0, a.jsx)(O.Z, {
            popoutWindowAlwaysOnTop: eo,
            onToggleStayOnTop: ec
          }) : null, er ? (0, a.jsx)(w.Z, {
            popoutOpen: true,
            onOpenPopout: () => {},
            onClosePopout: () => {
              (0, f.yw)(F.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, R.Z)({
                onConfirm: () => {
                  z.Z.popInActivity()
                }
              })
            }
          }) : null, (0, a.jsx)(I.Z, {
            node: ei,
            guestWindow: el,
            onClick: ed
          }), (0, a.jsx)(s.yRy, {
            targetElementRef: eu,
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: n
              } = e;
              return (0, a.jsx)(C.Z, {
                children: (0, a.jsx)(U.Z, {
                  application: c,
                  channelId: t,
                  onClose: n
                })
              })
            },
            children: (e, n) => {
              var t, a;
              let {
                isShown: c
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
                buttonRef: eu,
                key: "more-options",
                isActive: c
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