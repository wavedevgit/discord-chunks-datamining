/** Chunk was on 1143 **/
/** chunk id: 284778, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk894778 = require("./894778.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk955437 = require("./955437.js"),
  Chunk201505 = require("./201505.jsx"),
  Chunk204925 = require("./204925.js"),
  Chunk652215 = require("./652215.js"),
  Chunk315290 = require("./315290.js"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [E, b] = l.useState(null), [g, O] = l.useState(null), [T, w] = l.useState(false), S = l.useRef(null), h = (0, i.bG)([c.default], () => c.default.getCurrentUser()), N = l.useRef(null);
  l.useEffect(() => {
    u.A.flowStep(m.do.ANY, m.Ot.AGE_GATE), s.default.track(A.HAw.OPEN_MODAL, {
      type: "Claim Age Gate"
    })
  }, []), l.useEffect(() => {
    (null == h ? true : h.nsfwAllowed) != null && n()
  }, [h, n]);
  let v = async e => {
    if (e.preventDefault(), null != E) {
      w(true);
      try {
        await f.n7(E, A.JJy.CLAIM_ACCOUNT_MODAL)
      } catch (e) {
        if (null != e.body && null != e.body.date_of_birth) u.A.flowStep(m.do.ANY, m.Ot.AGE_GATE_UNDERAGE), f.Xv(_.w_.CLAIM_ACCOUNT), f.$2(_.w_.CLAIM_ACCOUNT), n();
        else {
          var t;
          (null == e || null == (t = e.body) ? true : t.username) != null ? O(y.intl.string(y.t["TGg/2k"])) : O(null == e ? true : e.body.message)
        }
      }
      w(false)
    }
  }, G = l.useCallback(() => {
    var e;
    null == (e = N.current) || e.focus()
  }, [N]);
  return (0, r.jsx)("form", {
    onSubmit: v,
    children: (0, r.jsx)(a.Modal, {
      transitionState: t,
      onClose: n,
      title: y.intl.string(y.t.QpSKow),
      subtitle: y.intl.format(y.t.EcJBEI, {
        helpURL: p.A.getArticleURL(A.MVz.AGE_GATE)
      }),
      actions: [{
        text: y.intl.string(y.t.i4jeWR),
        type: "submit",
        loading: T,
        disabled: null == E
      }],
      trackingProps: {
        impression: {
          impressionName: o.ImpressionNames.USER_AGE_GATE,
          impressionProperties: {
            existing_user: false
          }
        }
      },
      children: (0, r.jsx)(d.A, {
        required: true,
        autoFocus: true,
        label: y.intl.string(y.t.rhBeKe),
        name: "birthday",
        onChange: e => b(e),
        onPopulated: G,
        error: g,
        value: E,
        ref: S
      })
    })
  })
}