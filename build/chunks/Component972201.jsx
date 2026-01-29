/** Chunk was on 83269 **/
/** chunk id: 972201, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk836602 = require("./836602.js"),
  Chunk780333 = require("./780333.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk222872 = require("./222872.js");

function A(t) {
  var e;
  let {
    error: n,
    setEmailToken: A,
    setError: _,
    onNext: C,
    onClose: d,
    transitionState: g
  } = t, [N, S] = r.useState(false), [k, m] = r.useState(""), [h, x] = r.useState(false), p = (0, i.bG)([o.A], () => o.A.getErrors()), v = r.useRef(null);
  r.useEffect(() => {
    var t;
    null == (t = v.current) || t.focus()
  }, []);
  let T = async t => {
    t.preventDefault(), _(null), S(true);
    try {
      let {
        token: t
      } = await (0, c.$)(k);
      A(t), C()
    } catch (t) {
      _(new s.A(t).getAnyErrorMessage())
    } finally {
      S(false)
    }
  }, f = async () => {
    if (!h) {
      x(true);
      try {
        await (0, c.B)(true), (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["84yeoz"]), l.ToastType.SUCCESS))
      } catch (e) {
        let t = new s.A(e).getAnyErrorMessage();
        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
      } finally {
        x(false)
      }
    }
  };
  return (0, a.jsx)(l.kpP, {
    title: u.intl.string(u.t.jMGc4J),
    subtitle: u.intl.string(u.t.SZJowy),
    graphic: {
      type: "image",
      src: E
    },
    transitionState: g,
    onClose: d,
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.PDTjLN),
      loading: N,
      onClick: T
    }],
    children: (0, a.jsxs)(l.BJc, {
      gap: 8,
      children: [(0, a.jsx)(l.ksK, {
        label: u.intl.string(u.t["8mZX6M"]),
        error: null != n ? n : null == p || null == (e = p.email_token) ? true : e[0],
        value: k,
        onChange: m,
        inputRef: v
      }), (0, a.jsx)(l.QWc, {
        textVariant: "text-sm/normal",
        text: u.intl.string(u.t.K0NPQ6),
        onClick: f
      })]
    })
  })
}