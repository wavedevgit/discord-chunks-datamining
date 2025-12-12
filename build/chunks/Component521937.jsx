/** Chunk was on 69773 **/
/** chunk id: 521937, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  v: () => p
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk593473 = require("./593473.js"),
  Chunk828700 = require("./828700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489863 = require("./489863.js"),
  Chunk511540 = require("./511540.js"),
  Chunk828878 = require("./828878.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk962514 = require("./962514.js");

function p(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: n
  } = e, [p, h] = a.useState(() => {
    let {
      user_code: e
    } = o.parse(window.location.search);
    return n && null != e ? e : ""
  }), x = (0, i.TH)(), g = a.useCallback(() => {
    (0, l.c$)(x, "user_code_input_unauthorized")
  }, [x]), {
    manualSubmit: m,
    error: v,
    submitting: b
  } = (0, c.c)(p, t, g);
  return (0, r.jsxs)("div", {
    className: f.content,
    children: [(0, r.jsxs)("div", {
      className: f.innerContent,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xl/extrabold",
        className: f.text,
        children: u.intl.string(u.t.KYPNUv)
      }), (0, r.jsxs)(s.Kqy, {
        gap: 24,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          color: "text-default",
          className: f.text,
          children: u.intl.string(u.t.xRHk7f)
        }), (0, r.jsx)(s.oil, {
          placeholder: u.intl.formatToPlainString(u.t["0tbz6x"], {
            number: d.A.USER_CODE_LENGTH
          }),
          maxLength: d.A.USER_CODE_LENGTH,
          autoComplete: "off",
          autoFocus: true,
          value: p,
          onChange: h,
          error: v,
          fullWidth: true
        })]
      })]
    }), (0, r.jsx)(s.Button, {
      fullWidth: true,
      variant: "primary",
      text: u.intl.string(u.t["3PatSz"]),
      onClick: m,
      loading: b,
      disabled: p.length !== d.A.USER_CODE_LENGTH
    })]
  })
}