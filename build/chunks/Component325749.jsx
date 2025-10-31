/** Chunk was on 27278 **/
/** chunk id: 325749, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk896681 = require("./896681.js");
let K = Chunk884338.u8.SIZE_24;

function Y(e) {
  let {
    applicationId: n,
    channelId: t
  } = e, a = (0, c.e7)([m.Z], () => m.Z.getApplication(n)), Y = (0, c.e7)([W.ZP], () => W.ZP.getSelfEmbeddedActivities().get(n)), J = (0, c.e7)([O.Z], () => O.Z.getChannel(t)), V = g.Sb.useSetting(), q = (0, c.Wu)([j.ZP], () => {
    var e;
    return null == J || null == Y ? [] : Array.from(null != (e = Y.userIds) ? e : []).map(e => j.ZP.getMember(J.guild_id, e))
  }, [Y, J]), X = r.useMemo(() => {
    let e = new Map;
    return q.forEach(n => {
      null != n && true !== n && e.set(n.userId, n)
    }), e
  }, [q]), $ = r.useCallback((e, n) => {
    var t;
    if (null == e || e === L.ag) return null;
    let r = X.get(e.id),
      a = null != (t = null == r ? true : r.nick) ? t : T.ZP.getName(e);
    return (0, o.jsx)(u.u, {
      asContainer: true,
      text: a,
      position: "bottom",
      children: (0, o.jsx)("img", {
        src: e.getAvatarURL(null == n ? true : n.guild_id, K),
        alt: a,
        className: G.avatar
      }, e.id)
    }, e.id)
  }, [X]), Q = null == Y ? true : Y.userIds, ee = (0, c.Wu)([k.default], () => Array.from(null != Q ? Q : []).map(e => k.default.getUser(e)).filter(e => null != e), [Q]), en = r.useCallback(() => {
    let e = (0, A.getPID)();
    s.Z.setInputLocked(!b.Z.isInputLocked(e), e)
  }, []), et = (0, E.P)(), {
    canStayOnTop: eo,
    popoutWindowAlwaysOnTop: er,
    handleStayOnTop: ea
  } = function() {
    let e = (0, c.e7)([h.Z], () => h.Z.getIsAlwaysOnTop(F.KJ3.ACTIVITY_POPOUT)),
      n = r.useCallback(e => {
        v.hY(F.KJ3.ACTIVITY_POPOUT, e)
      }, []);
    return {
      canStayOnTop: Z.isPlatformEmbedded && B.ZP.supportsFeature(F.eRX.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: e,
      handleStayOnTop: n
    }
  }(), ei = (0, M.y)(), {
    rootNode: ec,
    popoutWindow: el,
    toggleFullScreen: eu
  } = function() {
    let {
      popoutWindow: e,
      currentDocument: n,
      rootNode: t
    } = (0, R.Z)(), [o, a] = r.useState(false), i = r.useCallback(() => {
      null != t && o && (a(false), (0, S.Pr)(t, n))
    }, [t, n, o]), c = r.useCallback(() => {
      null != t && (o ? i() : (a(true), (0, S.Dj)(t)))
    }, [t, o, i]), l = r.useCallback(() => {
      null != t && !(0, S.rB)(t, n) && o && c()
    }, [t, n, o, c]);
    return r.useEffect(() => (null == n || n.addEventListener(S.NO, l), () => {
      null == n || n.removeEventListener(S.NO, l)
    }), [n, l]), {
      rootNode: t,
      popoutWindow: e,
      toggleFullScreen: c
    }
  }(), e_ = r.useRef(null);
  if (null == a || null == Y) return null;
  let ed = (0, o.jsx)(f.Z, {
    application: a,
    size: 24,
    className: G.appIcon
  });
  return V && (ed = (0, o.jsx)(u.u, {
    asContainer: true,
    text: Y.compositeInstanceId,
    position: "bottom",
    children: ed
  })), (0, o.jsx)(d.f6W, {
    theme: F.BRd.DARK,
    children: e => (0, o.jsxs)("div", {
      className: i()(G.container, e),
      children: [(0, o.jsxs)("div", {
        className: i()(G.headerSection, G.headerSectionLeft),
        children: [ed, (0, o.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          className: G.applicationName,
          children: (0, o.jsx)(l.Z, {
            children: a.name
          })
        }), (0, o.jsx)("div", {
          className: G.dotSpacer,
          children: (0, o.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: "."
          })
        }), (0, o.jsx)(L.ZP, {
          renderIcon: false,
          users: ee,
          size: K,
          max: 6,
          renderUser: e => $(e, J)
        })]
      }), (0, o.jsxs)("div", {
        className: i()(G.headerSection, G.headerSectionRight),
        children: [(0, o.jsx)("div", {
          className: G.fade
        }), (0, o.jsxs)("div", {
          className: G.actionButtonsContainer,
          children: [(0, o.jsx)(P.Z, {
            appContext: F.IlC.POPOUT,
            applicationId: n,
            channel: J,
            shouldPrioritizeGroupPlusIcon: true,
            iconClassName: G.inviteButtonIcon,
            size: _.zx.Sizes.TINY,
            look: _.zx.Looks.FILLED,
            buttonText: H.intl.string(H.t["6F9ivu"]),
            color: _.zx.Colors.TRANSPARENT
          }), et ? (0, o.jsx)(I.Z, {
            onClick: en,
            iconComponent: d.epB,
            label: H.intl.string(H.t.mseZsD)
          }) : null, eo ? (0, o.jsx)(N.Z, {
            popoutWindowAlwaysOnTop: er,
            onToggleStayOnTop: ea
          }) : null, ei ? (0, o.jsx)(w.Z, {
            popoutOpen: true,
            onOpenPopout: () => {},
            onClosePopout: () => {
              (0, p.yw)(F.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, U.Z)({
                onConfirm: () => {
                  z.Z.popInActivity()
                }
              })
            }
          }) : null, (0, o.jsx)(y.Z, {
            node: ec,
            guestWindow: el,
            onClick: eu
          }), (0, o.jsx)(d.yRy, {
            targetElementRef: e_,
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: n
              } = e;
              return (0, o.jsx)(C.Z, {
                children: (0, o.jsx)(D.Z, {
                  application: a,
                  channelId: t,
                  onClose: n
                })
              })
            },
            children: (e, n) => {
              var t, o;
              let {
                isShown: a
              } = n;
              return (0, r.createElement)(x.Z, (t = function(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    o = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), o.forEach(function(n) {
                    var o;
                    o = t[n], n in e ? Object.defineProperty(e, n, {
                      value: o,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[n] = o
                  })
                }
                return e
              }({}, e), o = o = {
                buttonRef: e_,
                key: "more-options",
                isActive: a
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, o)
                }
                return t
              })(Object(o)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
              }), t))
            }
          }, "more-options-popout")]
        })]
      })]
    })
  })
}