/** Chunk was on 396 **/
/** chunk id: 436046, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
  Chunk652772 = require("./652772.js");

function N(e) {
  let {
    onComplete: t,
    onClose: n
  } = e, [a, N] = o.useState(null), [y, v] = o.useState(null), [j, E] = o.useState(false), C = (0, i.e7)([_.default], () => _.default.getCurrentUser()), T = o.useRef(null);
  async function g(e) {
    e.preventDefault(), s()(null != a, "Cannot submit null birthday."), E(true);
    try {
      await d.Av(a, m.L0.NEW_USER_FLOW), t()
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth) d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), n();
      else {
        var r;
        (null == e || null == (r = e.body) ? true : r.username) != null ? v(h.intl.string(h.t["TGg/2t"])) : v(null == e ? true : e.body.message)
      }
    }
    E(false)
  }
  o.useEffect(() => {
    null != C && null != C.nsfwAllowed && t()
  }, [C, t]);
  let O = o.useCallback(e => {
      N(e)
    }, [N]),
    I = o.useCallback(() => {
      var e;
      null == (e = T.current) || e.focus()
    }, [T]);
  return null == C ? null : (0, r.jsxs)("form", {
    className: x.content,
    onSubmit: g,
    children: [(0, r.jsx)(u.gw7, {
      size: "custom",
      width: 56,
      height: 40,
      className: x.logo,
      color: l.Z.unsafe_rawColors.BRAND_500.css
    }), (0, r.jsx)(u.X6q, {
      className: x.title,
      variant: "heading-xl/semibold",
      children: h.intl.string(h.t.n7i7sr)
    }), (0, r.jsx)(u.Text, {
      color: "text-default",
      className: x.description,
      variant: "text-md/normal",
      children: h.intl.format(h.t.fa8kW1, {
        helpURL: p.Z.getArticleURL(b.BhN.AGE_GATE)
      })
    }), (0, r.jsx)(u.ze6, {
      theme: b.BRd.LIGHT,
      children: (0, r.jsx)(f.Z, {
        required: true,
        autoFocus: true,
        wrapperClassName: x.formItem,
        label: h.intl.string(h.t.rhBeKS),
        name: "birthday",
        onChange: O,
        onPopulated: I,
        error: y,
        value: a
      })
    }), (0, r.jsx)("div", {
      className: x.footer,
      children: (0, r.jsx)("div", {
        className: x.buttonWrapper,
        children: (0, r.jsx)(c.zx, {
          buttonRef: T,
          type: "submit",
          size: c.zx.Sizes.LARGE,
          submitting: j,
          disabled: null == a,
          fullWidth: true,
          children: h.intl.string(h.t.PDTjLC)
        })
      })
    })]
  })
}