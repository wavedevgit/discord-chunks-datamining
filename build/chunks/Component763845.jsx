/** Chunk was on 31748 **/
/** chunk id: 763845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./457529.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk205693 = require("./205693.js"),
  Chunk397927 = require("./397927.js"),
  Chunk233545 = require("./233545.js"),
  Chunk229659 = require("./229659.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk430452 = require("./430452.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk975571 = require("./975571.js"),
  Chunk917592 = require("./917592.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk101937 = require("./101937.js");
let E = () => {
    f.A.getMediaEngine().once(s.bg.ConnectionStats, e => {
      let t = JSON.stringify(Object.values(A.x).map(t => {
        let n = e.filter(e => {
          let {
            connection: n
          } = e;
          return n.context === t
        }).map((e, n) => {
          let l = e.stats;
          return l.context = t, l.index = n, l
        });
        for (let e of n) {
          var l;
          (null == e || null == (l = e.transport) ? true : l.localAddress) != null && (e.transport.localAddress = "(redacted)")
        }
        return n
      }).filter(e => e.length > 0), null, 2);
      (0, b.C)(t, () => (0, o.showToast)((0, o.createToast)(y.intl.string(y.t.t5VZ88), o.ToastType.SUCCESS)))
    })
  },
  v = function(e) {
    (0, r.useEffect)(() => {
      p.default.track(h.HAw.OPEN_POPOUT, {
        type: "RTC Connection"
      })
    }, []);
    let t = (0, r.useCallback)(() => {
        let {
          closePopout: t
        } = e;
        null != t && t(), c.ho()
      }, [e]),
      n = (0, r.useCallback)(() => {
        let {
          hostname: t,
          averagePing: n,
          lastPing: i,
          outboundLossRate: s
        } = e, o = d.Q_.getSetting();
        return (0, l.jsxs)(r.Fragment, {
          children: [o && (0, l.jsxs)("div", {
            children: [(0, l.jsx)("div", {
              className: _.o0,
              children: (0, l.jsx)(u.A, {
                dataPoints: e.pings,
                width: 258,
                height: 80
              })
            }), (0, l.jsx)("div", {
              className: _.xB,
              children: (0, l.jsx)("strong", {
                children: m.A.getShortHostname(t)
              })
            })]
          }), (0, l.jsx)("div", {
            className: _.xB,
            children: y.intl.format(y.t["X58/lN"], {
              averagePing: n.toFixed(0)
            })
          }), null != i ? (0, l.jsx)("div", {
            className: _.xB,
            children: y.intl.format(y.t["6iv2TF"], {
              lastPing: i.toFixed(0)
            })
          }) : null, null != s ? (0, l.jsx)("div", {
            className: _.xB,
            children: y.intl.format(y.t["VIBJM+"], {
              outboundLossRate: s.toFixed(1)
            })
          }) : null, (0, l.jsxs)("div", {
            className: a()(_.xB, _.xJ),
            children: [null == s ? y.intl.formatToPlainString(y.t.vggaMt, {
              badPing: 250
            }) : null, null != s ? y.intl.formatToPlainString(y.t["3pFz1P"], {
              badPing: 250,
              badLossRate: 10
            }) : null]
          })]
        })
      }, [e]),
      {
        connectionState: i,
        connectionTypeText: s
      } = e,
      b = d.Q_.getSetting(),
      v = {
        [h.S7L.AWAITING_ENDPOINT]: y.intl.format(y.t.Eu2vUR, {
          url: h.qF7.STATUS
        }),
        [h.S7L.CONNECTING]: y.intl.string(y.t["y+E8aD"]),
        [h.S7L.AUTHENTICATING]: y.intl.string(y.t["5lGIZH"]),
        [h.S7L.DISCONNECTED]: y.intl.string(y.t.fOX25I),
        [h.S7L.RTC_CONNECTING]: y.intl.string(y.t.b5Ubd5),
        [h.S7L.ICE_CHECKING]: y.intl.format(y.t.SyoYUb, {
          url: g.A.getArticleURL(h.MVz.VOICE_CONNECTION_ERRORS)
        }),
        [h.S7L.DTLS_CONNECTING]: y.intl.format(y.t.SyoYUb, {
          url: g.A.getArticleURL(h.MVz.VOICE_CONNECTION_ERRORS)
        }),
        [h.S7L.RTC_CONNECTED]: n,
        [h.S7L.NO_ROUTE]: y.intl.format(y.t["2tgQnk"], {
          url: g.A.getArticleURL(h.MVz.VOICE_CONNECTION_ERRORS)
        }),
        [h.S7L.RTC_DISCONNECTED]: y.intl.string(y.t.fOX25I)
      } [i];
    return (0, l.jsxs)(l.Fragment, {
      children: ["function" == typeof v ? v() : (0, l.jsx)("p", {
        className: a()(_.xB, _.xJ),
        children: v
      }), (0, l.jsx)("hr", {
        className: _.me
      }), (0, l.jsxs)("div", {
        className: _.Vf,
        children: [(0, l.jsxs)("span", {
          className: a()(_.uO, _.ro),
          children: [(0, l.jsx)(o.XAi, {
            size: "xxs",
            color: o.LU0.colors.TEXT_FEEDBACK_POSITIVE.css,
            className: _.__invalid_icon
          }), s]
        }), b && f.A.supports(A.O5.DIAGNOSTICS) && !__OVERLAY__ && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsxs)(o.MzZ, {
            className: a()(_.Ce, _.ro),
            onClick: t,
            children: [y.intl.string(y.t.KBoWg9), (0, l.jsx)(o.tfB, {
              size: "xxs",
              color: "currentColor",
              className: _.__invalid_icon
            })]
          }), (0, l.jsxs)(o.MzZ, {
            className: a()(_.d3, _.ro),
            onClick: E,
            title: "Copy to clipboard",
            children: [y.intl.string(y.t["XEb+Sj"]), (0, l.jsx)(o.TdU, {
              size: "xxs",
              color: "currentColor",
              className: _.__invalid_icon
            })]
          })]
        }), !b && !__OVERLAY__ && (0, l.jsx)(o.MzZ, {
          className: _.Ce,
          href: g.A.getArticleURL(h.MVz.VOICE_VIDEO_TROUBLESHOOTING),
          children: y.intl.string(y.t.hvVgAZ)
        })]
      })]
    })
  }