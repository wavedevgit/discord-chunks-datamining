/** Chunk was on 16864 **/
/** chunk id: 621846, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  H: () => p
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

function p(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: r
  } = e, [p, h] = n.useState(() => {
    let {
      user_code: e
    } = s.parse(window.location.search);
    return r && null != e ? e : ""
  }), x = (0, i.zy)(), b = n.useCallback(() => {
    (0, c.Vh)(x, "user_code_input_unauthorized")
  }, [x]), {
    manualSubmit: m,
    error: g,
    submitting: y
  } = (0, o.e)(p, t, b);
  return (0, a.jsxs)("div", {
    className: f.Qs,
    children: [(0, a.jsxs)("div", {
      className: f.gx,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-xl/extrabold",
        className: f.Qq,
        children: u.intl.string(u.t.KYPNUv)
      }), (0, a.jsxs)(l.BJc, {
        gap: 24,
        children: [(0, a.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "text-default",
          className: f.Qq,
          children: u.intl.string(u.t.xRHk7f)
        }), (0, a.jsx)(l.ksK, {
          placeholder: u.intl.formatToPlainString(u.t["0tbz6x"], {
            number: d.D.USER_CODE_LENGTH
          }),
          maxLength: d.D.USER_CODE_LENGTH,
          autoComplete: "off",
          autoFocus: true,
          value: p,
          onChange: h,
          error: g,
          fullWidth: true
        })]
      })]
    }), (0, a.jsx)(l.Button, {
      fullWidth: true,
      variant: "primary",
      text: u.intl.string(u.t["3PatSz"]),
      onClick: m,
      loading: y,
      disabled: p.length !== d.D.USER_CODE_LENGTH
    })]
  })
}