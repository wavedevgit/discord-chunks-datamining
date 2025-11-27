/** Chunk was on 1272 **/
/** chunk id: 480874, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk183126 = require("./183126.js"),
  Chunk493773 = require("./493773.js"),
  Chunk209613 = require("./209613.js"),
  Chunk82295 = require("./82295.jsx"),
  Chunk797614 = require("./797614.js"),
  Chunk626135 = require("./626135.js"),
  Chunk26373 = require("./26373.js"),
  Chunk486622 = require("./486622.js"),
  Chunk488634 = require("./488634.js"),
  Chunk727813 = require("./727813.js"),
  Chunk355350 = require("./355350.js"),
  Chunk307947 = require("./307947.jsx"),
  Chunk125855 = require("./125855.jsx"),
  Chunk687683 = require("./687683.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk393272 = require("./393272.js");

function N() {
  let e = Chunk473749.useRef(null),
    t = (0, Chunk727813.Z)(),
    n = (0, Chunk355350.w)(),
    l = (0, Chunk26373.V)(),
    N = (0, Chunk183126.N)(),
    j = (0, Chunk209613.Z)("message-requests-spam-list"),
    {
      channelId: P
    } = (0, Chunk488634._)(),
    x = Chunk473749.useCallback(() => {
      (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t["EDYbS+"]), Chunk481060.ToastType.FAILURE))
    }, []),
    {
      rejectAll: A
    } = (0, Chunk486622.m)({
      onError: x
    }),
    Z = Chunk473749.useCallback(() => {
      A(exports.map(e => e.channel.id))
    }, [exports, A]);
  (0, Chunk493773.ZP)(() => {
    Chunk626135.default.track(Chunk981631.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: require
    }), Chunk797614.Z.increment({
      name: Chunk286379.V.SPAM_MESSAGE_REQUEST_VIEW
    })
  });
  let w = Chunk473749.useCallback(e => {
      var n, i;
      let {
        row: s
      } = e, o = t[s], c = null == (i = t[s + 1]) || null == (n = i.channel) ? true : n.id, u = o.channel.id;
      return (0, r.jsx)(y.Z, {
        index: s,
        className: a()({
          [T.selected]: null != P && P === u,
          [T.siblingSelected]: null != P && P === c
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, u)
    }, [exports, Chunk120356, P]),
    L = Chunk473749.useCallback(() => (0, Chunk54381.jsxs)(Chunk82295.Z, {
      className: Chunk393272.sectionTitle,
      children: [Chunk388032.intl.format(Chunk388032.t.C79Edh, {
        count: require
      }), N && require > 0 ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk393272.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, Chunk54381.jsx)(Chunk481060.Avr, {
          textVariant: "text-sm/normal",
          text: Chunk388032.intl.string(Chunk388032.t.p6t7RC),
          onClick: Z,
          "aria-label": Chunk388032.intl.string(Chunk388032.t.p6t7RC)
        })]
      }) : null]
    }, "message-requests-spam-title"), [require, Z, N]);
  return 0 === exports.length ? (0, Chunk54381.jsx)(Chunk307947.Z, {
    section: Chunk687683.pS.SPAM
  }) : (0, Chunk54381.jsx)(Chunk91192.bG, {
    navigator: j,
    children: (0, Chunk54381.jsx)(Chunk91192.SJ, {
      children: n => {
        var {
          ref: i,
          role: l
        } = n, a = function(e, t) {
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
        }(n, ["ref", "role"]);
        return (0, r.jsx)(c.aVo, function(e) {
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
        }({
          className: T.list,
          innerRole: l,
          innerAriaLabel: S.intl.string(S.t.e7GWjQ),
          ref: t => {
            var n;
            e.current = t, i.current = null != (n = null == t ? true : t.getScrollerNode()) ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: I.oi,
          rowHeight: I.WN,
          renderSection: L,
          renderRow: w,
          sections: [t.length],
          chunkSize: 30,
          fade: true
        }, a), "message-requests-spam-list")
      }
    })
  })
}