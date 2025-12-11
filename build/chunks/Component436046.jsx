/** Chunk was on 24028 **/
/** chunk id: 436046, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
  Chunk520698 = require("./520698.js");

function N(e) {
  let {
    onComplete: t,
    onClose: n
  } = e, [s, N] = o.useState(null), [x, A] = o.useState(null), [T, C] = o.useState(false), j = (0, i.e7)([b.default], () => b.default.getCurrentUser()), O = o.useRef(null);
  async function y(e) {
    e.preventDefault(), l()(null != s, "Cannot submit null birthday."), C(true);
    try {
      await u.Av(s, _.L0.NEW_USER_FLOW), t()
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth) u.wE(_.L0.NEW_USER_FLOW), u.hp(_.L0.NEW_USER_FLOW), n();
      else {
        var a;
        (null == e || null == (a = e.body) ? true : a.username) != null ? A(h.intl.string(h.t["TGg/2k"])) : A(null == e ? true : e.body.message)
      }
    }
    C(false)
  }
  o.useEffect(() => {
    null != j && null != j.nsfwAllowed && t()
  }, [j, t]);
  let v = o.useCallback(e => {
      N(e)
    }, [N]),
    I = o.useCallback(() => {
      var e;
      null == (e = O.current) || e.focus()
    }, [O]);
  return null == j ? null : (0, a.jsxs)("form", {
    className: E.content,
    onSubmit: y,
    children: [(0, a.jsx)(d.gw7, {
      size: "custom",
      width: 56,
      height: 40,
      className: E.logo,
      color: r.Z.unsafe_rawColors.BRAND_500.css
    }), (0, a.jsx)(d.Heading, {
      className: E.title,
      variant: "heading-xl/semibold",
      children: h.intl.string(h.t.n7i7sv)
    }), (0, a.jsx)(d.Text, {
      color: "text-default",
      className: E.description,
      variant: "text-md/normal",
      children: h.intl.format(h.t.fa8kW1, {
        helpURL: p.Z.getArticleURL(m.BhN.AGE_GATE)
      })
    }), (0, a.jsx)(d.ze6, {
      theme: m.BRd.LIGHT,
      children: (0, a.jsx)(f.Z, {
        required: true,
        autoFocus: true,
        wrapperClassName: E.formItem,
        label: h.intl.string(h.t.rhBeKe),
        name: "birthday",
        onChange: v,
        onPopulated: I,
        error: x,
        value: s
      })
    }), (0, a.jsx)("div", {
      className: E.footer,
      children: (0, a.jsx)("div", {
        className: E.buttonWrapper,
        children: (0, a.jsx)(c.zx, {
          buttonRef: O,
          type: "submit",
          size: c.zx.Sizes.LARGE,
          submitting: T,
          disabled: null == s,
          fullWidth: true,
          children: h.intl.string(h.t.PDTjLN)
        })
      })
    })]
  })
}