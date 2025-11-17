/** Chunk was on 76323 **/
/** chunk id: 298237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function y(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [y, b] = l.useState(null), [g, T] = l.useState(null), [O, N] = l.useState(false), S = l.useRef(null), v = (0, i.e7)([c.default], () => c.default.getCurrentUser()), h = l.useRef(null);
  l.useEffect(() => {
    u.Z.flowStep(m.MK.ANY, m.FF.AGE_GATE), s.default.track(E.rMx.OPEN_MODAL, {
      type: "Claim Age Gate"
    })
  }, []), l.useEffect(() => {
    (null == v ? true : v.nsfwAllowed) != null && n()
  }, [v, n]);
  let G = async e => {
    if (e.preventDefault(), null != y) {
      N(true);
      try {
        await p.Av(y, E.jXE.CLAIM_ACCOUNT_MODAL)
      } catch (e) {
        if (null != e.body && null != e.body.date_of_birth) u.Z.flowStep(m.MK.ANY, m.FF.AGE_GATE_UNDERAGE), p.wE(_.L0.CLAIM_ACCOUNT), p.hp(_.L0.CLAIM_ACCOUNT), n();
        else {
          var t;
          (null == e || null == (t = e.body) ? true : t.username) != null ? T(A.intl.string(A.t["TGg/2k"])) : T(null == e ? true : e.body.message)
        }
      }
      N(false)
    }
  }, w = l.useCallback(() => {
    var e;
    null == (e = h.current) || e.focus()
  }, [h]);
  return (0, r.jsx)("form", {
    onSubmit: G,
    children: (0, r.jsx)(a.Modal, {
      transitionState: t,
      onClose: n,
      title: A.intl.string(A.t.QpSKow),
      subtitle: A.intl.format(A.t.EcJBEI, {
        helpURL: f.Z.getArticleURL(E.BhN.AGE_GATE)
      }),
      actions: [{
        text: A.intl.string(A.t.i4jeWR),
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
        label: A.intl.string(A.t.rhBeKe),
        name: "birthday",
        onChange: e => b(e),
        onPopulated: w,
        error: g,
        value: y,
        ref: S
      })
    })
  })
}