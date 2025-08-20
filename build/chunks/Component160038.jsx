/** Chunk was on 84927 **/
/** chunk id: 160038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk827297 = require("./827297.js");
let m = () => {
    Chunk131951.Z.getMediaEngine().once(Chunk46973.aB.ConnectionStats, e => {
      let t = JSON.stringify(Object.values(x.Yn).map(t => {
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
      (0, g.JG)(t, () => (0, o.showToast)((0, o.createToast)(b.intl.string(b.t["t5VZ8/"]), o.ToastType.SUCCESS)))
    })
  },
  E = function(e) {
    (0, l.useEffect)(() => {
      f.default.track(y.rMx.OPEN_POPOUT, {
        type: "RTC Connection"
      })
    }, []);
    let t = (0, l.useCallback)(() => {
        let {
          closePopout: t
        } = e;
        null != t && t(), c.bA()
      }, [e]),
      n = (0, l.useCallback)(() => {
        let {
          hostname: t,
          averagePing: n,
          lastPing: s,
          outboundLossRate: a
        } = e, o = d.Sb.getSetting();
        return (0, r.jsxs)(l.Fragment, {
          children: [o && (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
              className: N.graphContainer,
              children: (0, r.jsx)(u.Z, {
                dataPoints: e.pings,
                width: 258,
                height: 80
              })
            }), (0, r.jsx)("div", {
              className: N.popoutText,
              children: (0, r.jsx)("strong", {
                children: O.Z.getShortHostname(t)
              })
            })]
          }), (0, r.jsx)("div", {
            className: N.popoutText,
            children: b.intl.format(b.t["X58/lJ"], {
              averagePing: n.toFixed(0)
            })
          }), null != s ? (0, r.jsx)("div", {
            className: N.popoutText,
            children: b.intl.format(b.t["6iv2TE"], {
              lastPing: s.toFixed(0)
            })
          }) : null, null != a ? (0, r.jsx)("div", {
            className: N.popoutText,
            children: b.intl.format(b.t.VIBJMz, {
              outboundLossRate: a.toFixed(1)
            })
          }) : null, (0, r.jsxs)("div", {
            className: i()(N.popoutText, N.popoutTextDetails),
            children: [null == a ? b.intl.formatToPlainString(b.t.vggaMj, {
              badPing: 250
            }) : null, null != a ? b.intl.formatToPlainString(b.t["3pFz1N"], {
              badPing: 250,
              badLossRate: 10
            }) : null]
          })]
        })
      }, [e]),
      {
        connectionState: s,
        connectionTypeText: a
      } = e,
      g = d.Sb.getSetting(),
      E = {
        [y.hes.AWAITING_ENDPOINT]: b.intl.format(b.t.Eu2vUV, {
          url: y.yXt.STATUS
        }),
        [y.hes.CONNECTING]: b.intl.string(b.t["y+E8aG"]),
        [y.hes.AUTHENTICATING]: b.intl.string(b.t["5lGIZG"]),
        [y.hes.DISCONNECTED]: b.intl.string(b.t.fOX25O),
        [y.hes.RTC_CONNECTING]: b.intl.string(b.t.b5Ubd3),
        [y.hes.ICE_CHECKING]: b.intl.format(b.t.SyoYUV, {
          url: p.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [y.hes.DTLS_CONNECTING]: b.intl.format(b.t.SyoYUV, {
          url: p.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [y.hes.RTC_CONNECTED]: n,
        [y.hes.NO_ROUTE]: b.intl.format(b.t["2tgQnp"], {
          url: p.Z.getArticleURL(y.BhN.VOICE_CONNECTION_ERRORS)
        }),
        [y.hes.RTC_DISCONNECTED]: b.intl.string(b.t.fOX25O)
      } [s];
    return (0, r.jsxs)(r.Fragment, {
      children: ["function" == typeof E ? E() : (0, r.jsx)("p", {
        className: i()(N.popoutText, N.popoutTextDetails),
        children: E
      }), (0, r.jsx)("hr", {
        className: N.separator
      }), (0, r.jsxs)("div", {
        className: N.popoutBottom,
        children: [(0, r.jsxs)("span", {
          className: i()(N.secured, N.textWithIcon),
          children: [(0, r.jsx)(o.mBM, {
            size: "xxs",
            color: o.TVs.colors.TEXT_FEEDBACK_POSITIVE.css,
            className: N.__invalid_icon
          }), a]
        }), g && h.Z.supports(x.AN.DIAGNOSTICS) && !__OVERLAY__ && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(o.eee, {
            className: i()(N.debugButton, N.textWithIcon),
            onClick: t,
            children: [b.intl.string(b.t.KBoWg4), (0, r.jsx)(o.rgF, {
              size: "xxs",
              color: "currentColor",
              className: N.__invalid_icon
            })]
          }), (0, r.jsxs)(o.eee, {
            className: i()(N.copyStatsButton, N.textWithIcon),
            onClick: m,
            title: "Copy to clipboard",
            children: [b.intl.string(b.t["XEb+Sk"]), (0, r.jsx)(o.TIy, {
              size: "xxs",
              color: "currentColor",
              className: N.__invalid_icon
            })]
          })]
        }), !g && !__OVERLAY__ && (0, r.jsx)(o.eee, {
          className: N.debugButton,
          href: p.Z.getArticleURL(y.BhN.VOICE_VIDEO_TROUBLESHOOTING),
          children: b.intl.string(b.t.hvVgAQ)
        })]
      })]
    })
  }