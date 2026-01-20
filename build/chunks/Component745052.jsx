/** Chunk was on 1272 **/
/** chunk id: 745052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ec
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk150063 = require("./150063.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk183126 = require("./183126.js"),
  Chunk493773 = require("./493773.js"),
  Chunk209613 = require("./209613.js"),
  Chunk325708 = require("./325708.jsx"),
  Chunk320149 = require("./320149.jsx"),
  Chunk82295 = require("./82295.jsx"),
  Chunk252618 = require("./252618.js"),
  Chunk605236 = require("./605236.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk797614 = require("./797614.js"),
  Chunk359110 = require("./359110.js"),
  Chunk6025 = require("./6025.js"),
  Chunk897473 = require("./897473.js"),
  Chunk108427 = require("./108427.js"),
  Chunk210887 = require("./210887.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk819640 = require("./819640.js"),
  Chunk626135 = require("./626135.js"),
  Chunk647090 = require("./647090.js"),
  Chunk385956 = require("./385956.js"),
  Chunk610697 = require("./610697.js"),
  Chunk26373 = require("./26373.js"),
  Chunk486622 = require("./486622.js"),
  Chunk488634 = require("./488634.js"),
  Chunk899740 = require("./899740.js"),
  Chunk177033 = require("./177033.js"),
  Chunk355350 = require("./355350.js"),
  Chunk307947 = require("./307947.jsx"),
  Chunk96479 = require("./96479.jsx"),
  Chunk480874 = require("./480874.jsx"),
  Chunk687683 = require("./687683.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk439700 = require("./439700.js"),
  Chunk978966 = require("./978966.js");

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function ei(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function el() {
  let e = i.useRef(null),
    t = (0, F.q)(),
    n = (0, z.Z)(),
    l = (0, H.K)(),
    c = (0, h.N)(),
    u = i.useCallback(() => {
      (0, p.showToast)((0, p.createToast)(ee.intl.string(ee.t["EDYbS+"]), p.ToastType.FAILURE))
    }, []),
    {
      rejectAll: d
    } = (0, B.m)({
      onError: u
    }),
    f = (0, b.Z)("message-requests-list"),
    {
      channelId: g
    } = (0, V._)(),
    m = i.useCallback(() => {
      d(n.map(e => e.channel.id))
    }, [n, d]),
    E = i.useCallback(e => {
      var t, i;
      let {
        row: o
      } = e, s = n[o], c = null == (i = n[o + 1]) || null == (t = i.channel) ? true : t.id, u = s.channel.id;
      return (0, r.jsx)(K.Z, {
        index: o,
        className: a()({
          [et.selected]: null != g && g === u,
          [et.siblingSelected]: null != g && g === c
        }),
        channel: s.channel,
        user: s.user,
        hasSingleMessageRequest: l
      }, u)
    }, [l, n, g]),
    _ = i.useCallback(() => (0, r.jsxs)(O.Z, {
      className: et.sectionTitle,
      children: [t > 0 ? ee.intl.formatToPlainString(ee.t.rA4iWY, {
        count: t
      }) : ee.intl.string(ee.t.flPU6g), c && t > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.Text, {
          className: et.titleDivider,
          variant: "eyebrow",
          color: "text-default",
          tag: "span",
          children: "•"
        }), (0, r.jsx)(p.Avr, {
          onClick: m,
          textVariant: "text-sm/normal",
          text: ee.intl.string(ee.t.p6t7RC),
          "aria-label": ee.intl.string(ee.t.p6t7RC)
        })]
      }) : null]
    }, "title"), [t, m, c]);
  return (n.length !== t && S.Z.increment({
    name: s.V.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, r.jsx)(W.Z, {
    section: Q.pS.REQUESTS
  }) : (0, r.jsx)(o.bG, {
    navigator: f,
    children: (0, r.jsx)(o.SJ, {
      children: t => {
        var {
          ref: i,
          role: l
        } = t, a = function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(t, ["ref", "role"]);
        return (0, r.jsx)(p.aVo, er({
          className: et.list,
          innerRole: l,
          innerAriaLabel: ee.intl.string(ee.t.e7GWjQ),
          ref: t => {
            var n;
            e.current = t, i.current = null != (n = null == t ? true : t.getScrollerNode()) ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: Q.oi,
          rowHeight: Q.WN,
          renderSection: _,
          renderRow: E,
          sections: [n.length],
          chunkSize: 30,
          fade: true
        }, a), "message-requests-list")
      }
    })
  })
}

function ea(e) {
  let {
    pageWidth: t,
    onSidebarResize: n
  } = e, i = (0, c.e7)([L.ZP], () => L.ZP.getSidebarState(L.uZ)), l = (0, c.e7)([R.Z], () => R.Z.getChannel(null == i ? true : i.channelId));
  if (null == i || i.type !== j.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let a = t - J.R7I;
  return (0, r.jsx)(E.Z, {
    sidebarType: E.y.MessageRequestSidebar,
    maxWidth: a,
    onWidthChange: n,
    children: (0, r.jsx)(_.Z, {
      channel: l,
      baseChannelId: L.uZ
    })
  })
}
let eo = e => {
  let t = (0, G.Z)();
  return (i.useEffect(() => {
    (0, I.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
  }, []), null == e.targetElementRef.current || D.Z.hasLayers() || (0, p.$sL)()) ? e.children : (0, r.jsx)(y.ZP, {
    contentTypes: [u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
    children: n => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = n, a = {
        position: "bottom",
        caretConfig: {
          position: "top",
          align: "center"
        },
        shouldShow: true,
        onRequestClose: () => l(X.L.USER_DISMISS),
        targetElementRef: e.targetElementRef
      };
      return i === u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK ? (0, r.jsxs)(r.Fragment, {
        children: [e.children, t ? (0, r.jsx)(d.J2, ei(er({}, a), {
          title: ee.intl.string(ee.t.hRT8tc),
          body: ee.intl.string(ee.t.apPgJG),
          actions: [{
            text: ee.intl.string(ee.t.LNoAQW),
            onClick: () => l(X.L.TAKE_ACTION)
          }]
        })) : (0, r.jsx)(d.J2, ei(er({}, a), {
          title: ee.intl.string(ee.t.hRT8tc),
          body: ee.intl.string(ee.t["8JWods"]),
          actions: [{
            text: ee.intl.string(ee.t.JN6EOJ),
            onClick: e => {
              e.stopPropagation();
              let t = (0, Z.Gl)("MessageRequestCoachmark");
              (0, w.openUserSettings)(t ? A.n.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING : A.n.CONTENT_AND_SOCIAL_PANEL, {
                section: J.oAB.CONTENT_AND_SOCIAL,
                scrollPosition: t ? true : $.FY.MESSAGE_REQUESTS_V2
              }), l(X.L.TAKE_ACTION)
            }
          }, {
            text: ee.intl.string(ee.t.LNoAQW),
            onClick: () => l(X.L.USER_DISMISS),
            variant: "secondary"
          }]
        }))]
      }) : e.children
    }
  })
};

function es(e) {
  let {
    section: t
  } = e;
  return t === Q.pS.SPAM ? (0, r.jsx)(q.Z, {}) : (0, r.jsx)(el, {})
}
let ec = (0, Chunk112724.Z)(function(e) {
  let {
    width: t
  } = e, n = (0, F.q)();
  (0, m.ZP)(() => {
    f.Y(J.Z5c.MESSAGE_REQUESTS), (0, x.e)("message-requests"), M.default.track(J.rMx.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), S.Z.increment({
      name: s.V.MESSAGE_REQUEST_VIEW
    })
  });
  let l = (0, c.e7)([P.Z], () => P.Z.theme),
    o = (0, Y.w)(),
    [u, d] = i.useState(false),
    g = (0, c.e7)([L.ZP], () => {
      let e = L.ZP.getSidebarState(L.uZ);
      return null != e && e.type === j.tI.VIEW_MESSAGE_REQUEST ? e : null
    }),
    h = null == g ? true : g.channelId,
    b = null != g,
    E = (0, U.T)(h),
    _ = (0, k.J)(h),
    O = i.useRef(null);
  i.useEffect(() => {
    null != h && !E && _ && b && ((0, T.Kh)(h), N.Z.closeChannelSidebar(L.uZ))
  }, [h, _, b, E]);
  let [I, y] = i.useState(Q.pS.REQUESTS), A = e => {
    y(e)
  };
  return (0, v.Tt)({
    location: ee.intl.string(ee.t.e7GWjQ)
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(en.chat, et.container, {
        [en.threadSidebarOpen]: b,
        [en.threadSidebarFloating]: b && u
      }),
      children: [(0, r.jsx)(p.f6W, {
        theme: l,
        children: e => (0, r.jsxs)(C.Z, {
          className: e,
          toolbar: true,
          children: [(0, r.jsx)(C.Z.Icon, {
            icon: p._XJ,
            "aria-hidden": true
          }), (0, r.jsx)(eo, {
            targetElementRef: O,
            children: (0, r.jsx)(C.Z.Title, {
              ref: O,
              children: ee.intl.string(ee.t.e7GWjQ)
            })
          }), (0, r.jsx)(C.Z.Divider, {}), (0, r.jsxs)(p.njP, {
            "aria-label": ee.intl.string(ee.t.e7GWjQ),
            selectedItem: I,
            type: "top-pill",
            onItemSelect: A,
            children: [(0, r.jsx)(p.njP.Item, {
              id: Q.pS.REQUESTS,
              className: et.item,
              children: ee.intl.string(ee.t["7RFcXZ"])
            }), (0, r.jsx)(p.njP.Item, {
              id: Q.pS.SPAM,
              className: et.item,
              children: 0 === o ? ee.intl.string(ee.t.ulKXHp) : ee.intl.formatToPlainString(ee.t["5jtrlZ"], {
                count: o
              })
            })]
          })]
        })
      }), (0, r.jsx)("div", {
        className: en.content,
        children: (0, r.jsx)(es, {
          section: I
        })
      })]
    }), b && (0, r.jsx)(ea, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        d(t)
      }
    })]
  })
})