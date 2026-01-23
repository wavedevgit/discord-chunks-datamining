/** Chunk was on 21738 **/
/** chunk id: 4270, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk731738 = require("./731738.js"),
  Chunk397927 = require("./397927.js"),
  Chunk55400 = require("./55400.js"),
  Chunk964486 = require("./964486.js"),
  Chunk260762 = require("./260762.js"),
  Chunk485947 = require("./485947.jsx"),
  Chunk831062 = require("./831062.js"),
  Chunk954571 = require("./954571.js"),
  Chunk336590 = require("./336590.js"),
  Chunk471271 = require("./471271.js"),
  Chunk957283 = require("./957283.js"),
  Chunk284306 = require("./284306.js"),
  Chunk790499 = require("./790499.js"),
  Chunk514426 = require("./514426.jsx"),
  Chunk977524 = require("./977524.jsx"),
  Chunk687599 = require("./687599.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk843284 = require("./843284.js");

function N() {
  let e = i.useRef(null),
    t = (0, b.A)(),
    n = (0, E.I)(),
    l = (0, m.r)(),
    N = (0, u.w)(),
    T = (0, p.A)("message-requests-spam-list"),
    {
      channelId: j
    } = (0, _.N)(),
    x = i.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(S.intl.string(S.t["EDYbS+"]), c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: P
    } = (0, A.t)({
      onError: x
    }),
    w = i.useCallback(() => {
      P(t.map(e => e.channel.id))
    }, [t, P]);
  (0, d.Ay)(() => {
    f.default.track(v.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: n
    }), g.A.increment({
      name: o.K.SPAM_MESSAGE_REQUEST_VIEW
    })
  });
  let L = i.useCallback(e => {
      var n, i;
      let {
        row: s
      } = e, o = t[s], c = null == (i = t[s + 1]) || null == (n = i.channel) ? true : n.id, u = o.channel.id;
      return (0, r.jsx)(y.A, {
        index: s,
        className: a()({
          [C.wH]: null != j && j === u,
          [C.wZ]: null != j && j === c
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, u)
    }, [t, l, j]),
    R = i.useCallback(() => (0, r.jsxs)(h.A, {
      className: C.Gf,
      children: [S.intl.format(S.t.C79Edh, {
        count: n
      }), N && n > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Text, {
          className: C.sg,
          variant: "eyebrow",
          color: "text-default",
          tag: "span",
          children: "•"
        }), (0, r.jsx)(c.QWc, {
          textVariant: "text-sm/normal",
          text: S.intl.string(S.t.p6t7RC),
          onClick: w,
          "aria-label": S.intl.string(S.t.p6t7RC)
        })]
      }) : null]
    }, "message-requests-spam-title"), [n, w, N]);
  return 0 === t.length ? (0, r.jsx)(O.A, {
    section: I.zz.SPAM
  }) : (0, r.jsx)(s.hD, {
    navigator: T,
    children: (0, r.jsx)(s.PR, {
      children: n => {
        let {
          ref: i,
          role: l
        } = n, a = function(e, t) {
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
        }(n, ["ref", "role"]);
        return (0, r.jsx)(c.B8B, function(e) {
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
          className: C.p_,
          innerRole: l,
          innerAriaLabel: S.intl.string(S.t.e7GWjQ),
          ref: t => {
            var n;
            e.current = t, i.current = null != (n = null == t ? true : t.getScrollerNode()) ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: 26,
          rowHeight: 73,
          renderSection: R,
          renderRow: L,
          sections: [t.length],
          chunkSize: 30,
          fade: true
        }, a), "message-requests-spam-list")
      }
    })
  })
}