/** Chunk was on 16864 **/
/** chunk id: 621846, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  H: () => f
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk397927 = require("./397927.js"),
  Chunk716965 = require("./716965.js"),
  Chunk102028 = require("./102028.js"),
  Chunk533553 = require("./533553.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk694900 = require("./694900.js");

function f(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: r
  } = e, [f, h] = a.useState(() => {
    let {
      user_code: e
    } = s.parse(window.location.search);
    return r && null != e ? e : ""
  }), x = (0, i.zy)(), m = a.useCallback(() => {
    (0, o.Vh)(x, "user_code_input_unauthorized")
  }, [x]), {
    manualSubmit: g,
    error: _,
    submitting: b
  } = (0, c.e)(f, t, m);
  return (0, n.jsxs)("div", {
    className: p.Qs,
    children: [(0, n.jsxs)("div", {
      className: p.gx,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-xl/extrabold",
        className: p.Qq,
        children: u.intl.string(u.t.KYPNUv)
      }), (0, n.jsxs)(l.BJc, {
        gap: 24,
        children: [(0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "text-default",
          className: p.Qq,
          children: u.intl.string(u.t.xRHk7f)
        }), (0, n.jsx)(l.ksK, {
          placeholder: u.intl.formatToPlainString(u.t["0tbz6x"], {
            number: d.D.USER_CODE_LENGTH
          }),
          maxLength: d.D.USER_CODE_LENGTH,
          autoComplete: "off",
          autoFocus: true,
          value: f,
          onChange: h,
          error: _,
          fullWidth: true
        })]
      })]
    }), (0, n.jsx)(l.Button, {
      fullWidth: true,
      variant: "primary",
      text: u.intl.string(u.t["3PatSz"]),
      onClick: g,
      loading: b,
      disabled: f.length !== d.D.USER_CODE_LENGTH
    })]
  })
}