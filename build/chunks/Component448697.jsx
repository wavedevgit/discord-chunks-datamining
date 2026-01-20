/** Chunk was on 11010 **/
/** chunk id: 448697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk709706 = require("./709706.js"),
  Chunk378441 = require("./378441.js"),
  Chunk358820 = require("./358820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk462443 = require("./462443.js");

function g() {
  let {
    hasActiveDownloads: e,
    progress: t
  } = function() {
    let e = (0, o.cj)([s.Z], () => s.Z.getOngoingDownloads()),
      t = i.useRef({});
    i.useEffect(() => {
      0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e)
    }, [e]);
    let n = Object.values(t.current),
      r = n.some(e => {
        let {
          downloadedBytes: t
        } = e;
        return (null != t ? t : 0) > 0
      }),
      a = (0, l.sumBy)(n, e => {
        var t;
        return null != (t = null == e ? true : e.downloadedBytes) ? t : 0
      }),
      c = (0, l.sumBy)(n, e => {
        var t;
        return null != (t = null == e ? true : e.totalBytes) ? t : 0
      });
    return {
      hasActiveDownloads: r,
      progress: 0 === c ? 0 : Math.floor(a / c * 100)
    }
  }(), {
    activeVoice: n
  } = (0, u.o)();
  return (0, c.Yzy)(e ? null != n ? "voice-on" : "voice-off" : null, {
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
  }, "respect-motion-settings")((e, n) => null != n ? (0, r.jsx)(a.animated.div, {
    style: e,
    className: p.floaterWrapper,
    children: (0, r.jsxs)("div", {
      className: p.visibleFloater,
      children: [(0, r.jsxs)("div", {
        className: p.progressText,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: f.intl.format(f.t["r+uZYZ"], {
            progress: t
          })
        }), (0, r.jsx)(c.Avr, {
          text: f.intl.string(f.t["ETE/oC"]),
          onClick: d.ge,
          variant: "always-white",
          textVariant: "text-sm/normal"
        })]
      }), (0, r.jsx)(c.Exd, {
        percent: t,
        size: c.Exd.Sizes.XSMALL
      })]
    })
  }) : null)
}