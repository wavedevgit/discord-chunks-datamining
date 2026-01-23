/** Chunk was on 81890 **/
/** chunk id: 603738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk955437 = require("./955437.js"),
  Chunk201505 = require("./201505.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk216344 = require("./216344.js");

function N(e) {
  let {
    onComplete: t,
    onClose: n
  } = e, [l, N] = i.useState(null), [A, x] = i.useState(null), [T, y] = i.useState(false), j = (0, r.bG)([p.default], () => p.default.getCurrentUser()), g = i.useRef(null);
  async function O(e) {
    e.preventDefault(), s()(null != l, "Cannot submit null birthday."), y(true);
    try {
      await _.n7(l, b.w_.NEW_USER_FLOW), t()
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth) _.Xv(b.w_.NEW_USER_FLOW), _.$2(b.w_.NEW_USER_FLOW), n();
      else {
        var a;
        (null == e || null == (a = e.body) ? true : a.username) != null ? x(E.intl.string(E.t["TGg/2k"])) : x(null == e ? true : e.body.message)
      }
    }
    y(false)
  }
  i.useEffect(() => {
    null != j && null != j.nsfwAllowed && t()
  }, [j, t]);
  let v = i.useCallback(e => {
      N(e)
    }, [N]),
    C = i.useCallback(() => {
      var e;
      null == (e = g.current) || e.focus()
    }, [g]);
  return null == j ? null : (0, a.jsxs)("form", {
    className: h.Qs,
    onSubmit: O,
    children: [(0, a.jsx)(d.pVd, {
      size: "custom",
      width: 56,
      height: 40,
      className: h.wm,
      color: o.A.unsafe_rawColors.BRAND_500.css
    }), (0, a.jsx)(d.Heading, {
      className: h.DD,
      variant: "heading-xl/semibold",
      children: E.intl.string(E.t.n7i7sv)
    }), (0, a.jsx)(d.Text, {
      color: "text-default",
      className: h.h_,
      variant: "text-md/normal",
      children: E.intl.format(E.t.fa8kW1, {
        helpURL: m.A.getArticleURL(f.MVz.AGE_GATE)
      })
    }), (0, a.jsx)(d.wXn, {
      theme: f.NJ8.LIGHT,
      children: (0, a.jsx)(u.A, {
        required: true,
        autoFocus: true,
        wrapperClassName: h.kz,
        label: E.intl.string(E.t.rhBeKe),
        name: "birthday",
        onChange: v,
        onPopulated: C,
        error: A,
        value: l
      })
    }), (0, a.jsx)("div", {
      className: h.qr,
      children: (0, a.jsx)("div", {
        className: h._o,
        children: (0, a.jsx)(c.$n, {
          "data-migration-pending": true,
          buttonRef: g,
          type: "submit",
          size: c.$n.Sizes.LARGE,
          submitting: T,
          disabled: null == l,
          fullWidth: true,
          children: E.intl.string(E.t.PDTjLN)
        })
      })
    })]
  })
}