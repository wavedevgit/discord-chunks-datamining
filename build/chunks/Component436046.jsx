/** Chunk was on 63359 **/
/** chunk id: 436046, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk771308 = require("./771308.js"),
  Chunk13430 = require("./13430.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk181576 = require("./181576.js");

function x(e) {
  let {
    onComplete: t,
    onClose: n
  } = e, [a, x] = o.useState(null), [y, j] = o.useState(null), [E, v] = o.useState(false), C = (0, s.e7)([_.default], () => _.default.getCurrentUser()), T = o.useRef(null);
  async function O(e) {
    e.preventDefault(), i()(null != a, "Cannot submit null birthday."), v(true);
    try {
      await d.Av(a, b.L0.NEW_USER_FLOW), t()
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth) d.wE(b.L0.NEW_USER_FLOW), d.hp(b.L0.NEW_USER_FLOW), n();
      else {
        var r;
        (null == e || null == (r = e.body) ? true : r.username) != null ? j(h.intl.string(h.t["TGg/2t"])) : j(null == e ? true : e.body.message)
      }
    }
    v(false)
  }
  o.useEffect(() => {
    null != C && null != C.nsfwAllowed && t()
  }, [C, t]);
  let I = o.useCallback(e => {
      x(e)
    }, [x]),
    g = o.useCallback(() => {
      var e;
      null == (e = T.current) || e.focus()
    }, [T]);
  return null == C ? null : (0, r.jsxs)("form", {
    className: N.content,
    onSubmit: O,
    children: [(0, r.jsx)(u.gw7, {
      size: "custom",
      width: 56,
      height: 40,
      className: N.logo,
      color: l.Z.unsafe_rawColors.BRAND_500.css
    }), (0, r.jsx)(u.X6q, {
      className: N.title,
      variant: "heading-xl/semibold",
      children: h.intl.string(h.t.n7i7sr)
    }), (0, r.jsx)(u.Text, {
      color: "text-default",
      className: N.description,
      variant: "text-md/normal",
      children: h.intl.format(h.t.fa8kW1, {
        helpURL: p.Z.getArticleURL(m.BhN.AGE_GATE)
      })
    }), (0, r.jsx)(u.ze6, {
      theme: m.BRd.LIGHT,
      children: (0, r.jsx)(f.Z, {
        required: true,
        autoFocus: true,
        wrapperClassName: N.formItem,
        label: h.intl.string(h.t.rhBeKS),
        name: "birthday",
        onChange: I,
        onPopulated: g,
        error: y,
        value: a
      })
    }), (0, r.jsx)("div", {
      className: N.footer,
      children: (0, r.jsx)("div", {
        className: N.buttonWrapper,
        children: (0, r.jsx)(c.zx, {
          buttonRef: T,
          type: "submit",
          size: c.zx.Sizes.LARGE,
          submitting: E,
          disabled: null == a,
          fullWidth: true,
          children: h.intl.string(h.t.PDTjLC)
        })
      })
    })]
  })
}