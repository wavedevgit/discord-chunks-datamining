/** Chunk was on 43342 **/
/** chunk id: 448697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk666917 = require("./666917.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk709706 = require("./709706.js"),
  Chunk378441 = require("./378441.js"),
  Chunk358820 = require("./358820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk48528 = require("./48528.js");

function f() {
  let {
    hasActiveDownloads: e,
    progress: t
  } = function() {
    let e = (0, Chunk442837.cj)([Chunk709706.Z], () => Chunk709706.Z.getOngoingDownloads()),
      t = Chunk473749.useRef({});
    Chunk473749.useEffect(() => {
      0 === Object.entries(module).length && (exports.current = {}), Object.assign(exports.current, module)
    }, [module]);
    let n = Object.values(exports.current),
      r = require.some(e => {
        let {
          downloadedBytes: t
        } = e;
        return (null != t ? t : 0) > 0
      }),
      l = (0, Chunk392711.sumBy)(require, e => {
        var t;
        return null != (t = null == e ? true : e.downloadedBytes) ? t : 0
      }),
      s = (0, Chunk392711.sumBy)(require, e => {
        var t;
        return null != (t = null == e ? true : e.totalBytes) ? t : 0
      });
    return {
      hasActiveDownloads: Chunk54381,
      progress: 0 === Chunk481060 ? 0 : Math.floor(Chunk666917 / Chunk481060 * 100)
    }
  }(), {
    activeVoice: n
  } = (0, Chunk378441.o)();
  return (0, Chunk481060.Yzy)(module ? null != require ? "voice-on" : "voice-off" : null, {
    from: {
      opacity: 0,
      translateY: 20
    },
    enter: e => ({
      opacity: 1,
      translateY: "voice-on" === e ? false : 0
    }),
    leave: {
      opacity: 0,
      translateY: 80
    }
  }, "respect-motion-settings")((e, n) => null != n ? (0, r.jsx)(l.animated.div, {
    style: e,
    className: m.floaterWrapper,
    children: (0, r.jsxs)("div", {
      className: m.visibleFloater,
      children: [(0, r.jsxs)("div", {
        className: m.progressText,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-primary",
          children: p.intl.format(p.t["r+uZYZ"], {
            progress: t
          })
        }), (0, r.jsx)(s.Avr, {
          text: p.intl.string(p.t["ETE/oC"]),
          onClick: d.ge,
          variant: "always-white",
          textVariant: "text-sm/normal"
        })]
      }), (0, r.jsx)(s.Exd, {
        percent: t,
        size: s.Exd.Sizes.XSMALL
      })]
    })
  }) : null)
}