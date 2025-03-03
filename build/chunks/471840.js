/** Chunk was on 30088 **/
n.d(t, {
  default: () => F
}), n(47120), n(653041);
var a = n(200651),
  i = n(192379),
  l = n(120356),
  s = n.n(l),
  r = n(990547),
  c = n(442837),
  o = n(477690),
  d = n(481060),
  u = n(493773),
  p = n(110924),
  f = n(40851),
  g = n(367907),
  m = n(565384),
  v = n(906732),
  h = n(835473),
  b = n(600164),
  x = n(592125),
  _ = n(451478),
  C = n(626135),
  I = n(585483),
  y = n(624138),
  T = n(115130),
  j = n(566620),
  N = n(421),
  Z = n(895395),
  S = n(49978),
  O = n(427996),
  E = n(701488),
  A = n(981631),
  M = n(388032),
  P = n(261349),
  w = n(361205),
  L = n(812320);

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a
    })
  }
  return e
}
let D = (0, y.Mg)(o.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
  W = (0, y.Mg)(o.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
  R = (0, y.Mg)(o.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + D + (0, y.Mg)(o.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);

function F(e) {
  var t, n, {
      channel: l,
      guildId: s,
      locationObject: o,
      onClose: f,
      initialSelectedApplicationId: _,
      initialSlide: y = E.ag.DIRECTORY,
      enableSelectedTextChannelInvite: D,
      analyticsLocations: R
    } = e,
    F = function(e, t) {
      if (null == e) return {};
      var n, a, i = function(e, t) {
        if (null == e) return {};
        var n, a, i = {},
          l = Object.keys(e);
        for (a = 0; a < l.length; a++) n = l[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (a = 0; a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["channel", "guildId", "locationObject", "onClose", "initialSelectedApplicationId", "initialSlide", "enableSelectedTextChannelInvite", "analyticsLocations"]);
  let V = (0, c.e7)([T.Z], () => T.Z.getIsEnabled(), []),
    {
      analyticsLocations: H
    } = (0, v.ZP)(R),
    [U, Y] = i.useState(y),
    G = (0, p.Z)(U),
    [z, q] = i.useState(null),
    [J, X] = i.useState(_),
    [$, Q] = i.useState(void 0),
    [K] = (0, h.Z)(null == J ? [] : [J]),
    ee = i.useRef(null),
    et = i.useMemo(() => ({
      application_id: J,
      source_section: o.section,
      impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
    }), [o.section, J]);
  i.useEffect(() => {
    if (U === E.ag.DIRECTORY && null != G && G !== E.ag.DIRECTORY && null != z) {
      var e;
      null === (e = ee.current) || void 0 === e || e.scrollTo({
        top: z
      })
    }
  }, [z, G, U]);
  let en = i.useCallback(e => {
      var t;
      let {
        applicationId: n
      } = e, a = null === (t = ee.current) || void 0 === t ? void 0 : t.scrollTop;
      null != a && q(a), X(n), Y(E.ag.SELECT_CHANNEL)
    }, []),
    ea = i.useCallback(e => {
      let {
        applicationId: t
      } = e;
      X(t), Y(E.ag.DETAIL_PAGE)
    }, []);
  i.useEffect(() => {
    C.default.track(A.rMx.OPEN_MODAL, {
      type: "Activity Shelf",
      channel_id: null == l ? void 0 : l.id,
      guild_id: s
    })
  }, [l, s]), i.useEffect(() => (I.S.subscribe(A.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, en), () => {
    I.S.unsubscribe(A.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, en)
  }), [en]), i.useEffect(() => (I.S.subscribe(A.CkL.SHOW_ACTIVITY_DETAILS, ea), () => {
    I.S.unsubscribe(A.CkL.SHOW_ACTIVITY_DETAILS, ea)
  }), [ea]), i.useEffect(() => {
    j.ux()
  }, []);
  let ei = () => {
      Y(E.ag.DIRECTORY)
    },
    el = i.useRef(Date.now()),
    es = i.useRef(!1),
    er = i.useRef([]),
    ec = i.useCallback(e => {
      null == er.current.find(t => t === e.applicationId) && er.current.push(e.applicationId)
    }, []);
  return i.useEffect(() => {
    let e = ee.current;
    if (null != e) {
      let t = () => es.current = !0;
      return null != e && e.addEventListener("scroll", t), () => {
        null != e && e.removeEventListener("scroll", t)
      }
    }
  }, []), (0, u.ZP)(() => () => {
    let e = {
        activity_tiles_viewed: er.current,
        duration_ms: Date.now() - el.current,
        scrolled: es.current
      },
      t = k({
        channel_id: null == l ? void 0 : l.id,
        guild_id: s,
        location: (0, m.k$)()
      }, (0, g.hH)(s), (0, g.v_)(x.Z.getChannel(null == l ? void 0 : l.id)), et, e);
    C.default.track(A.rMx.ACTIVITY_SHELF_CLOSE, t)
  }), (0, a.jsx)(v.Gt, {
    value: H,
    children: (0, a.jsxs)(d.Y0X, (t = k({
      className: P.root,
      "aria-label": M.NW.string(M.t.shUONj)
    }, F), n = n = {
      children: [(0, a.jsx)("img", {
        alt: M.NW.string(M.t["3Y9xdH"]),
        src: w,
        className: P.shelfTopBackground
      }), (0, a.jsx)("img", {
        alt: M.NW.string(M.t["3Y9xdH"]),
        src: L,
        className: P.shelfTopForeground
      }), (0, a.jsxs)(d.xBx, {
        separator: !1,
        justify: b.Z.Justify.BETWEEN,
        className: P.modalHeader,
        children: [(0, a.jsxs)("div", {
          className: P.headerTextContainer,
          children: [U === E.ag.DETAIL_PAGE ? null == K ? null : (0, a.jsxs)("div", {
            className: P.activityShelfTitle,
            children: [(0, a.jsx)(d.X6q, {
              variant: "heading-xl/extrabold",
              children: K.name
            }), (0, a.jsxs)(d.P3F, {
              className: P.headerBackButton,
              onClick: ei,
              children: [(0, a.jsx)(d.V7D, {
                size: "md",
                color: "currentColor"
              }), (0, a.jsx)(d.Text, {
                variant: "text-sm/semibold",
                children: M.NW.string(M.t["13/7kZ"])
              })]
            })]
          }) : (0, a.jsx)("div", {
            className: P.activityShelfTitle,
            children: (0, a.jsx)(d.X6q, {
              variant: "heading-xl/extrabold",
              children: M.NW.string(M.t.shUONj)
            })
          }), U === E.ag.DIRECTORY ? (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: V ? M.NW.string(M.t.tZ3FNj) : M.NW.string(M.t.Cye3SU)
          }) : null]
        }), (0, a.jsx)(d.olH, {
          className: P.modalCloseButton,
          onClick: f
        })]
      }), U === E.ag.DIRECTORY && V ? (0, a.jsx)(O.W, {}) : null, (0, a.jsx)("div", {
        className: P.modalDivider
      }), (0, a.jsxs)(d.MyZ, {
        activeSlide: U,
        centered: !1,
        width: W,
        children: [(0, a.jsx)(d.Mi4, {
          id: E.ag.DIRECTORY,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF,
          impressionProperties: {
            source_section: o.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
          },
          children: (0, a.jsx)(B, {
            slide: U,
            children: (0, a.jsx)(Z.Z, {
              scrollerRef: ee,
              channel: l,
              guildId: s,
              locationObject: o,
              onActivityItemVisible: ec,
              onClose: f
            })
          })
        }), (0, a.jsx)(d.Mi4, {
          id: E.ag.SELECT_CHANNEL,
          impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
          impressionProperties: {
            source_section: o.section,
            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
            application_id: J
          },
          children: (0, a.jsx)(B, {
            slide: U,
            children: (0, a.jsx)(S.Z, {
              applicationId: J,
              selectedChannelId: $,
              setSelectedChannelId: Q,
              guildId: s,
              enableSelectedTextChannelInvite: D
            })
          })
        }), (0, a.jsx)(d.Mi4, {
          id: E.ag.DETAIL_PAGE,
          impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
          impressionProperties: et,
          children: (0, a.jsx)(B, {
            slide: U,
            children: null == J ? null : (0, a.jsx)(N.Z, {
              applicationId: J,
              channelId: null == l ? void 0 : l.id,
              guildId: s,
              onActivityLaunch: f
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: P.modalDivider
      }), (0, a.jsx)(d.mzw, {
        separator: !1,
        className: P.footer,
        children: (() => {
          switch (U) {
            case E.ag.DIRECTORY:
              return (0, a.jsx)(Z.d, {});
            case E.ag.SELECT_CHANNEL:
              return (0, a.jsx)(S.q, {
                onBack: ei,
                onClose: f,
                guildId: s,
                applicationId: J,
                locationObject: o,
                selectedChannelId: $,
                enableSelectedTextChannelInvite: D
              });
            case E.ag.DETAIL_PAGE:
            case E.ag.DIRECTORY:
            default:
              return null
          }
        })()
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        n.push.apply(n, a)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}
let B = e => {
  let {
    children: t,
    slide: n
  } = e, l = (0, c.e7)([T.Z], () => T.Z.getIsEnabled(), []), r = i.useContext(f.ZP), o = (0, c.e7)([_.Z], () => _.Z.windowSize(r.windowId).height, [r.windowId]);
  return (0, a.jsx)("div", {
    className: s()(P.slideContentOuterContainerSquished, {
      [P.slideContentOuterContainerSquishedWithDev]: n === E.ag.DIRECTORY && l,
      [P.slideContentOuterContainerTall]: n === E.ag.DIRECTORY && o > R,
      [P.slideContentOuterContainerTallWithDev]: n === E.ag.DIRECTORY && o > R && l,
      [P.slideContentOuterContainerNoMetaTextSquished]: n === E.ag.SELECT_CHANNEL,
      [P.slideContentOuterContainerNoMetaTextTall]: n === E.ag.SELECT_CHANNEL && o > R,
      [P.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === E.ag.DETAIL_PAGE,
      [P.slideContentOuterContainerNoMetaTextNoFooterTall]: n === E.ag.DETAIL_PAGE && o > R
    }),
    children: t
  })
}