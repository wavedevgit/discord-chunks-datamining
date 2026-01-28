/** Chunk was on web.js **/
/** chunk id: 6151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => u,
  v: () => d
}), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk756366 = require("./756366.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355767 = require("./355767.js");
let u = "new_payment_source_id";

function d(e) {
  let {
    label: t,
    value: n,
    options: d,
    onChange: f,
    onNew: p,
    newPaymentMethodOptionLabel: _,
    disabled: h = false,
    error: m
  } = e, g = i.useMemo(() => {
    let e = d.map(e => {
      let t = e.icon ? (0, r.jsx)("img", {
        src: (0, o.Nj)(e.icon),
        alt: "",
        className: c.s
      }) : true;
      return {
        id: e.id,
        value: e.id,
        label: e.label,
        leading: t,
        description: e.description,
        disabled: e.disabled
      }
    });
    return e.push({
      id: u,
      value: u,
      label: null != _ ? _ : l.intl.string(s.default.rNF29q),
      leading: true,
      description: true
    }), e
  }, [d, _]), E = i.useCallback(e => {
    e === u ? p() : null != e && f(e)
  }, [p, f]), y = (0, r.jsx)(a.l6P, {
    label: t,
    placeholder: l.intl.string(s.default.rNF29q),
    value: n,
    options: g,
    onSelectionChange: E,
    selectionMode: "single",
    disabled: h || 0 === d.length,
    errorMessage: m,
    fullWidth: true
  });
  return 0 !== d.length || h ? y : (0, r.jsx)(a.DUT, {
    onClick: p,
    "aria-label": l.intl.string(s.default.rNF29q),
    className: c.O,
    children: y
  })
}