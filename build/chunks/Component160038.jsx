/** Chunk was on 11010 **/
/** chunk id: 160038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk304680 = require("./304680.js"),
  Chunk706619 = require("./706619.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk131951 = require("./131951.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk63063 = require("./63063.js"),
  Chunk476221 = require("./476221.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk297686 = require("./297686.js");
let _ = () => {
    f.Z.getMediaEngine().once(o.aB.ConnectionStats, e => {
      let t = JSON.stringify(Object.values(v.Yn).map(t => {
        let n = e.filter(e => {
          let {
            connection: n
          } = e;
          return n.context === t
        }).map((e, n) => {
          let r = e.stats;
          return r.context = t, r.index = n, r
        });
        for (let e of n) {
          var r;
          (null == e || null == (r = e.transport) ? true : r.localAddress) != null && (e.transport.localAddress = "(redacted)")
        }
        return n
      }).filter(e => e.length > 0), null, 2);
      (0, g.JG)(t, () => (0, c.showToast)((0, c.createToast)(E.intl.string(E.t.t5VZ88), c.ToastType.SUCCESS)))
    })
  },
  O = function(e) {
    (0, i.useEffect)(() => {
      p.default.track(h.rMx.OPEN_POPOUT, {
        type: "RTC Connection"
      })
    }, []);
    let t = (0, i.useCallback)(() => {
        let {
          closePopout: t
        } = e;
        null != t && t(), s.bA()
      }, [e]),
      n = (0, i.useCallback)(() => {
        let {
          hostname: t,
          averagePing: n,
          lastPing: l,
          outboundLossRate: o
        } = e, c = d.Sb.getSetting();
        return (0, r.jsxs)(i.Fragment, {
          children: [c && (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
              className: y.graphContainer,
              children: (0, r.jsx)(u.Z, {
                dataPoints: e.pings,
                width: 258,
                height: 80
              })
            }), (0, r.jsx)("div", {
              className: y.popoutText,
              children: (0, r.jsx)("strong", {
                children: b.Z.getShortHostname(t)
              })
            })]
          }), (0, r.jsx)("div", {
            className: y.popoutText,
            children: E.intl.format(E.t["X58/lN"], {
              averagePing: n.toFixed(0)
            })
          }), null != l ? (0, r.jsx)("div", {
            className: y.popoutText,
            children: E.intl.format(E.t["6iv2TF"], {
              lastPing: l.toFixed(0)
            })
          }) : null, null != o ? (0, r.jsx)("div", {
            className: y.popoutText,
            children: E.intl.format(E.t["VIBJM+"], {
              outboundLossRate: o.toFixed(1)
            })
          }) : null, (0, r.jsxs)("div", {
            className: a()(y.popoutText, y.popoutTextDetails),
            children: [null == o ? E.intl.formatToPlainString(E.t.vggaMt, {
              badPing: 250
            }) : null, null != o ? E.intl.formatToPlainString(E.t["3pFz1P"], {
              badPing: 250,
              badLossRate: 10
            }) : null]
          })]
        })
      }, [e]),
      {
        connectionState: l,
        connectionTypeText: o
      } = e,
      g = d.Sb.getSetting(),
      O = {
        [h.hes.AWAITING_ENDPOINT]: E.intl.format(E.t.Eu2vUR, {
          url: h.yXt.STATUS
        }),
        [h.hes.CONNECTING]: E.intl.string(E.t["y+E8aD"]),
        [h.hes.AUTHENTICATING]: E.intl.string(E.t["5lGIZH"]),
        [h.hes.DISCONNECTED]: E.intl.string(E.t.fOX25I),
        [h.hes.RTC_CONNECTING]: E.intl.string(E.t.b5Ubd5),
        [h.hes.ICE_CHECKING]: E.intl.format(E.t.SyoYUb, {
          url: m.Z.getArticleURL(h.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [h.hes.DTLS_CONNECTING]: E.intl.format(E.t.SyoYUb, {
          url: m.Z.getArticleURL(h.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [h.hes.RTC_CONNECTED]: n,
        [h.hes.NO_ROUTE]: E.intl.format(E.t["2tgQnk"], {
          url: m.Z.getArticleURL(h.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [h.hes.RTC_DISCONNECTED]: E.intl.string(E.t.fOX25I)
      } [l];
    return (0, r.jsxs)(r.Fragment, {
      children: ["function" == typeof O ? O() : (0, r.jsx)("p", {
        className: a()(y.popoutText, y.popoutTextDetails),
        children: O
      }), (0, r.jsx)("hr", {
        className: y.separator
      }), (0, r.jsxs)("div", {
        className: y.popoutBottom,
        children: [(0, r.jsxs)("span", {
          className: a()(y.secured, y.textWithIcon),
          children: [(0, r.jsx)(c.mBM, {
            size: "xxs",
            color: c.TVs.colors.TEXT_FEEDBACK_POSITIVE.css,
            className: y.__invalid_icon
          }), o]
        }), g && f.Z.supports(v.AN.DIAGNOSTICS) && !__OVERLAY__ && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(c.eee, {
            className: a()(y.debugButton, y.textWithIcon),
            onClick: t,
            children: [E.intl.string(E.t.KBoWg9), (0, r.jsx)(c.rgF, {
              size: "xxs",
              color: "currentColor",
              className: y.__invalid_icon
            })]
          }), (0, r.jsxs)(c.eee, {
            className: a()(y.copyStatsButton, y.textWithIcon),
            onClick: _,
            title: "Copy to clipboard",
            children: [E.intl.string(E.t["XEb+Sj"]), (0, r.jsx)(c.TIy, {
              size: "xxs",
              color: "currentColor",
              className: y.__invalid_icon
            })]
          })]
        }), !g && !__OVERLAY__ && (0, r.jsx)(c.eee, {
          className: y.debugButton,
          href: m.Z.getArticleURL(h.BhN.VOICE_VIDEO_TROUBLESHOOTING),
          children: E.intl.string(E.t.hvVgAZ)
        })]
      })]
    })
  }