/** Chunk was on 9343 **/
/** chunk id: 75788, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk393869 = require("./393869.js"),
  Chunk25990 = require("./25990.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk36884 = require("./36884.js"),
  Chunk800010 = require("./800010.js");

function _(t) {
  var n;
  let {
    error: e,
    setEmailToken: _,
    setError: d,
    onNext: C,
    onClose: x,
    transitionState: N
  } = t, [S, f] = r.useState(false), [g, p] = r.useState(""), [m, v] = r.useState(false), h = (0, i.e7)([c.Z], () => c.Z.getErrors()), y = r.useRef(null);
  r.useEffect(() => {
    var t;
    null == (t = y.current) || t.focus()
  }, []);
  let T = async t => {
    t.preventDefault(), d(null), f(true);
    try {
      let {
        token: t
      } = await (0, o.w)(g);
      _(t), C()
    } catch (t) {
      d(new s.Z(t).getAnyErrorMessage())
    } finally {
      f(false)
    }
  }, M = async () => {
    if (!m) {
      v(true);
      try {
        await (0, o.i)(true), (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["84yeoz"]), l.ToastType.SUCCESS))
      } catch (n) {
        let t = new s.Z(n).getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        v(false)
      }
    }
  };
  return (0, a.jsxs)(l.Ioy, {
    title: u.intl.string(u.t.jMGc4J),
    subtitle: u.intl.string(u.t.SZJowy),
    graphic: {
      type: "image",
      src: A
    },
    transitionState: N,
    onClose: x,
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.PDTjLN),
      loading: S,
      onClick: T
    }],
    children: [(0, a.jsx)(l.oil, {
      label: u.intl.string(u.t["8mZX6M"]),
      error: null != e ? e : null == h || null == (n = h.email_token) ? true : n[0],
      value: g,
      onChange: p,
      inputRef: y
    }), (0, a.jsx)(l.Text, {
      className: E.help,
      variant: "text-sm/normal",
      children: u.intl.format(u.t.P0sak5, {
        onResend: M
      })
    })]
  })
}