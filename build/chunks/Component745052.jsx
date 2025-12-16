/** Chunk was on 1272 **/
/** chunk id: 745052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eo
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

function en(e) {
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

function er(e, t) {
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

function ei() {
  let e = Chunk473749.useRef(null),
    t = (0, Chunk899740.q)(),
    n = (0, Chunk177033.Z)(),
    l = (0, Chunk26373.K)(),
    c = (0, Chunk183126.N)(),
    u = Chunk473749.useCallback(() => {
      (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t["EDYbS+"]), Chunk481060.ToastType.FAILURE))
    }, []),
    {
      rejectAll: d
    } = (0, Chunk486622.m)({
      onError: Chunk704215
    }),
    f = (0, Chunk209613.Z)("message-requests-list"),
    {
      channelId: g
    } = (0, Chunk488634._)(),
    m = Chunk473749.useCallback(() => {
      Chunk907862(require.map(e => e.channel.id))
    }, [require, Chunk907862]),
    _ = Chunk473749.useCallback(e => {
      var t, i;
      let {
        row: s
      } = e, o = n[s], c = null == (i = n[s + 1]) || null == (t = i.channel) ? true : t.id, u = o.channel.id;
      return (0, r.jsx)(W.Z, {
        index: s,
        className: a()({
          [ee.selected]: null != g && g === u,
          [ee.siblingSelected]: null != g && g === c
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, u)
    }, [Chunk120356, require, Chunk112724]),
    E = Chunk473749.useCallback(() => (0, Chunk54381.jsxs)(Chunk82295.Z, {
      className: Chunk439700.sectionTitle,
      children: [exports > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.rA4iWY, {
        count: exports
      }) : Chunk388032.intl.string(Chunk388032.t.flPU6g), Chunk442837 && exports > 0 ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk439700.titleDivider,
          variant: "eyebrow",
          color: "text-default",
          tag: "span",
          children: "•"
        }), (0, Chunk54381.jsx)(Chunk481060.Avr, {
          onClick: Chunk493773,
          textVariant: "text-sm/normal",
          text: Chunk388032.intl.string(Chunk388032.t.p6t7RC),
          "aria-label": Chunk388032.intl.string(Chunk388032.t.p6t7RC)
        })]
      }) : null]
    }, "title"), [exports, Chunk493773, Chunk442837]);
  return (require.length !== exports && Chunk797614.Z.increment({
    name: Chunk286379.V.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === require.length) ? (0, Chunk54381.jsx)(Chunk307947.Z, {
    section: Chunk687683.pS.REQUESTS
  }) : (0, Chunk54381.jsx)(Chunk91192.bG, {
    navigator: Chunk150063,
    children: (0, Chunk54381.jsx)(Chunk91192.SJ, {
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
        return (0, r.jsx)(p.aVo, en({
          className: ee.list,
          innerRole: l,
          innerAriaLabel: $.intl.string($.t.e7GWjQ),
          ref: t => {
            var n;
            e.current = t, i.current = null != (n = null == t ? true : t.getScrollerNode()) ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: K.oi,
          rowHeight: K.WN,
          renderSection: E,
          renderRow: _,
          sections: [n.length],
          chunkSize: 30,
          fade: true
        }, a), "message-requests-list")
      }
    })
  })
}

function el(e) {
  let {
    pageWidth: t,
    onSidebarResize: n
  } = e, i = (0, c.e7)([w.ZP], () => w.ZP.getSidebarState(w.uZ)), l = (0, c.e7)([L.Z], () => L.Z.getChannel(null == i ? true : i.channelId));
  if (null == i || i.type !== j.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let a = t - Q.R7I;
  return (0, r.jsx)(_.Z, {
    sidebarType: _.y.MessageRequestSidebar,
    maxWidth: a,
    onWidthChange: n,
    children: (0, r.jsx)(E.Z, {
      channel: l,
      baseChannelId: w.uZ
    })
  })
}
let ea = e => {
  let t = (0, U.Z)();
  return (i.useEffect(() => {
    (0, y.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
  }, []), null == e.targetElementRef.current || R.Z.hasLayers() || (0, p.$sL)()) ? e.children : (0, r.jsx)(I.ZP, {
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
        onRequestClose: () => l(J.L.USER_DISMISS),
        targetElementRef: e.targetElementRef
      };
      return i === u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK ? (0, r.jsxs)(r.Fragment, {
        children: [e.children, t ? (0, r.jsx)(d.J2, er(en({}, a), {
          title: $.intl.string($.t.hRT8tc),
          body: $.intl.string($.t.apPgJG),
          actions: [{
            text: $.intl.string($.t.LNoAQW),
            onClick: () => l(J.L.TAKE_ACTION)
          }]
        })) : (0, r.jsx)(d.J2, er(en({}, a), {
          title: $.intl.string($.t.hRT8tc),
          body: $.intl.string($.t["8JWods"]),
          actions: [{
            text: $.intl.string($.t.JN6EOJ),
            onClick: e => {
              e.stopPropagation(), (0, Z.openUserSettings)(A.n.CONTENT_AND_SOCIAL_PANEL, {
                section: Q.oAB.CONTENT_AND_SOCIAL,
                scrollPosition: X.FY.MESSAGE_REQUESTS_V2
              }), l(J.L.TAKE_ACTION)
            }
          }, {
            text: $.intl.string($.t.LNoAQW),
            onClick: () => l(J.L.USER_DISMISS),
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
  return t === K.pS.SPAM ? (0, r.jsx)(q.Z, {}) : (0, r.jsx)(ei, {})
}
let eo = (0, Chunk112724.Z)(function(e) {
  let {
    width: t
  } = e, n = (0, V.q)();
  (0, m.ZP)(() => {
    f.Y(Q.Z5c.MESSAGE_REQUESTS), (0, P.e)("message-requests"), D.default.track(Q.rMx.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), S.Z.increment({
      name: o.V.MESSAGE_REQUEST_VIEW
    })
  });
  let l = (0, c.e7)([x.Z], () => x.Z.theme),
    s = (0, z.w)(),
    [u, d] = i.useState(false),
    g = (0, c.e7)([w.ZP], () => {
      let e = w.ZP.getSidebarState(w.uZ);
      return null != e && e.type === j.tI.VIEW_MESSAGE_REQUEST ? e : null
    }),
    h = null == g ? true : g.channelId,
    b = null != g,
    _ = (0, k.T)(h),
    E = (0, M.J)(h),
    O = i.useRef(null);
  i.useEffect(() => {
    null != h && !_ && E && b && ((0, T.Kh)(h), N.Z.closeChannelSidebar(w.uZ))
  }, [h, E, b, _]);
  let [y, I] = i.useState(K.pS.REQUESTS), A = e => {
    I(e)
  };
  return (0, v.Tt)({
    location: $.intl.string($.t.e7GWjQ)
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(et.chat, ee.container, {
        [et.threadSidebarOpen]: b,
        [et.threadSidebarFloating]: b && u
      }),
      children: [(0, r.jsx)(p.f6W, {
        theme: l,
        children: e => (0, r.jsxs)(C.Z, {
          className: e,
          toolbar: true,
          children: [(0, r.jsx)(C.Z.Icon, {
            icon: p._XJ,
            "aria-hidden": true
          }), (0, r.jsx)(ea, {
            targetElementRef: O,
            children: (0, r.jsx)(C.Z.Title, {
              ref: O,
              children: $.intl.string($.t.e7GWjQ)
            })
          }), (0, r.jsx)(C.Z.Divider, {}), (0, r.jsxs)(p.njP, {
            "aria-label": $.intl.string($.t.e7GWjQ),
            selectedItem: y,
            type: "top-pill",
            onItemSelect: A,
            children: [(0, r.jsx)(p.njP.Item, {
              id: K.pS.REQUESTS,
              className: ee.item,
              children: $.intl.string($.t["7RFcXZ"])
            }), (0, r.jsx)(p.njP.Item, {
              id: K.pS.SPAM,
              className: ee.item,
              children: 0 === s ? $.intl.string($.t.ulKXHp) : $.intl.formatToPlainString($.t["5jtrlZ"], {
                count: s
              })
            })]
          })]
        })
      }), (0, r.jsx)("div", {
        className: et.content,
        children: (0, r.jsx)(es, {
          section: y
        })
      })]
    }), b && (0, r.jsx)(el, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        d(t)
      }
    })]
  })
})