/** Chunk was on 29611 **/
n.d(t, {
  Z: () => c
}), n(47120);
var i = n(200651),
  o = n(192379),
  r = n(311308),
  a = n(692547),
  l = n(481060);

function c(e) {
  let t = (0, o.useRef)(null),
    [n, c] = (0, o.useState)(null),
    [s] = (0, o.useState)(() => new r.TimelineDataSeries),
    u = (0, l.dQu)(a.Z.colors.BACKGROUND_PRIMARY).hsl(),
    d = (0, l.dQu)(a.Z.colors.TEXT_NORMAL).hsl(),
    _ = (0, l.dQu)(a.Z.colors.BACKGROUND_ACCENT).hsl(),
    h = (0, l.dQu)(a.Z.unsafe_rawColors.BRAND_500).hsl();
  (0, o.useEffect)(() => {
    var e;
    let n = t.current;
    if (null == n) return;
    let i = new r.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
    i.backgroundColor = u, i.textColor = d, i.gridColor = _, i.timeOptions = {
      timeStyle: "short"
    }, i.fontFamily = "gg sans", i.fontSize = 11, s.setColor(h), i.addDataSeries(s), i.updateEndDate(), c(i)
  }, [t, u, h, _, d, s]), s.setPoints(e.dataPoints), null == n || n.updateEndDate();
  let f = {
    width: e.width,
    height: e.height
  };
  return (0, i.jsx)("canvas", {
    style: f,
    width: e.width,
    height: e.height,
    ref: t
  }, "canvas")
}