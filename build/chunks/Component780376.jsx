/** Chunk was on 13492 **/
/** chunk id: 780376, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => J,
  d: () => $
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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
let Y = Chunk104171.DN.SIZE_24;

function $(e) {
  let n, t, {
      hasActivity: a,
      applicationId: R,
      channelId: U,
      compositeInstanceId: B,
      userIds: $,
      isRichPresenceInvite: J,
      onConfirmClosePopout: Z
    } = e,
    q = (0, l.bG)([f.A], () => f.A.getApplication(R)),
    X = (0, l.bG)([k.A], () => k.A.getChannel(U)),
    Q = h.Q_.useSetting(),
    ee = (0, l.yK)([j.Ay], () => null == X || null == $ ? [] : Array.from(null != $ ? $ : []).map(e => j.Ay.getMember(X.guild_id, e)), [X, $]),
    en = o.useMemo(() => {
      let e = new Map;
      return ee.forEach(n => {
        null != n && true !== n && e.set(n.userId, n)
      }), e
    }, [ee]),
    et = o.useCallback((e, n) => {
      var t;
      if (null == e || e === W.mt) return null;
      let o = en.get(e.id),
        a = null != (t = null == o ? true : o.nick) ? t : T.Ay.getName(e);
      return (0, r.jsx)(_.m, {
        asContainer: true,
        text: a,
        position: "bottom",
        children: (0, r.jsx)("img", {
          src: e.getAvatarURL(null == n ? true : n.guild_id, Y),
          alt: a,
          className: H.my
        }, e.id)
      }, e.id)
    }, [en]),
    er = (0, l.yK)([N.default], () => Array.from(null != $ ? $ : []).map(e => N.default.getUser(e)).filter(e => null != e), [$]),
    eo = o.useCallback(() => {
      let e = (0, L.getPID)();
      u.A.setInputLocked(!m.A.isInputLocked(e), e)
    }, []),
    ea = (0, D.V)(),
    {
      canStayOnTop: ei,
      popoutWindowAlwaysOnTop: el,
      handleStayOnTop: ec
    } = (n = (0, l.bG)([v.A], () => v.A.getIsAlwaysOnTop(F.MLl.ACTIVITY_POPOUT)), t = o.useCallback(e => {
      y.setAlwaysOnTop(F.MLl.ACTIVITY_POPOUT, e)
    }, []), {
      canStayOnTop: w.isPlatformEmbedded && S.Ay.supportsFeature(F.BYE.POPOUT_WINDOWS),
      popoutWindowAlwaysOnTop: n,
      handleStayOnTop: t
    }),
    e_ = (0, K.G)(),
    {
      rootNode: es,
      popoutWindow: ed,
      toggleFullScreen: eu
    } = function() {
      let {
        popoutWindow: e,
        currentDocument: n,
        rootNode: t
      } = (0, M.A)(), [r, a] = o.useState(false), i = o.useCallback(() => {
        null == t || r && (a(false), (0, E.sP)(t, n))
      }, [t, n, r]), l = o.useCallback(() => {
        null != t && (r ? i() : (a(true), (0, E.tl)(t)))
      }, [t, r, i]), c = o.useCallback(() => {
        null != t && !(0, E._U)(t, n) && r && l()
      }, [t, n, r, l]);
      return o.useEffect(() => (null == n || n.addEventListener(E.Wb, c), () => {
        null == n || n.removeEventListener(E.Wb, c)
      }), [n, c]), {
        rootNode: t,
        popoutWindow: e,
        toggleFullScreen: l
      }
    }(),
    ep = o.useRef(null);
  if (null == q || !a) return null;
  let eb = (0, r.jsx)(b.A, {
    application: q,
    size: 24,
    className: H.Z2
  });
  return Q && null != B && (eb = (0, r.jsx)(_.m, {
    asContainer: true,
    text: B,
    position: "bottom",
    children: eb
  })), (0, r.jsx)(d.NPJ, {
    theme: F.NJ8.DARK,
    children: e => (0, r.jsxs)("div", {
      className: i()(H.kL, e),
      children: [(0, r.jsxs)("div", {
        className: i()(H.ND, H.c8),
        children: [eb, (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "text-strong",
          className: H.SX,
          children: (0, r.jsx)(c.A, {
            children: q.name
          })
        }), er.length > 0 ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: H.SC,
            children: (0, r.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: "."
            })
          }), (0, r.jsx)(W.Ay, {
            renderIcon: false,
            users: er,
            size: Y,
            max: 6,
            renderUser: e => et(e, X)
          })]
        }) : null]
      }), (0, r.jsxs)("div", {
        className: i()(H.ND, H.fU),
        children: [(0, r.jsx)("div", {
          className: H.Rv
        }), (0, r.jsxs)("div", {
          className: H.fc,
          children: [(0, r.jsx)(I.A, {
            appContext: F.BRT.POPOUT,
            applicationId: R,
            channel: X,
            shouldPrioritizeGroupPlusIcon: true,
            isRichPresenceInvite: J,
            iconClassName: H.NS,
            size: s.$n.Sizes.TINY,
            look: s.$n.Looks.FILLED,
            buttonText: V.intl.string(V.t["6F9ivu"]),
            color: s.$n.Colors.TRANSPARENT
          }), ea ? (0, r.jsx)(g.A, {
            onClick: eo,
            iconComponent: d.ld1,
            label: V.intl.string(V.t.mseZsD)
          }) : null, ei ? (0, r.jsx)(P.A, {
            popoutWindowAlwaysOnTop: el,
            onToggleStayOnTop: ec
          }) : null, e_ ? (0, r.jsx)(O.A, {
            popoutOpen: true,
            onOpenPopout: () => {},
            onClosePopout: () => {
              (0, p.zV)(F.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, z.A)({
                onConfirm: Z
              })
            }
          }) : null, (0, r.jsx)(C.A, {
            node: es,
            guestWindow: ed,
            onClick: eu
          }), (0, r.jsx)(d.YNO, {
            targetElementRef: ep,
            position: "bottom",
            renderPopout: e => {
              let {
                closePopout: n
              } = e;
              return (0, r.jsx)(x.A, {
                children: (0, r.jsx)(G.default, {
                  application: q,
                  channelId: U,
                  onClose: n
                })
              })
            },
            children: (e, n) => {
              var t, r;
              let {
                isShown: a
              } = n;
              return (0, o.createElement)(A.A, (t = function(e) {
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
                buttonRef: ep,
                key: "more-options",
                isActive: a
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

function J(e) {
  let {
    applicationId: n,
    channelId: t
  } = e, a = (0, l.bG)([U.Ay], () => U.Ay.getSelfEmbeddedActivities().get(n)), i = o.useCallback(async () => {
    await (0, R.od)(n, null != t ? t : null), B.A.popInActivity()
  }, [n, t]);
  return (0, r.jsx)($, {
    hasActivity: null != a,
    applicationId: n,
    channelId: t,
    compositeInstanceId: null == a ? true : a.compositeInstanceId,
    userIds: null == a ? true : a.userIds,
    isRichPresenceInvite: false,
    onConfirmClosePopout: i
  })
}