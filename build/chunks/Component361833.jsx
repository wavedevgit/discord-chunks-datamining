/** Chunk was on 9343 **/
/** chunk id: 361833, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk25990 = require("./25990.js"),
  Chunk155433 = require("./155433.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800010 = require("./800010.js");

function _(t) {
  var e, n;
  let {
    emailToken: _,
    onClose: d,
    onBack: A,
    onNext: x,
    transitionState: C
  } = t, [g, p] = r.useState(""), [S, f] = r.useState(""), [N, m] = r.useState(false), h = (0, i.e7)([o.Z], () => o.Z.getErrors()), T = r.useRef(null);
  async function v(t) {
    t.preventDefault(), m(true);
    let e = await (0, s.Mn)({
      email: g,
      emailToken: _,
      password: S
    });
    if (m(false), null == e ? true : e.ok) x(g);
    else {
      var n, a;
      (null == e || null == (n = e.body) ? true : n.username) != null ? (0, c.P)() : (null == e || null == (a = e.body) ? true : a.email_token) != null && (null == A || A())
    }
  }
  return r.useEffect(() => {
    var t;
    null == (t = T.current) || t.focus()
  }, []), (0, a.jsx)(l.Ioy, {
    graphic: {
      type: "image",
      src: E
    },
    title: u.intl.string(u.t.p3280r),
    subtitle: u.intl.string(u.t["1k44EL"]),
    onClose: d,
    transitionState: C,
    actions: [null != A ? {
      variant: "secondary",
      text: u.intl.string(u.t["13/7kX"]),
      onClick: A
    } : {
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: d
    }, {
      variant: "primary",
      text: u.intl.string(u.t.i4jeWR),
      loading: N,
      onClick: v
    }],
    children: (0, a.jsxs)(l.Kqy, {
      gap: 20,
      children: [(0, a.jsx)(l.oil, {
        label: u.intl.string(u.t["w/qqKK"]),
        error: null == h || null == (e = h.email) ? true : e[0],
        type: "email",
        value: g,
        onChange: p,
        inputRef: T
      }), (0, a.jsx)(l.oil, {
        label: u.intl.string(u.t.TmdnJ3),
        error: null == h || null == (n = h.password) ? true : n[0],
        type: "password",
        value: S,
        onChange: f
      })]
    })
  })
}