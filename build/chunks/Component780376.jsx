/** Chunk was on 13492 **/
/** chunk id: 780376, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => J,
  d: () => B
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  d = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk684013 = require("./684013.js"),
  Chunk58149 = require("./58149.js"),
  Chunk717048 = require("./717048.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk222506 = require("./222506.js"),
  Chunk87001 = require("./87001.js"),
  Chunk574172 = require("./574172.js"),
  Chunk253932 = require("./253932.js"),
  Chunk246356 = require("./246356.js"),
  Chunk459632 = require("./459632.jsx"),
  Chunk709562 = require("./709562.jsx"),
  Chunk423562 = require("./423562.jsx"),
  Chunk520006 = require("./520006.jsx"),
  Chunk128286 = require("./128286.jsx"),
  Chunk619344 = require("./619344.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk723702 = require("./723702.js"),
  Chunk427262 = require("./427262.js"),
  Chunk837921 = require("./837921.js"),
  Chunk475815 = require("./475815.js"),
  Chunk9302 = require("./9302.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk57220 = require("./57220.js"),
  Chunk869003 = require("./869003.jsx"),
  Chunk104171 = require("./104171.jsx"),
  Chunk47294 = require("./47294.jsx"),
  Chunk246323 = require("./246323.jsx"),
  Chunk365995 = require("./365995.js"),
  Chunk16961 = require("./16961.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk936106 = require("./936106.js");
let $ = Chunk104171.DN.SIZE_24;

function B(e) {
  let t, a, {
      hasActivity: l,
      applicationId: R,
      channelId: U,
      compositeInstanceId: D,
      userIds: B,
      isRichPresenceInvite: J,
      onConfirmClosePopout: q
    } = e,
    Z = (0, r.bG)([_.A], () => _.A.getApplication(R)),
    X = (0, r.bG)([k.A], () => k.A.getChannel(U)),
    Q = v.Q_.useSetting(),
    ee = (0, r.yK)([C.Ay], () => null == X || null == B ? [] : Array.from(null != B ? B : []).map(e => C.Ay.getMember(X.guild_id, e)), [X, B]),
    et = n.useMemo(() => {
      let e = new Map;
      return ee.forEach(t => {
        null != t && true !== t && e.set(t.userId, t)
      }), e
    }, [ee]),
    ea = n.useCallback((e, t) => {
      var a;
      if (null == e || e === K.mt) return null;
      let n = et.get(e.id),
        l = null != (a = null == n ? true : n.nick) ? a : w.Ay.getName(e);
      return (0, c.jsx)(i.m, {
        asContainer: true,
        text: l,
        position: "bottom",
        children: (0, c.jsx)("img", {
          src: e.getAvatarURL(null == t ? true : t.guild_id, $),
          alt: l,
          className: H.my
        }, e.id)
      }, e.id)
    }, [et]),
    ec = (0, r.yK)([T.default], () => Array.from(null != B ? B : []).map(e => T.default.getUser(e)).filter(e => null != e), [B]),
    en = n.useCallback(() => {
      let e = (0, L.getPID)();
      s.A.setInputLocked(!m.A.isInputLocked(e), e)
    }, []),
    el = (0, G.V)(),
    {
      canStayOnTop: ed,
      popoutWindowAlwaysOnTop: er,
      handleStayOnTop: eo
    } = (t = (0, r.bG)([x.A], () => x.A.getIsAlwaysOnTop(W.MLl.ACTIVITY_POPOUT)), a = n.useCallback(e => {
      A.setAlwaysOnTop(W.MLl.ACTIVITY_POPOUT, e)
    }, []), {
      canStayOnTop: N.isPlatformEmbedded && E.Ay.supportsFeature(W.BYE.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: t,
      handleStayOnTop: a
    }),
    ei = (0, F.G)(),
    {
      rootNode: ef,
      popoutWindow: eb,
      toggleFullScreen: es
    } = function() {
      let {
        popoutWindow: e,
        currentDocument: t,
        rootNode: a
      } = (0, z.A)(), [c, l] = n.useState(false), d = n.useCallback(() => {
        null == a || c && (l(false), (0, S.sP)(a, t))
      }, [a, t, c]), r = n.useCallback(() => {
        null != a && (c ? d() : (l(true), (0, S.tl)(a)))
      }, [a, c, d]), o = n.useCallback(() => {
        null != a && !(0, S._U)(a, t) && c && r()
      }, [a, t, c, r]);
      return n.useEffect(() => (null == t || t.addEventListener(S.Wb, o), () => {
        null == t || t.removeEventListener(S.Wb, o)
      }), [t, o]), {
        rootNode: a,
        popoutWindow: e,
        toggleFullScreen: r
      }
    }(),
    eu = n.useRef(null);
  if (null == Z || !l) return null;
  let ep = (0, c.jsx)(p.A, {
    application: Z,
    size: 24,
    className: H.Z2
  });
  return Q && null != D && (ep = (0, c.jsx)(i.m, {
    asContainer: true,
    text: D,
    position: "bottom",
    children: ep
  })), (0, c.jsx)(b.NPJ, {
    theme: W.NJ8.DARK,
    children: e => (0, c.jsxs)("div", {
      className: d()(H.kL, e),
      children: [(0, c.jsxs)("div", {
        className: d()(H.ND, H.c8),
        children: [ep, (0, c.jsx)(b.Text, {
          variant: "text-md/normal",
          color: "text-strong",
          className: H.SX,
          children: (0, c.jsx)(o.A, {
            children: Z.name
          })
        }), ec.length > 0 ? (0, c.jsxs)(c.Fragment, {
          children: [(0, c.jsx)("div", {
            className: H.SC,
            children: (0, c.jsx)(b.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: "."
            })
          }), (0, c.jsx)(K.Ay, {
            renderIcon: false,
            users: ec,
            size: $,
            max: 6,
            renderUser: e => ea(e, X)
          })]
        }) : null]
      }), (0, c.jsxs)("div", {
        className: d()(H.ND, H.fU),
        children: [(0, c.jsx)("div", {
          className: H.Rv
        }), (0, c.jsxs)("div", {
          className: H.fc,
          children: [(0, c.jsx)(I.A, {
            appContext: W.BRT.POPOUT,
            applicationId: R,
            channel: X,
            shouldPrioritizeGroupPlusIcon: true,
            isRichPresenceInvite: J,
            iconClassName: H.NS,
            size: f.$n.Sizes.TINY,
            look: f.$n.Looks.FILLED,
            buttonText: Y.intl.string(Y.t["6F9ivu"]),
            color: f.$n.Colors.TRANSPARENT
          }), el ? (0, c.jsx)(j.A, {
            onClick: en,
            iconComponent: b.ld1,
            label: Y.intl.string(Y.t.mseZsD)
          }) : null, ed ? (0, c.jsx)(h.A, {
            popoutWindowAlwaysOnTop: er,
            onToggleStayOnTop: eo
          }) : null, ei ? (0, c.jsx)(g.A, {
            popoutOpen: true,
            onOpenPopout: () => {},
            onClosePopout: () => {
              (0, u.zV)(W.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, M.A)({
                onConfirm: q
              })
            }
          }) : null, (0, c.jsx)(P.A, {
            node: ef,
            guestWindow: eb,
            onClick: es
          }), (0, c.jsx)(b.YNO, {
            targetElementRef: eu,
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, c.jsx)(y.A, {
                children: (0, c.jsx)(V.A, {
                  application: Z,
                  channelId: U,
                  onClose: t
                })
              })
            },
            children: (e, t) => {
              var a, c;
              let {
                isShown: l
              } = t;
              return (0, n.createElement)(O.A, (a = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = null != arguments[t] ? arguments[t] : {},
                    c = Object.keys(a);
                  "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                  }))), c.forEach(function(t) {
                    var c;
                    c = a[t], t in e ? Object.defineProperty(e, t, {
                      value: c,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = c
                  })
                }
                return e
              }({}, e), c = c = {
                buttonRef: eu,
                key: "more-options",
                isActive: l
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var c = Object.getOwnPropertySymbols(e);
                  a.push.apply(a, c)
                }
                return a
              })(Object(c)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(c, e))
              }), a))
            }
          }, "more-options-popout")]
        })]
      })]
    })
  })
}

function J(e) {
  let {
    applicationId: t,
    channelId: a
  } = e, l = (0, r.bG)([U.Ay], () => U.Ay.getSelfEmbeddedActivities().get(t)), d = n.useCallback(async () => {
    await (0, R.od)(t, null != a ? a : null), D.A.popInActivity()
  }, [t, a]);
  return (0, c.jsx)(B, {
    hasActivity: null != l,
    applicationId: t,
    channelId: a,
    compositeInstanceId: null == l ? true : l.compositeInstanceId,
    userIds: null == l ? true : l.userIds,
    isRichPresenceInvite: false,
    onConfirmClosePopout: d
  })
}