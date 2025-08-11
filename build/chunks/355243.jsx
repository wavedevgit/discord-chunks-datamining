/** Chunk was on 32249 **/
/** chunk id: 355243, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk604162 = require("./604162.js"),
  Chunk420212 = require("./420212.js"),
  Chunk650762 = require("./650762.js");

function p(e, t, n) {
  return n * (Math.max(e - t.left, 0) / t.width)
}

function f(e, t, n) {
  return n.left + e / t * n.width
}

function v(e) {
  let {
    percent: t,
    animate: n,
    interactionEnabled: o,
    backgroundColor: v,
    preloadedBuffers: E,
    duration: g,
    maxSeekableTime: O,
    onClick: b,
    onScrubBack: C,
    onScrubForward: S
  } = e, [h, _] = l.useState(null), [j, y] = l.useState(null), [x, T] = l.useState(null), [D, P] = l.useState(false), R = l.useRef(null), N = e => {
    R.current = e, _(e)
  };
  l.useEffect(() => {
    null != h && (null == O ? T(null) : T(f(O, g, h)))
  }, [h, O, g]);
  let I = (0, c.Z)(e => {
      N(e.contentRect)
    }),
    k = (0, s.y)(I);
  l.useLayoutEffect(() => {
    null != k.current && N(k.current.getBoundingClientRect())
  }, [k]), l.useEffect(() => {
    let e = () => {
      null != k.current && N(k.current.getBoundingClientRect())
    };
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [k]);
  let A = e => {
      y(e.clientX)
    },
    w = l.useCallback(e => {
      let {
        key: t
      } = e;
      t === d.mR.ArrowLeft && null != C ? (e.preventDefault(), e.stopPropagation(), C()) : t === d.mR.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S())
    }, [C, S]),
    L = null != j && null != h ? p(j, h, g) : 0,
    M = (0, u.yv)(L),
    V = null != h ? h.right - f(t / 100 * g, g, h) : null,
    B = null != j && null != h ? h.right - j : null,
    Z = null != x && null != h ? h.right - x : null;
  return <div className={m.cont} ref={k}>{<a.P3F className={i()(m.hitboxArea, {
        [m.interactionEnabled]: o
      })} ignoreKeyPress={true} onClick={e => {
        o && null != b && b(p(e.clientX, e.currentTarget.getBoundingClientRect(), g))
      }} onMouseEnter={e => {
        o && (null != k.current && N(k.current.getBoundingClientRect()), P(true), A(e))
      }} onMouseLeave={e => {
        o && (P(false), y(null))
      }} onMouseMove={e => {
        o && D && A(e)
      }} onKeyDown={w} tabIndex={o ? true : false} focusProps={{
        offset: {
          top: 12,
          bottom: 12
        }
      }}>{null == E ? true : E.map(e => <div className={i()(m.buffer, {
          [m.bufferHovered]: D
        })} style={{
          width: "".concat(100 * e.size, "%"),
          left: "".concat(100 * e.start, "%")
        }} />)}{!o && null != Z && Z > 0 && <div className={m.seekableBar} style={{
          right: null != Z ? "".concat(Z, "px") : "auto",
          opacity: +(null != Z)
        }} />}{<a.Exd className={m.progress} percent={t} foregroundColor={"#FFFFFF"} backgroundColor={null != v ? v : true} size={D ? a.Exd.Sizes.XSMALL : a.Exd.Sizes.XXSMALL} animate={n} />}{D && null != M && <a.Text className={m.timeDisplay} variant={"text-xs/normal"} style={{
          right: null != B ? "".concat(B - 10, "px") : "auto",
          color: "#FFFFFF"
        }}>{M}</a.Text>}{D && o && null != V && <div className={m.grabber} style={{
          right: "".concat(V - 6, "px")
        }} />}</a.P3F>}{<div className={m.progressGlow} style={{
        width: "".concat(t, "%")
      }} />}</div>
}