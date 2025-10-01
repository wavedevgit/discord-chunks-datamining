/** Chunk was on 76323 **/
/** chunk id: 298237, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk390885 = require("./390885.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk771308 = require("./771308.js"),
  Chunk13430 = require("./13430.jsx"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js"),
  Chunk630724 = require("./630724.js"),
  Chunk388032 = require("./388032.jsx");

function y(t) {
  let {
    transitionState: e,
    onClose: n
  } = t, [y, b] = l.useState(null), [g, T] = l.useState(null), [O, S] = l.useState(false), N = l.useRef(null), v = (0, i.e7)([c.default], () => c.default.getCurrentUser()), h = l.useRef(null);
  l.useEffect(() => {
    u.Z.flowStep(m.MK.ANY, m.FF.AGE_GATE), s.default.track(E.rMx.OPEN_MODAL, {
      type: "Claim Age Gate"
    })
  }, []), l.useEffect(() => {
    (null == v ? true : v.nsfwAllowed) != null && n()
  }, [v, n]);
  let G = async t => {
    if (t.preventDefault(), null != y) {
      S(true);
      try {
        await p.Av(y, E.jXE.CLAIM_ACCOUNT_MODAL)
      } catch (t) {
        if (null != t.body && null != t.body.date_of_birth) u.Z.flowStep(m.MK.ANY, m.FF.AGE_GATE_UNDERAGE), p.wE(_.L0.CLAIM_ACCOUNT), p.hp(_.L0.CLAIM_ACCOUNT), n();
        else {
          var e;
          (null == t || null == (e = t.body) ? true : e.username) != null ? T(A.intl.string(A.t["TGg/2t"])) : T(null == t ? true : t.body.message)
        }
      }
      S(false)
    }
  }, w = l.useCallback(() => {
    var t;
    null == (t = h.current) || t.focus()
  }, [h]);
  return (0, r.jsx)("form", {
    onSubmit: G,
    children: (0, r.jsx)(a.Modal, {
      transitionState: e,
      onClose: n,
      title: A.intl.string(A.t.QpSKo6),
      subtitle: A.intl.format(A.t.EcJBEB, {
        helpURL: f.Z.getArticleURL(E.BhN.AGE_GATE)
      }),
      actions: [{
        text: A.intl.string(A.t.i4jeWV),
        type: "submit",
        loading: O,
        disabled: null == y
      }],
      trackingProps: {
        impression: {
          impressionName: o.ImpressionNames.USER_AGE_GATE,
          impressionProperties: {
            existing_user: false
          }
        }
      },
      children: (0, r.jsx)(d.Z, {
        required: true,
        autoFocus: true,
        label: A.intl.string(A.t.rhBeKS),
        name: "birthday",
        onChange: t => b(t),
        onPopulated: w,
        error: g,
        value: y,
        ref: N
      })
    })
  })
}