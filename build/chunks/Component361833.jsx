/** Chunk was on 9343 **/
/** chunk id: 361833, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk25990 = require("./25990.js"),
  Chunk155433 = require("./155433.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780187 = require("./780187.js");

function m(e) {
  var t, n;
  let {
    emailToken: m,
    isSlideReady: x,
    onClose: _,
    onBack: E,
    onNext: N
  } = e, [p, h] = s.useState(""), [A, C] = s.useState(""), [f, j] = s.useState(false), g = (0, r.e7)([o.Z], () => o.Z.getErrors()), S = s.useRef(null);
  async function v(e) {
    e.preventDefault(), j(true);
    let t = await (0, l.Mn)({
      email: p,
      emailToken: m,
      password: A
    });
    if (j(false), null == t ? true : t.ok) N(p);
    else {
      var n, a;
      (null == t || null == (n = t.body) ? true : n.username) != null ? (0, c.P)() : (null == t || null == (a = t.body) ? true : a.email_token) != null && (null == E || E())
    }
  }
  return s.useEffect(() => {
    if (x) {
      var e;
      null == (e = S.current) || e.focus()
    }
  }, [x]), (0, a.jsxs)("form", {
    onSubmit: v,
    children: [(0, a.jsxs)(i.xBx, {
      separator: false,
      className: u.header,
      children: [(0, a.jsx)(i.Heading, {
        className: u.title,
        variant: "heading-xl/extrabold",
        children: d.intl.string(d.t.p3280t)
      }), (0, a.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: u.subtitle,
        children: d.intl.string(d.t["1k44EB"])
      }), (0, a.jsx)(i.olH, {
        onClick: _,
        className: u.modalCloseButton
      })]
    }), (0, a.jsx)(i.hzk, {
      className: u.content,
      children: (0, a.jsxs)(i.Kqy, {
        gap: 20,
        children: [(0, a.jsx)(i.oil, {
          label: d.intl.string(d.t["w/qqKC"]),
          error: null == g || null == (t = g.email) ? true : t[0],
          type: "email",
          value: p,
          onChange: h,
          inputRef: S
        }), (0, a.jsx)(i.oil, {
          label: d.intl.string(d.t.TmdnJy),
          error: null == g || null == (n = g.password) ? true : n[0],
          type: "password",
          value: A,
          onChange: C
        })]
      })
    }), (0, a.jsxs)(i.mzw, {
      children: [(0, a.jsx)(i.Button, {
        variant: "primary",
        text: d.intl.string(d.t.i4jeWV),
        type: "submit",
        loading: f
      }), null != E ? (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.__invalid_cancel,
        children: (0, a.jsx)(i.Button, {
          variant: "secondary",
          text: d.intl.string(d.t["13/7kZ"]),
          onClick: E
        })
      }) : (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.__invalid_cancel,
        children: (0, a.jsx)(i.Button, {
          variant: "secondary",
          text: d.intl.string(d.t["ETE/oK"]),
          onClick: _
        })
      })]
    })]
  })
}