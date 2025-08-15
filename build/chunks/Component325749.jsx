/** Chunk was on 27278 **/
/** chunk id: 325749, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk367907 = require("./367907.js"),
  Chunk753972 = require("./753972.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk610394 = require("./610394.js"),
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
  Chunk896681 = require("./896681.js");
let J = Chunk884338.u8.SIZE_24;

function V(e) {
  let {
    applicationId: n,
    channelId: t
  } = e, i = (0, a.e7)([f.Z], () => f.Z.getApplication(n)), V = (0, a.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(n)), G = (0, a.e7)([C.Z], () => C.Z.getChannel(t)), H = O.Sb.useSetting(), F = (0, a.Wu)([_.ZP], () => {
    var e;
    return null == G || null == V ? [] : Array.from(null != (e = V.userIds) ? e : []).map(e => _.ZP.getMember(G.guild_id, e))
  }, [V, G]), q = o.useMemo(() => {
    let e = new Map;
    return F.forEach(n => {
      null != n && true !== n && e.set(n.userId, n)
    }), e
  }, [F]), X = o.useCallback((e, n) => {
    var t;
    if (null == e || e === D.ag) return null;
    let o = q.get(e.id),
      i = null != (t = null == o ? true : o.nick) ? t : T.ZP.getName(e);
    return (0, r.jsx)(u.DY3, {
      text: i,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(null == n ? true : n.guild_id, J),
        alt: i,
        className: M.avatar
      }, e.id)
    }, e.id)
  }, [q]), $ = null == V ? true : V.userIds, Q = (0, a.Wu)([w.default], () => Array.from(null != $ ? $ : []).map(e => w.default.getUser(e)).filter(e => null != e), [$]), ee = o.useCallback(() => {
    let e = (0, k.getPID)();
    s.Z.setInputLocked(!v.ZP.isInputLocked(e), e)
  }, []), en = (0, R.P)(), {
    canStayOnTop: et,
    popoutWindowAlwaysOnTop: er,
    handleStayOnTop: eo
  } = function() {
    let e = (0, a.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(W.KJ3.ACTIVITY_POPOUT)),
      n = o.useCallback(e => {
        h.hY(W.KJ3.ACTIVITY_POPOUT, e)
      }, []);
    return {
      canStayOnTop: S.isPlatformEmbedded && N.ZP.supportsFeature(W.eRX.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: e,
      handleStayOnTop: n
    }
  }(), ei = (0, z.y)({
    location: "Activity Popout Window Header"
  }), {
    rootNode: el,
    popoutWindow: ea,
    toggleFullScreen: ec
  } = function() {
    let {
      popoutWindow: e,
      currentDocument: n,
      rootNode: t
    } = (0, Y.Z)(), [r, i] = o.useState(false), l = o.useCallback(() => {
      null != t && r && (i(false), (0, A.Pr)(t, n))
    }, [t, n, r]), a = o.useCallback(() => {
      null != t && (r ? l() : (i(true), (0, A.Dj)(t)))
    }, [t, r, l]), c = o.useCallback(() => {
      null != t && !(0, A.rB)(t, n) && r && a()
    }, [t, n, r, a]);
    return o.useEffect(() => (null == n || n.addEventListener(A.NO, c), () => {
      null == n || n.removeEventListener(A.NO, c)
    }), [n, c]), {
      rootNode: t,
      popoutWindow: e,
      toggleFullScreen: a
    }
  }(), eu = o.useRef(null);
  if (null == i || null == V) return null;
  let es = (0, r.jsx)(p.Z, {
    application: i,
    size: 24,
    className: M.appIcon
  });
  return H && (es = (0, r.jsx)(u.DY3, {
    text: V.compositeInstanceId,
    position: "bottom",
    children: es
  })), (0, r.jsx)(u.f6W, {
    theme: W.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: l()(M.container, e),
      children: [(0, r.jsxs)("div", {
        className: l()(M.headerSection, M.headerSectionLeft),
        children: [es, (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          className: M.applicationName,
          children: (0, r.jsx)(m.Z, {
            children: i.name
          })
        }), (0, r.jsx)("div", {
          className: M.dotSpacer,
          children: (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: "."
          })
        }), (0, r.jsx)(D.ZP, {
          renderIcon: false,
          users: Q,
          size: J,
          max: 6,
          renderUser: e => X(e, G)
        })]
      }), (0, r.jsxs)("div", {
        className: l()(M.headerSection, M.headerSectionRight),
        children: [(0, r.jsx)("div", {
          className: M.fade
        }), (0, r.jsxs)("div", {
          className: M.actionButtonsContainer,
          children: [(0, r.jsx)(y.Z, {
            appContext: W.IlC.POPOUT,
            applicationId: n,
            channel: G,
            shouldPrioritizeGroupPlusIcon: true,
            iconClassName: M.inviteButtonIcon,
            size: c.zx.Sizes.TINY,
            look: c.zx.Looks.FILLED,
            buttonText: K.intl.string(K.t["6F9ivr"]),
            color: c.zx.Colors.TRANSPARENT
          }), en ? (0, r.jsx)(x.Z, {
            onClick: ee,
            iconComponent: u.epB,
            label: K.intl.string(K.t.mseZsL)
          }) : null, et ? (0, r.jsx)(Z.Z, {
            popoutWindowAlwaysOnTop: er,
            onToggleStayOnTop: eo
          }) : null, ei ? (0, r.jsx)(I.Z, {
            popoutOpen: true,
            onOpenPopout: () => {},
            onClosePopout: () => {
              (0, d.yw)(W.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, L.Z)({
                onConfirm: () => {
                  U.Z.popInActivity()
                }
              })
            }
          }) : null, (0, r.jsx)(g.Z, {
            node: el,
            guestWindow: ea,
            onClick: ec
          }), (0, r.jsx)(u.yRy, {
            targetElementRef: eu,
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: n
              } = e;
              return (0, r.jsx)(j.Z, {
                children: (0, r.jsx)(B.Z, {
                  application: i,
                  channelId: t,
                  onClose: n
                })
              })
            },
            children: (e, n) => {
              var t, r;
              let {
                isShown: i
              } = n;
              return (0, o.createElement)(P.Z, (t = function(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), r.forEach(function(n) {
                    var r;
                    r = t[n], n in e ? Object.defineProperty(e, n, {
                      value: r,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[n] = r
                  })
                }
                return e
              }({}, e), r = r = {
                buttonRef: eu,
                key: "more-options",
                isActive: i
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, r)
                }
                return t
              })(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              }), t))
            }
          }, "more-options-popout")]
        })]
      })]
    })
  })
}