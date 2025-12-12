/** Chunk was on 9343 **/
/** chunk id: 361833, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => A
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

function A(t) {
  var n, e;
  let {
    emailToken: A,
    onClose: _,
    onBack: d,
    onNext: C,
    transitionState: x
  } = t, [N, S] = i.useState(""), [g, f] = i.useState(""), [p, m] = i.useState(false), v = (0, a.e7)([o.Z], () => o.Z.getErrors()), y = i.useRef(null);
  async function h(t) {
    t.preventDefault(), m(true);
    let n = await (0, s.Mn)({
      email: N,
      emailToken: A,
      password: g
    });
    if (m(false), null == n ? true : n.ok) C(N);
    else {
      var e, r;
      (null == n || null == (e = n.body) ? true : e.username) != null ? (0, c.P)() : (null == n || null == (r = n.body) ? true : r.email_token) != null && (null == d || d())
    }
  }
  return i.useEffect(() => {
    var t;
    null == (t = y.current) || t.focus()
  }, []), (0, r.jsx)(l.Ioy, {
    graphic: {
      type: "image",
      src: E
    },
    title: u.intl.string(u.t.p3280r),
    subtitle: u.intl.string(u.t["1k44EL"]),
    onClose: _,
    transitionState: x,
    actions: [null != d ? {
      variant: "secondary",
      text: u.intl.string(u.t["13/7kX"]),
      onClick: d
    } : {
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: _
    }, {
      variant: "primary",
      text: u.intl.string(u.t.i4jeWR),
      loading: p,
      onClick: h
    }],
    children: (0, r.jsxs)(l.Kqy, {
      gap: 20,
      children: [(0, r.jsx)(l.oil, {
        label: u.intl.string(u.t["w/qqKK"]),
        error: null == v || null == (n = v.email) ? true : n[0],
        type: "email",
        value: N,
        onChange: S,
        inputRef: y
      }), (0, r.jsx)(l.oil, {
        label: u.intl.string(u.t.TmdnJ3),
        error: null == v || null == (e = v.password) ? true : e[0],
        type: "password",
        value: g,
        onChange: f
      })]
    })
  })
}