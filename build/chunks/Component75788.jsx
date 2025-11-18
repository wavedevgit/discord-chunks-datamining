/** Chunk was on 9343 **/
/** chunk id: 75788, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk393869 = require("./393869.js"),
  Chunk25990 = require("./25990.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk810512 = require("./810512.js"),
  Chunk800010 = require("./800010.js");

function d(t) {
  var e;
  let {
    error: n,
    setEmailToken: d,
    setError: A,
    onNext: x,
    onClose: C,
    transitionState: g
  } = t, [p, S] = r.useState(false), [f, N] = r.useState(""), [m, h] = r.useState(false), T = (0, i.e7)([c.Z], () => c.Z.getErrors()), v = r.useRef(null);
  r.useEffect(() => {
    var t;
    null == (t = v.current) || t.focus()
  }, []);
  let y = async t => {
    t.preventDefault(), A(null), S(true);
    try {
      let {
        token: t
      } = await (0, o.w)(f);
      d(t), x()
    } catch (t) {
      A(new s.Z(t).getAnyErrorMessage())
    } finally {
      S(false)
    }
  }, M = async () => {
    if (!m) {
      h(true);
      try {
        await (0, o.i)(true), (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["84yeoz"]), l.ToastType.SUCCESS))
      } catch (e) {
        let t = new s.Z(e).getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        h(false)
      }
    }
  };
  return (0, a.jsxs)(l.Ioy, {
    title: u.intl.string(u.t.jMGc4J),
    subtitle: u.intl.string(u.t.SZJowy),
    graphic: {
      type: "image",
      src: _
    },
    transitionState: g,
    onClose: C,
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.PDTjLN),
      loading: p,
      onClick: y
    }],
    children: [(0, a.jsx)(l.oil, {
      label: u.intl.string(u.t["8mZX6M"]),
      error: null != n ? n : null == T || null == (e = T.email_token) ? true : e[0],
      value: f,
      onChange: N,
      inputRef: v
    }), (0, a.jsx)(l.Text, {
      className: E.help,
      variant: "text-sm/normal",
      children: u.intl.format(u.t.P0sak5, {
        onResend: M
      })
    })]
  })
}