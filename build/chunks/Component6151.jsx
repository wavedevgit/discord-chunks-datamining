/** Chunk was on web.js **/
/** chunk id: 6151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => u
}), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk74818 = require("./74818.jsx"),
  Chunk812745 = require("./812745.jsx"),
  Chunk756366 = require("./756366.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355767 = require("./355767.js");

function u(e) {
  let {
    label: t,
    value: n,
    options: u,
    onChange: d,
    onNew: f,
    disabled: p = false,
    error: _
  } = e, h = i.useId(), m = i.useMemo(() => {
    let e = u.map(e => {
      let t = e.icon ? (0, r.jsx)("img", {
        src: (0, s.Nj)(e.icon),
        alt: "",
        className: c.s
      }) : true;
      return {
        id: e.id,
        value: e.id,
        label: e.label,
        leading: t,
        description: e.description
      }
    });
    return e.push({
      id: h,
      value: h,
      label: l.intl.string(o.default.rNF29q),
      leading: true,
      description: true
    }), e
  }, [u, h]), g = i.useCallback(e => {
    e === h ? f() : null != e && d(e)
  }, [f, d, h]);
  return (0, r.jsx)(a.l, {
    label: t,
    placeholder: l.intl.string(o.default.rNF29q),
    value: n,
    options: m,
    onSelectionChange: g,
    selectionMode: "single",
    disabled: p,
    errorMessage: _,
    fullWidth: true
  })
}