/** Chunk was on 81890 **/
/** chunk id: 603738, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    onComplete: t,
    onClose: a
  } = e, [i, h] = l.useState(null), [x, A] = l.useState(null), [T, y] = l.useState(false), j = (0, r.bG)([b.default], () => b.default.getCurrentUser()), O = l.useRef(null);
  async function g(e) {
    e.preventDefault(), s()(null != i, "Cannot submit null birthday."), y(true);
    try {
      await u.n7(i, p.w_.NEW_USER_FLOW), t()
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth) u.Xv(p.w_.NEW_USER_FLOW), u.$2(p.w_.NEW_USER_FLOW), a();
      else {
        var n;
        (null == e || null == (n = e.body) ? true : n.username) != null ? A(E.intl.string(E.t["TGg/2k"])) : A(null == e ? true : e.body.message)
      }
    }
    y(false)
  }
  l.useEffect(() => {
    null != j && null != j.nsfwAllowed && t()
  }, [j, t]);
  let v = l.useCallback(e => {
      h(e)
    }, [h]),
    D = l.useCallback(() => {
      var e;
      null == (e = O.current) || e.focus()
    }, [O]);
  return null == j ? null : (0, n.jsxs)("form", {
    className: N.Qs,
    onSubmit: g,
    children: [(0, n.jsx)(d.pVd, {
      size: "custom",
      width: 56,
      height: 40,
      className: N.wm,
      color: c.A.unsafe_rawColors.BRAND_500.css
    }), (0, n.jsx)(d.Heading, {
      className: N.DD,
      variant: "heading-xl/semibold",
      children: E.intl.string(E.t.n7i7sv)
    }), (0, n.jsx)(d.Text, {
      color: "text-default",
      className: N.h_,
      variant: "text-md/normal",
      children: E.intl.format(E.t.fa8kW1, {
        helpURL: _.A.getArticleURL(m.MVz.AGE_GATE)
      })
    }), (0, n.jsx)(d.wXn, {
      theme: m.NJ8.LIGHT,
      children: (0, n.jsx)(f.A, {
        required: true,
        autoFocus: true,
        wrapperClassName: N.kz,
        label: E.intl.string(E.t.rhBeKe),
        name: "birthday",
        onChange: v,
        onPopulated: D,
        error: x,
        value: i
      })
    }), (0, n.jsx)("div", {
      className: N.qr,
      children: (0, n.jsx)("div", {
        className: N._o,
        children: (0, n.jsx)(o.$n, {
          "data-migration-pending": true,
          buttonRef: O,
          type: "submit",
          size: o.$n.Sizes.LARGE,
          submitting: T,
          disabled: null == i,
          fullWidth: true,
          children: E.intl.string(E.t.PDTjLN)
        })
      })
    })]
  })
}