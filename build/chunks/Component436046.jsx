/** Chunk was on 91848 **/
/** chunk id: 436046, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
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

function N(e) {
  let {
    onComplete: t,
    onClose: n
  } = e, [s, N] = o.useState(null), [x, A] = o.useState(null), [T, C] = o.useState(false), j = (0, i.e7)([p.default], () => p.default.getCurrentUser()), y = o.useRef(null);
  async function O(e) {
    e.preventDefault(), r()(null != s, "Cannot submit null birthday."), C(true);
    try {
      await d.Av(s, h.L0.NEW_USER_FLOW), t()
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth) d.wE(h.L0.NEW_USER_FLOW), d.hp(h.L0.NEW_USER_FLOW), n();
      else {
        var a;
        (null == e || null == (a = e.body) ? true : a.username) != null ? A(b.intl.string(b.t["TGg/2k"])) : A(null == e ? true : e.body.message)
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
      null == (e = y.current) || e.focus()
    }, [y]);
  return null == j ? null : (0, a.jsxs)("form", {
    className: E.content,
    onSubmit: O,
    children: [(0, a.jsx)(u.gw7, {
      size: "custom",
      width: 56,
      height: 40,
      className: E.logo,
      color: l.Z.unsafe_rawColors.BRAND_500.css
    }), (0, a.jsx)(u.Heading, {
      className: E.title,
      variant: "heading-xl/semibold",
      children: b.intl.string(b.t.n7i7sv)
    }), (0, a.jsx)(u.Text, {
      color: "text-default",
      className: E.description,
      variant: "text-md/normal",
      children: b.intl.format(b.t.fa8kW1, {
        helpURL: f.Z.getArticleURL(m.BhN.AGE_GATE)
      })
    }), (0, a.jsx)(u.ze6, {
      theme: m.BRd.LIGHT,
      children: (0, a.jsx)(_.Z, {
        required: true,
        autoFocus: true,
        wrapperClassName: E.formItem,
        label: b.intl.string(b.t.rhBeKe),
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
          buttonRef: y,
          type: "submit",
          size: c.zx.Sizes.LARGE,
          submitting: T,
          disabled: null == s,
          fullWidth: true,
          children: b.intl.string(b.t.PDTjLN)
        })
      })
    })]
  })
}