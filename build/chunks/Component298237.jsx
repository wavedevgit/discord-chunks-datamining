/** Chunk was on 65238 **/
/** chunk id: 298237, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk390885 = require("./390885.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk771308 = require("./771308.js"),
  Chunk13430 = require("./13430.jsx"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js"),
  Chunk630724 = require("./630724.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk651239 = require("./651239.js");

function O(t) {
  let {
    transitionState: e,
    onClose: r
  } = t, [O, S] = o.useState(null), [A, w] = o.useState(null), [E, h] = o.useState(false), N = o.useRef(null), T = (0, i.e7)([f.default], () => f.default.getCurrentUser()), j = o.useRef(null);
  o.useEffect(() => {
    c.Z.flowStep(_.MK.ANY, _.FF.AGE_GATE), s.default.track(b.rMx.OPEN_MODAL, {
      type: "Claim Age Gate"
    })
  }, []), o.useEffect(() => {
    (null == T ? true : T.nsfwAllowed) != null && r()
  }, [T, r]);
  let C = async t => {
    if (t.preventDefault(), null != O) {
      h(true);
      try {
        await d.Av(O, b.jXE.CLAIM_ACCOUNT_MODAL)
      } catch (t) {
        if (null != t.body && null != t.body.date_of_birth) c.Z.flowStep(_.MK.ANY, _.FF.AGE_GATE_UNDERAGE), d.wE(y.L0.CLAIM_ACCOUNT), d.hp(y.L0.CLAIM_ACCOUNT), r();
        else {
          var e;
          (null == t || null == (e = t.body) ? true : e.username) != null ? w(g.intl.string(g.t["TGg/2t"])) : w(null == t ? true : t.body.message)
        }
      }
      h(false)
    }
  }, Z = o.useCallback(() => {
    var t;
    null == (t = j.current) || t.focus()
  }, [j]);
  return (0, n.jsx)(a.Y0X, {
    transitionState: e,
    size: a.CgR.DYNAMIC,
    "aria-label": g.intl.string(g.t.QpSKo6),
    className: v.modal,
    impression: {
      impressionName: l.ImpressionNames.USER_AGE_GATE,
      impressionProperties: {
        existing_user: false
      }
    },
    parentComponent: "NewUserAgeGate",
    children: (0, n.jsxs)(a.hzk, {
      className: v.content,
      children: [(0, n.jsx)("div", {
        className: v.image
      }), (0, n.jsxs)("form", {
        onSubmit: C,
        children: [(0, n.jsx)(a.X6q, {
          className: v.title,
          variant: "heading-xl/semibold",
          children: g.intl.string(g.t.QpSKo6)
        }), (0, n.jsx)(a.Text, {
          color: "header-secondary",
          className: v.description,
          variant: "text-md/normal",
          children: g.intl.format(g.t.EcJBEB, {
            helpURL: p.Z.getArticleURL(b.BhN.AGE_GATE)
          })
        }), (0, n.jsx)(m.Z, {
          required: true,
          autoFocus: true,
          wrapperClassName: v.formItem,
          label: g.intl.string(g.t.rhBeKS),
          name: "birthday",
          onChange: t => S(t),
          onPopulated: Z,
          error: A,
          value: O,
          ref: N
        }), (0, n.jsx)(u.zx, {
          buttonRef: j,
          type: "submit",
          size: u.zx.Sizes.LARGE,
          submitting: E,
          disabled: null == O,
          fullWidth: true,
          children: g.intl.string(g.t.i4jeWV)
        })]
      })]
    })
  })
}