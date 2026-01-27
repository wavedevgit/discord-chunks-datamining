/** Chunk was on web.js **/
/** chunk id: 6151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => d,
  v: () => f
}), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk74818 = require("./74818.jsx"),
  Chunk812745 = require("./812745.jsx"),
  Chunk756366 = require("./756366.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355767 = require("./355767.js");
let d = "new_payment_source_id";

function f(e) {
  let {
    label: t,
    value: n,
    options: f,
    onChange: p,
    onNew: _,
    newPaymentMethodOptionLabel: h,
    disabled: m = false,
    error: g
  } = e, E = i.useMemo(() => {
    let e = f.map(e => {
      let t = e.icon ? (0, r.jsx)("img", {
        src: (0, s.Nj)(e.icon),
        alt: "",
        className: u.s
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
      id: d,
      value: d,
      label: null != h ? h : c.intl.string(l.default.rNF29q),
      leading: true,
      description: true
    }), e
  }, [f, h]), y = i.useCallback(e => {
    e === d ? _() : null != e && p(e)
  }, [_, p]), b = (0, r.jsx)(o.l, {
    label: t,
    placeholder: c.intl.string(l.default.rNF29q),
    value: n,
    options: E,
    onSelectionChange: y,
    selectionMode: "single",
    disabled: m || 0 === f.length,
    errorMessage: g,
    fullWidth: true
  });
  return 0 !== f.length || m ? b : (0, r.jsx)(a.DUT, {
    onClick: _,
    "aria-label": c.intl.string(l.default.rNF29q),
    className: u.O,
    children: b
  })
}