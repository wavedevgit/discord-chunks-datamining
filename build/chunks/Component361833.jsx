/** Chunk was on 9343 **/
/** chunk id: 361833, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    isSlideReady: u,
    onClose: _,
    onBack: E,
    onNext: N
  } = e, [h, A] = a.useState(""), [p, C] = a.useState(""), [j, f] = a.useState(false), S = (0, r.e7)([o.Z], () => o.Z.getErrors()), g = a.useRef(null);
  async function v(e) {
    e.preventDefault(), f(true);
    let t = await (0, l.Mn)({
      email: h,
      emailToken: m,
      password: p
    });
    if (f(false), null == t ? true : t.ok) N(h);
    else {
      var n, s;
      (null == t || null == (n = t.body) ? true : n.username) != null ? (0, c.P)() : (null == t || null == (s = t.body) ? true : s.email_token) != null && (null == E || E())
    }
  }
  return a.useEffect(() => {
    if (u) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [u]), (0, s.jsxs)("form", {
    onSubmit: v,
    children: [(0, s.jsxs)(i.xBx, {
      separator: false,
      className: x.header,
      children: [(0, s.jsx)(i.X6q, {
        className: x.title,
        variant: "heading-xl/extrabold",
        children: d.intl.string(d.t.p3280t)
      }), (0, s.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: x.subtitle,
        children: d.intl.string(d.t["1k44EB"])
      }), (0, s.jsx)(i.olH, {
        onClick: _,
        className: x.modalCloseButton
      })]
    }), (0, s.jsxs)(i.hzk, {
      className: x.content,
      children: [(0, s.jsx)(i.xJW, {
        title: d.intl.string(d.t["w/qqKC"]),
        error: null == S || null == (t = S.email) ? true : t[0],
        children: (0, s.jsx)(i.oil, {
          type: "email",
          value: h,
          onChange: A,
          inputRef: g
        })
      }), (0, s.jsx)(i.xJW, {
        className: x.password,
        title: d.intl.string(d.t.TmdnJy),
        error: null == S || null == (n = S.password) ? true : n[0],
        children: (0, s.jsx)(i.oil, {
          type: "password",
          value: p,
          onChange: C
        })
      })]
    }), (0, s.jsxs)(i.mzw, {
      children: [(0, s.jsx)(i.zxk, {
        variant: "primary",
        text: d.intl.string(d.t.i4jeWV),
        type: "submit",
        loading: j
      }), null != E ? (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: x.__invalid_cancel,
        children: (0, s.jsx)(i.zxk, {
          variant: "secondary",
          text: d.intl.string(d.t["13/7kZ"]),
          onClick: E
        })
      }) : (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: x.__invalid_cancel,
        children: (0, s.jsx)(i.zxk, {
          variant: "secondary",
          text: d.intl.string(d.t["ETE/oK"]),
          onClick: _
        })
      })]
    })]
  })
}