/** Chunk was on 13492 **/
/** chunk id: 780376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => H,
  d: () => q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function q(e) {
  let t, n, {
      hasActivity: i,
      applicationId: L,
      channelId: D,
      compositeInstanceId: G,
      userIds: q,
      isRichPresenceInvite: H,
      onConfirmClosePopout: Z
    } = e,
    J = (0, a.bG)([A.A], () => A.A.getApplication(L)),
    X = (0, a.bG)([_.A], () => _.A.getChannel(D)),
    Q = O.Q_.useSetting(),
    ee = (0, a.yK)([T.Ay], () => null == X || null == q ? [] : Array.from(null != q ? q : []).map(e => T.Ay.getMember(X.guild_id, e)), [X, q]),
    et = r.useMemo(() => {
      let e = new Map;
      return ee.forEach(t => {
        null != t && true !== t && e.set(t.userId, t)
      }), e
    }, [ee]),
    en = r.useCallback((e, t) => {
      var n;
      if (null == e || e === F.mt) return null;
      let r = et.get(e.id),
        i = null != (n = null == r ? true : r.nick) ? n : N.Ay.getName(e);
      return (0, l.jsx)(s.m, {
        asContainer: true,
        text: i,
        position: "bottom",
        children: (0, l.jsx)("img", {
          src: e.getAvatarURL(null == t ? true : t.guild_id, $),
          alt: i,
          className: z.my
        }, e.id)
      }, e.id)
    }, [et]),
    el = (0, a.yK)([k.default], () => Array.from(null != q ? q : []).map(e => k.default.getUser(e)).filter(e => null != e), [q]),
    er = r.useCallback(() => {
      let e = (0, R.getPID)();
      p.A.setInputLocked(!b.A.isInputLocked(e), e)
    }, []),
    ei = (0, U.V)(),
    {
      canStayOnTop: eo,
      popoutWindowAlwaysOnTop: ea,
      handleStayOnTop: ec
    } = (t = (0, a.bG)([y.A], () => y.A.getIsAlwaysOnTop(B.MLl.ACTIVITY_POPOUT)), n = r.useCallback(e => {
      v.setAlwaysOnTop(B.MLl.ACTIVITY_POPOUT, e)
    }, []), {
      canStayOnTop: w.isPlatformEmbedded && S.Ay.supportsFeature(B.BYE.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: t,
      handleStayOnTop: n
    }),
    es = (0, M.G)(),
    {
      rootNode: eu,
      popoutWindow: ed,
      toggleFullScreen: ep
    } = function() {
      let {
        popoutWindow: e,
        currentDocument: t,
        rootNode: n
      } = (0, Y.A)(), [l, i] = r.useState(false), o = r.useCallback(() => {
        null == n || l && (i(false), (0, E.sP)(n, t))
      }, [n, t, l]), a = r.useCallback(() => {
        null != n && (l ? o() : (i(true), (0, E.tl)(n)))
      }, [n, l, o]), c = r.useCallback(() => {
        null != n && !(0, E._U)(n, t) && l && a()
      }, [n, t, l, a]);
      return r.useEffect(() => (null == t || t.addEventListener(E.Wb, c), () => {
        null == t || t.removeEventListener(E.Wb, c)
      }), [t, c]), {
        rootNode: n,
        popoutWindow: e,
        toggleFullScreen: a
      }
    }(),
    ef = r.useRef(null);
  if (null == J || !i) return null;
  let em = (0, l.jsx)(m.A, {
    application: J,
    size: 24,
    className: z.Z2
  });
  return Q && null != G && (em = (0, l.jsx)(s.m, {
    asContainer: true,
    text: G,
    position: "bottom",
    children: em
  })), (0, l.jsx)(d.NPJ, {
    theme: B.NJ8.DARK,
    children: e => (0, l.jsxs)("div", {
      className: o()(z.kL, e),
      children: [(0, l.jsxs)("div", {
        className: o()(z.ND, z.c8),
        children: [em, (0, l.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "text-strong",
          className: z.SX,
          children: (0, l.jsx)(c.A, {
            children: J.name
          })
        }), el.length > 0 ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)("div", {
            className: z.SC,
            children: (0, l.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: "."
            })
          }), (0, l.jsx)(F.Ay, {
            renderIcon: false,
            users: el,
            size: $,
            max: 6,
            renderUser: e => en(e, X)
          })]
        }) : null]
      }), (0, l.jsxs)("div", {
        className: o()(z.ND, z.fU),
        children: [(0, l.jsx)("div", {
          className: z.Rv
        }), (0, l.jsxs)("div", {
          className: z.fc,
          children: [(0, l.jsx)(I.A, {
            appContext: B.BRT.POPOUT,
            applicationId: L,
            channel: X,
            shouldPrioritizeGroupPlusIcon: true,
            isRichPresenceInvite: H,
            iconClassName: z.NS,
            size: u.$n.Sizes.TINY,
            look: u.$n.Looks.FILLED,
            buttonText: V.intl.string(V.t["6F9ivu"]),
            color: u.$n.Colors.TRANSPARENT
          }), ei ? (0, l.jsx)(g.A, {
            onClick: er,
            iconComponent: d.ld1,
            label: V.intl.string(V.t.mseZsD)
          }) : null, eo ? (0, l.jsx)(C.A, {
            popoutWindowAlwaysOnTop: ea,
            onToggleStayOnTop: ec
          }) : null, es ? (0, l.jsx)(P.A, {
            popoutOpen: true,
            onOpenPopout: () => {},
            onClosePopout: () => {
              (0, f.zV)(B.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, K.A)({
                onConfirm: Z
              })
            }
          }) : null, (0, l.jsx)(h.A, {
            node: eu,
            guestWindow: ed,
            onClick: ep
          }), (0, l.jsx)(d.YNO, {
            targetElementRef: ef,
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, l.jsx)(j.A, {
                children: (0, l.jsx)(W.default, {
                  application: J,
                  channelId: D,
                  onClose: t
                })
              })
            },
            children: (e, t) => {
              var n, l;
              let {
                isShown: i
              } = t;
              return (0, r.createElement)(x.A, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = l
                  })
                }
                return e
              }({}, e), l = l = {
                buttonRef: ef,
                key: "more-options",
                isActive: i
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(l)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
              }), n))
            }
          }, "more-options-popout")]
        })]
      })]
    })
  })
}

function H(e) {
  let {
    applicationId: t,
    channelId: n
  } = e, i = (0, a.bG)([D.Ay], () => D.Ay.getSelfEmbeddedActivities().get(t)), o = r.useCallback(async () => {
    await (0, L.od)(t, null != n ? n : null), G.A.popInActivity()
  }, [t, n]);
  return (0, l.jsx)(q, {
    hasActivity: null != i,
    applicationId: t,
    channelId: n,
    compositeInstanceId: null == i ? true : i.compositeInstanceId,
    userIds: null == i ? true : i.userIds,
    isRichPresenceInvite: false,
    onConfirmClosePopout: o
  })
}