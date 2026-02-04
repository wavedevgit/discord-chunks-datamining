/** Chunk was on 17869 **/
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
    h.A.getMediaEngine().once(s.bg.ConnectionStats, e => {
      let t = JSON.stringify(Object.values(b.x).map(t => {
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
      (0, f.C)(t, () => (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.t5VZ88), o.ToastType.SUCCESS)))
    })
  },
  v = function(e) {
    (0, r.useEffect)(() => {
      p.default.track(A.HAw.OPEN_POPOUT, {
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
              className: y.o0,
              children: (0, l.jsx)(u.A, {
                dataPoints: e.pings,
                width: 258,
                height: 80
              })
            }), (0, l.jsx)("div", {
              className: y.xB,
              children: (0, l.jsx)("strong", {
                children: g.A.getShortHostname(t)
              })
            })]
          }), (0, l.jsx)("div", {
            className: y.xB,
            children: _.intl.format(_.t["X58/lN"], {
              averagePing: n.toFixed(0)
            })
          }), null != i ? (0, l.jsx)("div", {
            className: y.xB,
            children: _.intl.format(_.t["6iv2TF"], {
              lastPing: i.toFixed(0)
            })
          }) : null, null != s ? (0, l.jsx)("div", {
            className: y.xB,
            children: _.intl.format(_.t["VIBJM+"], {
              outboundLossRate: s.toFixed(1)
            })
          }) : null, (0, l.jsxs)("div", {
            className: a()(y.xB, y.xJ),
            children: [null == s ? _.intl.formatToPlainString(_.t.vggaMt, {
              badPing: 250
            }) : null, null != s ? _.intl.formatToPlainString(_.t["3pFz1P"], {
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
      f = d.Q_.getSetting(),
      v = {
        [A.S7L.AWAITING_ENDPOINT]: _.intl.format(_.t.Eu2vUR, {
          url: A.qF7.STATUS
        }),
        [A.S7L.CONNECTING]: _.intl.string(_.t["y+E8aD"]),
        [A.S7L.AUTHENTICATING]: _.intl.string(_.t["5lGIZH"]),
        [A.S7L.DISCONNECTED]: _.intl.string(_.t.fOX25I),
        [A.S7L.RTC_CONNECTING]: _.intl.string(_.t.b5Ubd5),
        [A.S7L.ICE_CHECKING]: _.intl.format(_.t.SyoYUb, {
          url: m.A.getArticleURL(A.MVz.VOICE_CONNECTION_ERRORS)
        }),
        [A.S7L.DTLS_CONNECTING]: _.intl.format(_.t.SyoYUb, {
          url: m.A.getArticleURL(A.MVz.VOICE_CONNECTION_ERRORS)
        }),
        [A.S7L.RTC_CONNECTED]: n,
        [A.S7L.NO_ROUTE]: _.intl.format(_.t["2tgQnk"], {
          url: m.A.getArticleURL(A.MVz.VOICE_CONNECTION_ERRORS)
        }),
        [A.S7L.RTC_DISCONNECTED]: _.intl.string(_.t.fOX25I)
      } [i];
    return (0, l.jsxs)(l.Fragment, {
      children: ["function" == typeof v ? v() : (0, l.jsx)("p", {
        className: a()(y.xB, y.xJ),
        children: v
      }), (0, l.jsx)("hr", {
        className: y.me
      }), (0, l.jsxs)("div", {
        className: y.Vf,
        children: [(0, l.jsxs)("span", {
          className: a()(y.uO, y.ro),
          children: [(0, l.jsx)(o.XAi, {
            size: "xxs",
            color: o.LU0.colors.TEXT_FEEDBACK_POSITIVE.css,
            className: y.__invalid_icon
          }), s]
        }), f && h.A.supports(b.O5.DIAGNOSTICS) && !__OVERLAY__ && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsxs)(o.MzZ, {
            className: a()(y.Ce, y.ro),
            onClick: t,
            children: [_.intl.string(_.t.KBoWg9), (0, l.jsx)(o.tfB, {
              size: "xxs",
              color: "currentColor",
              className: y.__invalid_icon
            })]
          }), (0, l.jsxs)(o.MzZ, {
            className: a()(y.d3, y.ro),
            onClick: E,
            title: "Copy to clipboard",
            children: [_.intl.string(_.t["XEb+Sj"]), (0, l.jsx)(o.TdU, {
              size: "xxs",
              color: "currentColor",
              className: y.__invalid_icon
            })]
          })]
        }), !f && !__OVERLAY__ && (0, l.jsx)(o.MzZ, {
          className: y.Ce,
          href: m.A.getArticleURL(A.MVz.VOICE_VIDEO_TROUBLESHOOTING),
          children: _.intl.string(_.t.hvVgAZ)
        })]
      })]
    })
  }