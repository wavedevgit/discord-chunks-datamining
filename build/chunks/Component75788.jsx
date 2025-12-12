/** Chunk was on 9343 **/
/** chunk id: 75788, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk393869 = require("./393869.js"),
  Chunk25990 = require("./25990.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800010 = require("./800010.js");

function A(t) {
  var n;
  let {
    error: e,
    setEmailToken: A,
    setError: _,
    onNext: d,
    onClose: C,
    transitionState: x
  } = t, [N, S] = i.useState(false), [g, f] = i.useState(""), [p, m] = i.useState(false), v = (0, a.e7)([c.Z], () => c.Z.getErrors()), y = i.useRef(null);
  i.useEffect(() => {
    var t;
    null == (t = y.current) || t.focus()
  }, []);
  let h = async t => {
    t.preventDefault(), _(null), S(true);
    try {
      let {
        token: t
      } = await (0, o.w)(g);
      A(t), d()
    } catch (t) {
      _(new s.Z(t).getAnyErrorMessage())
    } finally {
      S(false)
    }
  }, M = async () => {
    if (!p) {
      m(true);
      try {
        await (0, o.i)(true), (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["84yeoz"]), l.ToastType.SUCCESS))
      } catch (n) {
        let t = new s.Z(n).getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        m(false)
      }
    }
  };
  return (0, r.jsx)(l.Ioy, {
    title: u.intl.string(u.t.jMGc4J),
    subtitle: u.intl.string(u.t.SZJowy),
    graphic: {
      type: "image",
      src: E
    },
    transitionState: x,
    onClose: C,
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.PDTjLN),
      loading: N,
      onClick: h
    }],
    children: (0, r.jsxs)(l.Kqy, {
      gap: 8,
      children: [(0, r.jsx)(l.oil, {
        label: u.intl.string(u.t["8mZX6M"]),
        error: null != e ? e : null == v || null == (n = v.email_token) ? true : n[0],
        value: g,
        onChange: f,
        inputRef: y
      }), (0, r.jsx)(l.Avr, {
        textVariant: "text-sm/normal",
        text: u.intl.string(u.t.K0NPQ6),
        onClick: M
      })]
    })
  })
}