/** Chunk was on 27278 **/
/** chunk id: 325749, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
let V = Chunk884338.u8.SIZE_24;

function G(e) {
  let {
    applicationId: n,
    channelId: t
  } = e, i = (0, a.e7)([m.Z], () => m.Z.getApplication(n)), G = (0, a.e7)([R.ZP], () => R.ZP.getSelfEmbeddedActivities().get(n)), F = (0, a.e7)([T.Z], () => T.Z.getChannel(t)), H = j.Sb.useSetting(), q = (0, a.Wu)([w.ZP], () => {
    var e;
    return null == F || null == G ? [] : Array.from(null != (e = G.userIds) ? e : []).map(e => w.ZP.getMember(F.guild_id, e))
  }, [G, F]), X = o.useMemo(() => {
    let e = new Map;
    return q.forEach(n => {
      null != n && true !== n && e.set(n.userId, n)
    }), e
  }, [q]), $ = o.useCallback((e, n) => {
    var t;
    if (null == e || e === D.ag) return null;
    let o = X.get(e.id),
      i = null != (t = null == o ? true : o.nick) ? t : _.ZP.getName(e);
    return (0, r.jsx)(u.u, {
      asContainer: true,
      text: i,
      position: "bottom",
      children: (0, r.jsx)("img", {
        src: e.getAvatarURL(null == n ? true : n.guild_id, V),
        alt: i,
        className: J.avatar
      }, e.id)
    }, e.id)
  }, [X]), Q = null == G ? true : G.userIds, ee = (0, a.Wu)([S.default], () => Array.from(null != Q ? Q : []).map(e => S.default.getUser(e)).filter(e => null != e), [Q]), en = o.useCallback(() => {
    let e = (0, E.getPID)();
    p.Z.setInputLocked(!v.Z.isInputLocked(e), e)
  }, []), et = (0, U.P)(), {
    canStayOnTop: er,
    popoutWindowAlwaysOnTop: eo,
    handleStayOnTop: ei
  } = function() {
    let e = (0, a.e7)([h.Z], () => h.Z.getIsAlwaysOnTop(M.KJ3.ACTIVITY_POPOUT)),
      n = o.useCallback(e => {
        O.setAlwaysOnTop(M.KJ3.ACTIVITY_POPOUT, e)
      }, []);
    return {
      canStayOnTop: N.isPlatformEmbedded && A.ZP.supportsFeature(M.eRX.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: e,
      handleStayOnTop: n
    }
  }(), el = (0, W.y)(), {
    rootNode: ea,
    popoutWindow: ec,
    toggleFullScreen: eu
  } = function() {
    let {
      popoutWindow: e,
      currentDocument: n,
      rootNode: t
    } = (0, K.Z)(), [r, i] = o.useState(false), l = o.useCallback(() => {
      null != t && r && (i(false), (0, k.Pr)(t, n))
    }, [t, n, r]), a = o.useCallback(() => {
      null != t && (r ? l() : (i(true), (0, k.Dj)(t)))
    }, [t, r, l]), c = o.useCallback(() => {
      null != t && !(0, k.rB)(t, n) && r && a()
    }, [t, n, r, a]);
    return o.useEffect(() => (null == n || n.addEventListener(k.NO, c), () => {
      null == n || n.removeEventListener(k.NO, c)
    }), [n, c]), {
      rootNode: t,
      popoutWindow: e,
      toggleFullScreen: a
    }
  }(), es = o.useRef(null);
  if (null == i || null == G) return null;
  let ed = (0, r.jsx)(b.Z, {
    application: i,
    size: 24,
    className: J.appIcon
  });
  return H && (ed = (0, r.jsx)(u.u, {
    asContainer: true,
    text: G.compositeInstanceId,
    position: "bottom",
    children: ed
  })), (0, r.jsx)(d.f6W, {
    theme: M.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: l()(J.container, e),
      children: [(0, r.jsxs)("div", {
        className: l()(J.headerSection, J.headerSectionLeft),
        children: [ed, (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          className: J.applicationName,
          children: (0, r.jsx)(c.Z, {
            children: i.name
          })
        }), (0, r.jsx)("div", {
          className: J.dotSpacer,
          children: (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: "."
          })
        }), (0, r.jsx)(D.ZP, {
          renderIcon: false,
          users: ee,
          size: V,
          max: 6,
          renderUser: e => $(e, F)
        })]
      }), (0, r.jsxs)("div", {
        className: l()(J.headerSection, J.headerSectionRight),
        children: [(0, r.jsx)("div", {
          className: J.fade
        }), (0, r.jsxs)("div", {
          className: J.actionButtonsContainer,
          children: [(0, r.jsx)(I.Z, {
            appContext: M.IlC.POPOUT,
            applicationId: n,
            channel: F,
            shouldPrioritizeGroupPlusIcon: true,
            iconClassName: J.inviteButtonIcon,
            size: s.zx.Sizes.TINY,
            look: s.zx.Looks.FILLED,
            buttonText: Y.intl.string(Y.t["6F9ivu"]),
            color: s.zx.Colors.TRANSPARENT
          }), et ? (0, r.jsx)(g.Z, {
            onClick: en,
            iconComponent: d.epB,
            label: Y.intl.string(Y.t.mseZsD)
          }) : null, er ? (0, r.jsx)(Z.Z, {
            popoutWindowAlwaysOnTop: eo,
            onToggleStayOnTop: ei
          }) : null, el ? (0, r.jsx)(C.Z, {
            popoutOpen: true,
            onOpenPopout: () => {},
            onClosePopout: () => {
              (0, f.yw)(M.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, L.Z)({
                onConfirm: () => {
                  B.Z.popInActivity()
                }
              })
            }
          }) : null, (0, r.jsx)(y.Z, {
            node: ea,
            guestWindow: ec,
            onClick: eu
          }), (0, r.jsx)(d.yRy, {
            targetElementRef: es,
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: n
              } = e;
              return (0, r.jsx)(P.Z, {
                children: (0, r.jsx)(z.Z, {
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
              return (0, o.createElement)(x.Z, (t = function(e) {
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
                buttonRef: es,
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