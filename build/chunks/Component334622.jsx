/** Chunk was on 83269 **/
/** chunk id: 334622, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk836602 = require("./836602.js"),
  Chunk592074 = require("./592074.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk222872 = require("./222872.js");

function A(t) {
  var e, n;
  let {
    emailToken: A,
    onClose: _,
    onBack: C,
    onNext: d,
    transitionState: g
  } = t, [N, S] = r.useState(""), [k, m] = r.useState(""), [h, x] = r.useState(false), p = (0, i.bG)([o.A], () => o.A.getErrors()), v = r.useRef(null);
  async function T(t) {
    t.preventDefault(), x(true);
    let e = await (0, s.yu)({
      email: N,
      emailToken: A,
      password: k
    });
    if (x(false), null == e ? true : e.ok) d(N);
    else {
      var n, a;
      (null == e || null == (n = e.body) ? true : n.username) != null ? (0, c.E)() : (null == e || null == (a = e.body) ? true : a.email_token) != null && (null == C || C())
    }
  }
  return r.useEffect(() => {
    var t;
    null == (t = v.current) || t.focus()
  }, []), (0, a.jsx)(l.kpP, {
    graphic: {
      type: "image",
      src: E
    },
    title: u.intl.string(u.t.p3280r),
    subtitle: u.intl.string(u.t["1k44EL"]),
    onClose: _,
    transitionState: g,
    actions: [null != C ? {
      variant: "secondary",
      text: u.intl.string(u.t["13/7kX"]),
      onClick: C
    } : {
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: _
    }, {
      variant: "primary",
      text: u.intl.string(u.t.i4jeWR),
      loading: h,
      onClick: T
    }],
    children: (0, a.jsxs)(l.BJc, {
      gap: 20,
      children: [(0, a.jsx)(l.ksK, {
        label: u.intl.string(u.t["w/qqKK"]),
        error: null == p || null == (e = p.email) ? true : e[0],
        type: "email",
        value: N,
        onChange: S,
        inputRef: v
      }), (0, a.jsx)(l.ksK, {
        label: u.intl.string(u.t.TmdnJ3),
        error: null == p || null == (n = p.password) ? true : n[0],
        type: "password",
        value: k,
        onChange: m
      })]
    })
  })
}