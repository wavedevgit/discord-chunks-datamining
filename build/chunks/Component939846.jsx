/** Chunk was on 21738 **/
/** chunk id: 939846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk731738 = require("./731738.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk944791 = require("./944791.js"),
  Chunk456412 = require("./456412.jsx"),
  Chunk55400 = require("./55400.js"),
  Chunk964486 = require("./964486.js"),
  Chunk260762 = require("./260762.js"),
  Chunk812771 = require("./812771.jsx"),
  Chunk869248 = require("./869248.jsx"),
  Chunk485947 = require("./485947.jsx"),
  Chunk726249 = require("./726249.js"),
  Chunk367727 = require("./367727.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk831062 = require("./831062.js"),
  Chunk378570 = require("./378570.js"),
  Chunk138298 = require("./138298.js"),
  Chunk940382 = require("./940382.js"),
  Chunk210714 = require("./210714.js"),
  Chunk544028 = require("./544028.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk186111 = require("./186111.js"),
  Chunk954571 = require("./954571.js"),
  Chunk891024 = require("./891024.js"),
  Chunk321404 = require("./321404.js"),
  Chunk643015 = require("./643015.js"),
  Chunk336590 = require("./336590.js"),
  Chunk471271 = require("./471271.js"),
  Chunk957283 = require("./957283.js"),
  Chunk411976 = require("./411976.js"),
  Chunk62112 = require("./62112.js"),
  Chunk790499 = require("./790499.js"),
  Chunk514426 = require("./514426.jsx"),
  Chunk660564 = require("./660564.jsx"),
  Chunk4270 = require("./4270.jsx"),
  Chunk687599 = require("./687599.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk443416 = require("./443416.js"),
  Chunk638990 = require("./638990.js");

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
    t = (0, Y.W)(),
    n = (0, K.A)(),
    l = (0, B.k)(),
    c = (0, g.w)(),
    u = i.useCallback(() => {
      (0, p.showToast)((0, p.createToast)(ee.intl.string(ee.t["EDYbS+"]), p.ToastType.FAILURE))
    }, []),
    {
      rejectAll: d
    } = (0, H.t)({
      onError: u
    }),
    h = (0, A.A)("message-requests-list"),
    {
      channelId: f
    } = (0, F.N)(),
    m = i.useCallback(() => {
      d(n.map(e => e.channel.id))
    }, [n, d]),
    _ = i.useCallback(e => {
      var t, i;
      let {
        row: s
      } = e, o = n[s], c = null == (i = n[s + 1]) || null == (t = i.channel) ? true : t.id, u = o.channel.id;
      return (0, r.jsx)(z.A, {
        index: s,
        className: a()({
          [et.wH]: null != f && f === u,
          [et.wZ]: null != f && f === c
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, u)
    }, [l, n, f]),
    b = i.useCallback(() => (0, r.jsxs)(E.A, {
      className: et.Gf,
      children: [t > 0 ? ee.intl.formatToPlainString(ee.t.rA4iWY, {
        count: t
      }) : ee.intl.string(ee.t.flPU6g), c && t > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.Text, {
          className: et.sg,
          variant: "eyebrow",
          color: "text-default",
          tag: "span",
          children: "•"
        }), (0, r.jsx)(p.QWc, {
          onClick: m,
          textVariant: "text-sm/normal",
          text: ee.intl.string(ee.t.p6t7RC),
          "aria-label": ee.intl.string(ee.t.p6t7RC)
        })]
      }) : null]
    }, "title"), [t, m, c]);
  return (n.length !== t && S.A.increment({
    name: o.K.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, r.jsx)(q.A, {
    section: X.zz.REQUESTS
  }) : (0, r.jsx)(s.hD, {
    navigator: h,
    children: (0, r.jsx)(s.PR, {
      children: t => {
        let {
          ref: i,
          role: l
        } = t, a = function(e, t) {
          if (null == e) return {};
          var n, r, i, l = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
          }
          if (l = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.getOwnPropertyNames(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
              return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }(t, ["ref", "role"]);
        return (0, r.jsx)(p.B8B, er({
          className: et.p_,
          innerRole: l,
          innerAriaLabel: ee.intl.string(ee.t.e7GWjQ),
          ref: t => {
            var n;
            e.current = t, i.current = null != (n = null == t ? true : t.getScrollerNode()) ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: 26,
          rowHeight: 73,
          renderSection: b,
          renderRow: _,
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
  } = e, i = (0, c.bG)([R.Ay], () => R.Ay.getSidebarState(R.fe)), l = (0, c.bG)([D.A], () => D.A.getChannel(null == i ? true : i.channelId));
  if (null == i || i.type !== T.PE.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let a = t - Z.ItT;
  return (0, r.jsx)(_.A, {
    sidebarType: _.X.MessageRequestSidebar,
    maxWidth: a,
    onWidthChange: n,
    children: (0, r.jsx)(b.A, {
      channel: l,
      baseChannelId: R.fe
    })
  })
}
let es = e => {
  let t = (0, V.A)();
  return (i.useEffect(() => {
    (0, y.Vh)(u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
  }, []), null == e.targetElementRef.current || M.A.hasLayers() || (0, p.ueM)()) ? e.children : (0, r.jsx)(I.Ay, {
    contentTypes: [u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
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
        onRequestClose: () => l(J.i.USER_DISMISS),
        targetElementRef: e.targetElementRef
      };
      return i === u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK ? (0, r.jsxs)(r.Fragment, {
        children: [e.children, t ? (0, r.jsx)(d.AM, ei(er({}, a), {
          title: ee.intl.string(ee.t.hRT8tc),
          body: ee.intl.string(ee.t.apPgJG),
          actions: [{
            text: ee.intl.string(ee.t.LNoAQW),
            onClick: () => l(J.i.TAKE_ACTION)
          }]
        })) : (0, r.jsx)(d.AM, ei(er({}, a), {
          title: ee.intl.string(ee.t.hRT8tc),
          body: ee.intl.string(ee.t["8JWods"]),
          actions: [{
            text: ee.intl.string(ee.t.JN6EOJ),
            onClick: e => {
              e.stopPropagation();
              let t = (0, w.WJ)("MessageRequestCoachmark");
              (0, L.openUserSettings)(t ? P.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING : P.X.CONTENT_AND_SOCIAL_PANEL, {
                section: Z.nc_.CONTENT_AND_SOCIAL,
                scrollPosition: t ? true : $.d1.MESSAGE_REQUESTS_V2
              }), l(J.i.TAKE_ACTION)
            }
          }, {
            text: ee.intl.string(ee.t.LNoAQW),
            onClick: () => l(J.i.USER_DISMISS),
            variant: "secondary"
          }]
        }))]
      }) : e.children
    }
  })
};

function eo(e) {
  let {
    section: t
  } = e;
  return t === X.zz.SPAM ? (0, r.jsx)(Q.A, {}) : (0, r.jsx)(el, {})
}
let ec = (0, Chunk456412.A)(function(e) {
  let {
    width: t
  } = e, n = (0, Y.W)();
  (0, m.Ay)(() => {
    h.I(Z.BVt.MESSAGE_REQUESTS), (0, j.d)("message-requests"), k.default.track(Z.HAw.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), S.A.increment({
      name: o.K.MESSAGE_REQUEST_VIEW
    })
  });
  let l = (0, c.bG)([x.A], () => x.A.theme),
    s = (0, W.I)(),
    [u, d] = i.useState(false),
    f = (0, c.bG)([R.Ay], () => {
      let e = R.Ay.getSidebarState(R.fe);
      return null != e && e.type === T.PE.VIEW_MESSAGE_REQUEST ? e : null
    }),
    g = null == f ? true : f.channelId,
    A = null != f,
    _ = (0, G.c)(g),
    b = (0, U.A)(g),
    E = i.useRef(null);
  i.useEffect(() => {
    null != g && !_ && b && A && ((0, C.iN)(g), N.A.closeChannelSidebar(R.fe))
  }, [g, b, A, _]);
  let [y, I] = i.useState(X.zz.REQUESTS), P = e => {
    I(e)
  };
  return (0, O.HU)({
    location: ee.intl.string(ee.t.e7GWjQ)
  }), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(en.TE, et.kL, {
        [en.js]: A,
        [en.jl]: A && u
      }),
      children: [(0, r.jsx)(p.NPJ, {
        theme: l,
        children: e => (0, r.jsxs)(v.A, {
          className: e,
          toolbar: true,
          children: [(0, r.jsx)(v.A.Icon, {
            icon: p.u6c,
            "aria-hidden": true
          }), (0, r.jsx)(es, {
            targetElementRef: E,
            children: (0, r.jsx)(v.A.Title, {
              ref: E,
              children: ee.intl.string(ee.t.e7GWjQ)
            })
          }), (0, r.jsx)(v.A.Divider, {}), (0, r.jsxs)(p.VQ0, {
            "aria-label": ee.intl.string(ee.t.e7GWjQ),
            selectedItem: y,
            type: "top-pill",
            onItemSelect: P,
            children: [(0, r.jsx)(p.VQ0.Item, {
              id: X.zz.REQUESTS,
              className: et.AS,
              children: ee.intl.string(ee.t["7RFcXZ"])
            }), (0, r.jsx)(p.VQ0.Item, {
              id: X.zz.SPAM,
              className: et.AS,
              children: 0 === s ? ee.intl.string(ee.t.ulKXHp) : ee.intl.formatToPlainString(ee.t["5jtrlZ"], {
                count: s
              })
            })]
          })]
        })
      }), (0, r.jsx)("div", {
        className: en.Qs,
        children: (0, r.jsx)(eo, {
          section: y
        })
      })]
    }), A && (0, r.jsx)(ea, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        d(t)
      }
    })]
  })
})